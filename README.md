# Installation 

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e203041651884017864eb02ef849ae76)](https://app.codacy.com/app/Vanerac/Rainbow-Roles-Discord-Bot?utm_source=github.com&utm_medium=referral&utm_content=Vanerac/Rainbow-Roles-Discord-Bot&utm_campaign=Badge_Grade_Dashboard)
[![Greenkeeper badge](https://badges.greenkeeper.io/Vanerac/Rainbow-Roles-Discord-Bot.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/Vanerac/Rainbow-Roles-Discord-Bot.svg?branch=master)](https://travis-ci.com/Vanerac/Rainbow-Roles-Discord-Bot)

## Necessaire:

* [Node](https://nodejs.org/en/download/) & NPM (S'installe automatiquement avec node, si ce n'est pas le cas , vous pouvez l'installer [ici](https://www.npmjs.com/get-npm))

## Installation des ressources:

1. Ouvrir un terminal/CMD et acceder au dossier de projet
2. Entrer la commande suivante : `npm i`
3. Renommer le fichier `config_example.json` en `config.json`
4. Ajouter le **token** de votre bot dans le fichier `config.json`
  * [Creer un utilisateur bot, et recuperer son token](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

# Demarrage

* Sur Windows: Double-click sur **start.bat**
* Sur Linux/Mac: Entrer dans le terminal: `node index.js`

# Commandes

* roles <add, remove, list> <@role>

  Cette commande permet d'ajouter, retirer et lister les roles actif

* delay <temps(ex: 3s, 1m, 2h)>

  Cette commande permet de definir l'intervalle a laquel le changement de couleur se fera

* prefix <prefix voulu>

  Cette Commande permet de changer le prefix du bot
