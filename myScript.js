	// den inneren "Dom" von dem svg bekommen:
	var doc = document.getElementById('BaumdiagrammObjekt').contentDocument;
 //ohne ID verschiedene Elemente der SVG-Datei wählen:

	var textDateien = doc.getElementsByTagName('text');

//	var svgDateien = doc.getElementsByTagName('svg'); // nicht so wichtig, .. was soll man da schon ändern?
//	var pathDateien = doc.getElementsByTagName('path'); // nicht nur farbe, auch pfadrichtung änderbar! 	//pathDateien[0].setAttribute('d',"M 200 250 L 195 80");
//	var rectDateien = doc.getElementsByTagName('rect'); // nich wichtig. Will ich die Umrandung ändern? Beachte dann svg-Größe

	//rectDateien[5].style.stroke ="red";
	
	//function meldung(event){
	//	alert(event.target);
	//	var doc = window.document.getElementsByTagName('text');

	//	doc.target.style.height="2pt";
		//	rectDateien[6].style.fill = "blue";
	//}

	//rectDateien[0].

	//rectDateien[12].style.fill = "yellow";
	//rectDateien[16].style.fill = "purple";
//	rectDateien[19].style.fill = "purple";

	//Inhalte ändern:
//	textDateien[0].style.fill = "red"; //Ereignis A

	textDateien[1].style.fill = "green"; //Strich überm 1. Pfad, 2.ereignis
//	textDateien[2].style.fill = "yellow"; // Ereignis "nicht A"
//	textDateien[3].style.fill = "purple"; //Ereignis B (erstes)
//
	textDateien[4].style.fill = "red"; //Strich Ereignis "nicht B" (erstes)
	textDateien[5].style.fill = "green"; //Ereignis "nicht B" (erstes)
	textDateien[6].style.fill = "yellow"; // Ereignis "B"(zweites);
//	textDateien[7].style.fill = "purple"; //Strich über Ereignis "nicht B" (zweites)
//	textDateien[8].style.fill = "purple"; //Ereignis "nicht B" (zweites)
//
//	textDateien[9].style.fill = "red"; //Zähler 1
//	textDateien[10].style.fill = "green"; //Bruchstrich 1
//	textDateien[11].style.fill = "yellow"; // Nenner 1
//
//	textDateien[12].style.fill = "purple"; //Zähler 2
//	textDateien[13].style.fill = "red"; //Bruchstrich 2
//	textDateien[14].style.fill = "green"; //Nenner 2
//
//	textDateien[15].style.fill = "yellow"; // Zähler 3
//	textDateien[16].style.fill = "purple"; //Bruchstrich 3
//	textDateien[17].style.fill = "purple"; //Nenner 3

//	textDateien[18].style.fill = "yellow"; // Zähler 4
//	textDateien[19].style.fill = "purple"; //Bruchstrich 4
//	textDateien[20].style.fill = "red"; //Nenner 4

//	textDateien[21].style.fill = "yellow"; // Zähler 5
//	textDateien[22].style.fill = "purple"; //Bruchstrich 5
//	textDateien[23].style.fill = "purple"; //Nenner 5

//	textDateien[24].style.fill = "yellow"; // Zähler 6
//	textDateien[25].style.fill = "purple"; //Bruchstrich 6
//	textDateien[26].style.fill = "purple"; //Nenner 6

//	textDateien[27].style.fill = "yellow"; // Pfad-Text 1
//	textDateien[28].style.fill = "purple"; //Strich über PfadText 2
//	textDateien[29].style.fill = "purple"; //PfadText 2

//	textDateien[30].style.fill = "yellow"; // Strich über Pfad-Text 3
//	textDateien[31].style.fill = "purple"; //Pfad-Text 3
//	textDateien[32].style.fill = "purple"; //Strich über Pfad-Text 4

//	textDateien[33].style.fill = "purple"; //Strich über Pfad-Text 4
//	textDateien[34].style.fill = "purple"; //Pfad-Text 4
//
//	textDateien[35].style.fill = "yellow"; // Ergebnis 1
//	textDateien[36].style.fill = "purple"; //Ergebnis 1
//	textDateien[37].style.fill = "green"; //Ergebnis 1


//	textDateien[2].innerHTML = "hi";
//	textDateien[3].innerHTML="77";   //geht!





function textFeldBauen(textFeldNummer, boxVariable){

				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();


				if(boxVariable==4){
				// Wähle die geklickte Box der Grid-Tabelle aus:
				boxWähler = $("div").children().eq(4).children().eq(textFeldNummer) ;
				}

				if(boxVariable==5){
				// Wähle die geklickte Box der Grid-Tabelle aus:
					boxWähler = $("div").children().eq(4).children().eq(textFeldNummer) ;
					$("div").children().eq(0).text("hi");
				}


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


var letter ="ö";


function buchstaben(i,text){
			switch(i){
			case 1:
				letter = "a";
				break;
			case 2:
				letter = "b";
				break;
			case 3:
				letter = "c";
				break;
			case 4:
				letter = "d";
				break;
			case 5:
				letter = "e";
				break;
			case 6:
				letter = "f";
				break;
			case 7:
				letter = "g";
				break;
			case 8:
				letter = "h";
				break;
			case 9:
				letter = "i";
				break;
			case 10:
				letter = "j";
				break;
			case 11:
				letter = "k";
				break;
			case 12:
				letter = "l";
				break;
			case 13:
				letter = "m";
				break;
			case 14:
				letter = "n";
				break;
			case 15:
				letter = "o";
				break;
			case 16:
				letter = "p";
				break;
			default:
				letter = "hier sollte ein Buchstabe stehn!";
		}
		var chapter = letter.concat(")");

		if(text=="chap"){
			return chapter;
		}else{return letter;}
	}
