import React, { useEffect } from 'react';
import { CityData } from './CityPage';

interface CitySEOHeadProps {
  city: CityData;
}

const CitySEOHead: React.FC<CitySEOHeadProps> = ({ city }) => {
  useEffect(() => {
    // Mise à jour dynamique des balises meta
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Meta description optimisée pour la ville
    const description = `Magnétiseur guérisseur à ${city.name} (${city.departmentCode}). Jean-François, coupeur de feu expert, intervient à distance sur photo dans tout le ${city.department}. Zona, brûlures, eczéma, douleurs. Action immédiate.`;
    
    updateMeta('description', description);
    updateMeta('keywords', `magnétiseur ${city.name}, guérisseur ${city.name}, coupeur de feu ${city.departmentCode}, magnétisme ${city.department}, soin énergétique ${city.name}, ${city.specificConditions.join(', ')}`);
    
    // Open Graph
    updateMeta('og:title', `Magnétiseur à ${city.name} (${city.departmentCode}) | Guérisseur & Coupeur de Feu`, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`, true);
    
    // Twitter
    updateMeta('twitter:title', `Magnétiseur à ${city.name} | Jean-François Guérisseur`);
    updateMeta('twitter:description', description);
    
    // Géolocalisation
    updateMeta('geo.position', `${city.coordinates.lat};${city.coordinates.lng}`);
    updateMeta('geo.placename', city.name);
    updateMeta('ICBM', `${city.coordinates.lat}, ${city.coordinates.lng}`);

    // Injection des données structurées JSON-LD
    const existingScript = document.getElementById('city-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        // LocalBusiness pour cette ville
        {
          "@type": "LocalBusiness",
          "@id": `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}#business`,
          "name": `Jean-François - Magnétiseur Guérisseur ${city.name}`,
          "description": `Magnétiseur et coupeur de feu expert intervenant à ${city.name} et dans le ${city.department}. Soins énergétiques à distance sur photo.`,
          "url": `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`,
          "telephone": "+33955554462",
          "priceRange": "€€",
          "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Alençon",
            "addressRegion": "Normandie",
            "postalCode": "61000",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
          },
          "areaServed": [
            { "@type": "City", "name": city.name },
            ...city.nearbyAreas.map(area => ({ "@type": "City", "name": area }))
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Soins énergétiques ${city.name}`,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Coupeur de feu ${city.name}`,
                  "description": `Soulagement des brûlures et zona à ${city.name} par technique traditionnelle à distance`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `Magnétisme à distance ${city.name}`,
                  "description": `Soin énergétique sur photo pour les habitants de ${city.name} et du ${city.department}`
                }
              }
            ]
          }
        },
        // FAQPage pour les rich snippets Google
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Comment fonctionne un soin à distance pour ${city.name} ?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Jean-François se connecte à votre énergie via votre photo depuis son cabinet d'Alençon. La distance n'a aucune incidence sur l'efficacité du soin. Les habitants de ${city.name} et du ${city.department} bénéficient des mêmes résultats qu'une consultation en personne.`
              }
            },
            {
              "@type": "Question",
              "name": `Quel est le délai pour un soin sur ${city.name} ?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Votre demande est traitée sous 24h maximum. Jean-François vous confirme par message lorsque le soin est effectué. De nombreux patients de ${city.name} ressentent un soulagement dans l'heure qui suit.`
              }
            },
            {
              "@type": "Question",
              "name": `Combien coûte une séance de magnétisme pour ${city.name} ?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Le tarif est identique quel que soit votre lieu de résidence en France. Comptez entre 35€ et 60€ selon le type de soin.`
              }
            },
            {
              "@type": "Question",
              "name": `Quels problèmes le magnétiseur peut-il traiter à ${city.name} ?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Jean-François traite notamment : ${city.specificConditions.join(', ')}. Le magnétisme est complémentaire à la médecine traditionnelle.`
              }
            }
          ]
        },
        // Reviews/Testimonials
        ...city.localTestimonials.map((testimonial, index) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": testimonial.name
          },
          "reviewBody": testimonial.text,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": `Jean-François - Magnétiseur ${city.name}`
          }
        })),
        // BreadcrumbList pour la navigation
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://www.jean-francois-magnetiseur-guerisseur.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Magnétiseur France",
              "item": "https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-france"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `Magnétiseur ${city.name}`,
              "item": `https://www.jean-francois-magnetiseur-guerisseur.com/magnetiseur-${city.slug}`
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'city-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById('city-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [city]);

  return null; // Ce composant n'affiche rien, il injecte juste les meta
};

export default CitySEOHead;
