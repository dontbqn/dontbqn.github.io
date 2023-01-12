
// Désactivation des magic_quotes_gpc
ini_set('magic_quotes_gpc', 0);

/*****************************************
*  Vérification du formulaire
*****************************************/
// Si le tableau $_POST existe alors le formulaire a été envoyé
if(!empty($_POST))
{
  if(empty($_POST['nom'])) // elseif(empty($_POST['civilite']))
  {
    $message = 'Veuillez indiquer votre nom svp !';
  }
    elseif(empty($_POST['prenom']))
  {
    $message = 'Veuillez indiquer votre prénom svp !';
  }
    elseif(empty($_POST['emailAddress']))
  {
    $message = 'Veuillez indiquer votre adresse mail svp !';
  }
    elseif(empty($_POST['raisonMsg']))
  {
    $message = 'Veuillez indiquer votre adresse mail svp !';
  }
    elseif(empty($_POST['message']))
  {
    $message = 'Veuillez indiquer votre adresse mail svp !';
  }
    else
  {
    // Message conforme, envoyé
    $message = 'Votre message a été envoyé !';
  }
}
else{
  header('Location:ttt.php');
  die();
}

