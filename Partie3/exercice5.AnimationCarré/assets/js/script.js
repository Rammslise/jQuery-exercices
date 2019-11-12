$(function(){
  //création du carré
  $('#square').css({'height':'100','width':'100','background-color':'black','border':'5px blue dashed'});
  //on récupère la hauteur et la largeur de la page
 let pageHeight = $(document).height();
 let pageWidth = $(document).width();
$(document).keydown(function(event){
  let squareLeft = $('#square').offset().left;
  let squareTop = $('#square').offset().top;
  let squareRight = squareLeft +100;
  let squareBottom = squareTop +100;
  //event.wich pour les touches
  //switch case est une condition
    switch (event.which){
        case 37:    // flèche de gauche
        if(squareRight > 0){
          squareLeft -=40;
          $('#square').css('margin-left', squareLeft);
        }
        else{
          $('#square').css('margin-left', pageWidth);
        }
        //sortir du case
        break;
        case 38:    // flèche du haut
        if(squareBottom > 0){
          squareTop -=40;
          $('#square').css('margin-top', squareTop);
        }
        else{
          $('#square').css('margin-top', pageHeight);
        }
        break;
        case 39:    // flèche de droite
        if(squareRight < pageWidth){
          squareLeft +=10;
          $('#square').css('margin-left', squareLeft);
        }
        else{
          $('#square').css('margin-left', 0);
        }
        break;
        case 40:    // flèche du bas
        if(squareBottom < pageHeight){
          squareTop +=10;
          $('#square').css('margin-top', squareTop);
        }
        else{
          $('#square').css('margin-top', 0);
        }
        break;
      }
    });
  });
