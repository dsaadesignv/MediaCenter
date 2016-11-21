# Briques de développement

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Briques de développement](#briques-de-dveloppement)
	- [Briques CSS](#briques-css)
	- [Briques Angular](#briques-angular)
		- [Événements](#vnements)
		- [Effets](#effets)
		- [_Carousel_ Bootstrap](#carousel-bootstrap)

<!-- /TOC -->

## Briques CSS
Ce dossier contient une série d'exemples CSS et jQuery :
* **rounded-div** : utilisation d'une mixin Sass pour simplifier la création de l'élément circulaire, et animation au survol
* **keyframes-div** : enchaînement d'animations CSS
* **bottom-div** : animation au chargement de la page, ou à l'apparition de l'élément (exemple : nouvau renderer)

## Briques Angular
### Événements
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

### Effets
Les effets sont essentiellement des modifications de classes. Les animations et transitions sont toutes déclarées en CSS. Nous utiliserons l'API classList et ses méthodes :
* `add('nomClasse')`
* `remove('nomClasse')`
* `toggle('nomClasse')`

Exemple :

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
}
.slideTop{
  top:50vh;
}
```


### _Carousel_ Bootstrap
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
