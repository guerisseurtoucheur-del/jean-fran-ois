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
    user_photo: '' // Contiendra l'image en texte pour EmailJS
  });

  const [status, setStatus] = useState('');

  // Fonction pour transformer la photo en texte (Base64)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, user_photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    // CONFIGURATION EMAILJS
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
        setStatus('❌ Erreur lors de l\'envoi. Réessayez.');
      });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Demande de soin à distance</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Prénom" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} style={inputStyle} />
        <input type="text" placeholder="Nom" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} style={inputStyle} />
        <input type="date" required value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} style={inputStyle} />
        <input type="tel" placeholder="Téléphone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={inputStyle} />
        <input type="email" placeholder="Votre Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={inputStyle} />
        <textarea placeholder="Décrivez votre mal..." required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={inputStyle} rows={4} />
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Ajouter votre photo (obligatoire) :</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} required style={{ marginBottom: '20px' }} />

        <button type="submit" style={buttonStyle}>Envoyer la demande</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

const inputStyle = { width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default HealingRequest;