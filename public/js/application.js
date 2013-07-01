$(document).ready(function() {
    /*
  jQuery Blink
  Author: WonderGroup, Jordan Thomas
  URL: http://labs.wondergroup.com/demos/mini-ui/index.html
  License: MIT (http://en.wikipedia.org/wiki/MIT_License)
  */
  jQuery.fn.blink = function(o) {
    var d = { speed: 200, blinks: 20, callback: null };
    var o = jQuery.extend(d, o);
    
    return this.each( function() {
      var calls = 0;
      for (i=1;i<=o.blinks;i++) {
        $(this).animate({
          opacity: 0
        }, o.speed).animate({
          opacity: 1
        }, o.speed, function() {
          calls++;
          if (calls == o.blinks && jQuery.isFunction(o.callback)) { o.callback(); }
        });
      }
    });
  };


  var updatePlayer = function(player, position) {
  $('#player'+player+'_strip td:nth-child('+(position - 1)+')').addClass('visited');
  $('td.visited').html('<img src="http://localhost:9393/images/rainbow.jpg" />');
  $('#player'+player+'_strip td:nth-child('+position+')').html('<img src="http://localhost:9393/images/nyan'+player+'.gif" />');

  };

  var gameId = $('#game_id').text();
  var catOne = $('#cat0').text();
  var catTwo = $('#cat1').text();

  var playerOnePosition = 1;
  var playerTwoPosition = 1;

  $(document).on('keyup', function(e) {
    if(playerOnePosition == 18) {
      $.post("/game/"+gameId+"/finished", {"winner": catOne}, function() {
        window.location = "/game/"+gameId+"/result"
      });
    }
    if(playerTwoPosition == 18) {
      $.post("/game/"+gameId+"/finished", {"winner": catTwo}, function() {
        window.location = "/game/"+gameId+"/result"
      });
    }
    if(e.which == 65) {
      updatePlayer(1, playerOnePosition);
      playerOnePosition++;
    }
    if(e.which == 76) {
      updatePlayer(2, playerTwoPosition);
      playerTwoPosition++;
    }
  });

});
