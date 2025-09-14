# The Empathy Engine 🎙️

Transform text into emotionally expressive speech using AI-powered emotion detection and dynamic voice modulation.

---

## Overview

The Empathy Engine is an open-source project designed to bridge the gap between traditional robotic text-to-speech (TTS) and natural, emotionally resonant human speech. By combining real-time emotion detection with dynamic voice modulation, this tool enables AI assistants, customer service bots, and accessibility tools to sound truly empathetic and engaging.

Instead of delivering monotone and lifeless audio, Empathy Engine analyzes the input text, detects the underlying emotion, and then modulates vocal parameters like speech rate and volume to match the detected sentiment. The result? Speech output that feels enthusiastic, calm, or neutral—just like a real human would sound.

---

## Features

- **Real-time Emotion Detection:** Input text is instantly analyzed and classified as Positive, Negative, or Neutral using AI-powered sentiment analysis.
- **Voice Modulation:** Speech rate and volume are adjusted based on the detected emotion and its intensity, making the voice sound expressive and natural.
- **Easy-to-Use Web Interface:** Modern, dark-themed UI lets you enter text, view emotion analysis, and generate audio with one click.
- **Audio Playback:** The generated speech can be played directly in your browser.
- **Modular & Extensible:** Designed for easy extension—add more emotion categories, intensity scaling, or advanced TTS systems.

---

## How It Works

1. **Text Input:** Users enter text into the web interface.
2. **Emotion Analysis:** The backend uses the VADER sentiment analysis algorithm to classify the emotion and measure its intensity.
3. **Voice Modulation:** The TTS engine dynamically adjusts vocal parameters (rate, volume) based on emotion and intensity.
4. **Audio Output:** The system generates a `.wav` file and provides an instant audio player for playback.

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/akriti-jha/Empathy-Engine.git
cd Empathy-Engine
```

### 2. Set Up the Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
python -m nltk.downloader vader_lexicon
uvicorn main:app --reload
```
This starts the backend server at `http://localhost:8000`

### 3. Set Up the Frontend (React + Vite)

```bash
cd ../frontend
npm install
npm run dev
```
By default, the frontend runs at `http://localhost:5173`.

### 4. Use the Application

- Open your browser and navigate to `http://localhost:5173`.
- Enter your text, view the detected emotion, and click "Generate Speech" to play the modulated audio.

---

## Design Choices

- **Emotion Detection:** Utilizes VADER, a rule-based sentiment analysis tool, ideal for classifying short text into positive, negative, or neutral.
- **Voice Modulation:** Uses pyttsx3 for offline TTS, modulating speech rate and volume according to detected emotion and intensity. For more nuanced voices, you can swap in cloud-based TTS services.
- **Frontend:** Built with React and Vite for fast, responsive UI. Styled to match a modern, professional look.
- **API Communication:** The frontend communicates with the backend via REST API endpoints for emotion analysis and speech synthesis.

---

## Extending the Empathy Engine

- **Granular Emotions:** You can plug in more advanced emotion classifiers (e.g., HuggingFace transformers) for nuanced states like "concerned" or "excited."
- **Intensity Scaling:** The current logic scales vocal modulation proportionally to emotion intensity. This can be fine-tuned or made nonlinear.
- **SSML Integration:** For advanced voice effects, add support for Speech Synthesis Markup Language (SSML).
- **Cloud TTS Integration:** Swap pyttsx3 for Google Cloud TTS or ElevenLabs for even more expressive and natural voices.

---

## License

This project is licensed under the MIT License — see the LICENSE file for details.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or discuss ideas in the Issues section.

---

## Acknowledgments

- [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment)
- [pyttsx3](https://github.com/nateshmbhat/pyttsx3)
- Thanks to the open-source community for inspiration and support!

---

Empathy Engine: Giving AI a Human Voice. Transform customer experience, accessibility, and entertainment with emotionally intelligent speech synthesis!
