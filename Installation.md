# Installations

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Installations](#installations)
	- [Installer l'application](#installer-lapplication)
		- [Forker le projet m1m-clients](#forker-le-projet-m1m-clients)
		- [Installer le projet](#installer-le-projet)
		- [Lancer le client](#lancer-le-client)
		- [Connecter le client au serveur TactHAB](#connecter-le-client-au-serveur-tacthab)
		- [Accéder à l'application depuis un navigateur mobile](#accder-lapplication-depuis-un-navigateur-mobile)
	- [Installer le serveur UPnP sur sa machine](#installer-le-serveur-upnp-sur-sa-machine)

<!-- /TOC -->

## Installer l'application

### Forker le projet m1m-clients

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
* Clonez votre _fork_ de `m1m-clients` en écrivant la commande `git clone` et en collant ensuite l'adresse du _fork_ que vous avez copiée
```
git clone https://github.com/VOTRE_COMPTE/m1m-clients.git
```

### Installer le projet

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

### Lancer le client

* Déplacez-vous dans le dossier `/chemin/du/dossier/m1m-clients/`
```
cd ..
```
* Lancez le serveur node `miniServerHTTP` avec :
```
node miniServerHTTP.js
```
* Ouvrez le navigateur et rendez-vous à l'adresse `http://localhost:8080`

### Connecter le client au serveur TactHAB

* Dans la page d'accueil, entrez l'adresse IP du serveur (par exemple : `http://192.168.20.22:8888`)
* Puis cliquez sur "Angular 2" pour accéder à l'application

### Accéder à l'application depuis un navigateur mobile
* Notez l'adresse IP de votre ordinateur (sur Mac : Préférences > Réseau ou `ifconfig` depuis le Terminal, sur PC depuis Shell : `ipconfig`)
* Connectez votre mobile au même réseau wifi
* Entrez l'adresse IP de l'ordinateur dans votre navigateur mobile, et ajoutez `:8080` à la fin (http://ADRESSEIP:8080)
* Le navigateur affiche la page d'accueil de l'application. Entrez l'adresse IP du serveur Docker puis cliquez sur le "Angular 2".

## Installer le serveur UPnP sur sa machine

* Installez VirtualBox https://www.virtualbox.org/
* Installez une nouvelle machine virtuelle avec Ubuntu 16.04 LTS
* Dans le menu de configuration de la machine de VirtualBox, configurez le réseau en choisissant "Accès par pont" pour le mode d’accès, et en sélectionnant le réseau par lequel vous vous connectez à internet (wifi en général).
* Lancez la machine en cliquant sur le bouton "démarrer" et suivez la procédure d'installation d'Ubuntu
* Une fois Ubuntu installé lancez le Terminal et vérifiez que node est installé
```
node --version
```
* Installez Docker : https://docs.docker.com/engine/installation/linux/ubuntulinux
* Clonez le dépôt https://github.com/AlexDmr/m1m-clients dans un dossier
* Lancez le serveur avec la commande
```
docker run -ti --net=host --volume CHEMIN:/tacthab/client/ alexd2/m1m-serveur
```
CHEMIN étant le chemin du dossier Angular_2_x (exemple : `/home/jbjoatton/Documents/m1m-clients/Angular_2_x/:/tacthab/client` etc.)
* Le serveur se lance et trace un certain nombre d'informations dans la console. Repérez l'adresse IP du serveur et notez-la. Elle se trouve à la fin de cette ligne :
```
Multicast on 239.255.255.250 192.168.0.27
```
* C'est cette adresse que vous renseignerez dans la page d'accueil du client (exemple : `192.168.0.27:8888`)
* Vous pouvez retourner dans OS X ou dans Windows, lancer le serveur node, et accéder au client (cf. ci-dessus).
