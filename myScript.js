
var menü = $("div").children().eq(0);
var aufgabenwahl ;





linkeSeiteschreiben();

//  $("#Aufgabenübersicht").children().eq(0).click(function(){ 	alert("hi");				});

//for(i=0; i<aufgabenVierfelder.length;i++){
//    $("#Aufgabenübersicht").children().eq(i).click(function(u){ menüLinksClicked(u.target);
//				});
//	}

//function menüLinksClicked(object){
//	var aufgabe = object;
//	alert(aufgabe);
//	var liste = aufgabenVierfelder;
//	$("#Aufgabentext").children().eq(0).children().eq(0).text(aufgabenVierfelder[0][0] );
//	$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabenVierfelder[0][1] );

//}
$("#Aufgabenübersicht").find("p").click(function(){
	$("#Aufgabenübersicht").find("p").css("color","white");
	$(this).css("color","red");
	var inhalt=	$(this).text();
	var zahl;
	for(i=0;i<aufgabenVierfelder.length;i++){
			var überschrift = aufgabenVierfelder[i][0];
			if(überschrift==inhalt){
				zahl = i;
				window.aufgabenwahl = zahl;
			}
	}

		$("#Aufgabentext").children().eq(0).children().eq(0).text(aufgabenVierfelder[zahl][0]);
		$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabenVierfelder[zahl][1]);

//Lösungen später rausnehmen (2 Zeilen:)

var ersteZeile = lösungenVierfelder[zahl][0][0][0]+" "+lösungenVierfelder[zahl][0][0][1] + " " + lösungenVierfelder[zahl][0][0][2] + " " + lösungenVierfelder[zahl][0][0][3];
		$("#Lösungen").children().eq(1).text(ersteZeile);

		var zweiteZeile = lösungenVierfelder[zahl][0][0][4]+" "+lösungenVierfelder[zahl][0][0][5] + " " + lösungenVierfelder[zahl][0][0][6] + " " + lösungenVierfelder[zahl][0][0][7];

		$("#Lösungen").children().eq(2).text(zweiteZeile);
		var dritteZeile = lösungenVierfelder[zahl][0][0][8]+" "+lösungenVierfelder[zahl][0][0][9] + " " + lösungenVierfelder[zahl][0][0][10] + " " + lösungenVierfelder[zahl][0][0][11];
	$("#Lösungen").children().eq(3).text(dritteZeile);
		var vierteZeile = lösungenVierfelder[zahl][0][0][12]+" "+lösungenVierfelder[zahl][0][0][13] + " " + lösungenVierfelder[zahl][0][0][14] + " " + lösungenVierfelder[zahl][0][0][15];
	$("#Lösungen").children().eq(4).text(vierteZeile);

	var baum1 = lösungenVierfelder[zahl][1][0][0]+ " " + lösungenVierfelder[zahl][1][0][1]+ " " + lösungenVierfelder[zahl][1][0][2]+ " " + lösungenVierfelder[zahl][1][0][3]+ " " + lösungenVierfelder[zahl][1][0][4]+ " " + lösungenVierfelder[zahl][1][0][5]+ " ";
		$("#Lösungen").children().eq(5).text(baum1);
		var baum2 = lösungenVierfelder[zahl][1][0][6]+ "/" + lösungenVierfelder[zahl][1][0][8]+ " "
							+ lösungenVierfelder[zahl][1][0][9]+ "/" + lösungenVierfelder[zahl][1][0][11]+ " "
							+ lösungenVierfelder[zahl][1][0][12]+ "/" + lösungenVierfelder[zahl][1][0][14]+ " "
							+  lösungenVierfelder[zahl][1][0][15]+ "/" + lösungenVierfelder[zahl][1][0][17]+ " "
							+ lösungenVierfelder[zahl][1][0][18]+ "/" + lösungenVierfelder[zahl][1][0][20]+ " "
							 + lösungenVierfelder[zahl][1][0][21]+ "/" + lösungenVierfelder[zahl][1][0][23]+ " ";
		$("#Lösungen").children().eq(6).text(baum2);
		var baum3 = lösungenVierfelder[zahl][1][0][24]+ "/" + lösungenVierfelder[zahl][1][0][26]+ " " + lösungenVierfelder[zahl][1][0][27]+ "/" + lösungenVierfelder[zahl][1][0][29]+ " " + lösungenVierfelder[zahl][1][0][30]+ "/" + lösungenVierfelder[zahl][1][0][32]+ " " + lösungenVierfelder[zahl][1][0][33]+ "/" + lösungenVierfelder[zahl][1][0][35];

		$("#Lösungen").children().eq(7).text(baum3);

		//ende lösungen
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





	function myFunction() {

	var hintergrund = $("div").attr('class');
	//alert(hintergrund);
		if(hintergrund=='page red'){
			$("div").removeClass("red");
			$("div").css("background-color", "MidnightBlue");
			$("div").addClass("blue");
			$("#mySVG").css("background-color","MidnightBlue");

}else{
		$("div").removeClass("blue");
		$("div").css("background-color", "red");
			$("div").addClass("red")
		$("#mySVG").css("background-color","red");



}
}

//$("#mySVG").children().eq(3).css("fill", "green");

function linkeSeiteschreiben(){



for(i=0;i<aufgabenVierfelder.length;i++){
		var überschrift = "<p>" + aufgabenVierfelder[i][0] + "</p>";
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
