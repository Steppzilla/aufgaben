
var menü = $("div").children().eq(0);

var counter=0;

	function myFunction() {
	counter++;

	// Überschrift und Aufgabe schreiben:
	$("div").children().eq(1).children().eq(0).children().eq(0).text(aufgabenVierfelder[counter-1][0] );
	$("div").children().eq(1).children().eq(1).children().eq(0).text(aufgabenVierfelder[counter-1][1] );

	for(i=2;i<10; i++){
		var x= $("div").children().eq(2).children().eq(i-1);
		var y= $("div").children().eq(3).children().eq(i-1);
		var letter = buchstaben(i-1, "chap");

		if(aufgabenVierfelder[counter-1][i] !=undefined){
			x.show();
			x.children().eq(0).first().text(letter);
			x.children().eq(1).first().text(aufgabenVierfelder[counter-1][i]);
			y.show();
			y.children().eq(0).first().text(letter);
			for(j=0;j<10;j++){
				if(a1LöaErsteLösung[j] !=undefined){
					y.children().eq(1).children().eq(j).text(a1LöaErsteLösung[j]);
				} else {
					y.children().eq(1).children().eq(j).hide();
				}
			}
		}else{
			x.hide();
			y.hide();
		}
	}
}

//vierfelderTafelFüllen();
function vierfelderTafelFüllen(){
		var hier = $("#baumdiagramm").children();
		hier.eq(0).text(a1StringData[0]);
		hier.eq(1).text(a1StringData[1]);
		hier.eq(2).text(a1StringData[2]);
		hier.eq(3).text("insgesamt");
		hier.eq(4).text(a1StringData[3]);
		hier.eq(8).text(a1StringData[4]);
			hier.eq(12).text("insgesamt");
	 var variablenString = a1Anzahlen();
	 //mittlere Felder (gelb) im cSS ausgelagert



	 	hier.eq(5).text(variablenString[5]);
		hier.eq(6).text(variablenString[7]);
		hier.eq(9).text(variablenString[6]);
		hier.eq(10).text(variablenString[8]);

		//felder "Rechts": (grün)
		hier.eq(7).css("background-color","green");
		hier.eq(11).css("background-color","green");

		hier.eq(7).text(variablenString[3]);
		hier.eq(11).text(variablenString[4]);

		//Felder "UNTEN" (rot)
			hier.eq(13).css("background-color","red");
			hier.eq(14).css("background-color","red");

		hier.eq(13).text(variablenString[1]);
		hier.eq(14).text(variablenString[2]);


		hier.eq(15).text(variablenString[0]);


baumdiagrammFüllen();
function baumdiagrammFüllen(){
//buchstaben weiß:
$("#mySVG").children().eq(0).text(a1StringData[1]);
$("#mySVG").children().eq(6).text(a1StringData[2]);
$("#mySVG").children().eq(12).text(a1StringData[3]);
$("#mySVG").children().eq(18).text(a1StringData[4]);
$("#mySVG").children().eq(24).text(a1StringData[3]);
$("#mySVG").children().eq(30).text(a1StringData[4]);

//erste Zeile Zahlen rot, da dies mit der Vierfeldertafel übereinstimt:

$("#mySVG").children().eq(3).css("fill","red");
$("#mySVG").children().eq(4).css("fill","red");
$("#mySVG").children().eq(5).css("fill","red");

$("#mySVG").children().eq(9).css("fill","red");
$("#mySVG").children().eq(10).css("fill","red");
$("#mySVG").children().eq(11).css("fill","red");

$("#mySVG").children().eq(3).text(variablenString[1]);
$("#mySVG").children().eq(5).text(variablenString[0]);

$("#mySVG").children().eq(9).text(variablenString[2]);
$("#mySVG").children().eq(11).text(variablenString[0]);

$("#mySVG").children().eq(15).css("fill","purple");
$("#mySVG").children().eq(16).css("fill","purple");
$("#mySVG").children().eq(17).css("fill","purple");

$("#mySVG").children().eq(21).css("fill","purple");
$("#mySVG").children().eq(22).css("fill","purple");
$("#mySVG").children().eq(23).css("fill","purple");

$("#mySVG").children().eq(27).css("fill","purple");
$("#mySVG").children().eq(28).css("fill","purple");
$("#mySVG").children().eq(29).css("fill","purple");

$("#mySVG").children().eq(33).css("fill","purple");
$("#mySVG").children().eq(34).css("fill","purple");
$("#mySVG").children().eq(35).css("fill","purple");


$("#mySVG").children().eq(15).text(variablenString[5]);
$("#mySVG").children().eq(17).text(variablenString[1]);

$("#mySVG").children().eq(21).text(variablenString[6]);
$("#mySVG").children().eq(23).text(variablenString[1]);

$("#mySVG").children().eq(27).text(variablenString[7]);
$("#mySVG").children().eq(29).text(variablenString[2]);

$("#mySVG").children().eq(33).text(variablenString[8]);
$("#mySVG").children().eq(35).text(variablenString[2]);

//gelbe Ergebnisse:

$("#mySVG").children().eq(42).css("fill", "#FF8C00");
$("#mySVG").children().eq(43).css("fill", "#FF8C00");
$("#mySVG").children().eq(44).css("fill", "#FF8C00");

$("#mySVG").children().eq(45).css("fill", "#FF8C00");
$("#mySVG").children().eq(46).css("fill", "#FF8C00");
$("#mySVG").children().eq(47).css("fill", "#FF8C00");

$("#mySVG").children().eq(48).css("fill", "#FF8C00");
$("#mySVG").children().eq(49).css("fill", "#FF8C00");
$("#mySVG").children().eq(50).css("fill", "#FF8C00");

$("#mySVG").children().eq(51).css("fill", "#FF8C00");
$("#mySVG").children().eq(52).css("fill", "#FF8C00");
$("#mySVG").children().eq(53).css("fill", "#FF8C00");


$("#mySVG").children().eq(42).text(variablenString[5]);
$("#mySVG").children().eq(44).text(variablenString[0]);

$("#mySVG").children().eq(45).text(variablenString[6]);
$("#mySVG").children().eq(47).text(variablenString[0]);

$("#mySVG").children().eq(48).text(variablenString[7]);
$("#mySVG").children().eq(50).text(variablenString[0]);

$("#mySVG").children().eq(51).text(variablenString[8]);
$("#mySVG").children().eq(53).text(variablenString[0]);

feldAnpassen(0);
feldAnpassen(6);
feldAnpassen(12);
feldAnpassen(18);
feldAnpassen(24);
feldAnpassen(30);
}
}


function feldAnpassen(zahl){
//Position und Text und Textlänge auslesen und speichern:
	var xposition = $("#mySVG").children().eq(zahl).attr("x");
	var textinhalt  = $("#mySVG").children().eq(zahl).text();
	var textlänge = textinhalt.length;
	var textbreite = textlänge*11;
	//Neue Position bestimmen:
	var neuePosition = xposition -textbreite/2;
	//zugehöriges Rechteck neu setzen:
	 $("#mySVG").children().eq(zahl+1).css("x",neuePosition);
	 $("#mySVG").children().eq(zahl+1).css("width",textbreite);


	var pfad1 = $("#mySVG").children().eq(zahl+2).css("d");
	var altePos= pfad1.split(' ');
	var pfadNeu = altePos[0] +" "+ altePos[1]+ " "+ altePos[2] +" "+ altePos[3]+" "+ neuePosition+" " + altePos[5];
	$("#mySVG").children().eq(zahl+2).css("d", pfadNeu);


if((zahl==0)||(zahl==6)){
	//Die rechten pfade auch links anpassen:
		var neueStartPosition=parseInt(xposition)+parseInt(textbreite)/2;

		var pfad2 = $("#mySVG").children().eq(14+zahl*2).css("d");
		var altePosi= pfad2.split(' ');
		var pfadNeui = altePosi[0] +" "+ neueStartPosition + " "+ altePosi[2] +" "+ altePosi[3]+" "+ altePosi[4]+" " + altePosi[5];
		$("#mySVG").children().eq(14+zahl*2).css("d", pfadNeui);


			var pfad3 = $("#mySVG").children().eq(20+zahl*2).css("d");
			var altePosii= pfad3.split(' ');
			var pfadNeuii = altePosii[0] +" "+ neueStartPosition+ " "+ altePosii[2] +" "+ altePosii[3]+" "+ altePosii[4]+" " + altePosii[5];
			$("#mySVG").children().eq(20+zahl*2).css("d", pfadNeuii);
}

	//Text und position auslesen:



}
//	 menü.text(variablenString);




function textFeldBauen(textFeldNummer, boxVariable){
				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();


				// Wähle die geklickte Box der Grid-Tabelle aus:
				boxWähler = $("div").children().eq(4).children().eq(textFeldNummer) ;




				// Box leeren:
				boxWähler.empty();
				//leeres Eingabefeld erzeugen und einfügen:
				var text1	= "<input type='text' class='input' size='4' id='inputFeld'>" ;
				boxWähler.append(text1);
				boxWähler.children().eq(0).focus();
				//wenn Enter nicht gedrückt wird und stattdessen wieder geklickt wird: dennoch das Eingabefenster löschen!

				//bei Enter: text ins feld schreiben und Textfeld ausblenden/löschen

				$("#inputFeld").keypress(
					function(e) {
						if (e.keyCode == 13){
							var textUser =boxWähler.children().eq(0).val();    // Der Value, also der eingegebene Text wird ausgelesen aus der Zelle und in textUser gespeichert.
							boxWähler.empty();
							var newUserElement = "<p>".concat(textUser, "</p>");
							boxWähler.append(newUserElement);
						}
					}
				);
}








var letter ="ö";

function buchstaben(i,text){
			switch(i){
			case 1:				letter = "a";				break;
			case 2:				letter = "b";				break;
			case 3:				letter = "c";				break;
			case 4:				letter = "d";				break;
			case 5:				letter = "e";				break;
			case 6:				letter = "f";				break;
			case 7:				letter = "g";				break;
			case 8:				letter = "h";				break;
			case 9:				letter = "i";				break;
			case 10:			letter = "j";				break;
			case 11:			letter = "k";				break;
			case 12:			letter = "l";				break;
			case 13:			letter = "m";				break;
			case 14:			letter = "n";				break;
			case 15:			letter = "o";				break;
			case 16:			letter = "p";				break;
			default:			letter = "hier sollte ein Buchstabe stehn!";
		}
		var chapter = letter.concat(")");

		if(text=="chap"){				return chapter;
		}else{									return letter;
		}
	}
