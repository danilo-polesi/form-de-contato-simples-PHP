<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

    echo "Segue abaixo as informações digitadas na página anterior". '<br><br>';
    echo "Nome digitado..: ".$_POST['txtnome']. '<br>';
    echo "Telefone..: ".$_POST['phone']. '<br>';
    echo "RG..: ".$_POST['txtRG']. '<br>';
    echo "Curso..: ".$_POST['cbocursos']. '<br>';   
    echo "Módulo..: ".$_POST['txtmodulo']. '<br>';
    echo "Salario..: ".$_POST['txtsalario']. '<br>';


?>
    
</body>
</html>