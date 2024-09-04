# Chatbot avec l'API OpenAI

Ce projet est un exemple simple d'implémentation d'un chatbot en utilisant l'API OpenAI et le bundler ViteJS pour illustrer [un tutoriel ici](https://robinmoretti.eu/comment-creer-un-chatbot-avec-lapi-openai-non-securise-pour-la-production-part-1/). Il permet d'envoyer des messages à l'API et de recevoir des réponses en temps réel via une interface web.

> ⚠️ Important : Ce projet n'est pas sécurisé pour une mise en production. Il expose la clé API OpenAI dans le frontend, ce qui peut représenter un risque de sécurité. Utilisez-le uniquement à des fins d'apprentissage ou en local.

## Fonctionnalités

Interaction avec le modèle GPT d'OpenAI via des requêtes en streaming.
Interface simple avec un champ de texte pour envoyer des messages.
Affichage progressif des réponses générées.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :
- Node.js

## Installation
Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/chatbot-openai.git
cd chatbot-openai
```

###  Installez les dépendances :

```bash
npm install
```

Créez un compte sur OpenAI et récupérez votre clé API dans le tableau de bord.

Ouvrez le fichier main.js et remplacez la ligne suivante par votre propre clé API :

```javascript

    const client = new OpenAI({
        apiKey: "votre-api-key-ici", // Remplacez par votre clé API
        dangerouslyAllowBrowser: true
    });
```

### .env
Dupliquez le fichier `.env.exemple`
renomez le `.env` et rajoutez à l'interieur votre api key openai.

### Démarrer le projet

Une fois l'installation terminée, lancez le serveur de développement avec la commande suivante :

```bash
npm run dev
```

Cela démarrera votre projet et ouvrira une page web à l'adresse http://localhost:5173 où vous pourrez interagir avec le chatbot.

## Avertissement sur la sécurité
Ce projet expose la clé API OpenAI dans le frontend, ce qui le rend vulnérable à des abus si utilisé en production.

Pour une utilisation en production, il est fortement recommandé de gérer les requêtes vers l'API OpenAI côté serveur afin de garder la clé API privée.

## Ressources supplémentaires

- [Documentation OpenAI API](https://beta.openai.com/docs/)
- [Documentation ViteJS](https://vitejs.dev/) 