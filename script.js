let datumNarodenia = document.getElementById("date");

//aktualny datum
let today = moment().startOf("day");

function narodeniny(){

    let datumNarodenin = datumNarodenia.value;
    let birthdayDate = moment(datumNarodenin, "YYYY-MM-DD")

    //vypocitanie poctu dni 
    let days = birthdayDate.diff(today, "days"); //dif pocita rozdiel medzi 

    console.log("zostáva tento počet dní do narodenín: " +days);

    //nacitanie hodnoty z document
    //nacitanie datumu narodenia do funkcie date

    //rozdelenie datumu narodenia do samostatnych slov
    let oddelenieSlov = datumNarodenin.split("-");
    let rok = oddelenieSlov[0];
    let mesiac = oddelenieSlov[1];
    let den = oddelenieSlov[2];

    //vypisanie rocneho obdobia podla vysledku z premenej mesiac
    switch(parseInt(mesiac)){
        case 12:
        case 1:
        case 2:
            console.log("Zima");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Jar");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Leto");
            break;
        case 9:
        case 10:
        case 11:
            console.log("jeseň");
            break;
    };
}