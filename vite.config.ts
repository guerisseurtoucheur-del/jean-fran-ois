const handleSend = async () => {
    if (!input.trim() || loading) return;

    // On cherche la clé partout de façon agressive
    const apiKey = "AIzaSyD7FIqH7uX2XrICwy9jdb5muY_KvoAKXNU";
      import.meta.env.VITE_API_KEY || 
      (import.meta as any).env?.VITE_API_KEY || 
      (process.env as any).VITE_API_KEY;
    
    if (!apiKey) {
      // Si vraiment ça ne marche pas, on affiche ce que le site "voit" pour comprendre
      console.log("Variables d'environnement visibles :", import.meta.env);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Le magnétisme ne passe pas : la clé est invisible. Vérifie que tu as bien cliqué sur 'Add' dans Vercel après avoir écrit VITE_API_KEY.",
        isError: true 
      }]);
      return;
    }