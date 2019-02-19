  var x;
var myarray = [];
var word_error = [];
var list_palabras = ["alicates", "inefable",
"cajonera", "analfabeto", "inadmisible", "cinturon",
"nuez", "agarrochar", "agarrotar", "agarrotear", "agasajar", "agatizarse",
"agaucharse", "agavillar", "agazapar", "agenciar", "agermanarse", "agigantar",
"agilitar", "agilizar", "agitanar", "agitar", "aglomerar", "aglutinar", "agobiar",
"agolar", "agolpar", "agonizar", "agorar", "agorgojarse", "agostar", "agotar", "agraciar",
"agradar", "agradecer", "agramar", "agramilar", "agrandar", "agravar", "explanar", "explayar",
"explicar", "explicitar", "explorar", "explosionar", "explotar", "expoliar", "exponer",
"exportar", "expresar", "descolocar", "descolonizacion", "descolonizar", "descoloramiento",
"descolorar", "descolorido", "descolorimiento", "descolorar", "descombrar", "descombro",
"descomedidamente", "descomedido", "descomedimiento", "descomedirse", "descomer",
"involuntariamente", "involuntariedad", "involuntario", "involutivo", "invulnerabilidad",
"invulnerable", "invalidamente", "invalido", "inyeccion", "inyectable", "inyectar", "inyector",
"inyungir", "inanime", "inedito", "inutil", "inutilmente", "ion", "ionizacion", "ionizar",
"ionosfera", "idiota", "iotizacion", "ipecacuana", "iperita", "ipil", "perca",
"percador", "percal", "percalina", "percance", "percanzar", "percatacion", "percatar",
"percebe", "percebimiento", "percepcion", "perceptibilidad", "perceptible", "perceptiblemente",
"perceptivo", "perceptor", "percha", "perchado", "perchar", "perchel", "perchelero",
"perchero", "percheron", "perchonar", "perchon", "percibir", "percibo", "perclorato", "especiazion",
"hidrolisis","oximoron","botellon"];

var palabra = Choose_word(list_palabras);
var arraypal = palabra.split("");

var contad_fall = 0;
var contad_acie = 0;


/*Funcion para seleccionar la palabra random*/
function Choose_word(list) {
    var ran_word = Math.floor((Math.random() * list.length) + 1);
    return list[ran_word-1];
}
/*Comprobamos la letra*/
function Check() {
    var acierto = false;
    var i;
    x = document.getElementById("char1").value;
    document.getElementById("char1").value = "";

    if (x.length == 1 && isNaN(x)) {
        for (i = 0; i < palabra.length; i++) {
            if(x == arraypal[i]) {
                myarray[i] = x;
                acierto = true;
            }
        }
        if (acierto == true) {
            document.getElementById("demo6").innerHTML = impr_arr(myarray);
            Ganar(myarray);
        }else{

            contad_fall = contad_fall +1;
            imag();
            word_error.push(x);
            document.getElementById("demo_fallo").innerHTML = "Letras falladas: " + word_error;
            Perder();

        }
    } else {
        alert("Recuerda: solo un caracter; no números.");

    }

}

/*Funcion que construye myaray*/
function cadena() {

    var i;
    var image = document.getElementById('myImage');
      image.src = "pic00.png";
    for (i = 0; i < palabra.length; i++) {
      myarray.push("_ ");
    }

  document.getElementById("demo6").innerHTML = impr_arr(myarray);
}
function impr_arr(arra){
    var i;
    var text = "";
    for (i = 0; i < arra.length; i++) {
    text += arra[i];
    }
return text;
}
/*Funcion para seleccionar la imagen correspondiente*/
function imag() {

    var image = document.getElementById('myImage');
    var t;
    switch (contad_fall) {
    case 0:
        image.src = "pic0.png";
        break;
    case 1:
        image.src = "pic1.png";
        break;
    case 2:
        image.src = "pic2.png";
        break;
    case 3:
        image.src = "pic3.png";
        break;
    case 4:
        image.src = "pic4.png";
        break;
    case 5:
        image.src = "pic5.png";
        break;
    case 6:
        image.src = "pic6.png";
        break;
    case 7:
        image.src = "pic7.png";
        break;
    case 8:
        image.src = "pic8.png";
        break;
    case 33:
        image.src = "pic9.png";
        break;
    default:
        image.src = "pic00.png";
    }
    return image;
}
/*Funcion para inicializar*/
function Jugar(){
    var ganar = false;
    var perder = false;
    document.getElementById("button2").style.display = 'inline-block';
    document.getElementById("button3").style.display = 'inline-block';
    document.getElementById("char1").style.display = 'inline-block';


    cadena();
    document.getElementById("text1").innerHTML = "Inserte Letra";
    document.getElementById("demo_fallo").innerHTML = " ";
}

function Ganar(marra){
    var i;
    var c = 0;
    var gana = false;
    for (i = 0; i < palabra.length; i++){
        if (marra[i] == "_ "){
            ;
        }else{
            c = c+1;
        }
    }
    if (c == palabra.length){
        var image = document.getElementById('myImage');
        image.src = "pic9.png";
        document.getElementById("button2").style.display = 'none';
        document.getElementById("char1").style.display = 'none';
        document.getElementById("demo_fallo").style.display = 'none';
        document.getElementById("text1").innerHTML = "";
        document.getElementById("res").innerHTML = "HAS GANADO";
    }else{
        ;
    }
}

function Perder(){
    if (contad_fall == 8){
        document.getElementById("demo6").innerHTML = palabra;
        document.getElementById("button2").style.display = 'none';
        document.getElementById("char1").style.display = 'none';
        document.getElementById("demo_fallo").style.display = 'none';
        document.getElementById("text1").innerHTML = "";
        document.getElementById("res").innerHTML = "HAS PERDIDO";
    }else{
        ;
    }
}
