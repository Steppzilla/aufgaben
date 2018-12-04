var elementNummer;
var svgWidth =550;
  var svgHeight =320;


$(window).bind('resizeEnd',function(){
  //alert(elementNummer);
  var breite =$("#mySVG").width();
  var höhe =$("#mySVG").height();

    var xpos = $('#mySVG').children().eq(elementNummer).attr("x")
    var ypos = $('#mySVG').children().eq(elementNummer).attr("y")
  //Breite und höhe des Fensters ermitteln

  //position ermitteln: (-10 Korrektur) 550 ist die breite der Viewbox, 320 höhe
  var position1 = breite*xpos/550 - 10;
  var position2 = höhe*ypos/320*0.98  -16;


		// box neu positionieren:
		$('#inputt').css("left", position1);
		$('#inputt').css("top", -höhe + position2);
});

$(window).resize(function() {
      if(this.resizeTO) clearTimeout(this.resizeTO);
      	this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
      }, 500);
});

// BAUM GRUNDSTRUKTUR:
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
	       myProbRect(i*6+4);
    }
    for(i=0;i<4;i++){
         pfadProb(i);
    }
//Pfad-Ergebniss-Rechtecke:
    myProbRect(42);
    myProbRect(45);
    myProbRect(48);
    myProbRect(51);



    //Layout
    $("#mySVG").children().css("font-size","20");
    $("text").css("fill","#D6E9FE");
    $("#mySVG").children().css("text-anchor","middle");
    //rechteck-Layout:
  $("rect").css("stroke","#D6E9FE");
  $("rect").css("fill","none");
  $("rect").css("rx",5);
  $("rect").css("ry",5);


    // click-funktionen für die Wahrscheinlichkeiten:
    $("#mySVG").children().eq(36).click(function(){ 	clickBaum(3);				});
    $("#mySVG").children().eq(37).click(function(){		clickBaum(9);				});
    $("#mySVG").children().eq(38).click(function(){		clickBaum(15);			});
    $("#mySVG").children().eq(39).click(function(){		clickBaum(21);			});
    $("#mySVG").children().eq(40).click(function(){		clickBaum(27);			});
    $("#mySVG").children().eq(41).click(function(){		clickBaum(33);			});

    // Haupt-Click-Funktionen für die Ereignisse (Buchstaben):
    $("#mySVG").children().eq(1).click(function(){	clickBaum(0);				});
    $("#mySVG").children().eq(7).click(function(){	clickBaum(6);				});
    $("#mySVG").children().eq(13).click(function(){	clickBaum(12);			});
    $("#mySVG").children().eq(19).click(function(){	clickBaum(18);			});
    $("#mySVG").children().eq(25).click(function(){	clickBaum(24);			});
    $("#mySVG").children().eq(31).click(function(){	clickBaum(30);			});

    //click für pfad-Ergebnisse
    $("#mySVG").children().eq(54).click(function(){	clickBaum(42);				});
    $("#mySVG").children().eq(55).click(function(){	clickBaum(45);				});
    $("#mySVG").children().eq(56).click(function(){	clickBaum(48);			});
    $("#mySVG").children().eq(57).click(function(){	clickBaum(51);		});

    //Haupt-Funktion: erstellt INPUT_FENSTER und speichert es bei ENTER im jeweiligen FEld;
    function clickBaum(zähler){
    	//Container-DOM-Standpunkt "Pfad" speichern (Div):
    	var container = $("#svgContainer");
    	//x-position der angeklickten Box auslesen:
    	 xpos =$("#mySVG").children().eq(zähler).attr("x");
        ypos =$("#mySVG").children().eq(zähler).attr("y");

    	 // altes input-Fenster löschen (per ID).
    		//$("inputt").remove();
    		$("input").remove();
    		// angeklicktes Feld löschen:
    		$("#mySVG").children().eq(zähler).empty();
    		//Breite und höhe des Fensters ermitteln
    		var breite =$("#mySVG").width();
    		var höhe =$("#mySVG").height();
    		//input position ermitteln: (-10 Korrektur) 550 ist die breite der Viewbox, 320 höhe
    		var position1 = breite*xpos/550 - 10;
    		var position2 = höhe*ypos/320*0.98  -26;

    		//Eingabefeld erstellen + positionieren:
    		var text1	= "<input type='text' class='input' size='4' id='inputt'>" ;
    		container.append(text1);

        var input = $("#inputt");
    		input.css("width", 20);
    		input.css("height", 20);
    		input.css("position", "relative");
    		input.css("left", +position1);
    		input.css("top", -höhe+position2);

    		// Global die zählernummer speichern (für resize)
         window.elementNummer = zähler;

    		if ((zähler == 3)||(zähler == 9)||(zähler == 15)||(zähler == 21)||(zähler == 27)||(zähler == 33)
        ||(zähler == 42)||(zähler==45)||(zähler==48)||(zähler==51)){
    				input.css("height", 30);
    				input.css("top", -höhe + position2);
    			}
    			input.focus();

    			$("#inputt").keypress(
    				function(e) {
    						if (e.keyCode == 13){

                  //Eingabe-Wert auslesen aus dem inputfeld, feld löschen und Eingabe ins entsprechende Feld schreiben:
    							var textUser =$("#inputt").val();
    							$("input").remove();
                  $("#mySVG").children().eq(zähler).attr("y",ypos);
    							$("#mySVG").children().eq(zähler).text(textUser);
                  //Wahrscheinlichkeiten/prob-Felder anders behandeln:
    							if ((zähler == 3)||(zähler == 9)||(zähler == 15)||(zähler == 21)||(zähler == 27)||(zähler == 33)
                  ||(zähler == 42)||(zähler==45)||(zähler==48)||(zähler==51)){


              			// mein string : textUser  spalten  bei "/"
    								$("#mySVG").children().eq(zähler+1).show();
    								$("#mySVG").children().eq(zähler+2).show();
    					  		var wörter = textUser.split('/',2); // er splittet maximal 2 wörter (alles nach dem 2. slash ist weg)



    								if (wörter[1] == null){
    										//	$("#mySVG").children().eq(zähler).text(wörter[0]);

                          if($("#mySVG").children().eq(zähler+2).html()!=''){
                                    alert("vorher 2, jetzt 1");
    											          ypos = $("#mySVG").children().eq(zähler).attr("y")-10+20;
                          }else{
                            alert("vorher 1 jetzt 1! ")
                          	       ypos = $("#mySVG").children().eq(zähler).attr("y");
                          }
                      $("#mySVG").children().eq(zähler+1).hide();
                      $("#mySVG").children().eq(zähler+2).empty();


    								}else{
                  //2 Eingaben mit Schrägstrich gemacht:
                  //Entweder vorher war das 2. feld leer:
                  $("#mySVG").children().eq(zähler+1).show();
                  $("#mySVG").children().eq(zähler+2).show();

                      if($("#mySVG").children().eq(zähler+2).html()!=''){

                          alert(" vorher 1, jetzt 2 angaben rein" + "inhalt: " + $("#mySVG").children().eq(zähler+2).html()); // er denkt es waren 2, obwohl zweites feld leer ist...
                          ypos =$("#mySVG").children().eq(zähler).attr("y");
                          //$("#mySVG").children().eq(zähler).attr("y")-10;
                        }
                          else{
                            alert("vorher 2, jetzt zwei");      //vorher 1 jetzt 2 landet auch hier!
                              ypos =$("#mySVG").children().eq(zähler).attr("y")-10;
                          }
                    }

                    $("#mySVG").children().eq(zähler).text(wörter[0]);
    								$("#mySVG").children().eq(zähler+2).text(wörter[1]);
                    $("#mySVG").children().eq(zähler).attr("y",ypos);

    							}// if 3,9, etc ende
    						} // if-ende
    					} // function-ende
    				); //keypress ende
    } //function click-baum ende;




function pfadProb(number){
  var abschnittsbreite = window.svgWidth;
  var abschnittshöhe = window.svgHeight/4;

//neue Segmente erstellen:

  var pfadProb1= document.createElementNS(svgNS,"text");
  var pfadProb2= document.createElementNS(svgNS,"text");
  var pfadProb3= document.createElementNS(svgNS,"text");

  pfadProb1.setAttributeNS(null,"x",450);
  pfadProb1.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number));

  pfadProb2.setAttributeNS(null,"x",450);
  pfadProb2.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number));

  pfadProb3.setAttributeNS(null,"x",450);
  pfadProb3.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number)+23);

  var textNode1 = document.createTextNode("P()");
  var textNode2 =document.createTextNode("__");
  var textNode3 =document.createTextNode("Nenner");

  pfadProb1.appendChild(textNode1);
  pfadProb2.appendChild(textNode2);
  pfadProb3.appendChild(textNode3);

  // der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
  document.getElementById("mySVG").appendChild(pfadProb1);
  document.getElementById("mySVG").appendChild(pfadProb2);
  document.getElementById("mySVG").appendChild(pfadProb3);



}

// Bausteine des baumdiagramms : Rechtecke, buchstaben, text, pfade...:

    function myProbRect(zähler)
    {
    	xposZ =$("#mySVG").children().eq(zähler).attr("x") - 20;
    	yposZ =$("#mySVG").children().eq(zähler).attr("y") -20 ;


    	//xposN =$("#mySVG").children().eq(nenner).attr("x") -10 ;
    	//yposN =$("#mySVG").children().eq(nenner).attr("y") -10 ;

    	var myRect = document.createElementNS(svgNS,"rect");

    	myRect.setAttributeNS(null,"x",xposZ);
    	myRect.setAttributeNS(null,"y",yposZ);

    	myRect.setAttributeNS(null,"width",40);
    	myRect.setAttributeNS(null,"height",46);

    	document.getElementById("mySVG").appendChild(myRect);
    }

    function myProbQ(text1,text2,number){
    	var myProbQ1= document.createElementNS(svgNS,"text");
    	var myProbQ2= document.createElementNS(svgNS,"text");
    	var myProbQ3= document.createElementNS(svgNS,"text");

    	//	myProbQ1.setAttributeNS(null,"id","myprob");

    	if(number==0){
    	myProbQ1.setAttributeNS(null,"x",window.svgWidth/6);
    	myProbQ1.setAttributeNS(null,"y",window.svgHeight/4);
    	myProbQ2.setAttributeNS(null,"x",window.svgWidth/6);
    	myProbQ2.setAttributeNS(null,"y",window.svgHeight/4);
    	myProbQ3.setAttributeNS(null,"x",window.svgWidth/6);
    	myProbQ3.setAttributeNS(null,"y",window.svgHeight/4+22);
    	}
    	if(number==1){
    		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6);
    		myProbQ1.setAttributeNS(null,"y",window.svgHeight/4*3);
    		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6);
    		myProbQ2.setAttributeNS(null,"y",window.svgHeight/4*3);
    		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6);
    		myProbQ3.setAttributeNS(null,"y",window.svgHeight/4*3+22);
    	}
    	if(number==2){
    		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2);
    		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2);
    		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+22);
    	}
    	if(number==3){
    		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*2);
    		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*2);
    		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*2+22);
    	}
    	if(number==4){
    		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3);
    		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3);
    		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3+22);
    	}
    	if(number==5){
    		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*5);
    		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*5);
    		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
    		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*5+22);
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

    			if(number==0){
    			myText.setAttributeNS(null,"x",window.svgWidth/3);
    			myText.setAttributeNS(null,"y",window.svgHeight/4+10);
    			}
    			if(number==1){
    				myText.setAttributeNS(null,"x",window.svgWidth/3);
    				myText.setAttributeNS(null,"y",window.svgHeight/4*3+10);
    			}
    			if(number==2){
    				myText.setAttributeNS(null,"x",window.svgWidth/3*2);
    				myText.setAttributeNS(null,"y",window.svgHeight/4*0.5+10);
    			}
    			if(number==3){
    				myText.setAttributeNS(null,"x",window.svgWidth/3*2);
    				myText.setAttributeNS(null,"y",window.svgHeight/4*1.5+10);
    			}
    			if(number==4){
    				myText.setAttributeNS(null,"x",window.svgWidth/3*2);
    				myText.setAttributeNS(null,"y",window.svgHeight/4*2.5+10);
    			}
    			if(number==5){
    				myText.setAttributeNS(null,"x",window.svgWidth/3*2);
    				myText.setAttributeNS(null,"y",window.svgHeight/4*3.5+10);
    			}
    			// der eigentliche TExt wird erstellt und dann der Node angehängt:
    			var textNode = document.createTextNode(text);
    			myText.appendChild(textNode);
    			// der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
    			document.getElementById("mySVG").appendChild(myText);
    	}

  	function myRect(number)	{
    		var zähler = number*6;  //Buchstabenpositionen auslesen
    		var xPos = $("#mySVG").children().eq(zähler).attr("x") ;
    		var yPos = $("#mySVG").children().eq(zähler).attr("y") - 20;
        var feldinhalt = $("#mySVG").children().eq(zähler).text();
        var wortbreite = feldinhalt.length;

    		var myRect = document.createElementNS(svgNS,"rect");

    		myRect.setAttributeNS(null,"x",xPos-wortbreite*22/2);
    		myRect.setAttributeNS(null,"y",yPos);

    		myRect.setAttributeNS(null,"width",wortbreite*22);
    		myRect.setAttributeNS(null,"height",25);

    		document.getElementById("mySVG").appendChild(myRect);
    	}

    function myPath(number){
    		//objecte in ein Array schreiben:
    		var pfad = document.createElementNS(svgNS,"path");
    		pfad.setAttributeNS(null,"stroke","#D6E9FE");


        var start1 = window.svgWidth/20;
        var ende1 = $("#mySVG").children().eq(1).attr("x");
        var ende2 = $("#mySVG").children().eq(13).attr("x");
//$("#mySVG").children().eq(1).css("fill", "yellow");
        var start2b= $("#mySVG").children().eq(1).attr("x");
        var start2a = $("#mySVG").children().eq(1).attr("width");
        var start2 = parseInt(start2a) + parseInt(start2b);  //ungenaue Addition aber reicht hier....


    		//Linien Koordinaten zuweisen:
        var d1 = "M " +  start1 + " " + window.svgHeight/2   + " L " + ende1 + " " + window.svgHeight/4;
        var d2 = "M " + start1 + " " + window.svgHeight/2 + " L " + ende1 + " " + window.svgHeight/4*3;
        var d3 = "M " +  start2 +  " " + window.svgHeight/4 + " L " + ende2 + " " +window.svgHeight/4*0.5;
        var d4 = "M " +  start2 +  " " + window.svgHeight/4 + " L " + ende2 + " " +window.svgHeight/4*1.5;
        var d5 = "M " +  start2 +  " " + window.svgHeight/4*3 + " L " + ende2 + " " +window.svgHeight/4*2.5;
        var d6= "M " +  start2 +  " " + window.svgHeight/4*3 + " L " + ende2 + " " +window.svgHeight/4*3.5;

    		if(number==0){pfad.setAttributeNS(null,"d", d1);		}
    		if(number==1){pfad.setAttributeNS(null,"d", d2);		}
    		if(number==2){pfad.setAttributeNS(null,"d", d3);		}
    		if(number==3){pfad.setAttributeNS(null,"d", d4);		}
    		if(number==4){pfad.setAttributeNS(null,"d", d5);		}
    		if(number==5){pfad.setAttributeNS(null,"d", d6);		}
    		//Linien ins Dokument einfügen:
    		document.getElementById("mySVG").appendChild(pfad);

    	}
    }
