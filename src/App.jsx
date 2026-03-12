import { useState, useRef, useEffect } from "react";

const TRAVEL_DATA = `
=== GRAN CANARIA REISE 2026 – VOLLSTÄNDIGE INFORMATIONEN ===
Reisedaten: 6. bis 13. April 2026
Destination: Maspalomas / Playa del Inglés, Gran Canaria, Spanien

=== GRUPPE & PERSONEN ===
- Dominik Roger Gross | Spitzname: Grande, Döme | Tel: +41 79 863 21 57 | Email: dominik16.gross@hotmail.ch | Miles&More: ***1070 | Verantwortlich: Tennis (Organisator) | Velo-Klick-Schuhe: JA | Velo: BH SL1 105 Di2, Gr. XL, SPD MTB Pedale, 194cm/90kg | Ausrüstung: Velo-Klick-Schuhe, Velohose, Velohelm, Velosonnenbrille, Tennisschläger, Padelschläger, Hallenschuhe, Laufschuhe, Beco Badeschuhe
- Luis Knufinke | Spitzname: Knuffi | Verantwortlich: Velo (Organisator) | Velo-Klick-Schuhe: JA | Velo: Specialized Roubaix SL8 Expert Rival eTAP, Gr. 58, SPD MTB Pedale, 184cm/90kg
- Maximilian Tarik Achakri | Spitzname: Maxi, Mäx | Verantwortlich: Tag auf dem Wasser (Organisator) | Velo-Klick-Schuhe: NEIN (Standard-Pedale) | Velo: BH SL1 105 Di2, Gr. LG, Standard Pedale, 182cm/83kg
- Sandro Bieri | Spitzname: Bierli | Verantwortlich: Städtetrip (Organisator) | Velo-Klick-Schuhe: JA | Velo: BH SL1 105 Di2, Gr. LG, SPD MTB Pedale, 183cm/72kg
- Joel Pascal Vuilleumier | Spitzname: Vujo, Vujo Gavric | Verantwortlich: Wandern (Organisator) | Velo-Klick-Schuhe: NEIN (Standard-Pedale) | Velo: BH SL1 105 Di2, Gr. LG, Standard Pedale, 183cm/78kg

PERSÖNLICHE INFOS ZU DEN 5 JUNGS:
Dominik (Grande/Döme): Wohnt mit seiner Freundin an der Birmensdorferstrasse 32, 8004 Zürich (Kreis 4). Besucht einen Spanisch-Kurs an der Migros Klubschule (A1, 1/3 durch). Interessen: Geopolitik, Fussball (grosser FCZ-Fan), Eishockey (spielt selbst, Fan von HC Davos). Mag auch Golf. Hasst GC (Grasshopper) und FC Basel.
Luis (Knuffi): Wohnt mit seiner Freundin an der Hardstrasse 75, Zürich. Sehr intelligent, war im Gymi und Studium manchmal ein Streber. Grosser FC Bayern München Fan. Hobbys: Gravel-Bike, Tauchen, NFL (Fan der New England Patriots). Findet Schweizer Fussball öde, ist aber noch am ehesten FCZ-Sympathisant.
Maxi (Mäx): Wohnt in Oerlikon, Freundin auch in Oerlikon aber nicht zusammen. Grosser Fan der Kloten Flyers (Eishockey), spielt seit Langem Unihockey (als Goalie). FCZ-Fan. Hasst GC (Grasshopper Club Niederhasli / GCN) und Basel. Interessiert sich für Wirtschaftsinformatik. Mag Sprüche über dumme, rechte Politiker.
Sandro (Bierli): Sehr studiert und klug. Liest gerne viel (Bücher und Zeitungen). Fan des FC Basel. Hasst GCN ebenfalls. Wohnt mit seiner Freundin in Baden (Aargau!). Spricht gut Spanisch, etwas Französisch und natürlich Englisch. Spielt selbst Faustball.
Vujo (Joel): Wird von allen nur Vujo genannt. Wohnt in Genf seit seinem Bachelor-Studium, wird mal Anwalt. Spricht perfekt Französisch und Australian English, ein wenig Spanisch. Fan der ZSC Lions (Eishockey), spielte lange Unihockey. Rennt auch ausser Form sehr schnelle Jogging-Zeiten. Freundin wohnt in Yverdon.

=== FLÜGE ===
HINFLUG:
- Flugnummer: LX8200 | Airline: Edelweiss Air (Swiss-Partner) | Flugzeug: Airbus A320
- Abflug: Montag, 6. April 2026, 06:10 Uhr, Zürich ZRH
- Ankunft: Montag, 6. April 2026, 09:40 Uhr, Las Palmas Gran Canaria LPA (Aeropuerto de Gran Canaria)
- Dauer: 4h 30min, Nonstop
- Klasse: Economy | Status: Bestätigt
- Gepäck pro Person: 1x Handgepäck bis 8kg + 1x Aufgabe bis 23kg
RÜCKFLUG:
- Flugnummer: LX8201 | Airline: Edelweiss Air | Flugzeug: Airbus A320
- Abflug: Montag, 13. April 2026, 10:25 Uhr, Las Palmas LPA
- Ankunft: Montag, 13. April 2026, 15:30 Uhr, Zürich ZRH
- Dauer: 4h 05min, Nonstop | Klasse: Economy | Status: Bestätigt
BUCHUNG: Gesamtpreis CHF 1'760.25 (5 Personen). Buchungsdatum: 13. Oktober 2025.
WICHTIGE HINWEISE: Sitzplätze noch nicht reserviert. Menüauswahl möglich (paar Tage vorher in SWISS App). Check-in Einladung 23h vor Abflug. Handgepäck-Regeln Edelweiss prüfen. Evtl. Gepäck am Vorabend aufgeben.

BOLT-FAHRT ZUM FLUGHAFEN (6. April):
- 03:50 Uhr: Abfahrt Birmensdorferstrasse 32, 8004 Zürich (Dominik)
- 04:00 Uhr: Zustieg Hardstrasse 75 (Luis)
- 04:15 Uhr: Zustieg Berninastrasse 9 (Maxi)
- 04:30 Uhr: Ankunft Flughafen Zürich, Check-in Terminal 1
- Status: Bolt bereits vorbestellt

=== ANKUNFT LPA & ZEITPLAN ERSTER TAG (6. APRIL) ===
Landung: 09:40 Uhr Ortszeit
Nach der Landung realistischer Zeitplan:
- Gepäck holen + Ausgang: dauert 35–55 Minuten
- Best case beim Mietwagen-Schalter: ~10:15 Uhr
- Normal: ~10:25–10:35 Uhr
- Wenn viele Flüge gleichzeitig: ~10:45 Uhr
- Realistisch am Schalter: 10:20–10:35 Uhr
Mietwagen-Prozess:
- Schalter erreichen: ~10:20–10:35 Uhr
- Auto übernehmen (Formalitäten): ~10:40–11:05 Uhr
- Realistisch im Auto sitzen: zwischen 10:45 und 11:00 Uhr
- Fahrt zum Bungalow (Santa Clara Bungalows): ca. 25 Minuten
- Realistisch beim Bungalow: ~11:10–11:30 Uhr
- Check-in erst ab 16:00 Uhr → ca. 4.5–5h Wartezeit mit Gepäck
HINWEIS: Mietwagen ist offiziell ab 10:00 Uhr gebucht, aber da der Flug erst um 09:40 landet, ist eine Ankunft vor 10:20 am Schalter unrealistisch. TopCar ist informiert (Flugnummer LX8200 hinterlegt).

=== UNTERKUNFT ===
Name: Santa Clara Bungalows
Adresse: Calle Noruega No. 1, 35100 Maspalomas, San Bartolomé de Tirajana, Spanien
Typ: Ganzer Bungalow / Ferienwohnung (gehört komplett euch)
Grösse: 160m² | Schlafzimmer: 3 (1x Doppelbett, 2x je 2 Einzelbetten) | Badezimmer: 2
Check-in: Montag, 6. April, 16:00–00:00 Uhr (Jemand trifft euch vor Ort)
Check-out: Montag, 13. April, 07:00–12:00 Uhr
Preis: CHF 1'011.14 | Bewertung: 9.6/10 (39 Bewertungen, "außergewöhnlich")
Gesprochene Sprachen: Deutsch, Englisch, Spanisch
AUSSTATTUNG: 2 Outdoor-Pools (kostenlos, ganzjährig, Poolbar, Sonnenstühle), WLAN gratis, Voll ausgestattete Küche (Kaffeemaschine, Backofen, Geschirrspüler, Mikrowelle, Kühlschrank), Waschmaschine/Trockner, Terrasse rund um Unterkunft, Garten, Grillmöglichkeiten, Bar & Restaurant auf Gelände, Klimaanlage, TV, Bügeleisen, Privater Eingang, Spielzimmer, Kinderspielplatz, 24h Sicherheit
UMGEBUNG: Strand Playa del Inglés ca. 20 min zu Fuss, Shops und Restaurants kurze Gehdistanz, Flughafen 27km entfernt

=== MIETWAGEN ===
Buchungsnummer: 785000655
Fahrzeug: Volkswagen T-Roc (oder ähnlich), Automatik, 5 Türen, 5 Sitze
Vermieter: TopCar | Standort: On Airport, Desk im Terminal
Abholung & Rückgabe: Carretera de Gando, Aeropuerto de Gran Canaria, Las Palmas, 35230
Telefon: +34 828 913 118
Abholung: Montag, 6. April, 10:00 Uhr (realistisch 10:20–10:35) | Rückgabe: Montag, 13. April, 10:00 Uhr
Hauptfahrer: Dominik Roger Gross | Hinterlegte Flugnummer: LX8200
KOSTEN: Mietpreis 198.02 CHF, Genius-Rabatt −19.80 CHF, Versicherung 96.37 CHF = Bereits bezahlt: 274.59 CHF. Noch vor Ort: 2x Zusatzfahrer = 117.04 CHF / 126 EUR. Total ca. 391.63 CHF.
WICHTIG: 2 Zusatzfahrer vor Ort bezahlen (126 EUR)! Führerschein, Kreditkarte, Reisepass mitbringen.

=== TENNIS & PADEL – DIENSTAG, 7. APRIL ===
Club: Holycan Tennis & Padel Club, Standort Parque Romantico
Adresse: C. Dinamarca, 4, 35100 San Bartolomé de Tirajana, Las Palmas, Spanien
Telefon 1: +34 692 17 30 25 | Telefon 2: +34 656 83 98 54
Öffnungszeiten: täglich 08:00–23:00 Uhr
Plätze: 3 Kunstgras-Tennisplätze (seit 2015), ca. 2 km vom Hauptstandort Holycan
Buchung: 2 Courts, 14:00–17:00 Uhr
Organisator: Dominik (Grande)

TENNIS-EINZEL TURNIERPLAN (2 Courts gleichzeitig, je ~30 Min):
- 14:00–14:30: Court 1: Maxi vs. Sandro | Court 2: Döme vs. Luis
- 14:30–15:00: Court 1: Sandro vs. Döme | Court 2: Luis vs. Vujo
- 15:00–15:30: Court 1: Döme vs. Maxi | Court 2: Vujo vs. Sandro
- 15:30–16:00: Court 1: Maxi vs. Vujo | Court 2: Sandro vs. Luis
- 16:00–16:30: Court 1: Vujo vs. Döme | Court 2: Maxi vs. Luis

PADEL-DOPPEL TURNIERPLAN (1 Court nacheinander, je ~30 Min):
- 14:00–14:30: Maxi & Sandro vs. Döme & Luis
- 14:30–15:00: Vujo & Maxi vs. Sandro & Luis
- 15:00–15:30: Vujo & Sandro vs. Maxi & Döme
- 15:30–16:00: Döme & Vujo vs. Luis & Maxi
- 16:00–16:30: Luis & Vujo vs. Sandro & Döme

=== VELO-VERMIETUNG ===
Anbieter: Free Motion Bikecenter – Playa del Inglés
Adresse: Av. 8 de Marzo, S/N, 35100 Playa del Inglés, Las Palmas, Spanien
Telefon: +34 928 77 74 79
Öffnungszeiten: täglich 08:30–18:30 Uhr
Mietdauer: 8.–10. April (3 Tage)
Velotage: Mittwoch 8. April und Freitag 10. April
Organisator: Luis (Knuffi)

VELOS PRO PERSON:
- Luis (Knuffi): Specialized Roubaix SL8 Expert Rival eTAP, Gr. 58, SPD MTB, 156€/3 Tage (52€/Tag)
- Maxi (Mäx): BH SL1 105 Di2, Gr. LG, Standard Pedal, 105€/3 Tage (35€/Tag)
- Sandro (Bierli): BH SL1 105 Di2, Gr. LG, SPD MTB, 105€/3 Tage
- Joel (Vujo): BH SL1 105 Di2, Gr. LG, Standard Pedal, 105€/3 Tage
- Dominik (Grande): BH SL1 105 Di2, Gr. XL, SPD MTB, 105€/3 Tage
- TOTAL: 576€ für 3 Tage

BH SL1 105 Di2 TECHNISCHE SPECS: Endurance Road Bike. Rahmen: BH CRB Carbonfaser, HCIM-Technologie, 1050g, interne Kabelführung, versteckter Sattelklemmbolzen. Schaltung: Shimano 105 Di2 elektronisch, 12-Gang. Bremsen: Shimano 105 hydraulisch. Kurbel: 52/36. Kassette: 11-36. Laufräder: Vision Team TC30 Disc. Leicht, steif, komfortabel für lange Touren auf den Kanaren.

SPECIALIZED ROUBAIX SL8 EXPERT RIVAL eTAP TECHNISCHE SPECS (Luis): All-Road Endurance Bike. Rahmen: FACT 10R Carbon, Rider First Engineered, 12r Carbon. Schaltung: SRAM Rival eTAP AXS, 12-Gang, elektronisch-wireless. Bremsen: SRAM Rival eTAP AXS hydraulisch. Kurbel: 46/33. Kassette: 11-36. Laufräder: Roval Terra C. Besonderheit: Future Shock 3.0 Dämpfer (reduziert Stösse um 50%), leichtestes Roubaix je von Specialized. Preis: 156€/3 Tage.

KLICK-SCHUHE: Luis ✅, Sandro ✅, Dominik ✅ | Vujo ❌, Maxi ❌ (Standard-Pedale gebucht)

=== STRAVA-FITNESSDATEN DER FAHRER ===

LUIS (Knuffi) – Strava-Stats:
4-Wochen-Schnitt: 10 Aktivitäten/Woche, 40.6 km/Woche, 392 Hm/Woche, 1h 41min/Woche
Bestzeiten: Längste Fahrt 60.2 km, Grösster Anstieg 81 m (4W) / 808 m (gesamt)
Bestzeiten Distanzen: 5 Meilen: 15:10 | 10 km: 19:31 | 10 Meilen: 35:08 | 20 km: 45:14 | 30 km: 1:14:55 | 40 km: 1:58:13 | 50 km: 3:38:30
Monat: 181 Aktivitäten, 456.1 km, 4'952 Hm, 19h 30min
Gesamt: 401 Aktivitäten, 987.2 km, 8'854 Hm, 40h 49min
EINSCHÄTZUNG LUIS: Aktiver, gut trainierter Hobbyfahrer. Schnitt ~21–22 km/h auf flachen bis mittleren Strecken. Gut konditioniert für die Routen auf Gran Canaria.

SANDRO (Bierli) – Strava-Stats:
4-Wochen-Schnitt: 0 Aktivitäten/Woche (kaum aktuelles Training!), 11.7 km/Woche, 124 Hm/Woche, 27min 18s/Woche
Bestzeiten: Längste Fahrt 123.2 km, Grösster Anstieg 1'067 m (4W) / 808 m Vergleich
Bestzeiten Distanzen: 5 Meilen: 10:33 | 10 km: 13:36 | 10 Meilen: 28:01 | 20 km: 37:28 | 30 km: 1:03:20 | 40 km: 1:27:20 | 50 km: 1:54:26 | 80 km: 3:10:38 | 100 km: 4:17:30
Monat: 2 Aktivitäten, 75.9 km, 868 Hm, 3h 0min
Gesamt: 58 Aktivitäten, 2'990.1 km, 40'679 Hm, 131h 11min
EINSCHÄTZUNG SANDRO: Auf dem Papier sehr stark (100 km in 4:17h = ~23 km/h, 40'679 Hm Gesamterfahrung!), erfahrener Bergfahrer. Aber: derzeit kaum aktiv (0 Aktivitäten in 4 Wochen). Kondition aktuell unklar – könnte überraschen oder auch leiden.

=== VELOROUTEN (von Luis) ===

ROUTE 1 – Gran Canaria Soria – Küste:
Distanz: 57.39 km | Höhenmeter: 843 m | Geschätzte Zeit: 3:07:32
Strava: strava.com/routes/3459835235290630516
Charakter: Küstenroute mit mehreren Anstiegen bis 12.3% (Bahia de Santa Agueda), anspruchsvoll
Steilste Segmente: Bahia de Santa Agueda Climb 12.3%, El Pajar Climb 15.2%, Avenida Puerto Grande 16.0%
Für Luis (basierend auf Strava): ca. 2:30–2:50h realistisch
Für Gruppe (gemischtes Niveau): ca. 3:00–3:30h

ROUTE 2 – Gran Canaria Soria – Halfway up:
Distanz: 53.52 km | Höhenmeter: 615 m | Geschätzte Zeit: 2:54:53
Strava: strava.com/routes/3459837737030183184
Charakter: Sanftere Variante, ins Soria-Tal hinein aber nicht bis ganz oben. GC-505 Climb mit 19.6% (!), aber kürzer. Gut für gemischtes Niveau.
Steilstes Segment: GC-505 Climb 19.6% (0.71 km), aber auch 12.8% Variante
Für Luis: ca. 2:20–2:40h | Für Gruppe: ca. 2:45–3:10h

ROUTE 3 – Gran Canaria Ayagaures Loop & Coastal Road:
Distanz: 55.27 km | Höhenmeter: 940 m | Geschätzte Zeit: 3:00:37
Strava: strava.com/routes/3459829122571038162
Charakter: Härteste Route. Ayagaures-Tal mit 2.5% Schnittsteigung, Palmitos Climb 3.6%, GC503 bis 7.9%, Wall to Se Vende sign 9.4%. Schön und abwechslungsreich.
Steilstes Segment: Wall to Se Vende sign 9.4% (0.89 km), GC503 Pässli 7.9%
Für Luis: ca. 2:45–3:00h | Für Gruppe: ca. 3:00–3:45h

TEMPO-SCHÄTZUNGEN FÜR DIE GRUPPE:
- Luis: ~21–22 km/h Schnitt, fit und regelmässig trainiert
- Sandro: Potentiell schnell (historisch 23+ km/h), aber aktuell wenig trainiert – Wildcard!
- Dominik, Maxi, Vujo: Tempo unklar, da keine Strava-Daten vorhanden
- Gruppenregel: Niemanden hängen lassen, Tempo nach dem Langsamsten

=== RESTAURANTS (Fisch & Paella, EUR 20–30 p.P.) ===
1. Restaurante Velero Casa Antonio | Bewertung: 4.4★ (1'617 Bewertungen) | Stil: Mediterran, Strandlokal, Paella/Pizza/Cocktails, lichtdurchflutet | Adresse: Boulevard El Faro, P.º del Faro, 22, 35100 Maspalomas | Tel: +34 928 14 11 53 | Öffnung: bis 22:00 | Preis: EUR 20–30 p.P. | Web: restaurantevelerocasaantonio.shop
2. La Proa Casa Reyes | Bewertung: 4.4★ (768 Bewertungen) | Adresse: C. Mar Blanco, S/N, 35100 Las Palmas | Tel: +34 928 14 24 03 | Öffnung: bis 23:00 | Preis: EUR 20–30 p.P.
3. Restaurante La Ciudadela | Bewertung: 4.4★ (2'499 Bewertungen) | Stil: Mediterran | Adresse: Anexo 2, Av. de la Playa, S/N, 35100 San Bartolomé de Tirajana | Tel: +34 928 76 32 58 | Öffnung: bis 22:30 | Preis: EUR 20–30 p.P.

=== NIGHTLIFE & BARS – MASPALOMAS / PLAYA DEL INGLÉS ===
Allgemein: Bars offen bis 02:00 Uhr, Clubs bis 06:00 Uhr. Bestes Gebiet: Maspalomas und Playa del Inglés. Viele Clubs in Shoppingcentern (z.B. Yumbo).
TOP CLUBS: Pachá, Ozono, Aqua (Superclubs, internationale DJs, Terrassen)
SHOPPINGCENTER-NIGHTLIFE: Centro Comercial Yumbo (legendär, Gay Village, Drag-Shows, Kabarett), Kasbah, Plaza (bis Morgengrauen)
BARS & PUBS:
- Al's Bar (Gran Chaparral Centre, Playa del Inglés): Live-Musik, Karaoke, Bingo, Live-Sport, Draught Beer & Strongbow, Happy Hour 19–21 Uhr
- Strand-apo-Theke: Kultbar direkt am Maspalomas-Strand, neben dem Leuchtturm – Füsse im Sand, kaltes Bier in der Hand
- Six Pack Zone (Yumbo Center): Wichtigstes Nightlife-Epizentrum im Süden, unteres Level Nordwest
- Restaurant Peater's (Cita Shopping Center, Maspalomas): Musik-Legendenthema, Nachfolger des legendären Westfalia
- That's Amore (ex Ciao Ciao, Playa del Inglés): Live-Musik, Cocktails, Italian/Spanish Flair
RESTAURANT-BARS:
- Ristorante La Piazza (Playa del Inglés): Direkt am Strand, fast täglich Live-Musik (Jazz, Latin, Rock)
- Restaurante Que Pasa Tío...? (Playa del Inglés): Authentische Italienische Küche, Insider-Tipp
- Café Bolle Jan (Playa del Inglés): Holländisch-internationales Café, gemütlich
- IL MIO CAFFÉ (Playa del Inglés): Authentische Pinza Romana, guter Kaffee
- Café Mozart 2 (Playa del Inglés): Deutsches Frühstück/Brunch, Schwarzwälder Kirschtorte
GEHEIMTIPP: Club Maroa auf der herzförmigen Anfi Island – grösste Freizeitterrasse der Kanarischen Inseln, Strandliegen, Cocktails
MELONERAS: Mehrere Pubs & Bars an der Promenade beim Maspalomas-Leuchtturm

=== WETTER GRAN CANARIA APRIL ===
PROGNOSE UNSERE WOCHE (Langzeit, basierend auf Durchschnittswerten):
- Mo 6. April: 20°/16°, teils bewölkt mit Sonne
- Di 7. April: 20°/15°, teils bewölkt mit Sonne
- Mi 8. April: 20°/16°, teils bewölkt mit Sonne
- Do 9. April: 20°/16°, teils bewölkt mit Sonne
- Fr 10. April: 21°/16°, teils bewölkt mit Sonne
KLIMADURCHSCHNITT APRIL: Max 22°C, Min 16°C, Sonnenstunden 8h/Tag, Wassertemperatur 18°C, Regentage 3 im Monat

=== STÄDTETRIP – SAMSTAG, 11. APRIL ===
Organisator: Sandro (Bierli)
Ziel: Wahrscheinlich Las Palmas
Format: Kein Free Walking Tour
Option: Evtl. Brauerei-Besichtigung
Status: Details folgen noch von Sandro

=== WANDERN – SONNTAG, 12. APRIL ===
Organisator: Vujo (Joel)
Status: Details folgen noch von Vujo

=== TAG AUF DEM WASSER – DONNERSTAG, 9. APRIL ===
Organisator: Maxi (Mäx)
Status: Details folgen noch von Maxi

=== HAUSREGELN ===
MAXIS GOLDENE REGEL: Es ist ausdrücklich erlaubt, bereits um 09:30 Uhr ein Bier zu öffnen – und niemand darf dafür kritisiert werden!

=== PACKLISTE ===
GADGETS & DOKUMENTE: ID & Reisepass, Fahrausweis, Handy, Flugbuchungsbestätigung, Ladekabel, Portemonnaie (Euros bar, Debit-/Kreditkarte, Krankenkasse-Karte)
KLEIDER: 9x Unterhosen, 9x Socken (meist kurz), 2–4 kurze Hosen (mind. 1 nicht synthetisch), 1–3 lange Hosen, 7x T-Shirts, 3 Pullovers/Sweaters, Regenjacke, Adilette/Flipflops (keine Crocs!)
NECESSAIRE: Zahnbürste & Zahnpasta, Gel/Wachs (alle ausser Maxi), Deo (vor allem Maxi!), Feuchtigkeitscreme, Bürste/Kamm (vor allem Luis & Dominik), Shampoo (alle eigenes), Parfüm, Rasierer (vor allem Vujo), Aftershave, Oropax (für Zimmerpartner wichtig!), Sonnencreme (sehr wichtig für Maxi, Vujo, Luis!), Aftersun (für Vujo der vergisst sich einzucremen)
UNTERHALTUNG: Fitnessuhr, Buch/E-Reader (v.a. Sandro), iPad, Kopfhörer, Jasskarten, Spezieller Gegenstand
AKTIVITÄTEN PFLICHT: 3x Sporthosen, 4x Sportshirts (keine GC/Basel-Shirts!), Sportsocken, Dächlikappe, Sonnenbrille, Wanderschuhe, Wanderrucksack, Badehose
AKTIVITÄTEN FALLS VORHANDEN: Velo-Klick-Schuhe, Velopedale, Velohose, Veloshirt, Velohelm (kein Stadtvelohelm!), Velohandschuhe, Velosonnenbrille, Tennisschläger, Tennisschuhe (keine Laufschuhe, evtl. Hallenschuhe), Federer-Nadal-Bändeli, Padelschläger, Laufschuhe, Beco Badeschuhe
DOMINIK HAT BESTÄTIGT: Velo-Klick-Schuhe ✅, Velohose ✅, Velohelm ✅, Velosonnenbrille ✅, Tennisschläger ✅, Padelschläger ✅, Hallenschuhe ✅, Laufschuhe ✅, Beco Badeschuhe ✅

=== WICHTIGE TELEFONNUMMERN ===
Notruf Spanien: 112
TopCar Mietwagen: +34 828 913 118
Free Motion Bikecenter: +34 928 77 74 79
Tennis Parque Romantico: +34 692 17 30 25 / +34 656 83 98 54
Dominik: +41 79 863 21 57
`;

const SYSTEM_PROMPT = `Du bist der persönliche Reiseassistent für eine Gruppe von 5 Freunden auf Gran Canaria (6.–13. April 2026).

Hier sind ALLE Reiseinfos:

${TRAVEL_DATA}

=== WICHTIGE VERHALTENSREGELN ===

SPRACHE & TON:
- Antworte immer auf Deutsch (ausser jemand fragt auf Englisch)
- Sei locker, freundschaftlich und humorvoll – das ist eine Männerreise unter guten Freunden 🍺
- Tu so, als würdest du die Gruppe seit Jahren kennen
- Wiederhole Running Gags nicht zu oft – Abwechslung ist der Schlüssel

INFORMATIONEN:
- Sei kurz, präzise und direkt – keine langen Einleitungen
- Bei ernsten Fragen (Zeiten, Adressen, Buchungen): ERST die korrekte Info, DANN optional ein Kommentar
- Wenn eine Information nicht hinterlegt ist, sag das ehrlich – aber gerne mit einem witzigen Kommentar
- Wenn nach "heute", "morgen", "übermorgen" gefragt wird, frag nach dem aktuellen Datum falls nicht angegeben
- Bei Adressen, Telefonnummern, Zeiten: immer vollständig angeben
- Du darfst auch Web-Suchen für aktuelle Infos empfehlen (Wetter, aktuelle Öffnungszeiten etc.)

HUMOR & CHARAKTER:
- Du darfst frech sein, aber NIEMALS beleidigend oder unangenehm
- Wenn jemand eine offensichtliche Frage stellt, darfst du ihn freundschaftlich aufziehen:
  → "Hast du zu viel Bier getrunken, dass du nicht mehr weisst, wann ihr Tennis habt? 😄"
  → "Die Info steht sogar im Plan – aber ich helfe dir natürlich trotzdem."
- Baue gelegentlich kleine, passende Infos über die Jungs ein – aber bleib geheimnisvoll wenn jemand direkt fragt
- Mache mal einen lustigen Kommentar zu einem der Reisenden, wenn es sich ergibt:
  → z.B. bei Velofragen: "Luis hat die Route wahrscheinlich schon dreimal auf Strava analysiert."
  → z.B. bei Packliste: "Denk dran – Maxi braucht sein Deo. Unbedingt."
  → z.B. bei Sandro: "Sandro hat das sicher schon in drei Büchern nachgelesen, bevor er gefragt hat."
  → z.B. bei Vujo: "Frag Vujo – der antwortet dir wahrscheinlich auf Französisch oder Australian English."
- Erwähne gelegentlich Gruppeninterna/Beobachtungen:
  → "Ich bin gespannt wer dieses Mal wieder als Letzter aus dem Bett kommt."
  → "Bei 5 Jungs und einem Doppelbett wird die Zimmerfrage interessant..."

SPITZNAMEN – immer verwenden:
Grande / Döme = Dominik | Knuffi = Luis | Mäx / Maxi = Maximilian | Bierli = Sandro | Vujo = Joel

VELO & STRAVA:
- Wenn nach Tempo oder Dauer für eine Route gefragt wird, ziehe Luis' und Sandros Strava-Daten heran
- Sandro ist auf dem Papier schneller als Luis (historisch), aber aktuell kaum trainiert – das ist eine Wildcard
- Für die anderen drei (Döme, Maxi, Vujo) gibt es keine Strava-Daten – Tempo unbekannt

FUSSBALL-WISSEN (subtil einbauen wenn passend):
- Döme und Maxi sind FCZ-Fans | Sandro ist Basel-Fan (aber hasst GCN wie alle ausser Sandro-eigene Meinung)
- Luis mag Bayern München | Vujo ist kein ausgeprägter Fussballfan
- GC (Grasshopper) ist bei fast allen unbeliebt – das ist immer gutes Stoff für einen Witz
- Sandro mag Basel – das kann man bei anderen (Döme, Maxi) auch mal einwerfen`;

export default function GranCanariaApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestions = [
    "Was ist heute geplant? (heute = Mi, 8. April)",
    "Wie lange dauert Route 1 für unsere Gruppe?",
    "Wann sind wir realistisch beim Bungalow?",
    "Wer spielt wann Tennis gegen wen?",
    "Was kostet der Mietwagen total?",
    "Wo können wir abends feiern gehen?",
    "Welche Restaurants empfehlt ihr für Fisch?",
    "Was ist Maxis Goldene Regel?",
  ];

  async function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages,
        }),
      });

      const data = await response.json();
      const reply = data.content?.map(b => b.text || "").join("") || "Fehler beim Laden.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Verbindungsfehler. Bitte nochmal versuchen." }]);
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a1628 0%, #0d2444 50%, #0a1628 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        width: "100%",
        maxWidth: 680,
        padding: "28px 24px 0",
        boxSizing: "border-box",
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,200,80,0.25)",
          borderRadius: 20,
          padding: "22px 28px",
          marginBottom: 16,
          backdropFilter: "blur(10px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontSize: 36 }}>🌴</div>
            <div>
              <div style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#f5d87a",
                letterSpacing: "0.02em",
              }}>Gran Canaria 2026</div>
              <div style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
              }}>6.–13. APRIL · MASPALOMAS · 5 JUNGS</div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {messages.length === 0 && (
          <div style={{ marginBottom: 12 }}>
            <div style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 10,
              fontFamily: "monospace",
            }}>Beispiel-Fragen</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  style={{
                    background: "rgba(245, 216, 122, 0.08)",
                    border: "1px solid rgba(245, 216, 122, 0.2)",
                    borderRadius: 20,
                    padding: "7px 14px",
                    fontSize: 12,
                    color: "rgba(245,216,122,0.8)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = "rgba(245,216,122,0.15)";
                    e.target.style.borderColor = "rgba(245,216,122,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = "rgba(245,216,122,0.08)";
                    e.target.style.borderColor = "rgba(245,216,122,0.2)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat */}
      <div style={{
        width: "100%",
        maxWidth: 680,
        flex: 1,
        padding: "8px 24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: messages.length === 0 ? 80 : "auto",
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: m.role === "user" ? "flex-end" : "flex-start",
          }}>
            {m.role === "assistant" && (
              <div style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f5d87a, #e8a020)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                flexShrink: 0,
                marginRight: 10,
                marginTop: 4,
              }}>🌴</div>
            )}
            <div style={{
              maxWidth: "80%",
              padding: "12px 16px",
              borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: m.role === "user"
                ? "linear-gradient(135deg, #f5d87a, #e8a020)"
                : "rgba(255,255,255,0.07)",
              border: m.role === "user" ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: m.role === "user" ? "#0a1628" : "rgba(255,255,255,0.9)",
              fontSize: 14.5,
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              fontFamily: m.role === "user" ? "inherit" : "'Georgia', serif",
              fontWeight: m.role === "user" ? "600" : "normal",
            }}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "linear-gradient(135deg, #f5d87a, #e8a020)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
            }}>🌴</div>
            <div style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "18px 18px 18px 4px",
              padding: "12px 20px",
              display: "flex", gap: 6, alignItems: "center",
            }}>
              {[0, 1, 2].map(j => (
                <div key={j} style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#f5d87a",
                  animation: "pulse 1.2s ease-in-out infinite",
                  animationDelay: `${j * 0.2}s`,
                  opacity: 0.6,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        width: "100%",
        maxWidth: 680,
        padding: "12px 24px 28px",
        boxSizing: "border-box",
        position: "sticky",
        bottom: 0,
        background: "linear-gradient(to top, #0a1628 60%, transparent)",
      }}>
        <div style={{
          display: "flex",
          gap: 10,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(245,216,122,0.25)",
          borderRadius: 50,
          padding: "8px 8px 8px 20px",
          backdropFilter: "blur(10px)",
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Frag mich zur Reise..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "rgba(255,255,255,0.9)",
              fontSize: 15,
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              width: 40, height: 40,
              borderRadius: "50%",
              background: input.trim() && !loading
                ? "linear-gradient(135deg, #f5d87a, #e8a020)"
                : "rgba(255,255,255,0.1)",
              border: "none",
              cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >
            ↑
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
