$(function(){
  $('#result').click(function(){
    //récuperation des notes et conversion en nombres décimaux
    // Number = +$
    let geographyNote = Number($('#geographyNote').val());
    let historyNote = +$('#historyNote').val();
    let mathematicalNote = +$('#mathematicalNote').val();
    let artsNote = +$('#artsNote').val();
    let englishNote = +$('#englishNote').val();

    //on test la regex des notes
    const regexNote = /^(1?\d|20)(\.\d)?$/;
    //regexNote.test n'est jamais entre ();
    if (regexNote.test(geographyNote) && regexNote.test(historyNote) && regexNote.test(mathematicalNote) && regexNote.test(artsNote) && regexNote.test(englishNote)){
      //toFixed() permet de formater un nombre en notation à point-fixe, par exemple 2 chiffres après la virgule
      let average = ((geographyNote + historyNote + mathematicalNote + artsNote + englishNote)/5).toFixed(2);
      //on calcule toutes les notes pour les diviser afin d'obtenir la moyenne
      if ((average >= 0) && (average < 10)){
        $('.average').html('La moyenne est de '+average+',\nC\'est en dessous de la moyenne');
      } else if ((average >= 10) && (average < 13)) {
        $('.average').html('La moyenne est de '+average+',\nC\'est moyen');
      } else if ((average >= 13) && (average < 16)) {
        $('.average').html('La moyenne est de '+average+',\nC\'est bien');
      } else if ((average >= 16) && (average < 20)) {
        $('.average').html('La moyenne est de '+average+',\nC\'est très bien');
      } else if (average == 20) {
        $('.average').html('La moyenne est de '+average+',\nC\'est excellent');
      }
    } else{
      //contourne la regex si l'utilisateur rentre des lettres
      alert('Merci de bien vouloir rentrer des nombres de 0 à 20');
    }
  });
});
