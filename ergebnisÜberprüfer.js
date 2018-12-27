
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
	//nicht übereinstimmende Felder bekommen einen scharzen Text-hintergrund (im p-"Kind");
	for(i=1; i<16;i++)     {
      var stringjo = $("#vierfelderBox").children().eq(i).text();//besser:intro.text?
			var stringbo = lösungsString[i];
		 	//weiterhin überprüft:
		 	var boolean = zahlenvergleichen (stringjo, stringbo);
			//alert(stringjo + " " + stringbo);
		 	if(boolean) {
			 	$("#vierfelderBox").children().eq(i).children().eq(0).css("background-color", "transparent");
			}else{
        $("#vierfelderBox").children().eq(i).children().eq(0).css("background-color","black");
				//Kommazahlen:
				if((stringjo<=1)&&(!isNaN(stringjo))){
					stringbo = stringbo/lösungsString[15];
					var boolean = zahlenvergleichen (stringjo, stringbo);
					if(boolean) {
						$("#vierfelderBox").children().eq(i).children().eq(0).css("background-color", "transparent");
					}else{
						$("#vierfelderBox").children().eq(i).children().eq(0).css("background-color","black");
					}
				}
			}
  } //ende for-schleif
}

//zahlen oder text vergleichen. boolean. zahlen mit prozenten erlaubt oder Kommazahlen. Komma wird soweit gerundet wie die eingabe ist.
function zahlenvergleichen(e, v){
		var b=zahlUmwandeln(e); //dürfte string als String belassen. ungefährlich. Zahlen sind immer im format 14.5 gespeichert prozente und kommata werden umgewandelt.
		if(!isNaN(b)){
				//hier kommen nur kommazahlen hin!
			var string = b.split('.');
			//Wenn kommazahl, dan muss lösungsstring gerundet werden:
			if(string[1]!=null){
				var nachkomma = string[1].length; //länge der Eingabe/des textfeldes-inhalts
				nachkomma=Math.pow(10,nachkomma); //komma verschieben(bei 2 nachkommastellen ist dies 100)
				//Wenn die Lösung auch ne zahl ist soll diese auf gleiche länge gerundet werden:
				if(!isNaN(v)){
					v = v*nachkomma;
					v=Math.round(v); //gibt nächste ganze zahl wieder
					v=v/nachkomma;
					alert(b + " " + v);
				}
			}
		}
	if(b==v){		return true;	}
	else{		return false;	}
}

function baumDiagrammPrüfen(){
    // richtigen lösungsstring berechnen, finden:
	var zahl = window.aufgabenwahl;
  var string = lösungenVierfelder[zahl];
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
	//	 alert("ausgesuchter String:" + maxIndex + " weil er " + max + " richtige hat");
  var lösungsString = string[1][maxIndex];
  // mit richtigem lösungsstring vergleichen und ggf. schwarze Rechtecke einfügen.
  for (i=0;i<36;i++){
    var stringjo =$("#mySVG").children().eq(i).text();
    var stringho=lösungsString[i];
    //die 6 mittelfelder sind einfacher zu prüfen:
    if(i<6){
      if(stringjo==stringho){
  			$("#mySVG").children().eq(i+36).css("stroke", "transparent");
  		}
  		else{
  			$("#mySVG").children().eq(i+36).css("stroke", "black");
  		}
    }
    // wenn wahrscheinlichkeit:
    else{
      var rechteckNummer=i/3+46;
			//nur jedes 3. feld prüfen, mehr ist überflüssig
      if(i%3==0){
      	var stringbo =$("#mySVG").children().eq(i+2).text();
      	var stringgo=lösungsString[i+2];
				if((stringjo!="")&&(stringbo!="")){
				//hierfür müssen beide FElder beschrieben sein, also Brüche drin stehen!
  				if(stringjo/stringbo==stringho/stringgo){
   						$("#mySVG").children().eq(rechteckNummer).css("stroke", "transparent");
  				}else{
  					$("#mySVG").children().eq(rechteckNummer).css("stroke", "black");
					}
				}
				//Wenn das untere  Bruchfeld leer ist:
				else if ((stringjo!="")&&(stringbo=="")){
					//zahl ohne prozente und komma in punkte umgewandelt:
				 	var stringneu = zahlUmwandeln(stringjo);
					//ggf komma in punkt umwandeln:
					//		alert(stringneu);
					if(stringneu/1==stringho/stringgo){
						$("#mySVG").children().eq(rechteckNummer).css("stroke", "transparent");
					}else{
						$("#mySVG").children().eq(rechteckNummer).css("stroke", "black");
					}
				}
      }
    }//Ende Wahrscheinlichkeiten else
  }
}

function zahlUmwandeln(a){

		var b=a;
		//Komma herausnehmen und mit Punkt ersetzen, falls vorhanden.
		var zahl=b.split(',',2);
		if(zahl[1]!=null){
			b=zahl[0] + "." + zahl[1];
		}
		//Prozente berücksichtigen und ggf abschneiden:
		var letztesZeichen=b.substring(b.length-1,b.length);
		if(letztesZeichen=="%"){
			b=b.substring(0,b.length-1);
			b=b/100;
		}
		return b;
}
