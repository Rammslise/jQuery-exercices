$(function(){
  //Regex définie pour le nom, prénom, mail et numéro de téléphone.
  const regexName = /^[a-zA-ZÀ-ÿ’ -]+$/;
  const regexMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-z]{2,4}$/;
  const regexNumber = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
  //Utilisation fonction blur() pour entourer l'input d'une bordure de couleur, lorque qu'il y a perte de focus.
  $('#lastName').blur(function(){
    //.val() permet de récupérer les valeurs des formulaires tels que input, select et textarea.
    //$(this) représente l'objet courant ici lastName.
    let lastName = $(this).val();
    //on test la regex
    if (regexName.test(lastName)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez entrer votre nom');
      //permet de vider le champ s'il y a une erreur de saisie
      $(this).val('');
    }
  });
  $('#firstName').blur(function(){
    let firstName = $(this).val();
    if (regexName.test(firstName)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez entrer votre prénom');
      $(this).val('');
    }
  });
  $('#mailAdress').blur(function(){
    let mailAdress = $(this).val();
    if (regexMail.test(mailAdress)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez entrer votre mail');
      $(this).val('');
    }
  });
  $('#phoneNumber').blur(function(){
    let phoneNumber = $(this).val();
    if (regexNumber.test(phoneNumber)){
      $(this).css('border','2px solid green');
    } else{
      $(this).css('border','2px solid red');
      alert('Veuillez entre votre numéro de téléphone');
      $(this).val('');
    }
  });
});
