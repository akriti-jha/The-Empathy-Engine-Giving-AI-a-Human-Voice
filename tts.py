import pyttsx3

def modulate_voice_params(engine, emotion: str, intensity: float):
    base_rate = 175
    base_volume = 0.8
    if emotion == "Positive":
        engine.setProperty('rate', int(base_rate + 30 * intensity))
        engine.setProperty('volume', min(1.0, base_volume + 0.2 * intensity))
    elif emotion == "Negative":
        engine.setProperty('rate', int(base_rate - 30 * intensity))
        engine.setProperty('volume', max(0.5, base_volume - 0.3 * intensity))
    else:  # Neutral
        engine.setProperty('rate', base_rate)
        engine.setProperty('volume', base_volume)

def synthesize_speech(text: str, emotion: str, intensity: float, filename: str = "output.wav"):
    engine = pyttsx3.init()
    modulate_voice_params(engine, emotion, intensity)
    engine.save_to_file(text, filename)
    engine.runAndWait()
    engine.stop()
    return filename