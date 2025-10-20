# Trelol

> **Trelol** est une application inspirée de Trello, conçue pour gérer vos tâches et projets de manière efficace et intuitive.

---

## Fonctionnalités

- Gestion de tableaux, listes et cartes
- Glisser-déposer pour réorganiser rapidement les éléments
- Interface utilisateur moderne et responsive grâce à [Vue.js](https://vuejs.org/)
- Backend et logique métier en [TypeScript](https://www.typescriptlang.org/)
- Conteneurisation avec Docker pour faciliter le déploiement

## Prérequis

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optionnel, pour le déploiement)

## Installation

```bash
# Clonez le dépôt
git clone https://github.com/veverre/trelol.git
cd trelol

# Installez les dépendances
npm install
# ou
yarn install
```

## Lancement en développement

```bash
npm run dev
# ou
yarn dev
```

## Déploiement avec Docker

```bash
# Construisez et lancez les containers
docker-compose up --build
```

## Structure du projet

- `src/` : Code source principal (TypeScript & Vue)
- `public/` : Fichiers statiques
- `Dockerfile` : Configuration du conteneur Docker

## Contribuer

Les contributions sont les bienvenues !  
Pour toute suggestion, amélioration ou rapport de bug, merci d’ouvrir une [issue](https://github.com/veverre/trelol/issues) ou une pull request.

## Licence

Ce projet est sous licence MIT.  
Voir le fichier [LICENSE](LICENSE) pour plus d’informations.

---

**Contact**  
Pour toute question, contactez-moi via [GitHub](https://github.com/veverre).
