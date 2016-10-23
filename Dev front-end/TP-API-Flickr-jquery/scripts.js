$(document).ready(function(){ // quand la page est entièrement chargée
  var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'; // adresse API passée en variable
  $('#valider').on('click',function(){ // quand on click sur le button avec l'ID "Valider"
    var tag = $('#recherche').val(); // on récupère le contenu du champ de recherche
    $.getJSON(flickrAPI,{ // on se connecte à l'API avec la fonction jQUery getJSON
      tags: tag, // on passe la valeur du champ de recherche en paramètre
      format: 'json' // et on demande à ce que les données renvoyées soient structurées en JSON
    }).done(function(data){ // quand c'est fait
      $('#images').empty(); // on enlève les images de la recherche précédente
      $.each( data.items, function( i, item ) { // pour chacun des résultats "items" du fichier (il y en a 20 par défaut)
        $('<img src="'+item.media.m+'"/>') // on crée un élément <img> avec l'url de l'image jpg récupérée dans le JSON
          .appendTo($('#images')) // on l'ajoute à l'élément #images
          .on('click',function(){ // et on peut lui associer une fonction interactive
            console.log('click'); // par exmple on teste du click dans la console
          })
        })
      })
    return false; // évite que le click sur le button ne recharge la page html
  })
})
