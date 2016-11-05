$(document).ready(function() {
  $('tr').on('click',function(){
    // LIGNE SÉLECTIONNÉE
    // on enlève la classe selected à la ligne sélectionnée
    $('.selected').removeClass('selected');
    // on ajoute la class .selected à la ligne cliquée<tr>
    $(this).addClass('selected');

    // ICÔNE PLAY
    // on enlève l'icône volume à toutes les icônes span du tableau pour les remplacer par l'icône play (par défaut)
    // + d'infos sur les glyphicons : http://getbootstrap.com/components/#glyphicons
    $('table span').removeClass('glyphicon-volume-up').addClass('glyphicon-play');
    // enfin on change l'icône play par l'icône volume-up
    $('span',this).removeClass('glyphicon-play').addClass('glyphicon-volume-up');
  });
});
