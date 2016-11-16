# Installer l'application

## Forker une version locale du projet m1m-clients

* Allez sur GitHub et connectez-vous
* Allez sur la page du projet :  `https://github.com/AlexDmr/m1m-clients`
* Cliquez sur le bouton "Fork" en haut à droite de la page
* Allez sur la page du _fork_ du projet dans votre compte GitHub `https://github.com/VOTRE_COMPTE/m1m-clients`
* Cliquez sur "Clone or download" et copiez l'adresse _https_ du projet
* Ouvrez le Terminal ou Shell
* Déplacez-vous dans le dossier dans lequel vous souhaitez installer le programme avec
```
cd /chemin/du/dossier/
```
* Clonez votre _fork_ de `m1m-clients` en écruvant la commande `git clone` et en collant ensuite l'adresse du _fork_ que vous avez copiée
```
git clone https://github.com/VOTRE_COMPTE/m1m-clients.git
```

## Installer le projet

* Installez Node : https://nodejs.org/en/
* Une fois Node installé, déplacez-vous dans le dossier `m1m-clients` et installez les dépendances
```
cd /chemin/du/dossier/m1m-clients
npm install
```
* Sur Mac lancez la commande en sudo
```
sudo npm install
```
* Puis déplacez-vous dans le dossier Angular_2_x et installez les dépendances de l'application Angular (avec `sudo` avant `npm install` pour les Macs)
```
cd /chemin/du/dossier/m1m-clients/Angular_2_x
npm install
```
* Installez Gulp avec (sur Mac ajoutez `sudo` avant la commande)
```
npm install -g gulp
```
* Puis complilez le tout avec Gulp (en restant dans le dossier `Angular_2_x`) avec la commande
```
gulp
```

## Lancer le client

* Déplacez-vous dans le dossier `/chemin/du/dossier/m1m-clients/`
```
cd ..
```
* Lancez le serveur node `miniServerHTTP` avec :
```
node miniServerHTTP.js
```
* Ouvrez le navigateur et rendez-vous à l'adresse `http://localhost:8080`

## Connecter le client au serveur TactHAB

* Dans la page d'accueil, entrez l'adresse IP du serveur (par exemple : `http://192.168.20.22:8888`)
* Puis cliquez sur Angular 2 pour accéder à l'application
