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
    
    const emailContent = `
Nouvelle demande de soin

Prenom: ${prenom}
Nom: ${nom}
Date de naissance: ${dateNaissance}
Email: ${email}
Telephone: ${telephone}
Probleme: ${probleme}

Details:
${details}

Photo jointe: ${photo ? 'Oui - ' + photoName : 'Non'}
    `.trim()

    // Option 1: Use Resend API (recommended)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      const attachments = photo ? [{
        filename: photoName,
        content: photoBase64,
      }] : []

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Demande de Soin <onboarding@resend.dev>',
          to: ['guerisseurtoucheurdelame@gmail.com'],
          subject: `Nouvelle demande de soin - ${prenom} ${nom}`,
          text: emailContent,
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
