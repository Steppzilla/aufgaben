
var inputtXfactor;
var inputtYfactor;



$(window).bind('resizeEnd',function(){

		//alert(inputtXfactor);


		//Breite und höhe des Fensters ermitteln
		var breite =$("#mySVG").width();
		var höhe =$("#mySVG").height()-10;


		//position ermitteln:

	var positionX = breite*inputtXfactor;
	var positionY = höhe*inputtYfactor;

// box neu positionieren:


		$('#inputt').css("left", positionX);
	$('#inputt').css("top", positionY);


	});

	$(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });


var menü = $("div").children().eq(0);

svgMalen();

function svgMalen(){

	var svgNS = "http://www.w3.org/2000/svg";
// Baum bauen (6 Elemente, nicht ändern, sonst muss man die klickfuntion-Zahlen ändern!)
// 0 *6 sind die Buchstaben/EReignisse.
// y=1+6x sind ihre rechtecke
// y=2+6x sind...pfad?
// y=3+6x   Zähler vom pfad?
// y = 4 +6x Bruchstrich vom Pfad.
// y=5 +6x 		Nenner vom Pfad.
for(i=0;i<6;i++){
 	myText("A",i);
	myRect(i);
	myPath(i);
	myProbQ("5", "7", i);
}
//rechtecke um die probabilities/Wahrscheinlichkeiten
for(i=0;i<6;i++){
	myProbRect(i);
}

// click-funktionen für die Wahrscheinlichkeiten:
$("#mySVG").children().eq(36).click(function(){ 	clickBaum(3);				});
$("#mySVG").children().eq(37).click(function(){		clickBaum(9);				});
$("#mySVG").children().eq(38).click(function(){		clickBaum(15);			});
$("#mySVG").children().eq(39).click(function(){		clickBaum(21);			});
$("#mySVG").children().eq(40).click(function(){		clickBaum(27);			});
$("#mySVG").children().eq(41).click(function(){		clickBaum(33);			});

// HauptÄste-Click-Funktionen für die Ereignisse:
$("#mySVG").children().eq(1).click(function(){	clickBaum(0);				});
$("#mySVG").children().eq(7).click(function(){	clickBaum(6);				});
$("#mySVG").children().eq(13).click(function(){	clickBaum(12);			});
$("#mySVG").children().eq(19).click(function(){	clickBaum(18);			});
$("#mySVG").children().eq(25).click(function(){	clickBaum(24);			});
$("#mySVG").children().eq(31).click(function(){	clickBaum(30);			});


function clickBaum(zähler){
	//Container-DOM-Standpunkt "Pfad" speichern (Div):
	var container = $("div").children().eq(5);
	//x-position der angeklickten Box auslesen:
	 xpos =$("#mySVG").children().eq(zähler).attr("x");
	 ypos =$("#mySVG").children().eq(zähler).attr("y");
	 // altes input-Fenster löschen (per ID).
		//$("inputt").remove();
		$("input").remove();
		// angeklicktes Feld löschen:
		$("#mySVG").children().eq(zähler).empty();
		//Breite und höhe des Fensters ermitteln
		var breite =$("div").children().eq(5).children().eq(0).width();
		var höhe =$("div").children().eq(5).children().eq(0).height();
		//position ermitteln: (-10 Korrektur) 550 ist die breite der Viewbox, 320 höhe
		var position1 = breite*xpos/550 - 10;
		var position2 = höhe*ypos/320 +12 ;

		//Eingabefeld erstellen + positionieren:
		var text1	= "<input type='text' class='input' size='4' id='inputt'>" ;
		container.prepend(text1);

		container.children().eq(0).css("width", 20);
		container.children().eq(0).css("height", 20);
		container.children().eq(0).css("position", "relative");
		container.children().eq(0).css("left", position1);
		container.children().eq(0).css("top", position2);

		// Global die x-position und y-Position prozentual ermitteln und speichern:
		window.inputtXfactor = position1/ breite; /// breite;
		window.inputtYfactor = position2 / höhe;//$("#inputt").css("top") /// höhe;


		if ((zähler == 3)||(zähler == 9)||(zähler == 15)||(zähler == 21)||(zähler == 27)||(zähler == 33)){
				container.children().eq(0).css("height", 30);
				container.children().eq(0).css("top", position2+20);
			}

			//container.children().eq(0).css("z-index", 1);
			container.children().eq(0).focus();

			$("#inputt").keypress(
				function(e) {

						if (e.keyCode == 13){

							var textUser =container.children().eq(0).val();
							$("input").remove();

							$("#mySVG").children().eq(zähler).text(textUser);

							if ((zähler == 3)||(zähler == 9)||(zähler == 15)||(zähler == 21)||(zähler == 27)||(zähler == 33)){
								// mein string : textUser  spalten  bei "/"
								$("#mySVG").children().eq(zähler+1).show();
								$("#mySVG").children().eq(zähler+2).show();

					  		var wörter = textUser.split('/',2); // er splittet maximal 2 wörter (alles nach dem 2. slash ist weg)

								$("#mySVG").children().eq(zähler).text(wörter[0]);
								$("#mySVG").children().eq(zähler+2).text(wörter[1]);

								if (wörter[1] == null){
										//	$("#mySVG").children().eq(zähler).text(wörter[0]);
											$("#mySVG").children().eq(zähler+1).hide();
											$("#mySVG").children().eq(zähler+2).hide();
								}
							}// if 3,9, etc ende
						} // if-ende
					} // function-ende
				); //keypress ende
} //function click-baum ende;


function myProbRect(number)
{
 	var zähler = number*6+4;
//	var nenner = number*6 +5;
	xposZ =$("#mySVG").children().eq(zähler).attr("x") - 10;
	yposZ =$("#mySVG").children().eq(zähler).attr("y") -20 ;
	//xposN =$("#mySVG").children().eq(nenner).attr("x") -10 ;
	//yposN =$("#mySVG").children().eq(nenner).attr("y") -10 ;

	var myRect = document.createElementNS(svgNS,"rect");

	myRect.setAttributeNS(null,"x",xposZ);
	myRect.setAttributeNS(null,"y",yposZ);

	myRect.setAttributeNS(null,"width",25);
	myRect.setAttributeNS(null,"height",46);
	myRect.setAttributeNS(null,"stroke","MidnightBlue");
	myRect.setAttributeNS(null,"fill", "none");
	myRect.setAttributeNS(null,"rx", 5);
	myRect.setAttributeNS(null,"ry", 5);
	document.getElementById("mySVG").appendChild(myRect);
}


function myProbQ(text1,text2,number){
	var myProbQ1= document.createElementNS(svgNS,"text");
	var myProbQ2= document.createElementNS(svgNS,"text");
	var myProbQ3= document.createElementNS(svgNS,"text");

	//	myProbQ1.setAttributeNS(null,"id","myprob");
	myProbQ1.setAttributeNS(null,"text-anchor", "middle" );
	myProbQ2.setAttributeNS(null,"text-anchor", "middle" );
	myProbQ3.setAttributeNS(null,"text-anchor", "middle" );

	myProbQ1.setAttributeNS(null,"font-size","20");
	myProbQ2.setAttributeNS(null,"font-size","20");
	myProbQ3.setAttributeNS(null,"font-size","20");

	myProbQ1.setAttributeNS(null,"fill","#D6E9FE");
	myProbQ2.setAttributeNS(null,"fill","#D6E9FE");
	myProbQ3.setAttributeNS(null,"fill","#D6E9FE");


	if(number==0){
	myProbQ1.setAttributeNS(null,"x",110+12);
	myProbQ1.setAttributeNS(null,"y",50+25);
	myProbQ2.setAttributeNS(null,"x",110+12);
	myProbQ2.setAttributeNS(null,"y",50+25);
	myProbQ3.setAttributeNS(null,"x",110+12);
	myProbQ3.setAttributeNS(null,"y",50+47);
	}
	if(number==1){
		myProbQ1.setAttributeNS(null,"x",110+12);
		myProbQ1.setAttributeNS(null,"y",215+25);
		myProbQ2.setAttributeNS(null,"x",110+12);
		myProbQ2.setAttributeNS(null,"y",215+25);
		myProbQ3.setAttributeNS(null,"x",110+12);
		myProbQ3.setAttributeNS(null,"y",215+47);
	}
	if(number==2){
		myProbQ1.setAttributeNS(null,"x",290+12);
		myProbQ1.setAttributeNS(null,"y",1+25);
		myProbQ2.setAttributeNS(null,"x",290+12);
		myProbQ2.setAttributeNS(null,"y",1+25);
		myProbQ3.setAttributeNS(null,"x",290+12);
		myProbQ3.setAttributeNS(null,"y",1+47);
	}
	if(number==3){
		myProbQ1.setAttributeNS(null,"x",290+12);
		myProbQ1.setAttributeNS(null,"y",105+25);
		myProbQ2.setAttributeNS(null,"x",290+12);
		myProbQ2.setAttributeNS(null,"y",105+25);
		myProbQ3.setAttributeNS(null,"x",290+12);
		myProbQ3.setAttributeNS(null,"y",105+47);
	}
	if(number==4){
		myProbQ1.setAttributeNS(null,"x",290+12);
		myProbQ1.setAttributeNS(null,"y",160+25);
		myProbQ2.setAttributeNS(null,"x",290+12);
		myProbQ2.setAttributeNS(null,"y",160+25);
		myProbQ3.setAttributeNS(null,"x",290+12);
		myProbQ3.setAttributeNS(null,"y",160+47);
	}
	if(number==5){
		myProbQ1.setAttributeNS(null,"x",290+12);
		myProbQ1.setAttributeNS(null,"y",265+25);
		myProbQ2.setAttributeNS(null,"x",290+12);
		myProbQ2.setAttributeNS(null,"y",265+25);
		myProbQ3.setAttributeNS(null,"x",290+12);
		myProbQ3.setAttributeNS(null,"y",265+47);
	}

	// der eigentliche TExt wird erstellt und dann der Node angehängt:

	var textNode1 = document.createTextNode(text1);
	var textNode2 = document.createTextNode(text2);
	var strich = document.createTextNode("_");
	myProbQ1.appendChild(textNode1);
	myProbQ2.appendChild(strich);
	myProbQ3.appendChild(textNode2);
	// der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
	document.getElementById("mySVG").appendChild(myProbQ1);
	document.getElementById("mySVG").appendChild(myProbQ2);
	document.getElementById("mySVG").appendChild(myProbQ3);
}


	function myText(text,number){
			var myText= document.createElementNS(svgNS,"text"); //to create a circle. for rectangle use "rectangle"
			myText.setAttributeNS(null,"id","mytext");
			myText.setAttributeNS(null,"text-anchor", "middle" );
			myText.setAttributeNS(null,"font-size","20");

			if(number==0){
			myText.setAttributeNS(null,"x",195+12);
			myText.setAttributeNS(null,"y",67+20);
			}
			if(number==1){
				myText.setAttributeNS(null,"x",195+12);
				myText.setAttributeNS(null,"y",227+20);
			}
			if(number==2){
				myText.setAttributeNS(null,"x",370+12);
				myText.setAttributeNS(null,"y",27+20);
			}
			if(number==3){
				myText.setAttributeNS(null,"x",370+12);
				myText.setAttributeNS(null,"y",107+20);
			}
			if(number==4){
				myText.setAttributeNS(null,"x",370+12);
				myText.setAttributeNS(null,"y",187+20);
			}
			if(number==5){
				myText.setAttributeNS(null,"x",370+12);
				myText.setAttributeNS(null,"y",267+20);
			}
			myText.setAttributeNS(null,"fill","#D6E9FE");
			// der eigentliche TExt wird erstellt und dann der Node angehängt:
			var textNode = document.createTextNode(text);
			myText.appendChild(textNode);
			// der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
			document.getElementById("mySVG").appendChild(myText);
	}


	function myRect(number)	{
		var zähler = number*6;  //Buchstabenpositionen auslesen
		var xPos = $("#mySVG").children().eq(zähler).attr("x") - 12;
		var yPos = $("#mySVG").children().eq(zähler).attr("y") - 20;
		var myRect = document.createElementNS(svgNS,"rect");

		myRect.setAttributeNS(null,"x",xPos);
		myRect.setAttributeNS(null,"y",yPos);

		myRect.setAttributeNS(null,"width",25);
		myRect.setAttributeNS(null,"height",25);
		myRect.setAttributeNS(null,"stroke","#D6E9FE");
		myRect.setAttributeNS(null,"fill", "none");
		myRect.setAttributeNS(null,"rx", 5);
		myRect.setAttributeNS(null,"ry", 5);
		document.getElementById("mySVG").appendChild(myRect);
	}


function myPath(number){
		//objecte in ein Array schreiben:
		var pfad = document.createElementNS(svgNS,"path");
		pfad.setAttributeNS(null,"stroke","#D6E9FE");

		//Linien Koordinaten zuweisen:

		if(number==0){pfad.setAttributeNS(null,"d", "M 45 160 L 195 80");		}
		if(number==1){pfad.setAttributeNS(null,"d", "M 45 160 L 195 240");		}
		if(number==2){pfad.setAttributeNS(null,"d", "M 220 80 L 370 40");		}
		if(number==3){pfad.setAttributeNS(null,"d", "M 220 80 L 370 120");		}
		if(number==4){pfad.setAttributeNS(null,"d", "M 220 240 L 370 200");		}
		if(number==5){pfad.setAttributeNS(null,"d", "M 220 240 L 370 280");		}
		//Linien ins Dokument einfügen:
		document.getElementById("mySVG").appendChild(pfad);
	}
}



function canvas(){
	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	var width = $("#myCanvas").width();
	var height = $("#myCanvas").height();

	ctx.strokeStyle = "#D6E9FE";
	ctx.fillStyle = "#D6E9FE";

	//Linien
	ctx.moveTo(10,height/2);
	ctx.lineTo(width/3-17,height/3);
	ctx.stroke();

	ctx.moveTo(10,height/2);
	ctx.lineTo(width/3-17,height*2/3);
	ctx.stroke();

	$("div").children().eq(0).text(width, height);

	//2Kreise:
	ctx.beginPath();
	ctx.arc(width/3, height/3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width/3, height*2/3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	//2Texte:

	ctx.font = "20px Arial";
	ctx.fillText("A", width/3-7, height/3+7);

	ctx.font = "20px Arial";
	ctx.fillText("A", width/3-7, height*2/3+7);

	// 2. Spalte: Linien:
	ctx.moveTo(width/3+17,height/3-4);
	ctx.lineTo(width*2/3-13,height/5-9);
	ctx.stroke();

	ctx.moveTo(width/3+17,height/3-4);
	ctx.lineTo(width*2/3-13,height*2/5-3);
	ctx.stroke();

	ctx.moveTo(width/3+17,height*2/3+4);
	ctx.lineTo(width*2/3-13,height*3/5+3);
	ctx.stroke();

	ctx.moveTo(width/3+17,height*2/3+4);
	ctx.lineTo(width*2/3-13,height*4/5+9);
	ctx.stroke();

	//Kreise:

	ctx.beginPath();
	ctx.arc(width*2/3, height/5-9, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*2/5-3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*3/5+3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*4/5+9, 15, 0, 2 * Math.PI);
	ctx.stroke();

	//4Texte:

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height/5-3);

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*2/5+3);


	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*3/5+9);

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*4/5+15);
}

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
