# The Empathy Engine 🎙️

Transform text into emotionally expressive speech using AI-powered emotion detection and dynamic voice modulation.

## Features
- Real-time emotion analysis (positive, negative, neutral)
- Vocal modulation: speech rate & volume based on emotion/intensity
- Audio output (.wav, playable in browser)
- Modern, dark UI (matches provided screenshot)
- Extensible for granular emotions, SSML, cloud TTS

## Setup

### Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
python -m nltk.downloader vader_lexicon
uvicorn main:app --reload
```

### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Access the UI at http://localhost:5173

## Design Choices
- **Emotion-to-voice mapping**: Uses VADER compound score for emotion + intensity
- **Vocal parameters**: Modulates pyttsx3 rate & volume for expressiveness
- **UI**: Built to match the provided image, fully responsive, instant audio playback

## Stretch Goals
- Add more granular emotion categories (`emotion.py`)
- Intensity scaling logic for finer control
- SSML integration for advanced effects
- Cloud TTS APIs for more realistic voices

---
