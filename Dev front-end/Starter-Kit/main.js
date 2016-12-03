/* jQuery */
$(document).ready(function() {
// fermeture spash
  $('#splash span').on('click',function(){
    $('#splash').addClass('fadeout');
  });

// click sur server Plex Media Server: RPI 3
  $('#listeservers ul li:first-child').on('click',function(){
    $('#listeservers').hide();
    $('#servers #plex1niv1').removeClass('hidden').show();
  });

  // click sur songs
  $('#plex1niv1 #plex1songs').on('click',function(){
    $('#plex1niv1').hide();
    $('#servers #plex1niv2').removeClass('hidden').show();
  });

  // click sur Ikeda
  $('#plex1niv2 #songikeda').on('click',function(){
    $(this).addClass('isplaying');
    $('#renderers ul li').append('<img src="ikeda.jpg"/>Data: Microhelix — Ryoji Ikeda');
  });

});
