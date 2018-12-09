
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
		//	y.show();
		//	y.children().eq(0).first().text(letter);
		//	for(j=0;j<10;j++){
		//		if(a1LöaErsteLösung[j] !=undefined){
		//			y.children().eq(1).children().eq(j).text(a1LöaErsteLösung[j]);
		//		} else {
		//			y.children().eq(1).children().eq(j).hide();
		//		}
		//	}
		}else{
			x.hide();
		//	y.hide();
		}
	}
}

//$("#mySVG").children().eq(3).css("fill", "green");


//vierfeldertafelLeeren();
function vierfeldertafelLeeren (){


$("#vierfelderBox").find("p").empty();
$("#mySVG").find("text").empty();
$("#mySVG").find("rect").css("stroke", "white");


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
	 $("rect").eq(zahl).css("x",neuePosition);
	 $("rect").eq(zahl).css("width",textbreite);


	var pfad1 = $("path").eq(zahl).css("d");
	var altePos= pfad1.split(' ');
	var pfadNeu = altePos[0] +" "+ altePos[1]+ " "+ altePos[2] +" "+ altePos[3]+" "+ neuePosition+" " + altePos[5];
	$("path").eq(zahl).css("d", pfadNeu);


if((zahl==0)||(zahl==1)){
	//Die rechten pfade auch links anpassen:
		var neueStartPosition=parseInt(xposition)+parseInt(textbreite)/2;

		var pfad2 = $("path").eq(2*(zahl+1)).css("d");
		var altePosi= pfad2.split(' ');
		var pfadNeui = altePosi[0] +" "+ neueStartPosition + " "+ altePosi[2] +" "+ altePosi[3]+" "+ altePosi[4]+" " + altePosi[5];
		$("path").eq(2*(zahl+1)).css("d", pfadNeui);


			var pfad3 = $("path").eq(2*(zahl+1)+1).css("d");
			var altePosii= pfad3.split(' ');
			var pfadNeuii = altePosii[0] +" "+ neueStartPosition+ " "+ altePosii[2] +" "+ altePosii[3]+" "+ altePosii[4]+" " + altePosii[5];
			$("path").eq(2*(zahl+1)+1).css("d", pfadNeuii);
}

}


//VierfelderTafel Input:

function textFeldBauen(textFeldNummer, boxVariable){
				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();

				// Wähle die geklickte Box der Grid-Tabelle aus:
				boxWähler = $("#vierfelderBox").children().eq(textFeldNummer) ;

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

							vierfelderTafelPrüfen();//allles was falsch ist wird schwarz markiert!
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
