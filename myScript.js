
var menü = $("div").children().eq(0);
var aufgabenwahl ;





linkeSeiteschreiben();

$("#Aufgabenübersicht").find("p").click(function(){
	counter=0;
	counter1=0;
	$("#Aufgabenübersicht").children().removeClass("lila");
	$(this).addClass("lila");
	var zahl=	$(this).index();
	window.aufgabenwahl=zahl;
		$("#Aufgabentext").children().eq(0).children().eq(0).text(aufgabenVierfelder[zahl][0]);
		$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabenVierfelder[zahl][1]);
//Lösungen später rausnehmen (2 Zeilen:)
var containerX = $("#Lösungen").children();
var ersteZeile = "Klicke auf die Überschrift für einen Tipp";
containerX.eq(1).children().eq(0).children().eq(1).text(ersteZeile);
containerX.eq(1).children().eq(1).children().eq(1).text(ersteZeile);
		for(i=2;i<10; i++){
			var x= $("#Aufträge").children().eq(i-1);
			var letter = buchstaben(i-1, "chap");

			if(aufgabenVierfelder[zahl][i] !=undefined){
				x.show();
				x.children().eq(0).first().text(letter);
				x.children().eq(1).first().text(aufgabenVierfelder[zahl][i]);
			}else{
				x.hide();
			}
		}
});

//Lösungen/Tipps:

var counter=0;
var counter1=0;
$("#Lösungen").find("h3").click(function(){
	var containerX = $("#Lösungen").children();
	var inhalt=	$(this).text();
	if(inhalt=="Vierfeldertafel Lösung"){
		var ersteZeile = lösungenVierfelder[window.aufgabenwahl][0][0][counter];
		if(counter==16){
			ersteZeile = "Die Vierfeldertafel müsste voll sein. Es beginnt von vorne...";
			counter=0;
		}
		containerX.eq(1).children().eq(0).children().eq(1).text(ersteZeile);
		counter++;
	}
	else if(inhalt=="Baumdiagramm Lösung"){
		var baum1 = "warum siehst du mich?";
		if(counter1<6){
			baum1 = lösungenVierfelder[window.aufgabenwahl][1][0][counter1];
		}//Zahlen am Ast und gesamt-Pfade:
		else if(counter1<16){
			andereZählung = counter1+2*(counter1-6);
			baum1=lösungenVierfelder[window.aufgabenwahl][1][0][andereZählung] + " / " + lösungenVierfelder[window.aufgabenwahl][1][0][andereZählung+2];
		}else if(counter1==16){
			baum1="Die Lösungen sind durch. Es beginnt von vorne...";
			counter1=0;
		}
		containerX.eq(1).children().eq(1).children().eq(1).text(baum1);
		counter1++;
}


});


function linkeSeiteschreiben(){
for(i=0;i<aufgabenVierfelder.length;i++){
		var überschrift = "<p class='menüüberschriften'>" + aufgabenVierfelder[i][0] + "</p>";

		if(iconString[i]!=undefined){
	var überschrift="<p class='icon'>" + iconString[i] + "</p>"; //frowning face
}

		$("#Aufgabenübersicht").append(überschrift);


}
}


//vierfeldertafelLeeren();
function vierfeldertafelLeeren (){
$("#vierfelderBox").find("p").empty();
$("#mySVG").find("text").empty();
$("#mySVG").find("rect").css("stroke", "white");


}





//baumdiagramm felder anpassen wenn text größer oder kleiner

function feldAnpassen(zahl){
//Position und Text und Textlänge auslesen und speichern:
	var xposition = $("#mySVG").children().eq(zahl).attr("x");
	var textinhalt  = $("#mySVG").children().eq(zahl).text();
	var textlänge = textinhalt.length;
	if(textlänge==0){
		textlänge =1;
	}
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
