var age=10;
if(age>=65){
    console.log("Vous tirez vos revenus de votre pension");
}else if(age<65 && age>=18){
    console.log("Chaque mois, vous percevez un salaire");
}else if(age<18){
    console.group(" Vous recevez une allocation ");

}else{
    console.log("La valeur de la variable age n'est pas numérique");
}

