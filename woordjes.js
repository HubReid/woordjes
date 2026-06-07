// ============================================================
// WOORDJESLIJSTEN — pas dit bestand aan voor nieuwe thema's
// ============================================================
// Voeg een nieuw thema toe door een nieuw object toe te voegen
// aan de WOORDENLIJSTEN array. De app laadt alles automatisch.
//
// Structuur per thema:
// {
//   id:        unieke code (geen spaties),
//   titel:     naam van het thema (zichtbaar in de app),
//   groep:     bijv. "Groep 6" of "Groep 7",
//   jaar:      schooljaar bijv. "2025-2026",
//   emoji:     één emoji als icoon,
//   kleur:     achtergrondkleur van de kaart (hex),
//   woorden:   array van ["woord", "definitie"] paren
// }
// ============================================================

const WOORDENLIJSTEN = [
  {
    id: "theater-groep6-les1",
    titel: "Theater & Film",
    groep: "Groep 6",
    jaar: "2025-2026",
    emoji: "🎭",
    kleur: "#f582ae",
    woorden: [
      ["aanraden","Iemand de raad geven iets wel te doen."],
      ["afraden","Iemand de raad geven iets niet te doen."],
      ["het geluidseffect","Een bijzonder geluid dat te horen is in een voorstelling."],
      ["de kritiek","Zeggen wat er niet goed is aan wat iemand doet."],
      ["lovend","Aanprijzend, met complimenten."],
      ["negatief","Gezegd van iemand die afkeurende kritiek heeft."],
      ["noteren","Opschrijven, aantekenen."],
      ["de pers","De journalisten en de krant, radio of de televisie waar ze voor schrijven."],
      ["het personage","Een persoon die in een boek, toneelstuk of film voorkomt."],
      ["het plot","Het verloop van een verhaal van het begin tot het einde."],
      ["positief","Gezegd van iemand die opbouwende kritiek heeft."],
      ["de recensie","Een mening over een boek, toneelstuk of film. Meestal geschreven in een krant of tijdschrift."],
      ["de recensent","Iemand die voor een krant of tijdschrift schrijft wat hij van een voorstelling, boek of film vindt."],
      ["de repetitie","De keer dat je een muziekstuk of voorstelling oefent."],
      ["de roem","Grote bekendheid, bewonderd worden door heel veel mensen."],
      ["het scenario","Een beschrijving van de delen van een film of een toneelstuk."],
      ["de scène","Een deel van een film of een toneelstuk."],
      ["het theatergezelschap","Een groep mensen die samen een toneelstuk speelt."],
      ["voorspelbaar","Als je weet wat er gaat komen, is iets voorspelbaar."],
      ["de waardering","Hoe belangrijk en waardevol je iets vindt."],
      ["de acteur","Iemand die een rol heeft in een film of in een toneelstuk."],
      ["de auditie","Een proefoptreden. Je zingt, speelt of danst om te laten zien wat je kunt."],
      ["de auteur","De schrijver."],
      ["de componist","Iemand die muziekstukken bedenkt en ze opschrijft met muzieknoten."],
      ["het decor","Alle voorwerpen die op het podium staan tijdens een toneelstuk."],
      ["dolgelukkig","Heel gelukkig."],
      ["de geluidsman","Iemand die bij een voorstelling zorgt dat alle geluiden en stemmen goed te horen zijn."],
      ["de hoofdrol","De belangrijkste rol bij een film of een toneelstuk."],
      ["kleurrijk","Met veel verschillende kleuren."],
      ["langdradig","Saai."],
      ["ontroerend","Als iets je een mooi en verdrietig gevoel geeft. Het raakt je gevoel."],
      ["de ontwerper","Iemand die bedenkt en tekent hoe iets eruit moet gaan zien."],
      ["de ovatie","Een groot applaus."],
      ["de plankenkoorts","Een zenuwachtige angst voor een optreden."],
      ["het podium","Verhoging waarop een optreden plaatsvindt."],
      ["de première","De eerste voorstelling."],
      ["de regisseur","Iemand die de leiding heeft over de uitvoering van een toneelstuk of een film."],
      ["het rekwisiet","Een voorwerp dat gebruikt wordt in een voorstelling."],
      ["repeteren","Oefenen voor een voorstelling of toneelstuk."],
      ["de theatervoorstelling","Een voorstelling in een theater. Bijvoorbeeld een toneelstuk."]
    ]
  }

  // Zo voeg je een nieuw thema toe (verwijder de // aan het begin):
  // ,{
  //   id: "natuur-groep6-les2",
  //   titel: "Natuur & Milieu",
  //   groep: "Groep 6",
  //   jaar: "2025-2026",
  //   emoji: "🌿",
  //   kleur: "#06d6a0",
  //   woorden: [
  //     ["het ecosysteem", "Een gebied met planten, dieren en hun omgeving."],
  //     ["de fotosynthese", "Het proces waarbij planten licht omzetten in voedsel."]
  //   ]
  // }
];
