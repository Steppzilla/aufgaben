
function vierfelderTafelPrüfen()
{			var zahl = window.aufgabenwahl;
			var string = lösungenVierfelder[zahl];
//			alert(zahl + " " + string[0][0]);
      var max = 0;
      var maxIndex =0;
							for(j=0;j<string[0].length;j++){
                  var richtige=0;
                  for (i=0; i<16;i++)     {
							             var string1 = $("#vierfelderBox").children().eq(i).text();
							             var string2 = string[0][j][i];
                           if (string1==string2)  {
                                richtige++;
                          }
                  }
                  if(richtige>max){
                    max=richtige;
                    maxIndex=j;
                  }
                } //ende for-schleife
						//	  var maxus= indexOfMax(richtigeArray);    //nummer des richtigen Strings
                var lösungsString = string[0][maxIndex];




						    for(i=0; i<16;i++)     {
            	       var stringjo = $("#vierfelderBox").children().eq(i).text();
										 	var stringbo = lösungsString[i];
										 //weiterhin überprüft:
										 var boolean = zahlenvergleichen (stringjo, stringbo,i);
					//			 		alert(stringjo + " " + stringbo);
							       if(boolean)           {
							             $("#vierfelderBox").children().eq(i).children().eq(0).css("background-color", "transparent");
					           }else      {
                        $("#vierfelderBox").children().eq(i).children().eq(0).css("background-color","black");
					           }
                } //ende for-schleif
}


function zahlenvergleichen(e, v,i){

		var b=zahlUmwandeln(e); //dürfte string als String belassen. ungefährlich. Zahlen sind immer im format 14.5 gespeichert prozente und kommata werden umgewandelt.

		if(!isNaN(b)){
			var string = b.split('.');
			//Wenn kommazahl:
			if(string[1]!=null){
				var nachkomma = string[1].length;
				nachkomma=Math.pow(10,nachkomma);
				if(!isNaN(v)){

				v = v*nachkomma;
				v=Math.round(v);
				v=v/nachkomma;
	}
	}

}

	if(b==v){
		return true;
	}
	else{
		return false;
	}

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
