# Comment ça marche

## Ton flux de travail au quotidien

Une fois la mise en place terminée (voir plus bas), voici tout ce que tu auras à faire pour mettre le site à jour :

1. Ouvre le fichier markdown concerné :
   - `src/content/profil/moi.md` → ton accroche, ta bio, tes compétences, tes langues, tes liens de contact
   - `src/content/experiences/*.md` → un fichier par employeur/mandat (crée-en un nouveau en copiant un existant pour un nouveau mandat)
   - `src/content/temoignages/*.md` → un fichier par témoignage
2. Modifie le texte.
3. Sauvegarde et envoie ("commit + push" sur GitHub, ou juste sauvegarde si tu édites directement dans l'interface web de GitHub).
4. Le site se republie tout seul en 1 à 2 minutes. Rien d'autre à faire.

Pour retirer une expérience ou un témoignage du site sans le supprimer, mets `publie: false` dans son en-tête (entre les `---`).
Pour changer l'ordre d'affichage, change le chiffre `ordre:` (plus petit = affiché en premier).

## Ce qui a changé par rapport à l'ancien site

- Contenu repris tel quel (ton CV, tes mandats, tes compétences, tes témoignages), juste réorganisé et un peu resserré dans les formulations
- Nouveau design : plus de photo générique floutée, une identité visuelle propre (typographie affirmée, palette chaleureuse, mise en page en une page avec navigation par ancre)
- Un lien "Télécharger le CV complet" pointe vers `/cv-priscilla-dambreville.pdf` — dépose ton PDF de CV dans le dossier `public/` sous ce nom exact pour que le bouton fonctionne (sinon retire le champ `cvUrl` dans `moi.md`)
- Les liens LinkedIn et X dans `moi.md` sont des placeholders — remplace-les par tes vraies URLs

## Mise en place (à faire une seule fois)

### 1. Créer un compte GitHub (gratuit)

GitHub héberge le code de ton site et garde un historique de chaque modification. Va sur github.com, crée un compte, crée un nouveau dépôt (repository) — par exemple `site-cv-priscilla`.

### 2. Envoyer ce dossier sur GitHub

Depuis ce dossier, dans un terminal :

```
git init
git add .
git commit -m "Nouveau site"
git branch -M main
git remote add origin https://github.com/TON-NOM-UTILISATEUR/site-cv-priscilla.git
git push -u origin main
```

(Si tu ne veux pas toucher au terminal, GitHub Desktop — une appli avec interface graphique — fait la même chose par glisser-déposer.)

### 3. Créer un compte Netlify (gratuit) et connecter GitHub

Va sur netlify.com, connecte-toi avec ton compte GitHub, choisis "Add new site" → "Import an existing project" → sélectionne ton dépôt.

Netlify détecte automatiquement Astro. Réglages par défaut à confirmer :

- Build command : `npm run build`
- Publish directory : `dist`

Clique "Deploy". Le site sera en ligne en quelques minutes.

### 4. Reconnecter ton domaine formationdambp.com

Dans Netlify, sous "Domain settings", ajoute `formationdambp.com` comme domaine personnalisé, puis mets à jour les DNS chez ton registraire actuel selon les instructions affichées par Netlify (elles varient selon où le domaine est enregistré — dis-moi où si tu veux que je t'accompagne à cette étape).

### 5. C'est fait — l'automatisation est déjà active

À partir de ce moment, Netlify surveille ton dépôt GitHub. Chaque modification de fichier markdown envoyée sur GitHub republie le site automatiquement.

## Éditer sans jamais toucher à un terminal

Tu peux éditer les fichiers `.md` directement dans l'interface web de GitHub (bouton crayon sur chaque fichier), ce qui déclenche la republication automatique, sans rien installer.

## Tester en local avant de publier (optionnel)

```
npm install
npm run dev
```

Puis ouvre `http://localhost:4321` dans ton navigateur.
