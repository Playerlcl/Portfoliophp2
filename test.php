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
$requete2 = 'SELECT Max(id) FROM user';
    //$rowresult =$dbh->query($requete2);
    //print "id max". $rowresult;


foreach($dbh->query($requete2) as $row){
    afficherinfo($row);

}


}
catch (PDOException $e){
    print "Erreur !: ". $e->getMessage() . "<br>";
}


function afficherinfo($row){
 
    //for($i = 0; $row['$i'] <= $rowresult['id']; $i++ 
    echo "nom : " . $row['Max(id)'];
    echo "<br>";
    echo "prenom : " . $row['Max(id)'];
    echo "<br>";
   
}


?>