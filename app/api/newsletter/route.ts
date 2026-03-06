import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, prenom } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 })
    }

    // Envoyer notification a Jean-Francois
    await resend.emails.send({
      from: 'Jean-Francois Magnetiseur <onboarding@resend.dev>',
      to: ['guerisseurtoucheur@gmail.com'],
      subject: 'Nouvelle inscription newsletter',
      html: `
        <h2>Nouvelle inscription a la newsletter</h2>
        <p><strong>Prenom :</strong> ${prenom || 'Non renseigne'}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Date :</strong> ${new Date().toLocaleDateString('fr-FR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <hr />
        <p><em>Cette personne souhaite recevoir des nouvelles de vos soins.</em></p>
      `
    })

    // Envoyer email de bienvenue au visiteur
    await resend.emails.send({
      from: 'Jean-Francois Magnetiseur <onboarding@resend.dev>',
      to: [email],
      subject: 'Bienvenue - Jean-Francois Magnetiseur Guerisseur',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #4f46e5;">Merci ${prenom || ''} pour votre confiance</h1>
          
          <p>Je suis Jean-Francois, magnetiseur guerisseur depuis plus de 20 ans.</p>
          
          <p>Vous recevrez desormais mes conseils et actualites sur le magnetisme et les soins energetiques.</p>
          
          <h3>Vous souffrez actuellement ?</h3>
          <p>Je peux vous aider a distance, simplement en recevant votre photo. Mes soins sont efficaces sur :</p>
          <ul>
            <li>Le zona et ses douleurs</li>
            <li>Les brulures (coupeur de feu)</li>
            <li>L'eczema et problemes de peau</li>
            <li>Les douleurs chroniques (dos, articulations)</li>
          </ul>
          
          <p style="text-align: center; margin: 30px 0;">
            <a href="https://www.jean-francois-magnetiseur-guerisseur.com/demande-soin" 
               style="background-color: #4f46e5; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold;">
              Demander un soin maintenant
            </a>
          </p>
          
          <p>A tres bientot,<br />
          <strong>Jean-Francois</strong><br />
          <em>Magnetiseur Guerisseur</em></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e5e5;" />
          <p style="font-size: 12px; color: #999;">
            Vous recevez cet email car vous vous etes inscrit sur jean-francois-magnetiseur-guerisseur.com
          </p>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur newsletter:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
