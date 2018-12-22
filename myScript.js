
var menü = $("div").children().eq(0);
var aufgabenwahl ;

coloring()

function coloring(){

	//Baumdiagramm allgemeines Layout:
	//Layout---------------------------------------------------------------------------------------------------
	$("#mySVG").children().css("font-size","20");
	$("#mySVG").children().css("text-anchor","middle");
	//rechteck-Layout:
	$("rect").css("stroke","none");
	$("rect").css("fill","none");
	$("rect").css("rx",5);
	$("rect").css("ry",5);
	$('text').css('font-weight', '500');
	$("text").css("fill","darkgrey");              //weißer text
	$("path").css("stroke", "darkgrey");
//-----------------------------------------------------------------------------
	//Aufgaben-Farbe:
	$(".ungerade").addClass("lightgrey");
	$(".ungerade").children().addClass("lightgrey");

	$(".gerade").addClass("lightergrey");
	$(".gerade").children().addClass("lightergrey");

	$(".main").children().eq(1).addClass("lightgrey");

//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).addClass("lightgrey");
		$(".intro").addClass("darkgrey");
	//allgemeiner Hintergrund:
	$("div").addClass("darkgrey");


$("div").addClass("rund");
$("p").addClass("rund");
$("h3").addClass("rund");

//$("h1").addClass("lightgrey");
//$("h2").addClass("lightgrey");
//$("h3").addClass("lightgrey");

//Vierfeldertafel färben:
$(".ü").addClass("blue");
$(".summe").addClass("blue");
$(".mittelfeld").addClass("orange");
$(".rechtsfeld").addClass("green");
$(".untenfeld").addClass("red");

//Baumdiagramm färben:
//$("text").filter("#baumStamm").css("fill", "#0A450F");//grün
$("text").filter("#baumStamm").css("fill", "#750900"); //rot
$("text").filter("#baumAst").css("fill", "darkmagenta");
$("text").filter("#baumErgebnis").css("fill", "#B78800");

//Baum-Hintergrund:
$("#mySVG").addClass("rund");
//$("#mySVG").addClass("verydarkgrey");


}



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
	counter=0;
	counter1=0;
	$("#Aufgabenübersicht").children().removeClass("lila");
	$(this).addClass("lila");
	var inhalt=	$(this).text();
	var zahl;
	for(i=0;i<aufgabenVierfelder.length;i++){
			var überschrift = aufgabenVierfelder[i][0];
			if(überschrift==inhalt){
				zahl = i;
				window.aufgabenwahl = zahl; //die zahl benötige ich für lösungen+vierfelderstrings aufrufen
			}
	}
		$("#Aufgabentext").children().eq(0).children().eq(0).text(aufgabenVierfelder[zahl][0]);
		$("#Aufgabentext").children().eq(1).children().eq(0).text(aufgabenVierfelder[zahl][1]);
//Lösungen später rausnehmen (2 Zeilen:)
var containerX = $("#Lösungen").children();
var ersteZeile = "Klicke auf die Überschrift für einen Tipp";
containerX.eq(1).children().eq(1).text(ersteZeile);
containerX.eq(2).children().eq(1).text(ersteZeile);
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
		containerX.eq(1).children().eq(1).text(ersteZeile);
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
		containerX.eq(2).children().eq(1).text(baum1);
		counter1++;
}


});


	function myFunction() {
var hintergrund = $("div").attr('class');
$("div").removeClass("main");
$("div").removeClass("aufträge");
$("div").removeClass("lösungen");
$("div").removeClass("gridContainer");
$("div").removeClass("mySvg");

$("p").removeClass("gerade");
$("p").removeClass("ungerade");
$("div").removeClass("auftrag");
$("div").addClass("red");
$("h1").addClass("lila");
$("h2").addClass("lila");
$("h3").addClass("lila");
if(hintergrund=='page red'){
	$("div").removeClass("red");
	$("h1").removeClass("lila");
	$("h2").removeClass("lila");
	$("h3").removeClass("lila");
}
}
//
	//alert(hintergrund);
//
//			$("div").removeClass("red");
//			$("div").css("background-color", "MidnightBlue");
//			$("div").addClass("blue");
//			$("#mySVG").css("background-color","MidnightBlue");

//}else{
//		$("div").removeClass("blue");
//		$("div").css("background-color", "red");
//			$("div").addClass("red")
//		$("#mySVG").css("background-color","red");




//$("#mySVG").children().eq(3).css("fill", "green");

function linkeSeiteschreiben(){



for(i=0;i<aufgabenVierfelder.length;i++){
		var überschrift = "<p class='menüüberschriften'>" + aufgabenVierfelder[i][0] + "</p>";
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
