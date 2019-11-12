$(function(){
  //détermine les regex dont on a besoin, ici les lettres pour les noms et les chiffres pour la date de naissance.
  const regexName = /^[a-zA-ZÀ-ÿ’ -]+$/;
  const regexNumber = /^[0-9]{2}[\/\-][0-9]{2}[\/\-][0-9]{4}$/;
  //fonction de l'input lastName
  $('#lastName').blur(function(){
    //valeur de lastName
    let lastName = $(this).val();
    //test de la regex et on y ajoute les conditions if...else
    if (regexName.test(lastName)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre nom');
      //on rend le champs vide, s'il n'est pas correctement rempli
      $(this).val('');
    }
  });
  $('#firstName').blur(function(){
    let firstName = $(this).val();
    if (regexName.test(firstName)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre prénom');
      $(this).val('');
    }
  });
  $('#birthDate').blur(function(){
    let birthDate = $(this).val();
    if (regexNumber.test(birthDate)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre date de naissance');
      $(this).val('');
    }
  });
  $('#placeOfBirth').blur(function(){
    let placeOfBirth = $(this).val();
    if (regexName.test(placeOfBirth)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre lieu de naissance');
      $(this).val('');
    }
  });
  $('#job').blur(function(){
    let job = $(this).val();
    if (regexName.test(job)){
      $(this).css('border','2px solid green');
    } else {
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre emploi');
      $(this).val('');
    }
  });
  $('#company').blur(function(){
    let company = $(this).val();
    if (regexName.test(company)){
      $(this).css('border','2px solid green');
    } else {
      $(this).css('border','2px solid red');
      alert('Veuillez saisir votre employeur');
      $(this).val('');
    }
  });
  //au clique sur le bouton Valider
  $('#validate').click(function(){
    //si les inputs sont correctement remplis, on prend les valeurs de ces derniers pour les faire apparaître sur une boite de dialogue alert().
    if (($('#lastname').val()!= '') && ($('#firstName').val()!='') && ($('#birthDate').val()!='') && ($('#placeOfBirth').val()!='') && ($('#job').val()!='') && ($('#company').val()!='')){
      alert($('#lastName').val() + ' ' + $('#firstName').val() +  ', né(e) le ' + $('#birthDate').val() +  ' à ' + $('#placeOfBirth').val() + ', actuellement ' + $('#job').val() + ' à ' + $('#company').val());
    }  else{
      alert('Merci de renseigner tous les champs demandés');
    }
  });
});
//VOIR AVEC AUDREY POUR UN INPUT DATE ET COMMENT L'INTÉGRER AU JQUERY + LUI DDER CE QUE VEUT DIRE .VAL()!='' + VOIR LA REGEXNUMBER.
