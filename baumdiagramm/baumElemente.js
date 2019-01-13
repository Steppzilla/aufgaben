var elementNummer;
var svgWidth =520;
var svgHeight =320;
var svghöhe=$("#mySVG").height();


// BAUM GRUNDSTRUKTUR;
svgMalen();


function svgMalen(){

	var svgNS = "http://www.w3.org/2000/svg";
  //GrundTExte, die ersten 6 Segmente, sind jetzt im HTMl, daher hier ausgeblendet:
  //  for(i=0;i<6;i++){
 	//   myText("A",i);
  //  }

  //Texte:
  //for(i=0;i<6;i++){
  //     myProbQ("5", "7", i);}
  myProbQ(" \\( P(A) \\)", "", 0);
  myProbQ("\\( P( \\bar{A}) \\)", "", 1);
  myProbQ("\\( P_{A}(B) \\)", "", 2);
  myProbQ("\\( P_{A}( \\bar{B}) \\)", "",3);
  myProbQ("\\( P_{ \\bar{A} }(B) \\)", "", 4);
  myProbQ("\\( P_{ \\bar{A} }( \\bar{B}) \\)", "", 5);
  $("#mySVG").children().eq(7).hide();
  $("#mySVG").children().eq(10).hide();
  $("#mySVG").children().eq(13).hide();
  $("#mySVG").children().eq(16).hide();
  $("#mySVG").children().eq(19).hide();
  $("#mySVG").children().eq(22).hide();
  //for(i=0;i<4;i++){
  //  pfadProb(i);}
  pfadProb("A","B",0);
  pfadProb("A", '\\( \\bar{B} \\)',1);
  pfadProb("!A","B",2);
  pfadProb("!A","!B",3);
  $("#mySVG").children().eq(25).hide();
  $("#mySVG").children().eq(28).hide();
  $("#mySVG").children().eq(31).hide();
  $("#mySVG").children().eq(34).hide();
  //REchtecke (anklickbar):
  for(i=0;i<6;i++){
    myRect(i); }
    //Pfade auf jedenFall erst nach den Texten+ihren Rechtecken erstlelen:(da sie sich daran anpassen)
  for(i=0;i<6;i++){ myPath(i);
  }
  for(i=0;i<10;i++){
	   myProbRect(6+i*3); //Der zähler ist die zugehörige Pfad-nummer der Zahl in dem Rechteck.
  }
	test(0);
	test(1);
	test(2);
	test(3);
	test(4);
	test(5);
	test(6);
	test(7);
	test(8);
	test(9);
	test(10);
	test(11);
	test(12);
	test(13);
	test(14);
	test(15);


	function test(zahl){
		var foreign = document.createElementNS(svgNS,"foreignObject");

		if(zahl==0){
			foreign.setAttributeNS(null,"x",180);
			foreign.setAttributeNS(null,"y",50);
		foreign.setAttributeNS(null,"id","Ast0");

		var textNode = document.createTextNode("	\\( A \\)");
	}else		if(zahl==1){
			foreign.setAttributeNS(null,"x",180);
			foreign.setAttributeNS(null,"y",210);
					foreign.setAttributeNS(null,"id","Ast0");
		var textNode = document.createTextNode("	\\( \\bar{A}	\\)");
	}else		if(zahl==2){
			foreign.setAttributeNS(null,"x",360);
			foreign.setAttributeNS(null,"y",10);
					foreign.setAttributeNS(null,"id","Ast0");
		var textNode = document.createTextNode("	\\( 	B   \\)");
	}else		if(zahl==3){
			foreign.setAttributeNS(null,"x",360);
			foreign.setAttributeNS(null,"y",90);
				foreign.setAttributeNS(null,"id","Ast0");
		var textNode = document.createTextNode("	\\( 	\\bar{B}		\\)");
	}else		if(zahl==4){
			foreign.setAttributeNS(null,"x",360);
			foreign.setAttributeNS(null,"y",170);
				foreign.setAttributeNS(null,"id","Ast0");
		var textNode = document.createTextNode("	\\( B\\)");
	}else		if(zahl==5){
			foreign.setAttributeNS(null,"x",360);
			foreign.setAttributeNS(null,"y",250);
				foreign.setAttributeNS(null,"id","Ast0");
		var textNode = document.createTextNode("	\\(\\bar{B}\\)");
	}


	else		if(zahl==6){
			foreign.setAttributeNS(null,"x",window.svgWidth/6-20);
			foreign.setAttributeNS(null,"y",window.svgHeight/4-30);
			foreign.setAttributeNS(null,"id","Ast1");
		var textNode = document.createTextNode("	\\( P(A)\\)");
		}
		else if(zahl==7){
			foreign.setAttributeNS(null,"x",window.svgWidth/6-20);
			foreign.setAttributeNS(null,"y",window.svgHeight/4*3-30);
			foreign.setAttributeNS(null,"id","Ast1");
				var textNode = document.createTextNode("	\\( P(\\bar{A})\\)");



		}else if(zahl==8){
			foreign.setAttributeNS(null,"x",window.svgWidth/6*3-30);
			foreign.setAttributeNS(null,"y",-5);
			foreign.setAttributeNS(null,"id","Ast2");
				var textNode = document.createTextNode("	\\( P_{A}(B)\\)");
		}else if(zahl==9){
			foreign.setAttributeNS(null,"x",window.svgWidth/6*3-30);
			foreign.setAttributeNS(null,"y",100);
			foreign.setAttributeNS(null,"id","Ast2");
				var textNode = document.createTextNode("	\\( P_{A} (\\bar{B})\\)");
		}else if(zahl==10){
			foreign.setAttributeNS(null,"x",window.svgWidth/6*3-30);
			foreign.setAttributeNS(null,"y",155);
			foreign.setAttributeNS(null,"id","Ast2");
				var textNode = document.createTextNode("	\\( P_{\\bar{A}}(B)\\)");
		}else if(zahl==11){
			foreign.setAttributeNS(null,"x",window.svgWidth/6*3-30);
			foreign.setAttributeNS(null,"y",260);
			foreign.setAttributeNS(null,"id","Ast2");
				var textNode = document.createTextNode("	\\( P_{\\bar{A}}(\\bar{B})\\)");


		}else 	if(zahl==12){
				foreign.setAttributeNS(null,"x",window.svgWidth/6*5-30);
				foreign.setAttributeNS(null,"y",10);
				foreign.setAttributeNS(null,"id","Ast3");
			var textNode = document.createTextNode("	\\( P(A \\cap B) \\)");
		}else			if(zahl==13){
				foreign.setAttributeNS(null,"x",window.svgWidth/6*5-30);
				foreign.setAttributeNS(null,"y",90);
				foreign.setAttributeNS(null,"id","Ast3");
			var textNode = document.createTextNode("	\\( P(A \\cap \\bar{B})\\)");
		}else	if(zahl==14){
				foreign.setAttributeNS(null,"x",window.svgWidth/6*5-30);
				foreign.setAttributeNS(null,"y",170);
				foreign.setAttributeNS(null,"id","Ast3");
			var textNode = document.createTextNode("	\\( P(\\bar{A} \\cap B)\\)");
		}else 	if(zahl==15){
				foreign.setAttributeNS(null,"x",window.svgWidth/6*5-30);
				foreign.setAttributeNS(null,"y",250);
				foreign.setAttributeNS(null,"id","Ast3");
			var textNode = document.createTextNode("	\\( P(\\bar{A} \\cap \\bar{B})\\)");
			}


		foreign.appendChild(textNode);

		document.getElementById("mySVG").appendChild(foreign);

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






  function myProbQ(text1,text2,number){
      	var myProbQ1= document.createElementNS(svgNS,"text");
      	var myProbQ2= document.createElementNS(svgNS,"text");
      	var myProbQ3= document.createElementNS(svgNS,"text");

      	//	myProbQ1.setAttributeNS(null,"id","myprob");

      	if(number==0){
      	myProbQ1.setAttributeNS(null,"x",window.svgWidth/6);
      	myProbQ1.setAttributeNS(null,"y",window.svgHeight/4+10);
      	myProbQ2.setAttributeNS(null,"x",window.svgWidth/6);
      	myProbQ2.setAttributeNS(null,"y",window.svgHeight/4+1.5);
      	myProbQ3.setAttributeNS(null,"x",window.svgWidth/6);
      	myProbQ3.setAttributeNS(null,"y",window.svgHeight/4+22);

        myProbQ1.setAttributeNS(null, "id", "baumStamm");
        myProbQ2.setAttributeNS(null, "id", "baumStamm");
        myProbQ3.setAttributeNS(null, "id", "baumStamm");

      	}
      	if(number==1){
      		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6);
      		myProbQ1.setAttributeNS(null,"y",window.svgHeight/4*3+10);
      		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6);
      		myProbQ2.setAttributeNS(null,"y",window.svgHeight/4*3+1.5);
      		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6);
      		myProbQ3.setAttributeNS(null,"y",window.svgHeight/4*3+22);

          myProbQ1.setAttributeNS(null, "id", "baumStamm");
          myProbQ2.setAttributeNS(null, "id", "baumStamm");
          myProbQ3.setAttributeNS(null, "id", "baumStamm");


      	}
      	if(number==2){
      		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2+10);
      		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+1.5);
      		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+22);

          myProbQ1.setAttributeNS(null, "id", "baumAst");
          myProbQ2.setAttributeNS(null, "id", "baumAst");
          myProbQ3.setAttributeNS(null, "id", "baumAst");

      	}
      	if(number==3){
					myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6*2.5+10);
      		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*2+1.5);
      		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*2+22);

          myProbQ1.setAttributeNS(null, "id", "baumAst");
          myProbQ2.setAttributeNS(null, "id", "baumAst");
          myProbQ3.setAttributeNS(null, "id", "baumAst");


      	}
      	if(number==4){
      		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3+10);
      		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3+1.5);
      		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*3+22);

          myProbQ1.setAttributeNS(null, "id", "baumAst");
          myProbQ2.setAttributeNS(null, "id", "baumAst");
          myProbQ3.setAttributeNS(null, "id", "baumAst");

      	}
      	if(number==5){
      		myProbQ1.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ1.setAttributeNS(null,"y",window.svgHeight/6*5.5+10);
      		myProbQ2.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ2.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*5+1.5);
      		myProbQ3.setAttributeNS(null,"x",window.svgWidth/6*3);
      		myProbQ3.setAttributeNS(null,"y",window.svgHeight/6/2+window.svgHeight/6*5+22);

          myProbQ1.setAttributeNS(null, "id", "baumAst");
          myProbQ2.setAttributeNS(null, "id", "baumAst");
          myProbQ3.setAttributeNS(null, "id", "baumAst");

      	}
				tollerInhalt=" ";
      	// der eigentliche TExt wird erstellt und dann der Node angehängt:
				var textNode1 = document.createTextNode(tollerInhalt);
      	var textNode2 = document.createTextNode("");
      	var strich = document.createTextNode("_");
      	myProbQ1.appendChild( textNode1);
      	myProbQ2.appendChild(strich);
      	myProbQ3.appendChild(textNode2);
      	// der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
		//		document.getElementById("mySVG").appendChild(myGroup);
     	document.getElementById("mySVG").appendChild(myProbQ1);
      	document.getElementById("mySVG").appendChild(myProbQ2);
      	document.getElementById("mySVG").appendChild(myProbQ3);
      }




      //PFADE RECHTS:
      function pfadProb(a,b,number){              //Pfad-wahrscheinlichkeiten
        var abschnittsbreite = window.svgWidth;
        var abschnittshöhe = window.svgHeight/4;

      //neue Segmente erstellen:

        var pfadProb1= document.createElementNS(svgNS,"text");
        var pfadProb2= document.createElementNS(svgNS,"text");
        var pfadProb3= document.createElementNS(svgNS,"text");

        pfadProb1.setAttributeNS(null, "id", "baumErgebnis");
        pfadProb2.setAttributeNS(null, "id", "baumErgebnis");
        pfadProb3.setAttributeNS(null, "id", "baumErgebnis");

        pfadProb1.setAttributeNS(null,"x",460);
        pfadProb1.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number)+10);

        pfadProb2.setAttributeNS(null,"x",460);
        pfadProb2.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number)+1.5);


        pfadProb3.setAttributeNS(null,"x",460);
        pfadProb3.setAttributeNS(null,"y",abschnittshöhe*0.5+abschnittshöhe*(number)+23);

        var strink=" ";
        var textNode1 = document.createTextNode(strink);
        var textNode2 =document.createTextNode("__");
        var textNode3 =document.createTextNode("");

        pfadProb1.appendChild(textNode1);
        pfadProb2.appendChild(textNode2);
        pfadProb3.appendChild(textNode3);

        // der TExt wird in die HTML -Seite eingefügt und damit sichtbar!
        document.getElementById("mySVG").appendChild(pfadProb1);
        document.getElementById("mySVG").appendChild(pfadProb2);
        document.getElementById("mySVG").appendChild(pfadProb3);

      }


      //Rechteceke vor text

      function myRect(number)	{
      		var zähler = number;  //Buchstabenpositionen auslesen
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

        //Rechtecke um äste + pfade rechtsfeld


        function myProbRect(zähler)
            {
            	xposZ =$("#mySVG").children().eq(zähler).attr("x") - 25;
            	yposZ =$("#mySVG").children().eq(zähler).attr("y") -30 ;


            	//xposN =$("#mySVG").children().eq(nenner).attr("x") -10 ;
            	//yposN =$("#mySVG").children().eq(nenner).attr("y") -10 ;

            	var myRect = document.createElementNS(svgNS,"rect");

            	myRect.setAttributeNS(null,"x",xposZ);
            	myRect.setAttributeNS(null,"y",yposZ);

            	myRect.setAttributeNS(null,"width",50);
            	myRect.setAttributeNS(null,"height",46);

              if((zähler==24)||(zähler==27)||(zähler==30)||(zähler==33)){
                	myRect.setAttributeNS(null,"width",80);
                    	myRect.setAttributeNS(null,"x",xposZ-15);
              }

            	document.getElementById("mySVG").appendChild(myRect);
            }


//Pfade selbst zeichnen:
            function myPath(number){
                //objecte in ein Array schreiben:
                var pfad = document.createElementNS(svgNS,"path");
                pfad.setAttributeNS(null,"stroke","#D6E9FE");


                var start1 = window.svgWidth/20;


                var ende1 = $("#mySVG").children().eq(36).attr("x");//erstes Recteck
                var ende2 = $("#mySVG").children().eq(37).attr("x");//erstes Recteck
                var ende3 = $("#mySVG").children().eq(38).attr("x");// eom REcjtecl rechts
                var ende4 = $("#mySVG").children().eq(39).attr("x");// eom REcjtecl rechts
          //$("#mySVG").children().eq(1).css("fill", "yellow");
                var breiteA = $("#mySVG").children().eq(36).attr("width");
                var breiteNA = $("#mySVG").children().eq(37).attr("width");
            //    var breiteB = $("#mySVG").children().eq(38).attr("width");
            //    var breiteNB = $("#mySVG").children().eq(39).attr("width");
                var start2a= parseInt(ende1) + parseInt(breiteA);
                var start2b= parseInt(ende2) + parseInt(breiteNA);

                //Linien Koordinaten zuweisen:
                var d1 = "M " +  start1 + " " + window.svgHeight/2   + " L " + ende1 + " " + window.svgHeight/4;
                var d2 = "M " + start1 + " " + window.svgHeight/2 + " L " + ende2 + " " + window.svgHeight/4*3;
                var d3 = "M " +  start2a +  " " + window.svgHeight/4 + " L " + ende3 + " " +window.svgHeight/4*0.5;
                var d4 = "M " +  start2a +  " " + window.svgHeight/4 + " L " + ende4 + " " +window.svgHeight/4*1.5;
                var d5 = "M " +  start2b +  " " + window.svgHeight/4*3 + " L " + ende3 + " " +window.svgHeight/4*2.5;
                var d6= "M " +  start2b +  " " + window.svgHeight/4*3 + " L " + ende4 + " " +window.svgHeight/4*3.5;

                if(number==0){pfad.setAttributeNS(null,"d", d1);		}
                if(number==1){pfad.setAttributeNS(null,"d", d2);		}
                if(number==2){pfad.setAttributeNS(null,"d", d3);		}
                if(number==3){pfad.setAttributeNS(null,"d", d4);		}
                if(number==4){pfad.setAttributeNS(null,"d", d5);		}
                if(number==5){pfad.setAttributeNS(null,"d", d6);		}
                //Linien ins Dokument einfügen:
                document.getElementById("mySVG").appendChild(pfad);

              }





            }//SVG malen ende

						  var svgContent = $("#Lösungen").children().eq(0).html();
							var svgContent2 = $("#mySVG").find("text").eq(6).html();
							var svgContent3 = $("#mySVG").find("text").eq(9).html();
							var svgContent4 = $("#mySVG").find("text").eq(12).html();
							var svgContent5 = $("#mySVG").find("text").eq(15).html();
							var svgContent6 = $("#mySVG").find("text").eq(18).html();
							var svgContent7 = $("#mySVG").find("text").eq(21).html();
							var svgContent8 = $("#mySVG").find("text").eq(24).html();
							$("#Lösungen").append(svgContent2);
							$("#Lösungen").append(svgContent3);
							$("#Lösungen").append(svgContent4);
							$("#Lösungen").append(svgContent5);
							$("#Lösungen").append(svgContent6);
							$("#Lösungen").append(svgContent7);
							$("#Lösungen").append(svgContent8);
