
let  bestillbillet = [];


function getbillet() {
    let valid = true;

   let film = document.getElementById("film").value;
   let antall = document.getElementById("antall").value;
   let fornavn = document.getElementById("fornavn").value;
   let etternavn = document.getElementById("etternavn").value;
   let  tlfnr = document.getElementById("tlfnr").value;
   let Epost = document.getElementById("Epost").value;

// valdering for filmer
    if(!film){
        document.getElementById("filmerror").innerText = "Vennligst velg en film";
        valid = false;
    } else {
        document.getElementById("filmerror").innerText="";
    }
    // valedering for riktig antall
    if(antall <= 0){
        document.getElementById("antallerror").innerText=" velg riktig antall";
        valid = false;
    } else {
        document.getElementById("antallerror").innerText="";
    }
    // validering av fornavnet
    if(!fornavn){
        document.getElementById("fornavnerror").innerText="skriv inn riktig navnet";
        valid = false;
    } else {
        document.getElementById("fornavnerror").innerText="";
    }
    if(!etternavn){
        document.getElementById("etternavnerror").innerText="skriv inn riktig etternavn";
        valid = false;
    } else {
        document.getElementById("etternavnerror").innerText="";
    }
    // validering av tlfnr sjekker bruker regex
    const tlf = /^[0-9]{8,12}$/;
    if(!tlf.test(tlfnr)){
        document.getElementById("tlfnrerror").innerText="skriv inn riktig telefonnr!"
        valid = false;
    } else {
        document.getElementById("tlfnrerror").innerText="";
    }
    // validerng av epost bruker regex
    const epost = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!epost.test(Epost)){
        document.getElementById("eposterror").innerText="skriv inn riktig epost";
        valid = false;
    } else{
        document.getElementById("eposterror").innerText="";
    }




if(valid){

    let billet = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        tlfnr : tlfnr,
        Epost : Epost,
    };
    bestillbillet.push(billet);
    console.log(bestillbillet);

}
    billettregister();
    nullstill();

    }
    function billettregister () {

    let ut = "<table><tr>" +
        "<th> Film</th><th> Antall</th><th> Fornavn</th><th> Etternavn</th><th> Telefonnr</th><th> Epost</th>" +
        "</tr>";

    for (let billet of bestillbillet) {
        ut += "<tr>";
        ut += "<td>" + billet.film + "</td><td>" + billet.antall + "</td><td>" + billet.fornavn
            + "</td><td>" + billet.etternavn + "</td><td>" + billet.tlfnr + "</td><td>"
            + billet.Epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("kjøpBillet").innerHTML = ut;
}

function nullstill(){

    //nullstiller inputboksene
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("tlfnr").value="";
    document.getElementById("Epost").value="";

}

function slett(){
// tommer film arrayet.
    bestillbillet = [];

    document.getElementById("kjøpBillet").innerHTML = "";
}
