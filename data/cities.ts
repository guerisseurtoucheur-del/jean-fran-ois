import { CityData } from '../components/CityPage';

export const citiesData: Record<string, CityData> = {
  // ILE-DE-FRANCE
  paris: {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    population: "2,1 millions",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    nearbyAreas: ["Boulogne-Billancourt", "Saint-Denis", "Montreuil", "Argenteuil", "Versailles", "Nanterre", "Créteil", "Bobigny"],
    localTestimonials: [
      { name: "Marie L.", text: "Depuis Paris 15ème, j'ai reçu un soin à distance pour mon zona. Le feu s'est calmé en quelques heures, incroyable !", condition: "Zona" },
      { name: "Philippe D.", text: "Cadre stressé dans le 8ème arrondissement, Jean-François m'a aidé à retrouver un sommeil réparateur.", condition: "Insomnie" },
      { name: "Nathalie R.", text: "Ma fille souffrait d'eczéma depuis des mois. Un soin sur photo et tout s'est apaisé.", condition: "Eczéma" }
    ],
    specificConditions: ["stress urbain", "troubles du sommeil", "burn-out", "douleurs dorsales"]
  },
  
  lyon: {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    population: "520 000",
    coordinates: { lat: 45.764, lng: 4.8357 },
    nearbyAreas: ["Villeurbanne", "Vénissieux", "Saint-Priest", "Vaulx-en-Velin", "Caluire-et-Cuire", "Bron", "Décines", "Oullins"],
    localTestimonials: [
      { name: "Christophe M.", text: "Habitant du 6ème arrondissement, j'ai été soulagé d'une sciatique tenace grâce à Jean-François.", condition: "Sciatique" },
      { name: "Sandrine V.", text: "Coupeur de feu efficace ! Brûlure de cuisine soignée à distance depuis Lyon.", condition: "Brûlure" },
      { name: "Laurent P.", text: "Mes migraines chroniques ont diminué dès la première séance à distance.", condition: "Migraines" }
    ],
    specificConditions: ["sciatique", "migraines", "brûlures", "stress professionnel"]
  },

  marseille: {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    population: "870 000",
    coordinates: { lat: 43.2965, lng: 5.3698 },
    nearbyAreas: ["Aix-en-Provence", "Aubagne", "Martigues", "Vitrolles", "Istres", "La Ciotat", "Salon-de-Provence", "Cassis"],
    localTestimonials: [
      { name: "Amandine B.", text: "Depuis le Vieux-Port, j'ai contacté Jean-François pour un psoriasis. Résultats visibles en une semaine.", condition: "Psoriasis" },
      { name: "Thierry G.", text: "Coup de soleil sévère après une journée aux Calanques. Le soin à distance a été salvateur.", condition: "Brûlure solaire" },
      { name: "Carole F.", text: "Anxiété chronique apaisée grâce aux soins énergétiques à distance.", condition: "Anxiété" }
    ],
    specificConditions: ["coups de soleil", "psoriasis", "anxiété", "troubles digestifs"]
  },

  toulouse: {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    population: "490 000",
    coordinates: { lat: 43.6047, lng: 1.4442 },
    nearbyAreas: ["Blagnac", "Colomiers", "Tournefeuille", "Muret", "Ramonville", "Balma", "L'Union", "Cugnaux"],
    localTestimonials: [
      { name: "Éric T.", text: "Ingénieur aéronautique à Blagnac, le stress m'épuisait. Jean-François m'a redonné de l'énergie.", condition: "Fatigue" },
      { name: "Béatrice N.", text: "Zona intercostal très douloureux. Le feu a été coupé en quelques heures.", condition: "Zona" },
      { name: "Julien M.", text: "Douleurs aux cervicales liées au télétravail. Soulagement rapide et durable.", condition: "Cervicalgies" }
    ],
    specificConditions: ["stress professionnel", "zona", "cervicalgies", "fatigue chronique"]
  },

  nice: {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    population: "340 000",
    coordinates: { lat: 43.7102, lng: 7.262 },
    nearbyAreas: ["Cannes", "Antibes", "Grasse", "Cagnes-sur-Mer", "Menton", "Vallauris", "Monaco", "Villefranche"],
    localTestimonials: [
      { name: "Patricia H.", text: "Depuis la Promenade des Anglais, j'ai reçu un soin pour mes insomnies. Nuits paisibles depuis.", condition: "Insomnie" },
      { name: "Michel R.", text: "Brûlure de méduse soignée rapidement à distance. Impressionnant.", condition: "Brûlure" },
      { name: "Stéphanie L.", text: "Eczéma estival récurrent enfin maîtrisé grâce à Jean-François.", condition: "Eczéma" }
    ],
    specificConditions: ["insomnies", "brûlures solaires", "eczéma", "allergies"]
  },

  nantes: {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    population: "320 000",
    coordinates: { lat: 47.2184, lng: -1.5536 },
    nearbyAreas: ["Saint-Nazaire", "Saint-Herblain", "Rezé", "Orvault", "Vertou", "Carquefou", "La Chapelle-sur-Erdre", "Bouguenais"],
    localTestimonials: [
      { name: "Gwenaëlle C.", text: "Nantaise depuis toujours, j'ai découvert le magnétisme à distance pour ma fibromyalgie.", condition: "Fibromyalgie" },
      { name: "Yannick B.", text: "Zona ophtalmique traité en urgence. Jean-François a répondu dans l'heure.", condition: "Zona" },
      { name: "Céline D.", text: "Mes enfants ont été soulagés de leurs verrues tenaces.", condition: "Verrues" }
    ],
    specificConditions: ["fibromyalgie", "zona", "verrues", "douleurs articulaires"]
  },

  bordeaux: {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    population: "260 000",
    coordinates: { lat: 44.8378, lng: -0.5792 },
    nearbyAreas: ["Mérignac", "Pessac", "Talence", "Villenave-d'Ornon", "Bègles", "Gradignan", "Cenon", "Arcachon"],
    localTestimonials: [
      { name: "François D.", text: "Viticulteur à Saint-Émilion, mes douleurs de dos me handicapaient. Plus maintenant.", condition: "Lombalgie" },
      { name: "Isabelle M.", text: "Brûlure en cuisinant pour les vendanges. Le coupeur de feu a agi immédiatement.", condition: "Brûlure" },
      { name: "Pierre-Jean L.", text: "Stress et anxiété liés au travail. Jean-François m'a apporté une vraie sérénité.", condition: "Anxiété" }
    ],
    specificConditions: ["lombalgies", "brûlures", "anxiété", "troubles du sommeil"]
  },

  lille: {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    population: "235 000",
    coordinates: { lat: 50.6292, lng: 3.0573 },
    nearbyAreas: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Wattrelos", "Marcq-en-Barœul", "Lambersart", "Lomme", "Armentières"],
    localTestimonials: [
      { name: "Antoine V.", text: "Lillois stressé par le rythme professionnel. Les soins de Jean-François m'ont transformé.", condition: "Stress" },
      { name: "Delphine K.", text: "Psoriasis résistant aux traitements classiques. Amélioration nette après deux séances.", condition: "Psoriasis" },
      { name: "Xavier M.", text: "Coupeur de feu efficace pour ma brûlure de radiateur. Merci Jean-François !", condition: "Brûlure" }
    ],
    specificConditions: ["stress", "psoriasis", "brûlures", "dépression saisonnière"]
  },

  strasbourg: {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    population: "290 000",
    coordinates: { lat: 48.5734, lng: 7.7521 },
    nearbyAreas: ["Schiltigheim", "Illkirch-Graffenstaden", "Haguenau", "Lingolsheim", "Bischheim", "Sélestat", "Obernai", "Saverne"],
    localTestimonials: [
      { name: "Hans W.", text: "Fonctionnaire européen, le stress me rongeait. Jean-François m'a aidé à retrouver l'équilibre.", condition: "Stress" },
      { name: "Claudine S.", text: "Zona sur le thorax, très douloureux. Soulagement en quelques heures à distance.", condition: "Zona" },
      { name: "Bernard F.", text: "Douleurs rhumatismales chroniques atténuées grâce au magnétisme.", condition: "Rhumatismes" }
    ],
    specificConditions: ["stress", "zona", "rhumatismes", "douleurs articulaires"]
  },

  rennes: {
    name: "Rennes",
    slug: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    population: "220 000",
    coordinates: { lat: 48.1173, lng: -1.6778 },
    nearbyAreas: ["Saint-Malo", "Cesson-Sévigné", "Bruz", "Saint-Jacques-de-la-Lande", "Vitré", "Betton", "Pacé", "Fougères"],
    localTestimonials: [
      { name: "Morgane L.", text: "Étudiante stressée par les examens. Le soin de Jean-François m'a détendue profondément.", condition: "Stress" },
      { name: "Yves G.", text: "Artisan brûlé au travail. Le coupeur de feu a agi en urgence, efficacement.", condition: "Brûlure" },
      { name: "Solène P.", text: "Eczéma sur les mains depuis l'enfance. Enfin apaisé après deux séances.", condition: "Eczéma" }
    ],
    specificConditions: ["stress étudiant", "brûlures", "eczéma", "troubles digestifs"]
  },

  montpellier: {
    name: "Montpellier",
    slug: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    population: "295 000",
    coordinates: { lat: 43.6108, lng: 3.8767 },
    nearbyAreas: ["Castelnau-le-Lez", "Lattes", "Pérols", "Mauguio", "Béziers", "Sète", "Lunel", "Agde"],
    localTestimonials: [
      { name: "Claire M.", text: "Méditerranéenne exposée au soleil, mes coups de soleil sont désormais vite soulagés.", condition: "Brûlure solaire" },
      { name: "Vincent A.", text: "Douleurs chroniques au genou après un accident. Amélioration progressive grâce à Jean-François.", condition: "Douleurs" },
      { name: "Aurélie D.", text: "Anxiété généralisée apaisée par les soins énergétiques à distance.", condition: "Anxiété" }
    ],
    specificConditions: ["coups de soleil", "douleurs articulaires", "anxiété", "allergies"]
  },

  grenoble: {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    population: "160 000",
    coordinates: { lat: 45.1885, lng: 5.7245 },
    nearbyAreas: ["Saint-Martin-d'Hères", "Échirolles", "Fontaine", "Voiron", "Meylan", "Sassenage", "Seyssinet", "Eybens"],
    localTestimonials: [
      { name: "Damien R.", text: "Sportif grenoblois, mes tendinites récurrentes ont enfin cessé.", condition: "Tendinite" },
      { name: "Sophie T.", text: "Zona déclenché par le stress du travail. Jean-François a coupé le feu rapidement.", condition: "Zona" },
      { name: "Maxime L.", text: "Migraines après une chute de ski. Soulagement dès la première séance.", condition: "Migraines" }
    ],
    specificConditions: ["tendinites", "zona", "migraines", "douleurs sportives"]
  },

  dijon: {
    name: "Dijon",
    slug: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    region: "Bourgogne-Franche-Comté",
    population: "160 000",
    coordinates: { lat: 47.322, lng: 5.0415 },
    nearbyAreas: ["Chenôve", "Talant", "Quetigny", "Chevigny-Saint-Sauveur", "Beaune", "Auxerre", "Chalon-sur-Saône", "Mâcon"],
    localTestimonials: [
      { name: "Hervé B.", text: "Viticulteur bourguignon, le travail éreintant me causait des douleurs. Soulagé à distance.", condition: "Douleurs" },
      { name: "Catherine N.", text: "Brûlure au bras en cuisine. Le coupeur de feu a agi instantanément.", condition: "Brûlure" },
      { name: "Emmanuel S.", text: "Stress et insomnie liés à mon entreprise. Jean-François m'a redonné la sérénité.", condition: "Insomnie" }
    ],
    specificConditions: ["douleurs musculaires", "brûlures", "insomnie", "stress"]
  },

  angers: {
    name: "Angers",
    slug: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    population: "155 000",
    coordinates: { lat: 47.4784, lng: -0.5632 },
    nearbyAreas: ["Avrillé", "Trélazé", "Saint-Barthélemy-d'Anjou", "Cholet", "Saumur", "Les Ponts-de-Cé", "Bouchemaine", "Écouflant"],
    localTestimonials: [
      { name: "Martine C.", text: "Angevine de souche, j'ai découvert le magnétisme à distance pour mon arthrose.", condition: "Arthrose" },
      { name: "David H.", text: "Zona douloureux traité efficacement. Je recommande Jean-François.", condition: "Zona" },
      { name: "Laurence V.", text: "Eczéma de ma fille apaisé en quelques jours seulement.", condition: "Eczéma" }
    ],
    specificConditions: ["arthrose", "zona", "eczéma", "douleurs chroniques"]
  },

  reims: {
    name: "Reims",
    slug: "reims",
    department: "Marne",
    departmentCode: "51",
    region: "Grand Est",
    population: "185 000",
    coordinates: { lat: 49.2583, lng: 4.0317 },
    nearbyAreas: ["Épernay", "Châlons-en-Champagne", "Tinqueux", "Bétheny", "Cormontreuil", "Saint-Brice-Courcelles", "Witry-lès-Reims", "Charleville-Mézières"],
    localTestimonials: [
      { name: "Olivier M.", text: "Travailleur du champagne, mes douleurs dorsales ont été soulagées à distance.", condition: "Lombalgie" },
      { name: "Virginie P.", text: "Migraines récurrentes depuis l'adolescence. Enfin un soulagement durable.", condition: "Migraines" },
      { name: "Pascal G.", text: "Brûlure à la main en cave. Jean-François a coupé le feu immédiatement.", condition: "Brûlure" }
    ],
    specificConditions: ["lombalgies", "migraines", "brûlures", "stress professionnel"]
  },

  toulon: {
    name: "Toulon",
    slug: "toulon",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    population: "180 000",
    coordinates: { lat: 43.1242, lng: 5.928 },
    nearbyAreas: ["Hyères", "La Seyne-sur-Mer", "Fréjus", "Draguignan", "Six-Fours-les-Plages", "La Garde", "Sanary", "Bandol"],
    localTestimonials: [
      { name: "Jean-Luc R.", text: "Marin toulonnais, mes douleurs articulaires sont enfin calmées.", condition: "Arthrite" },
      { name: "Nadia B.", text: "Brûlure solaire sévère après une journée à Porquerolles. Soin salvateur.", condition: "Brûlure" },
      { name: "Cédric T.", text: "Stress militaire apaisé grâce aux soins énergétiques de Jean-François.", condition: "Stress" }
    ],
    specificConditions: ["arthrite", "brûlures solaires", "stress", "douleurs musculaires"]
  },

  lehavre: {
    name: "Le Havre",
    slug: "le-havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    population: "170 000",
    coordinates: { lat: 49.4944, lng: 0.1079 },
    nearbyAreas: ["Rouen", "Montivilliers", "Sainte-Adresse", "Harfleur", "Gonfreville-l'Orcher", "Fécamp", "Étretat", "Dieppe"],
    localTestimonials: [
      { name: "Gérard N.", text: "Docker havrais, mes lombalgies chroniques ont été soulagées à distance.", condition: "Lombalgie" },
      { name: "Maryse F.", text: "Zona très douloureux. Jean-François a coupé le feu en quelques heures.", condition: "Zona" },
      { name: "Sylvain D.", text: "Migraines liées à l'humidité normande. Enfin un soulagement efficace.", condition: "Migraines" }
    ],
    specificConditions: ["lombalgies", "zona", "migraines", "rhumatismes"]
  },

  brest: {
    name: "Brest",
    slug: "brest",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    population: "140 000",
    coordinates: { lat: 48.3904, lng: -4.4861 },
    nearbyAreas: ["Quimper", "Morlaix", "Guipavas", "Plougastel-Daoulas", "Landerneau", "Plouzané", "Concarneau", "Lorient"],
    localTestimonials: [
      { name: "Yann K.", text: "Marin breton, mes douleurs articulaires liées à l'humidité ont été calmées.", condition: "Arthrite" },
      { name: "Nolwenn L.", text: "Eczéma sur les mains depuis des années. Amélioration nette grâce à Jean-François.", condition: "Eczéma" },
      { name: "Erwan M.", text: "Stress et fatigue chronique. Les soins énergétiques m'ont redonné de l'énergie.", condition: "Fatigue" }
    ],
    specificConditions: ["arthrite", "eczéma", "fatigue", "rhumatismes"]
  },

  alencon: {
    name: "Alençon",
    slug: "alencon",
    department: "Orne",
    departmentCode: "61",
    region: "Normandie",
    population: "26 000",
    coordinates: { lat: 48.4333, lng: 0.0833 },
    nearbyAreas: ["Argentan", "Flers", "La Ferté-Macé", "Sées", "L'Aigle", "Mortagne-au-Perche", "Domfront", "Bellême"],
    localTestimonials: [
      { name: "Christine B.", text: "Alençonnaise, j'ai la chance de pouvoir consulter Jean-François en cabinet. Résultats exceptionnels.", condition: "Douleurs" },
      { name: "Robert M.", text: "Mon voisin depuis des années. Un don exceptionnel pour couper le feu.", condition: "Brûlure" },
      { name: "Agnès D.", text: "Zona traité en urgence au cabinet. La douleur a disparu en 24h.", condition: "Zona" }
    ],
    specificConditions: ["consultation cabinet", "zona", "brûlures", "douleurs diverses"]
  }
};

// Liste des slugs pour le routing
export const citySlugList = Object.keys(citiesData);

// Helper pour obtenir une ville par slug
export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData[slug];
};
