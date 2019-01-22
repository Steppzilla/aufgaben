


baumlayout();


//Baumdiagramm allgemeines Layout:
function baumlayout(){
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
//--------------------------------------------------------------------
}

//baumdiagramm felder anpassen wenn text größer oder kleiner
function feldAnpassen(zahl){
//Position und Text und Textlänge auslesen und speichern:
	var xposition = $("#mySVG").children().eq(zahl).attr("x");
	var textinhalt  = $("#mySVG").children().eq(zahl).text();
	var textlänge = textinhalt.length;
	if((textlänge==0)||(textlänge==1)){
		textlänge =2;
	}
	var textbreite = textlänge*11;
	//Neue Position bestimmen:
	var neuePosition = xposition -textbreite/2;
	//zugehöriges Rechteck neu setzen:
	 $("#mySVG").find("rect").eq(zahl).css("x",neuePosition);
	 $("#mySVG").find("rect").eq(zahl).css("width",textbreite);



	var pfad1 = $("#mySVG").find("path").eq(zahl).css("d");

	var altePos= pfad1.split(' ');
	var pfadNeu = altePos[0] +" "+ altePos[1]+ " "+ altePos[2] +" "+ altePos[3]+" "+ neuePosition+" " + altePos[5];
	$("#mySVG").find("path").eq(zahl).css("d", pfadNeu);

if((zahl==0)||(zahl==1)){
	//Die rechten pfade auch links anpassen:
		var neueStartPosition=parseInt(xposition)+parseInt(textbreite)/2;
		var pfad2 = $("#mySVG").find("path").eq(2*(zahl+1)).css("d");
		var altePosi= pfad2.split(' ');
		var pfadNeui = altePosi[0] +" "+ neueStartPosition + " "+ altePosi[2] +" "+ altePosi[3]+" "+ altePosi[4]+" " + altePosi[5];
		$("#mySVG").find("path").eq(2*(zahl+1)).css("d", pfadNeui);

		var pfad3 = $("#mySVG").find("path").eq(2*(zahl+1)+1).css("d");
		var altePosii= pfad3.split(' ');
		var pfadNeuii = altePosii[0] +" "+ neueStartPosition+ " "+ altePosii[2] +" "+ altePosii[3]+" "+ altePosii[4]+" " + altePosii[5];
		$("#mySVG").find("path").eq(2*(zahl+1)+1).css("d", pfadNeuii);
	}
}





    // click-funktionen für die Wahrscheinlichkeiten:------------------------------------------------------------------
    $("#mySVG").children().eq(48).click(function(){ 	clickBaum(6);				});
    $("#mySVG").children().eq(49).click(function(){		clickBaum(9);				});
    $("#mySVG").children().eq(50).click(function(){		clickBaum(12);			});
    $("#mySVG").children().eq(51).click(function(){		clickBaum(15);			});
    $("#mySVG").children().eq(52).click(function(){		clickBaum(18);			});
    $("#mySVG").children().eq(53).click(function(){		clickBaum(21);			});

    // Haupt-Click-Funktionen für die Ereignisse (Buchstaben):
    $("#mySVG").children().eq(36).click(function(){	clickBaum(0);				});
    $("#mySVG").children().eq(37).click(function(){	clickBaum(1);				});
    $("#mySVG").children().eq(38).click(function(){	clickBaum(2);			});
    $("#mySVG").children().eq(39).click(function(){	clickBaum(3);			});
    $("#mySVG").children().eq(40).click(function(){	clickBaum(4);			});
    $("#mySVG").children().eq(41).click(function(){	clickBaum(5);			});

    //click für pfad-Ergebnisse
    $("#mySVG").children().eq(54).click(function(){	clickBaum(24);				});
    $("#mySVG").children().eq(55).click(function(){	clickBaum(27);				});
    $("#mySVG").children().eq(56).click(function(){	clickBaum(30);			});
    $("#mySVG").children().eq(57).click(function(){	clickBaum(33);		});

    //Haupt-Funktion: erstellt INPUT_FENSTER und speichert es bei ENTER im jeweiligen FEld; ------------------------------
    function clickBaum(zähler){

    	//Container-DOM-Standpunkt "Pfad" speichern (Div):
    	var container = $("#svgContainer");
    	//x-position der angeklickten Box auslesen:
    	 xpos =$("#mySVG").children().eq(zähler).attr("x");
       ypos =$("#mySVG").children().eq(zähler).attr("y");

    	 // altes input-Fenster löschen.
    		$("input").remove();
    		//Breite und höhe des Fensters ermitteln
    		var breite =$("#mySVG").width();
    		//var höheContainer =$("#svgContainer").height();
        var höhesvg = $("#mySVG").height();
    		//input position ermitteln: (-10 Korrektur) 550 ist die breite der Viewbox, 320 höhe
    		var position1 = breite*xpos/svgWidth-5;
    		var position2 =  höhesvg*ypos/svgHeight +10;

    		//Eingabefeld erstellen + positionieren:
    		var text1	= "<input type='text' class='input' size='4' id='inputt'>" ;
    		container.append(text1);

        var input = $("#inputt");
    		input.css("width", 30);
    		input.css("height", 25);
    		input.css("position", "absolute");
    		input.css("left", +position1);
    		input.css("top", position2);

    		// Global die zählernummer speichern (für resize)
         window.elementNummer = zähler;

    		if (zähler >= 6){
    				input.css("height", 30);
    				input.css("top", position2);
    			}
    			input.focus();

    			$("#inputt").keypress(
    				function(e) {
    						if (e.keyCode == 13){

                  //Eingabe-Wert auslesen aus dem inputfeld,feld löschen.
    							var textUser =$("#inputt").val();
    							$("input").remove();
									if(textUser==""){

									}
									else{
                  //Wahrscheinlichkeiten/prob-Felder anders behandeln:
									var nummer = zähler; //foreign
                  if (zähler>=6){
										var nummer = 6+(zähler-6)/3; //foreign

            			     // mein string : textUser  spalten  bei "/"
    					  		   var wörter = textUser.split('/',2); //
                       var ypos = $("#mySVG").children().eq(zähler).attr("y");
                       var n=$("#mySVG").children().eq(zähler+2).html();
                       var z=$("#mySVG").children().eq(zähler).html();
                       //Wenn nur ein Wort eingetippt wurde: (und/oder keins)
                        if ((wörter[1] == null)||(wörter[0]=="")){
                          if(n!=""){            //alert("vorher 2, jetzt 1");
    											   ypos=ypos-10+20;
                          }     else{// alert("vorher leer, jetzt eins o. keins.");
                            ypos =   ypos;
                            //    $("#mySVG").children().eq(zähler).attr("y")-10+20;
                          }
                        $("#mySVG").children().eq(zähler+1).hide();
                        $("#mySVG").children().eq(zähler+2).empty();
                        // Wenn zwei Wörter eingetippt werden (mit Schrägstrich):
    								    } else{
                      //Bruchstrich + Nenner einblenden:
                      $("#mySVG").children().eq(zähler+1).text("__");
                     $("#mySVG").children().eq(zähler+1).show();
                      $("#mySVG").children().eq(zähler+2).show();

                      if(n!=""){
                          //alert(" vorher 2, jetzt 2 angaben rein");
                          ypos =ypos;
                        }else {
                        //alert("vorher 1, jetzt zwei");      //vorher 1 jetzt 2 landet auch hier!
                          ypos =ypos-10;
                        }
                        //else{
                        //    ypos =ypos;
                        //}
                    }

                    // bisherigen Inhalt löschen:
                    $("#mySVG").children().eq(zähler).empty();
                //    alert("Inhalt: " + $("#mySVG").children().eq(zähler).html())

                    $("#mySVG").children().eq(zähler).attr("y",ypos);

                   $("#mySVG").children().eq(zähler).text(wörter[0]);
    								$("#mySVG").children().eq(zähler+2).text(wörter[1]);


    							}// if zähler>6 ende
                  else{


                    $("#mySVG").children().eq(zähler).attr("y",ypos);
                    $("#mySVG").children().eq(zähler).text(textUser);


                    feldAnpassen(zähler);

                  }
										$("#mySVG").find("foreignObject").eq(nummer).hide();//foreign ausblenden

                  baumDiagrammPrüfen();

    						} // if-"Enter pressed"- ende
							}//Eingabe nicht leer
    					} // function-ende
    				); //keypress ende
    } //function click-baum ende;
