/* ==========================================================
   CONFIG : modifie ton nom, tes liens, tes chiffres, tes vidéos,
   ton planning et ta FAQ ici. Le reste du site se met à jour seul.
   ========================================================== */
const CONFIG = {
  brand: "Z-SAMA",
  demo: true,                       // false = masque l'avis "données d'exemple"
  tagline: "Gaming, clips et coulisses. Un nouveau contenu chaque semaine sur YouTube, TikTok et Instagram.",
  email: "zgames1409@gmail.com",
  utcOffset: 4,                     // fuseau de tes horaires (4 = heure de La Réunion)
  tzLabel: "Horaires en heure de La Réunion (UTC+4)",
  platforms: [
    { id:"youtube",   name:"YouTube",   handle:"@zsama", url:"https://www.youtube.com/@z-sama-amr",   followers:1, unit:"abonnés",   desc:"Vidéos longues, guides et analyses. La base de la chaîne.", cta:"S'abonner" },
    { id:"tiktok",    name:"TikTok",    handle:"@zsama", url:"https://www.tiktok.com/@z_sama_amr",    followers:30, unit:"abonnés",   desc:"Clips courts, moments forts et tendances du moment.",       cta:"Suivre" },
    { id:"instagram", name:"Instagram", handle:"@zsama", url:"https://www.instagram.com/", followers:9200,  unit:"abonnés",   desc:"Reels, stories et coulisses du quotidien.",                 cta:"Suivre" },
    { id:"twitch",    name:"Twitch",    handle:"zsama",  url:"https://www.twitch.tv/",     followers:3100,  unit:"followers", desc:"Lives en direct, défis communautaires et replays.",         cta:"Suivre" },
    { id:"discord",   name:"Discord",   handle:"Serveur communauté", url:"https://discord.gg/", followers:1850,  unit:"membres",   desc:"Le QG : discussions, annonces et sessions entre membres.",  cta:"Rejoindre" }
  ],
  videos: [
    { p:"youtube",   t:"Mon setup complet en 2026", dur:"14:32", views:"48 k vues", when:"il y a 3 jours", h:355 },
    { p:"tiktok",    t:"Le clip qui a tout changé", dur:"0:42",  views:"210 k vues", when:"il y a 5 jours", h:20 },
    { p:"instagram", t:"Une journée dans les coulisses", dur:"0:58", views:"17 k vues", when:"il y a 1 semaine", h:300 },
    { p:"youtube",   t:"Ce que j'aurais voulu savoir en débutant", dur:"19:07", views:"31 k vues", when:"il y a 10 jours", h:210 },
    { p:"tiktok",    t:"Réponse à vos commentaires", dur:"0:37", views:"96 k vues", when:"il y a 2 semaines", h:40 },
    { p:"twitch",    t:"Live spécial 24 h : le replay", dur:"3:12:00", views:"6 k vues", when:"il y a 2 semaines", h:160 }
  ],
  pillars: [
    { n:"01", title:"Vidéos longues", text:"Des formats de 10 à 20 minutes pour prendre le temps : guides, analyses et projets menés de A à Z.", kv:[["Rythme","1 / semaine"],["Durée","10 – 20 min"]] },
    { n:"02", title:"Shorts & clips",  text:"Le meilleur en moins d'une minute. Idéal pour découvrir la chaîne en quelques secondes.", kv:[["Rythme","3 / semaine"],["Durée","15 – 60 s"]] },
    { n:"03", title:"Lives & communauté", text:"Des directs pour échanger avec le chat, relever des défis et décider ensemble du prochain contenu.", kv:[["Rythme","1 / semaine"],["Où","Twitch + Discord"]] }
  ],
  about: {
    title: "Créateur, passionné et régulier.",
    text: [
      "Je crée du contenu depuis plusieurs années avec une idée simple : montrer les coulisses, partager ce que j'apprends et construire une vraie communauté autour de la chaîne.",
      "Ici, tu trouves mes vidéos, mes clips, mes lives et la façon de me contacter. Remplace ce texte par ta propre histoire."
    ],
    badges: [/*["3 ANS","DE CONTENU"]*/,["5","PLATEFORMES"],["1 SEULE","COMMUNAUTÉ"]]
  },
  audience: [ ["TikTok",56],["YouTube",24],["Instagram",14],["Twitch",6] ],
  schedule: [
    { d:1, t:"18:00", p:"YouTube",   title:"Vidéo de la semaine" },
    { d:3, t:"12:30", p:"TikTok",    title:"TikTok du mercredi" },
    { d:5, t:"20:30", p:"Twitch",    title:"Live communauté" },
    { d:6, t:"16:00", p:"YouTube",   title:"Short bonus du week-end" }
  ],
  collab: [
    { title:"Intégration en vidéo", text:"Ton produit ou ton jeu présenté naturellement dans une vidéo longue.", list:["Segment dédié de 60 à 90 s","Lien et code en description","Tarif sur devis"] },
    { title:"Clips & contenu court", text:"Un format TikTok / Reel / Short pensé pour ton audience cible.", list:["Script validé ensemble","Publication multi-plateformes","Tarif sur devis"] },
    { title:"Live & événement", text:"Un direct sponsorisé, un tournoi ou un concours avec la communauté.", list:["Animation en direct","Giveaway possible","Tarif sur devis"] }
  ],
  comments: [
    { t:"Les vidéos sont claires, bien montées et on apprend toujours quelque chose.", who:"@spectateur1", where:"YouTube" },
    { t:"Les lives sont super ambiants, le chat est bienveillant.", who:"@spectateur2", where:"Twitch" },
    { t:"Je regarde les shorts tous les matins, impossible de m'arrêter.", who:"@spectateur3", where:"TikTok" }
  ],
  faq: [
    ["À quelle fréquence sortent les vidéos ?","Une vidéo longue par semaine, plusieurs shorts et un live. Le détail est dans la section Planning."],
    ["Où te suivre pour ne rien rater ?","Le plus complet : YouTube pour les vidéos, Discord pour les annonces. TikTok et Instagram pour le quotidien."],
    ["Comment proposer une collaboration ?","Écris-moi à l'adresse de la section Contact avec ton projet, tes dates et ton budget."],
    ["Comment soutenir la chaîne ?","S'abonner, liker, commenter et partager aide énormément, et ça ne coûte rien."],
    ["Tu réponds aux messages privés ?","Je lis tout, mais Discord et l'e-mail restent les plus rapides pour une réponse."],
    ["Puis-je utiliser tes clips ?","Écris-moi d'abord pour en discuter. Une mention de la source sera demandée."]
  ]
};
