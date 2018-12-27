
var menü = $("div").children().eq(0);
var aufgabenwahl ;

linkeSeiteschreiben();

//Aufgaben schreiben wenn bild angeklickt wird: und lösungs-ILndex speichern ('aufgabenwahl');

$("#Aufgabenübersicht").find("p").click(function(){
	counter=0;
	counter1=0;
	$("#Aufgabenübersicht").children().removeClass("lila");
	$(this).addClass("lila");
	var zahl=	$(this).index();
	window.aufgabenwahl=zahl;
		$("#Aufgabentext").children().eq(0).children().eq(0).html(aufgabenVierfelder[zahl][0]);
		$("#Aufgabentext").children().eq(1).children().eq(0).html(aufgabenVierfelder[zahl][1]);
//Lösungen später rausnehmen (2 Zeilen:)
var containerX = $("#Lösungen").children();
var ersteZeile = "Klicke auf die Überschrift für einen Tipp";
containerX.eq(1).children().eq(0).children().eq(1).html(ersteZeile);
containerX.eq(1).children().eq(1).children().eq(1).html(ersteZeile);
		for(i=2;i<10; i++){
			var x= $("#Aufträge").children().eq(i-1);
			var letter = buchstaben(i-1, "chap");

			if(aufgabenVierfelder[zahl][i] !=undefined){
				x.show();
				x.children().eq(0).first().text(letter);
				x.children().eq(1).first().html(aufgabenVierfelder[zahl][i]);
			}else{
				x.hide();
			}
		}
		MathJax.Hub.Typeset(); //wichtig, um Inhalte wieder mathematisch zu rendern
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
			ersteZeile = "Es war so schön, doch ist nun zu Ende... nochmal von vorne?";
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
		if(iconString[i]!=undefined){
			var überschrift="<p class='menüicon'>" + iconString[i] + "</p>"; //frowning face
		}else{
			var überschrift = "<p class='menüicon'>" + '<img class=images src="https://img.icons8.com/wired/64/000000/question-mark.png">' + "</p>";
		}
		$("#Aufgabenübersicht").append(überschrift);
	}
}


vierfeldertafelReset();
function vierfeldertafelReset (){
	var summe = "\u2211";
	var schnitt="\u2229";
	$("#vierfelderBox").find("p").empty();
	$("#vierfelderBox").children().eq(1).text("\\(A\\)");
	$("#vierfelderBox").children().eq(2).text("\\(\\bar{A}\\)");
	$("#vierfelderBox").children().eq(3).text(summe);
	$("#vierfelderBox").children().eq(4).text("\\(B\\)");
	$("#vierfelderBox").children().eq(5).text("P(\\(A\\)" + schnitt + "\\(B\\))");
	$("#vierfelderBox").children().eq(6).text("P(\\(\\bar{A}\\)" + schnitt + "\\(B\\))");
	$("#vierfelderBox").children().eq(7).text("P(\\(B\\))");
	$("#vierfelderBox").children().eq(8).text("\\(\\bar{B}\\)");
	$("#vierfelderBox").children().eq(9).text("P(\\(A\\)" + schnitt + "\\(\\bar{B}\\))");
	$("#vierfelderBox").children().eq(10).text("P(\\(\\bar{A}\\)" + schnitt + "\\(\\bar{B}\\))");
	$("#vierfelderBox").children().eq(11).text("P(\\(\\bar{B}\\))");
	$("#vierfelderBox").children().eq(12).text(summe);
	$("#vierfelderBox").children().eq(13).text("P(\\(A\\))");
	$("#vierfelderBox").children().eq(14).text("P(\\(\\bar{A}\\))");
	$("#vierfelderBox").children().eq(15).text("1");
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
