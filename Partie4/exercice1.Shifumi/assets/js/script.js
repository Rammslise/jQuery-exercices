$(function(){
  // on détermine les valeurs de victoires, défaites et le pourcentage de victoires
  let victoryCount = 0;
  let lostCount = 0;
  let playCounter = 0;
  //on indique qu'au clique sur le bouton shifumi, il y a une fonction
  $('#button').click(function(){
    // on ajoute un compteur de parties
    playCounter++;
    // on détermine les variables du joueur et de l'ia
    let randomNumber = Math.floor(Math.random()*3);
    //.val() prend la value dans une div
    let choiceUser = $('#gameShifumi').val();
    //on compare les 2 résultats en cas d'égalité
    if (randomNumber == choiceUser){
      alert('Égalité')
    } else if(choiceUser ==0 && randomNumber ==1){
      lostCount++;
      alert('Vous avez perdu');
    }
    else if (choiceUser ==0 && randomNumber ==2){
      victoryCount++;
      alert('Vous avez gagné');
    }
    else if (choiceUser ==1 && randomNumber ==0){
      victoryCount++;
      alert('Vous avez gagné');
    }
    else if (choiceUser ==1 && randomNumber ==2){
      lostCount++;
      alert('Vous avez perdu');
    }
    else if (choiceUser ==2 && randomNumber ==0){
      lostCount++;
      alert('Vous avez perdu');
    }
    else if (choiceUser ==2 && randomNumber ==1){
      victoryCount++;
      alert('Vous avez gagné')
    }
    //création d'une valeur pour calculer le pourcentage
    let victoryPercentage = (victoryCount*100/lostCount).toFixed(2);
    alert('Nombre de victoires : ' + victoryCount + '\nNombre de défaites : ' + lostCount + '\nPourcentage de victoires : ' + victoryPercentage + '%');
  });
});
