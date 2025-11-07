Projet : Créateur de Personnages D&D
Objectif

Mon projet consiste à créer un site web pour aider les joueurs de Dungeons & Dragons (D&D) à concevoir leurs personnages.
Le site affiche notamment les races et les classes, avec leurs descriptions et explications détaillées pour que les utilisateurs comprennent chaque choix.

Mon projet n’est pas encore terminé : je rencontre des difficultés pour mettre en place des blocs affichant plusieurs cartes (races/classes) sur une même ligne.

Stack Technique

Le site est conçu avec une stack moderne et modulable pour garantir une expérience utilisateur fluide et interactive.

React.js

Framework JavaScript pour construire des interfaces dynamiques et réactives.

Permet de créer des composants réutilisables pour chaque étape de la création de personnage.

Facilite la mise à jour en temps réel des fiches de personnages.

JavaScript (ES6+)

Gère la logique de l’application, les interactions utilisateur et la manipulation des données du personnage.

CSS Framework : Tailwind CSS

Pour le design et la mise en page responsive.

Classes utilitaires permettant un design personnalisé et léger, avec un contrôle fin sur chaque élément.

Installation et démarrage

git clone https://github.com/ton-username/ton-projet-dnd.git
cd ton-projet-dnd
npm install
npm start

Le site sera alors disponible sur http://localhost:3000


Architecture du projet

src/
├─ components/       # Composants réutilisables (boutons, formulaires, cartes de personnage)
├─ pages/            # Pages principales (Accueil, Création de personnage, Aperçu, etc.)
├─ services/         # Gestion des appels API et logique métier
├─ App.js            # Routeur principal et layout global
└─ index.js          # Point d’entrée de l’application

Endpoints API utilisés

Puisque le site est un créateur de personnage D&D, j’ai utilisé les endpoints suivants pour récupérer les données :

GET /api/2014/races/{index} → détails d’une race (exemple : dwarf)

GET /api/2014/classes/{index} → détails d’une classe

Ces endpoints permettent de récupérer dynamiquement les informations nécessaires pour afficher les races et classes avec leurs descriptions.
