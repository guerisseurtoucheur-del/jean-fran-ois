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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          // On descend à 80 pixels (taille icône) pour être CERTAIN que ça passe
          const MAX_WIDTH = 80; 
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          // On utilise le format PNG qui est parfois mieux accepté par Gmail
          const dataUrl = canvas.toDataURL('image/png');
          setFormData(prev => ({ ...prev, user_photo: dataUrl }));
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    emailjs.send('service_6hxzf8g', 'template_rj7whq1', formData, 'xx_aBqYl2Cx85nz1d')
      .then(() => {
        setStatus('✅ Envoyé ! Vérifiez vos mails.');
        setFormData({ firstName: '', lastName: '', birthDate: '', phone: '', email: '', message: '', user_photo: '' });
      })
      .catch(() => {
        setStatus('❌ Erreur.');
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Prénom" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        <input type="text" placeholder="Nom" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        <input type="date" required value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
        <input type="tel" placeholder="Téléphone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <textarea placeholder="Message" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
        <label>Photo :</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        <button type="submit" style={{ background: '#27ae60', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>Envoyer</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default HealingRequest;
