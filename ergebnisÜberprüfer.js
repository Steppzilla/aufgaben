
function vierfelderTafelPrüfen()
{
			var string = a1Anzahlen();
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
							       if(stringjo == stringbo)           {
							             $("#vierfelderBox").children().eq(i).children().eq(0).css("background-color", "transparent");
					           }else      {
                        $("#vierfelderBox").children().eq(i).children().eq(0).css("background-color","black");
					           }
                } //ende for-schleif
}
function baumDiagrammPrüfen(){
    // richtigen lösungsstring berechnen, finden:
    		var string = a1Anzahlen();
        var max = 0;
        var maxIndex =0;
	         for(j=0;j<string[1].length;j++){
             var richtige = 0;
             for (i=0;i<36;i++){
               var string1= $("#mySVG").children().eq(i).text();
               var string2 = string[1][j][i];
               if (string1==string2)  {
                    richtige++;
              }
             }
             if(richtige>max){
               max=richtige;
               maxIndex=j;
             }
           }
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
										//zahl im strinigneu speichern.
											 var stringneu = stringjo;
											 	//ggf komma in punkt umwandeln:
											 var zahl = stringjo.split(',',2); //
											 	//wenn zahl hinterm komma abgespalten wird, dann mit punkt hinzufügen.
											 if(zahl[1]!=null){
											 			 stringneu = zahl[0] + "." + zahl[1];
													}
													// nach dem split: Prozente berücksichtigen.
											var prozentZeichen=stringneu.substring(stringneu.length-1,stringneu.length);
											if(prozentZeichen=="%"){
												stringneu = stringneu.substring(0,stringneu.length-1);
												stringneu = stringneu/100;
											}
											alert(stringneu);
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
