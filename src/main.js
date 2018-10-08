import { compareCard, addSelection, gameStatus, clearCard } from './memory';
import './styles.css';


$(document).ready(function() {
  $('.cell').click(function() {
    $(this).addClass("mouseSelected")
    if (gameStatus() === 1) {
      addSelection($(this).attr('id'));
    } else if (gameStatus() === 2) {
      addSelection($(this).attr('id'));
      if (compareCard()) {
        $('.endgame').text("they match");       
      }
      else {
        $('.endgame').text("no match");
      }
      // $("td").each(function(element){
      //   $('.endgame').append($(element).text());
      //   if ($(element).attr('mouseSelected')) {
      //     $(element).removeClass('glow');
      //   }
      // });
      clearCard();    
    }


      
  });
});