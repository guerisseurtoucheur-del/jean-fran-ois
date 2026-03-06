import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const prenom = formData.get('prenom') as string
    const nom = formData.get('nom') as string
    const dateNaissance = formData.get('dateNaissance') as string
    const email = formData.get('email') as string
    const telephone = formData.get('telephone') as string
    const probleme = formData.get('probleme') as string
    const details = formData.get('details') as string
    const photo = formData.get('photo') as File | null

    // Convert photo to base64 if present
    let photoBase64 = ''
    let photoName = ''
    if (photo) {
      const arrayBuffer = await photo.arrayBuffer()
      photoBase64 = Buffer.from(arrayBuffer).toString('base64')
      photoName = photo.name
    }

    // Send email using Resend or another service
    // For now, we'll use a simple mailto approach or you can configure Resend
    
    const dateNow = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    // Fichier texte telechargeable avec les coordonnees
    const ficheTxt = `
=====================================
FICHE PATIENT - DEMANDE DE SOIN
=====================================
Date de la demande: ${dateNow}

COORDONNEES
-----------
Prenom: ${prenom}
Nom: ${nom}
Date de naissance: ${dateNaissance}
Email: ${email}
Telephone: ${telephone}

MOTIF DE CONSULTATION
---------------------
Probleme: ${probleme}

Details:
${details || 'Aucun detail supplementaire'}

PHOTO
-----
${photo ? 'Photo jointe: ' + photoName : 'Aucune photo jointe'}

=====================================
Jean-Francois Magnetiseur Guerisseur
=====================================
    `.trim()

    // Email HTML bien formate
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; }
    .header p { margin: 10px 0 0; opacity: 0.9; font-size: 14px; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #e5e5e5; padding-bottom: 5px; }
    .field { display: flex; margin-bottom: 8px; }
    .label { width: 140px; color: #666; font-size: 14px; }
    .value { color: #111; font-weight: 500; font-size: 14px; }
    .probleme { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin-top: 10px; }
    .probleme-title { font-weight: bold; color: #92400e; margin-bottom: 5px; }
    .details { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap; font-size: 14px; color: #333; }
    .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    .cta { display: inline-block; background: #10b981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouvelle Demande de Soin</h1>
      <p>${dateNow}</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Coordonnees du Patient</div>
        <div class="field"><span class="label">Prenom:</span><span class="value">${prenom}</span></div>
        <div class="field"><span class="label">Nom:</span><span class="value">${nom}</span></div>
        <div class="field"><span class="label">Date de naissance:</span><span class="value">${dateNaissance}</span></div>
        <div class="field"><span class="label">Email:</span><span class="value"><a href="mailto:${email}">${email}</a></span></div>
        <div class="field"><span class="label">Telephone:</span><span class="value"><a href="tel:${telephone}">${telephone}</a></span></div>
      </div>
      <div class="section">
        <div class="section-title">Motif de Consultation</div>
        <div class="probleme">
          <div class="probleme-title">${probleme}</div>
        </div>
        ${details ? `<div class="details">${details}</div>` : ''}
      </div>
      <div class="section">
        <div class="section-title">Photo</div>
        <p>${photo ? 'Photo jointe au mail: ' + photoName : 'Aucune photo jointe'}</p>
      </div>
    </div>
    <div class="footer">
      <p>Une fiche patient telechargeable est jointe a cet email.</p>
      <p>Jean-Francois Magnetiseur Guerisseur</p>
    </div>
  </div>
</body>
</html>
    `.trim()

    // Option 1: Use Resend API (recommended)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      // Fichier texte en base64
      const ficheTxtBase64 = Buffer.from(ficheTxt).toString('base64')
      
      const attachments = [
        {
          filename: `fiche-patient-${prenom}-${nom}-${new Date().toISOString().split('T')[0]}.txt`,
          content: ficheTxtBase64,
        }
      ]
      
      // Ajouter la photo si presente
      if (photo) {
        attachments.push({
          filename: photoName,
          content: photoBase64,
        })
      }

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Demande de Soin <onboarding@resend.dev>',
          to: ['guerisseurtoucheur@gmail.com'],
          subject: `Nouvelle demande de soin - ${prenom} ${nom} - ${probleme}`,
          html: emailHtml,
          attachments: attachments,
        }),
      })

      if (!resendResponse.ok) {
        throw new Error('Failed to send email')
      }
    } else {
      // Fallback: Log the request (you'll need to configure an email service)
      console.log('Demande de soin recue:', {
        prenom,
        nom,
        dateNaissance,
        email,
        telephone,
        probleme,
        details,
        hasPhoto: !!photo
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing demande-soin:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
