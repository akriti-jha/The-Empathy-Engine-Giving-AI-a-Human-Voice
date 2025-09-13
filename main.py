from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from emotion import detect_emotion
from tts import synthesize_speech
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze(text: str = Form(...)):
    result = detect_emotion(text)
    return JSONResponse(result)

@app.post("/speak")
async def speak(text: str = Form(...), emotion: str = Form(...), intensity: float = Form(...)):
    filename = "output.wav"
    synthesize_speech(text, emotion, intensity, filename)
    return FileResponse(filename, media_type="audio/wav", filename=filename)