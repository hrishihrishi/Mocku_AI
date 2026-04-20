from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from dotenv import load_dotenv
from pydantic import BaseModel
import os
import uvicorn
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)
model_name = "gemini-2.5-flash"  # Verified model name


app = FastAPI()

class QUERY(BaseModel):
    text: str

origins = [
    "http://localhost:5173",  # react server
    "http://localhost:4000",  # node server
    "http://localhost:8000"  # python server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/generate', response_model=QUERY)
def generate_mocking_sentence(query: QUERY):
    try:
        instruction = f"The user said: '{query.text}'. Reply with one short, funny and friendly-offending mocking sentence."
        response = client.models.generate_content(model=model_name, contents=instruction)
        result_text = response.text if response.text else "I have no words for how boring that was."
        return {"text": result_text}
    except Exception as e:
        print(f"Error in Python Service: {e}")
        return {"text": f"My brain is fried. Try again later. this is the error: {e}"}


@app.get('/test')
def test():
    return {"message": "hhjki"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
