import nltk
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

try:
    nltk.data.find('sentiment/vader_lexicon.zip')
except LookupError:
    nltk.download('vader_lexicon')

analyzer = SentimentIntensityAnalyzer()

def detect_emotion(text: str) -> dict:
    scores = analyzer.polarity_scores(text)
    compound = scores['compound']
    intensity = abs(compound)
    if compound >= 0.3:
        emotion = "Positive"
    elif compound <= -0.3:
        emotion = "Negative"
    else:
        emotion = "Neutral"
    return {"emotion": emotion, "intensity": intensity}