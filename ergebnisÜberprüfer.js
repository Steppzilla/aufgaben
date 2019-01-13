
function vierfelderTafelPrüfen(){
	var zahl = window.aufgabenwahl;
	var string = lösungenVierfelder[zahl];
	//alert(zahl + " " + string[0][0]);
  var max = 0;
  var maxIndex =0;
	for(j=0;j<string[0].length;j++){
      var richtige=0;
			//Index der meisten Übereinstimmungen wird ausgewählt:
      for (i=0; i<16;i++)     {
	     	var string1 = $("#vierfelderBox").children().eq(i).text(); //Inhalte aller 16 boxen == besser: intro.text?
	     	var string2 = string[0][j][i];														//erste Liste enthält Vierfelderaufgaben in allen reihenfolgen
      	if (string1==string2)  {
          richtige++;																			//Anzahl Übereinstimmungen werden in "richtige" gespeichert
        }
      }
      if(richtige>max){
          max=richtige;													//Wenn eine Liste mehr richtige hat, wird ihr Index in max gespeichert.
          maxIndex=j;
      }
  } //ende for-schleife
	var lösungsString = string[0][maxIndex];
	//alert("richtige: " + max + " Index: " + maxIndex);
	//nicht übereinstimmende Felder bekommen einen scharzen feld-hintergrund :
	for(i=1; i<16;i++)     {
      var textfeld = $("#vierfelderBox").children().eq(i).text();//besser:intro.text?
			var lösung = lösungsString[i];

			var textfeld=zahlUmwandeln(textfeld); //dürfte string als String belassen. ungefährlich. Zahlen sind immer im format 14.5 gespeichert prozente und kommata werden umgewandelt.
			//zunächst mit normalem, meist ganzzahligem lösungsstring vergleichen, text + absolute zahlen sind schonmal "wahr"
		 	var boolean = zahlenvergleichen (textfeld, lösung);  //gleicehr text oder gleiche zahlen größer null sind true!?
	//		alert(boolean);
			//Zahlen kleiner null: (mit komma oder ohne), auch relative häufigkeiten?
			if((textfeld<=1)&&(!isNaN(textfeld))){
				lösung = lösung/lösungsString[15];
				boolean = zahlenvergleichen (textfeld, lösung);
			}
		//	if(i==5){		alert(stringjo + " " + lösung + " " + boolean);}
			var farbe= window.feldfarbe;


			$("#vierfelderBox").children().eq(i).removeClass(farbe);
			//alert($("#vierfelderBox").children().eq(i).attr("class"));
			if(boolean) {

		//		$("#Lösungen").children().eq(0).append("stimmt");
		//		$("#Lösungen").css("background-color", farbe);<--------------------------------------------
				$("#vierfelderBox").children().eq(i).removeClass("black");
				$("#vierfelderBox").children().eq(i).addClass(farbe);
			//	$("#vierfelderBox").children().eq(i).css("background-color", farbe);
			}
			else{
			//	$("#vierfelderBox").children().eq(i).css("background-color","black");
			$("#vierfelderBox").children().eq(i).removeClass(farbe);
					$("#vierfelderBox").children().eq(i).addClass("black");
			//	alert("else!");
			}
  } //ende for-schleif
}


function baumDiagrammPrüfen(){
    // richtigen lösungsstring berechnen, finden:
	var zahl = window.aufgabenwahl;
  var string = window.lösungenVierfelder[zahl];
  var max = 0;
  var maxIndex =0;
	for(j=0;j<string[1].length;j++){
     var richtige = 0;
     for (i=0;i<36;i++){
		 		var string1= $("#mySVG").children().eq(i).text();
        var string2 = string[1][j][i];
				//textstrings vergleichen:
				if(i<6){
					 if (string1==string2)  {
	             richtige++;
	       		}
				}
				//wahrscheinlichkeiten vergleichen:
				else{
					var string1 = zahlUmwandeln(string1);
					var string3= $("#mySVG").children().eq(i+2).text();
					var string4 = string[1][j][i+2];
					if(i%3==0){
						 	if(string1/string3==string2/string4){
    						richtige++;
							}
							else if((string3=="")&&(string1==string2/string4)){
							  richtige++;
							}
						}
				}
    }
    if(richtige>max){
       max=richtige;
       maxIndex=j;
     }
  }
		// alert("ausgesuchter String:" + maxIndex + " weil er " + max + " richtige hat");
  var lösungsString = string[1][maxIndex];

	mitLösungsStringVergleichen(lösungsString);

}


function mitLösungsStringVergleichen(string){//alle falschen felder sollen schwarze umrandung bekommen.
	//Es gibt 36 Felder:
	for (i=0;i<36;i++){
		var zähler =$("#mySVG").children().eq(i).text(); //Eingabe im Baum  //stringjo
		var lösung=string[i]; //Musterlösung (ho)
		//Die ersten 6 sind Strings und sollen genau übereinstimmen, ansonsten falsch markiert werden.
		if(i<6){
			if(zähler==lösung){
				$("#mySVG").children().eq(i+36).css("stroke", "transparent");
			}
			else{
				$("#mySVG").children().eq(i+36).css("stroke", "red");
			}
		}
		//Wahrscheinlichkeitsfelder mit zahl oder Text:
		else {
			if(i%3==0){ //Zählerpositionen überprüfen, restliche zahlen sind überflüssig und werden hier berücksichtigt
		  	var rechteckNummer=i/3+46; //Position der zugehörigen Rechtecke.
				//NEnnerposition:
				var nenner =$("#mySVG").children().eq(i+2).text(); //Vorher:stringbo
				var nennerlös=string[i+2];					//vorher:stringgo
				//Echte Brüche:
				if((zähler!="")&&(nenner!="")){
				//hierfür müssen beide FElder beschrieben sein, also Brüche drin stehen!
					if(zähler/nenner==lösung/nennerlös){
							$("#mySVG").children().eq(rechteckNummer).css("stroke", "transparent");
					}else{
						$("#mySVG").children().eq(rechteckNummer).css("stroke", "red");
					}
				}//Wenn unterm Bruch nichts steht, aber  Zähler nicht leer ist:
				else if((zähler!="")&&(nenner=="")){
					//zahl ohne prozente und komma in punkte umgewandelt
					var zählerneu = zahlUmwandeln(zähler); //nun muss system dies als zahl erkennen
					// Zahlen:
					var bool = false;

					if(!isNaN(zählerneu)){
						var bool = zahlenvergleichen(zählerneu/1, lösung/nennerlös);
					}
					if(bool==true){
						$("#mySVG").children().eq(rechteckNummer).css("stroke", "transparent");
					}else{
					//	$("#mySVG").children().eq(rechteckNummer).css("fill", "red");
						$("#mySVG").children().eq(rechteckNummer).css("stroke", "red");
					}

				}


			}

		}


	}
}





//zahlen oder text vergleichen. boolean. zahlen mit prozenten erlaubt oder Kommazahlen. Komma wird soweit gerundet wie die eingabe ist.
function zahlenvergleichen(e, v){
	//alert(b + " " + v);
		var b= e;
		if(!isNaN(b)){
			if(b.toString().length>=5){
				b=b*100000;
				b=Math.round(b);
				b=b/100000;
				}
				//hier kommen nur kommazahlen hin!
				var string = b.toString().split('.');
				//Wenn kommazahl, dan muss lösungsstring gerundet werden:
				if(string[1]!=null){
					var nachkomma = string[1].toString().length; //länge der Eingabe/des textfeldes-inhalts
					nachkomma=Math.pow(10,nachkomma); //komma verschieben(bei 2 nachkommastellen ist dies 100)
					//Wenn die Lösung auch ne zahl ist soll diese auf gleiche länge gerundet werden:
					if(nachkomma<100){ //damit die zahl nicht zu  ungenau wird. mindestens 2 Nachkommastellen müssen übereinstimmen

						nachkomma=100;
					}
						if(!isNaN(v)){
							v = v*nachkomma;
							v=Math.round(v); //gibt nächste ganze zahl wieder
							v=v/nachkomma;
			//			alert(b + " " + v);
						}

				}
			}
	if(b==v){		return true;	}
	else{		return false;	}
}



function zahlUmwandeln(a){
		var b=a.toString();
		//Komma herausnehmen und mit Punkt ersetzen, falls vorhanden.

		if(b.indexOf(",")!=-1){
			var zahl=b.split(',',2);
			b="" + zahl[0] + "." + zahl[1];
		}
				//Prozente berücksichtigen und ggf abschneiden:
		var letztesZeichen=b.substring(b.length-1,b.length);
		if(letztesZeichen=="%"){
			b=b.substring(0,b.length-1);
			b="" + b/100;
		}

		if(b.indexOf("/")!=-1){
			var bruch = b.split("/",2);
			b = bruch[0] / bruch[1];
		}
		return b;
}

function feedback(boolean){
	if(boolean==true){
		var feedback=["Gut gemacht!","Nice!","Weiter so!", "das lässt sich sehen!", "Die nächste, bitte!","Simsalabim","Das stimmt!", "True story!"];

	}else if(boolean==false){
		var feedback = ["falsch gemacht!",
		"Ohjemine!", "Neeeeiiiin!", "Sicher?", "Da fällt dir was besseres ein...",
		"huuuch?", "Nö!", "Niemals!", "Das ist fast unmöglich, oder nicht?",
		"In einem anderen Universum stimmt das vielleicht!", "Ups!",
		"Das war knapp vorbei!", "Beim nächsten Mal wirds besser!",
		"Daneben getippt!","Das ist nicht wahr!",
		"Das stimmt nicht!", "Baby don't hurt me"];

	}
	var länge = feedback.length;

var x = Math.round(Math.random() * länge);


		$("#Lösungen").children().eq(0).text(feedback[x]);
}
