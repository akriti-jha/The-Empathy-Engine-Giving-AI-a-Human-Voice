import React, { useState } from "react";

const API_URL = "http://localhost:8000";

export default function App() {
  const [text, setText] = useState("");
  const [emotion, setEmotion] = useState("Neutral");
  const [intensity, setIntensity] = useState(0);
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Analyze emotion as user types
  const analyzeEmotion = async (input) => {
    setText(input);
    if (!input.trim()) {
      setEmotion("Neutral");
      setIntensity(0);
      return;
    }
    const form = new FormData();
    form.append("text", input);
    const res = await fetch(`${API_URL}/analyze`, {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    setEmotion(data.emotion);
    setIntensity(data.intensity);
  };

  // Generate speech
  const generateSpeech = async () => {
    setLoading(true);
    const form = new FormData();
    form.append("text", text);
    form.append("emotion", emotion);
    form.append("intensity", intensity);
    const res = await fetch(`${API_URL}/speak`, {
      method: "POST",
      body: form,
    });
    const blob = await res.blob();
    setAudioUrl(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div style={{
      background: "linear-gradient(180deg, #181818 0%, #1c1c1c 100%)",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Montserrat, Arial, sans-serif",
      paddingBottom: "30px"
    }}>
      <header style={{textAlign: "center", padding: "30px 0"}}>
        <h1 style={{color: "#92FF5C", fontWeight: 700, fontSize: "2.8rem"}}>
          <span style={{
            filter: "drop-shadow(0 0 10px #92FF5C)"
          }}>🧠 The Empathy Engine</span>
        </h1>
        <p style={{fontSize: "1.2rem", color: "#FFD84A", fontWeight: 500}}>
          Transform text into emotionally expressive speech using AI-powered emotion detection and dynamic voice modulation.
        </p>
      </header>
      <div style={{display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap"}}>
        <section style={{
          background: "#232323",
          borderRadius: "14px",
          padding: "26px",
          width: "420px",
          boxShadow: "0 2px 16px #0005"
        }}>
          <h2 style={{color: "#92FF5C", marginBottom: "12px"}}>Text Input</h2>
          <p style={{color: "#AAA", marginBottom: "8px"}}>Enter your text to analyze emotions and generate expressive speech</p>
          <textarea
            style={{
              width: "100%",
              height: "100px",
              background: "#181818",
              color: "#fff",
              border: "1.5px solid #444",
              borderRadius: "8px",
              fontSize: "1.05rem",
              padding: "12px"
            }}
            placeholder="Enter your text here... Try something like 'I'm so excited about this amazing discovery!' or 'I'm really disappointed with these results.'"
            value={text}
            onChange={e => analyzeEmotion(e.target.value)}
            maxLength={280}
          />
          <div style={{display: "flex", justifyContent: "space-between", marginTop: "6px"}}>
            <span style={{fontSize: "0.95rem", color: "#777"}}>{text.length} characters</span>
            <button
              style={{
                background: "#222",
                color: "#FFD84A",
                border: "none",
                padding: "6px 14px",
                borderRadius: "7px",
                cursor: "pointer"
              }}
              onClick={() => analyzeEmotion("")}
            >
              Clear
            </button>
          </div>
        </section>
        <section style={{
          background: "#232323",
          borderRadius: "14px",
          padding: "26px",
          width: "420px",
          boxShadow: "0 2px 16px #0005"
        }}>
          <h2 style={{color: "#FFD84A", marginBottom: "12px"}}>Emotion Analysis</h2>
          <p style={{color: "#AAA", marginBottom: "12px"}}>
            Real-time emotion detection from your text
          </p>
          <div style={{fontSize: "1.15rem", color: "#fff", marginTop: "10px", minHeight: "24px"}}>
            {text.trim()
              ? <span>
                  <b>Emotion:</b> <span style={{color: emotion==="Positive"? "#92FF5C": emotion==="Negative"? "#FF5C5C" : "#FFD84A"}}>{emotion}</span>
                  <br/><b>Intensity:</b> <span style={{color:"#FFD84A"}}>{intensity.toFixed(2)}</span>
                </span>
              : <>Enter some text to see emotion analysis...</>}
          </div>
        </section>
      </div>

      <section style={{
        background: "#232323",
        borderRadius: "14px",
        margin: "38px auto 0 auto",
        maxWidth: "920px",
        padding: "22px 32px",
        boxShadow: "0 2px 22px #0005"
      }}>
        <h2 style={{color: "#92FF5C"}}>Empathetic Speech Generation</h2>
        <p style={{color: "#AAA", marginBottom: "13px"}}>
          Generate speech with emotion-based voice modulation
        </p>
        <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
          <button
            style={{
              background: "#92FF5C",
              color: "#232323",
              border: "none",
              padding: "12px 32px",
              borderRadius: "9px",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 2px 6px #0003"
            }}
            disabled={!text || loading}
            onClick={generateSpeech}
          >
            ▶ Generate Speech
          </button>
          <span style={{fontSize: "1.08rem", color: "#FFD84A"}}>
            Voice modulated for: <b>{emotion}</b>
          </span>
          {audioUrl &&
            <audio src={audioUrl} controls style={{marginLeft: "14px"}}/>}
        </div>
      </section>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "38px",
        flexWrap: "wrap"
      }}>
        <FeatureCard
          icon="🧠"
          title="AI Emotion Detection"
          desc="Advanced neural networks analyze text for emotional content with high accuracy"
          glow="#92FF5C"
        />
        <FeatureCard
          icon="📶"
          title="Dynamic Voice Modulation"
          desc="Real-time adjustment of speech rate, pitch, and tone based on detected emotions"
          glow="#00FFB2"
        />
        <FeatureCard
          icon="✨"
          title="Expressive Output"
          desc="Transform monotone TTS into natural, emotionally resonant speech"
          glow="#FFD84A"
        />
      </div>
    </div>
  );
}

function FeatureCard({icon, title, desc, glow}) {
  return (
    <div style={{
      background: "#232323",
      borderRadius: "12px",
      padding: "24px 20px",
      minWidth: "260px",
      maxWidth: "300px",
      textAlign: "center",
      boxShadow: `0 0 18px ${glow}33`
    }}>
      <div style={{fontSize: "2.7rem", marginBottom: "8px", filter: `drop-shadow(0 0 8px ${glow})`}}>
        {icon}
      </div>
      <h3 style={{color: glow, fontWeight: 700, fontSize: "1.25rem"}}>{title}</h3>
      <p style={{color: "#DDD", marginTop: "8px", fontSize: "1rem"}}>{desc}</p>
    </div>
  );
}