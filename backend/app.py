from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


nn_model = joblib.load('nn_model.pkl')
final_dataset = pd.read_pickle('final_dataset.pkl')


class BookRequest(BaseModel):
    book_name: str

@app.get('/')
def read_root():
    return {"message": "Book Recommendation API"}

@app.post('/recommend')
def recommend(request: BookRequest):  
    book_name = request.book_name
    try:
       
        dist, sugg = nn_model.kneighbors(final_dataset[final_dataset.index == book_name], n_neighbors=6)
        recommendations = [final_dataset.index[sugg[0][i]] for i in range(1, len(sugg[0]))]  # Skip the first as it's the input book itself
        return {"book_name": book_name, "recommendations": recommendations}
    except KeyError:
        raise HTTPException(status_code=404, detail="Book not found in the dataset")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
