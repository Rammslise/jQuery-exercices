//On met une hauteur, largeur et couleur au rectangle, façon pour éviter de mettre dans css.
//$('#rectangle').height(10);
//$('#rectangle').width(30);
//$('#rectangle').css('background-color','red');
// ou $('#rectangle').ccs('background-color','red').width(30).height(10);
$(function(){
  $('#button1').click(function(){
    if ($('#rectangle').height()>100){
      $('#rectangle').height('10');
    } else{
      $('#rectangle').height('+=10');
    }
  });
  $('#button2').click(function(){
    $('#rectangle').css('background-color','green');
  });
  $('#button3').click(function(){
    $('#rectangle').css('background-color','blue');
  });
  $('#button4').click(function(){
    $('#rectangle').hide();
  });
  $('#button5').click(function(){
    $('#rectangle').show();
  });
});
