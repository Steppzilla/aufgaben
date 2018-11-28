//CANVAS:

svgMalen();

function svgMalen(){



	var svgNS = "http://www.w3.org/2000/svg";
//	createCircle();

	function createCircle()
	{
	    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
	    myCircle.setAttributeNS(null,"id","mycircle");
	    myCircle.setAttributeNS(null,"cx",100);
	    myCircle.setAttributeNS(null,"cy",100);
	    myCircle.setAttributeNS(null,"r",50);
	    myCircle.setAttributeNS(null,"fill","black");
	    myCircle.setAttributeNS(null,"stroke","none");

	    document.getElementById("mySVG").appendChild(myCircle);
	}

//myText("hi");
	function myText(text)
	{
			var myText= document.createElementNS(svgNS,"text"); //to create a circle. for rectangle use "rectangle"
			myText.setAttributeNS(null,"id","mytext");
			myText.setAttributeNS(null,"text-anchor", "middle" );
			myText.setAttributeNS(null,"font-size","20");
			myText.setAttributeNS(null,"x",170);
			myText.setAttributeNS(null,"y",200);
			myText.setAttributeNS(null,"fill","white");
			// der eigentliche TExt wird erstellt und dann der Node angehängt:
			var textNode = document.createTextNode(text);
			myText.appendChild(textNode);
			// der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
			document.getElementById("mySVG").appendChild(myText);
	}

//myRect();

	function myRect()
	{
		var myRect = document.createElementNS(svgNS,"rect");
		myRect.setAttributeNS(null,"x",50);
		myRect.setAttributeNS(null,"y",50);
		myRect.setAttributeNS(null,"width",25);
		myRect.setAttributeNS(null,"height",25);
//		myRect.setAttributeNS(null,"stroke","#D6E9FE");

		document.getElementById("mySVG").appendChild(myRect);

	}




	myText("ho");
myPath();

function myPath(){
		//objecte in ein Array schreiben:
		function pathObjekte(){
			var myPath = document.createElementNS(svgNS,"path");
			myPath.setAttributeNS(null,"stroke","#D6E9FE");
			return myPath;
		}

		var pfadName;
	//	pfadName.push("pfad" + 0);
			pfad1= pathObjekte();


	//	for (i=0;i>6;i++){
	//		pfad= "pfad0";
		//	pfade[i] = "pfad" + i;

//		pfad0=pathObjekte();
		//	pfade[i] = pathObjekte();
//		}

	//	pfade = pathObjekte();
	//	var pfad = pathObjekte();
	//	var pfad2 = pathObjekte();



		pfad1.setAttributeNS(null,"d", "M 45 160 L 195 80");
	//	pfade[1].setAttributeNS(null,"d", "M 45 160 L 195 240");
		//	myPath[2].setAttributeNS(null,"d", "M 220 80 L 370 40");
		//	myPath[3].setAttributeNS(null,"d", "M 220 80 L 370 120");

		//	myPath[4].setAttributeNS(null,"d", "M 220 240 L 370 200");
		//	myPath[5].setAttributeNS(null,"d", "M 220 240 L 370 280");

		document.getElementById("mySVG").appendChild(pfad1);
//			document.getElementById("mySVG").appendChild(pfad2);
}



}





function canvas(){
	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	//ctx.width = 1;
	//ctx.style.width = "400px";  // add pixel unit

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



	function meldung(event){
		// den inneren "Dom" von dem svg bekommen:
		var doc = document.getElementById('svg');
		//ohne ID verschiedene Elemente der SVG-Datei wählen:
		//var textDateien= doc.getElementsByTagName('text');
		doc.children.eq[0].text("nein");
		//textDateien[0].style.fill = "red"; //Ereignis A
		//alert(event.target);
		//var doc = window.document.getElementsByTagName('text');

	//	doc.target.style.height="2pt";
		//	rectDateien[6].style.fill = "blue";
	}


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
