<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="recapinscription.css">
    <title>Récapitulatif inscription</title>
</head>

<header>
<div class="cursor">

</div>


<nav>
    <h2>Portfolio Mohamed Ziani </h1>
        <ul class="nav-link">
            <li ><button id ="acceuil">Accueil</button></li>
            <li ><button id="cv">Cv</button></li>
            <li><button id="vid">Video</button></li>
            <li><button id="butonco">Conexion</button></li>

        
        </ul>
    
</nav>
</header>
<body>
    

   <main>
            <h1>Recapitulation inscription</h1>
                <?php 

                
/*$nom = $_GET["nom"];
$prenom = $_GET["prenom"];
*/


try{
    $user = 'root';
    $pass = '';
    $dbh = new PDO('mysql:host=localhost;dbname=registrename',$user , $pass);
    print "Bdd connecté";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    
    $requete = 'SELECT * from user ';
    
        //$rowresult =$dbh->query($requete2);
        //print "id max". $rowresult;
    
    
    foreach($dbh->query($requete) as $row){
        afficherinfo($row);
    
    }
    
    
    }
    catch (PDOException $e){
        print "Erreur !: ". $e->getMessage() . "<br>";
    }
    
    
    function afficherinfo($row){
     
        //for($i = 0; $row['$i'] <= $rowresult['id']; $i++ 
        echo "nom : " . $row['nom'];
        echo "<br>";
        echo "prenom : " . $row['prenom'];
        echo "<br>";
       
    }
    
                ?>
            
    </main>
    



<script src="index.js"></script>
</body>
</html>