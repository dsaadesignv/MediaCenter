# Briques de développement



- [I/ Briques CSS](#i-briques-css)
	- [rounded-div](#rounded-div)
	- [keyframes-div](#keyframes-div)
	- [bottom-div](#bottom-div)
- [II/ Briques Angular](#ii-briques-angular)
	- [1. Événements](#1-vnements)
	- [2. Effets](#2-effets)
		- [Exemple 1](#exemple-1)
		- [Exemple 2](#exemple-2)
	- [3. Briques spécifiques](#3-briques-spcifiques)
		- [3.1 _Carousel_ Bootstrap](#31-carousel-bootstrap)
		- [3.2 _Breadcrumb_ (fil d'Ariane)](#32-breadcrumb-fil-dariane)
		- [3.3 Objet `currentMedia`](#33-objet-currentmedia)


## I/ Briques CSS
Ce dossier contient une série d'exemples CSS et jQuery :
### rounded-div
Utilisation d'une mixin Sass pour simplifier la création de l'élément circulaire, et animation au survol
### keyframes-div
Enchaînement d'animations CSS
### bottom-div
Animation au chargement de la page, ou à l'apparition de l'élément (exemple : nouvau renderer)

---
## II/ Briques Angular
### 1. Événements
Les événements et leurs effets se déclarent directement dans les templates, comme attribut de balise HTML. Exemple :
```html
<!-- Un swipeLeft déclnch la fonction Log() -->
<tr (swipeleft)="Log('swipeleft')">Ligne</tr>
```
Dans ce projet, nous utiliserons ces événements :
* `(tap)`
* `(press)`
* `(swipeLeft)`
* `(swipeRight)`
* `(click)`

L'équivalent jQuery est :
```js
$('selecteur').on('evenement',function(){
	doSomething();
})
```

### 2. Effets
Les effets sont essentiellement des modifications de classes. Les animations et transitions sont toutes déclarées en CSS. Nous utiliserons l'API classList et ses méthodes :
* `add('nomClasse')`
* `remove('nomClasse')`
* `toggle('nomClasse')`

#### Exemple 1

Côté HTML
```html
<tr (tap)="idBalise.classList.toggle('nomClasse')" #idBalise>Ligne</tr>
<!-- Au tap sur la ligne <tr> nommée par l'ID #idBalise, ajoute au enlève la classe nomClasse -->
```

Côté (S)CSS
```scss
//animation
@keyframes selection{
  from:{padding:0}
  to:{padding:10px 0}
}

//classe
.nomClasse{
  animation-name: selection;
  animation-duration: .3s;
}
```

L'équivalent jQuery est :
```js
$('#idBalise').on('tap',function(){
	$(this).toggleClass('nomClasse');
})
```

#### Exemple 2

Exemple vu en cours (slide depuis le bas au tap) :

Côté HTML (`fichier m1m-multimedia-manager.html`)
```html
<!--
1. Ajout d'une section avec ID #mediaRenderers
2. Ajout de l'événement (tap) et de la méthode toggle('nomClasse')
-->
<section class="renderers" #renderers>
  <h2 (tap)="renderers.classList.toggle('slideTop')">Media Renderers</h2>
  selected: {{getCurrentMediaRendererName()}}
  <m1m-media-renderer *ngFor="let renderer of mediaRenderers"
                      [nf]="renderer"
                      (tap)="selectMediaRenderer(renderer)"
                      [class.selected] = "currentRenderer === renderer"
                      >
  </m1m-media-renderer>
</section>

```

Côté (S)CSS
```scss
.renderers{
  position: absolute;
  background-color: #DDD;
  width:100vw;
  height:100vh;
  top: 90vh;
  transition: top .5s;
    h2{
    cursor: pointer;
    &:hover{
    color: #666;
    }
  }
}
.slideTop{
  top:50vh;
}
```


### 3. Briques spécifiques
#### 3.1 _Carousel_ Bootstrap
Puisque Bootstrap est chargé au démarrage, nous avons accès à ses composants Javascript : http://getbootstrap.com/javascript

Le _carousel_ utilise des classes particulières du fichier `bootstrap.min.css`. Ces classes qui peuvent être personnalisées dans votre fichier .scss principal.

Structure du _carousel_ (3 slides) :
```html
<div id="nom-carousel" class="carousel slide" data-ride="carousel">
  <!-- Indicateurs (pastilles) -->
  <ol class="carousel-indicators">
    <!-- Pastille 1 -->
    <li data-target="#nom-carousel" data-slide-to="0" class="active"></li>
    <!-- Pastille 2 -->
    <li data-target="#nom-carousel" data-slide-to="1"></li>
    <!-- Pastille 3 -->
    <li data-target="#nom-carousel" data-slide-to="2"></li>
  </ol>

  <!-- Toutes les slides -->
  <div class="carousel-inner" role="listbox">
    <!-- Slide 1  (la première slide a la classe active en plus) -->
    <div class="item active">
      Texte ou img
      <div class="carousel-caption">
        légende (optionnelle)
      </div>
    </div>
    <!-- Slide 2 -->
    <div class="item">
      Texte ou img
      <div class="carousel-caption">
        légende (optionnelle)
      </div>
    </div>
    <!-- Slide 3 -->
    <div class="item">
      Texte ou img
      <div class="carousel-caption">
        légende (optionnelle)
      </div>
    </div>
  </div>

  <!-- Contrôles (flèches gauche/droite) -->
  <!-- Gauche -->
  <a class="left carousel-control" href="#nom-carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <!-- Droite -->
  <a class="right carousel-control" href="#nom-carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

Dans l'application, nous (Alex) avons ajouté la prise en charge de swipeLeft et swipeRight. Voici un exemple permettant de faire un _carousel_ des serveurs UPnP. Dans le fichier `m1m-media-browser.html` :
```html
<!-- le bloc ci-dessous est affiché autant de fois qu'il y a de serveurs -->
<div id="carousel-servers"
     class="carousel slide"
     data-ride="carousel"
     (swipeleft) ="right.click()"
     (swiperight)=" left.click()"
    >
    <!-- Indicateurs -->
    <ol class="carousel-indicators">
        <li *ngFor="let server of devices; let first = first; let i = index" data-target="#carousel-servers" data-slide-to="{i}" [ngClass]="{ active: first}"></li>
    </ol>

    <!-- Slides -->
    <div class="carousel-inner" role="listbox">
      <div *ngFor="let server of devices; let first = first" (click)="browseMediaServer(server)"
      class="server item" [ngClass]="{ active: first}">
          {{server.name }}
      </div>
    </div>

    <!-- Contrôles -->
    <a #left class="left carousel-control" href="#carousel-servers" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a #right class="right carousel-control" href="#carousel-servers" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

#### 3.2 _Breadcrumb_ (fil d'Ariane)
Le fil d'Ariane de l'application a évolué pour être plus adapté à un affichage mobile. Celui-ci se trouve dans le template `m1m-media-browser.html`. Il affiche le nom du dossier parcouru et une flèche de retour vers le dossier parent.

Côté template HTML :
```html
<header>
		<span class="up" [class.active]="breadcrumb.length>0" (click)="browseParent()">
			◀	<!--  flèche de retour -->
		</span>
		 <span>{{getCurrentItemName()}}</span> <!-- nom du dossier courant -->
</header>
```

#### 3.3 Objet `currentMedia`
Quand un média est envoyé sur un lecteur, nous pouvons récupérer un certain nombre de métadonnées. Leur richesse dépend du serveur qui le met à disposition (par exemple Plex envoie les jaquettes, mais Kodi ne le fait pas). Voici un objet type en JSON :
```json
{
  "serverId": "93edaea0-8b4b-252f-1e07-3df52eafd657",
  "date": "2005-01-01",
  "title": "Data: Microhelix",
  "icon": "http://192.168.0.46:32469/proxy/7a1d9719b8157e8cce35/icon.jpg",
  "mediaId": "159a0313dfe20ac5c297",
  "creator": "Ryoji Ikeda",
  "actors": [],
  "genres": [
    "Unknown"
  ],
  "albumarturi": "http://192.168.0.46:32469/proxy/88c79838d9a78cc485ce/albumart.jpg",
  "description": "Data: Microhelix",
  "longdescription": "",
  "ressource": "http://192.168.0.46:32469/object/159a0313dfe20ac5c297/file.mp3",
  "duration": "0:03:12.000",
  "size": 0,
  "resolution": "",
  "bitrate": 24000,
  "nrAudioChannels": 2,
  "protocolInfo": "http-get:*:audio/mpeg:DLNA.ORG_PN=MP3;DLNA.ORG_OP=01;DLNA.ORG_CI=0;DLNA.ORG_FLAGS=01500000000000000000000000000000",
  "classe": "object.item.audioItem.musicTrack"
}

```

Ces informations sont accessibles dans le template `m1m-media-renderer.html` dans le bloc suivant :
```html
<section *ngIf="currentMedia">
		Title:{{currentMedia.title}} | Creator:{{currentMedia.creator}} | Duration: {{currentMedia.duration}}<br />
		<img src="{{ currentMedia.icon }}" style="max-width:100px" />
</section>
```
