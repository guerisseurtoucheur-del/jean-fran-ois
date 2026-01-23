import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const HealingRequest = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    email: '',
    message: '',
    user_photo: '' 
  });

  const [status, setStatus] = useState('');

  // Fonction pour transformer et compresser la photo
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400; // On réduit la taille pour EmailJS
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Compression à 70%
          setFormData({ ...formData, user_photo: dataUrl });
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    // TES CODES CONFIGURÉS
    const serviceID = 'service_6hxzf8g';
    const templateID = 'template_rj7whq1';
    const publicKey = 'xx_aBqYl2Cx85nz1d';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('✅ Demande envoyée avec succès !');
        setFormData({ firstName: '', lastName: '', birthDate: '', phone: '', email: '', message: '', user_photo: '' });
      })
      .catch((err) => {
        console.error('Erreur:', err);
        setStatus('❌ Erreur. Vérifiez votre connexion ou réessayez sans photo.');
      });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Demande de soin à distance</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Prénom" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} style={inputStyle} />
        <input type="text" placeholder="Nom" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} style={inputStyle} />
        <label style={{ fontSize: '14px', marginBottom: '-5px' }}>Date de naissance :</label>
        <input type="date" required value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} style={inputStyle} />
        <input type="tel" placeholder="Téléphone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
        <input type="email" placeholder="Votre Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} />
        <textarea placeholder="Décrivez votre mal (douleurs, fatigue, etc.)..." required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={inputStyle} rows={4} />
        
        <label style={{ display: 'block', marginTop: '10px', fontWeight: 'bold' }}>Photo (Facultatif pour le test) :</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ marginBottom: '10px' }} />

        <button type="submit" style={buttonStyle}>Envoyer ma demande</button>
      </form>
      {status && <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px', color: status.includes('✅') ? 'green' : 'red' }}>{status}</p>}
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' };
const buttonStyle = { width: '100%', padding: '15px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' };

export default HealingRequest;