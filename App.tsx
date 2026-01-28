import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// On récupère la clé via l'environnement Vite
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function chat() {
    if (!input) return;
    setLoading(true);
    
    // On ajoute le message utilisateur à l'historique
    setHistory(prev => [...prev, { role: "user", text: input }]);
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();

      // On ajoute la réponse de Gemini
      setHistory(prev => [...prev, { role: "bot", text: text }]);
    } catch (error) {
      console.error("Erreur Gemini:", error);
      setHistory(prev => [...prev, { role: "bot", text: "Erreur : Vérifie ta clé API dans Vercel." }]);
    }
    
    setInput("");
    setLoading(false);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h2>Mon Chatbot Gemini</h2>
      <div style={{ border: '1px solid #ccc', height: '400px', overflowY: 'scroll', padding: '10px', marginBottom: '10px' }}>
        {history.map((msg, i) => (
          <p key={i} style={{ color: msg.role === "user" ? "blue" : "green" }}>
            <strong>{msg.role === "user" ? "Vous: " : "Gemini: "}</strong>{msg.text}
          </p>
        ))}
      </div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Posez une question..."
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={chat} disabled={loading} style={{ padding: '10px' }}>
        {loading ? "..." : "Envoyer"}
      </button>
    </div>
  );
}

export default App;