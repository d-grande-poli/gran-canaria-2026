# Gran Canaria 2026 🌴

Reise-Assistent App für Gran Canaria, 6.–13. April 2026.

## Deployment auf Vercel

### Einmalig einrichten:
1. GitHub Account erstellen: github.com
2. Vercel Account erstellen: vercel.com (mit GitHub einloggen)

### Projekt hochladen:
1. Neues Repository auf GitHub erstellen (Name: `gran-canaria-2026`)
2. Alle Dateien dieses Ordners hochladen
3. Auf Vercel: "Add New Project" → GitHub Repo auswählen
4. Environment Variable hinzufügen:
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: dein Anthropic API Key (platform.anthropic.com)
5. Deploy klicken → fertig!

### Inhalt aktualisieren:
1. App.jsx anpassen (TRAVEL_DATA Block)
2. Datei auf GitHub ersetzen
3. Vercel deployed automatisch neu (ca. 1 Min.)
