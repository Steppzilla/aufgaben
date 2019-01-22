
var menü = $("div").children().eq(0);
var aufgabenwahl ;



linkeSeiteschreiben();
$(".menu").find(".druck").hide();

for(i=2;i<10; i++){
	var x= $("#Aufträge").children().eq(i-1);
	x.hide();
}
//Aufgaben schreiben wenn bild angeklickt wird: und lösungs-ILndex speichern ('aufgabenwahl');

$("#Aufgabenübersicht").find("p").click(function(){
	$("#mySVG").find("foreignObject").show();//baumdiagramm mit formeln versehen
	$("#mySVG").find("text").text(""); //Baumdiagramm leeren
	vierfeldertafelReset();
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"vierfelderBox"]);
	for(i=0;i<36;i++){
		if(i<6){
			$("#mySVG").find("text").eq(i).text(" ");
		}
		else if(i%3==0){
			$("#mySVG").find("text").eq(i).text(" ");
		}
	}
	for(i=0;i<6;i++){				//pfade anpassen
	//	$("#mySVG").children().eq(i).text(string[1][0][i]);
	feldAnpassen(i);
	}

	$("#Aufgabenübersicht").children().removeClass("yellow");
	$(this).addClass("yellow");
	var zahl=	$(this).index();
	window.aufgabenwahl=zahl;
		$("#Aufgabentext").children().eq(0).children().eq(0).html(aufgabenVierfelder[zahl][0]);//überschrift
		$("#Aufgabentext").children().eq(1).children().eq(0).html(aufgabenVierfelder[zahl][1]);//Aufgaben-text


		for(i=2;i<10; i++){
			var x= $("#Aufträge").children().eq(i-1);
			var letter = buchstaben(i-1, "chap");

			if(aufgabenVierfelder[zahl][i] !=undefined){
				x.show();
				x.html('<p class="überschrift">' + letter + '</p>'); //Buchstabe vorm auftrag
				x.append('<p class="auftragsText">' + aufgabenVierfelder[zahl][i] + '</p>');  //aufträge
			//wichtig, um Inhalte wieder mathematisch zu rendern
			}else{
				x.hide();
			}
		}
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Aufgabentext"]);
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Aufträge"]);
});




function linkeSeiteschreiben(){
	for(i=0;i<aufgabenVierfelder.length;i++){
		if(iconString[i]!=undefined){
			var überschrift="<p class='menüicon pic'>" + iconString[i] + "</p>"; //frowning face
		}else{
			var überschrift = "<p class='menüicon pic'>" + '<img class=images src="https://img.icons8.com/wired/64/000000/question-mark.png">' + "</p>";
		}
		$("#Aufgabenübersicht").append(überschrift);
	}
}


vierfeldertafelReset();
function vierfeldertafelReset (){
	var summe = "\u2211";
	var schnitt="\u2229";

	$("#vierfelderBox").find("p").empty();
	$("#vierfelderBox").children().eq(1).text("\\[\\text{A}\\]");
	$("#vierfelderBox").children().eq(2).text("\\(\\bar{\\text{A}}\\)");
	$("#vierfelderBox").children().eq(3).text(summe);
	$("#vierfelderBox").children().eq(4).text("\\(\\text{B}\\)");
	$("#vierfelderBox").children().eq(5).html("<span id='myeqn'> \\[\\text{P(A}\\cap \\text{B)}\\]  </span>");
	$("#vierfelderBox").children().eq(6).html("<span id='myeqn'> \\(	\\text{P(}\\bar{\\text{A}} \\cap \\text{B)}\\) </span>");
	$("#vierfelderBox").children().eq(7).text("\\(\\text{P(B)}\\)");
	$("#vierfelderBox").children().eq(8).text("\\(	\\bar{\\text{B}}\\)");
	$("#vierfelderBox").children().eq(9).html("<span id='myeqn'> \\(	\\text{P(A} \\cap  \\bar{\\text{B}} \\text{)}\\) </span>");
	$("#vierfelderBox").children().eq(10).html("<span id='myeqn'> \\(\\text{P(}\\bar{\\text{A}}\\cap\\bar{\\text{B}}\\text{)}\\) </span>");
	$("#vierfelderBox").children().eq(11).text("\\(\\text{P(}\\bar{\\text{B}}\\text{)}\\)");
	$("#vierfelderBox").children().eq(12).text(summe);
	$("#vierfelderBox").children().eq(13).text("\\(\\text{P(A)}\\)");
	$("#vierfelderBox").children().eq(14).text("\\(\\text{P(}\\bar{\\text{A}}\\text{)}\\)");
	$("#vierfelderBox").children().eq(15).text("1");
}

//VierfelderTafel Input:
function textFeldBauen(textFeldNummer, boxVariable){
				//Input-Fenster löschen: (führt nicht zum error, selbst beim ersten klick,obwohl noch keins vorhanden ist... mh=?...
				$("input").remove();
				// Wähle die geklickte Box der Grid-Tabelle aus:
				var boxWähler = $("#vierfelderBox").children().eq(textFeldNummer) ;
				// Box leeren:
				var inhaltsspeicher = boxWähler.children();
				//boxWähler.empty();
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

							if(textUser==""){
									 boxWähler.append(inhaltsspeicher);
							}else{
								boxWähler.append(newUserElement);

								vierfelderTafelPrüfen();//allles was falsch ist wird dort markiert!
								//Feedback:
								if(boxWähler.attr("class").indexOf("black")==-1){
									feedback(true);			//positives Feedback
								}else{
										feedback(false);			//positives Feedback
								}
							}
						} //enter
					}
				);
}



//$( document ).click(function( e ) {
//	var target = $(e.target);
//	alert(target.closest(".intro"));
//	if (	target.is(".intro")	&&	target.closest(".intro")!="undefined"   ){

//		alert(target.closest(".intro"));
//	}
  //alert( "clicked: " + event.target );
//});




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



function printcontainer(){
	$(".lösungsplace").removeAttr('Id');
	$(".innerpage1").clone().appendTo(	$(".printArea")	);
	$(".printArea").find(".auftrag0").remove();
	$(".printArea").find(".main").children().eq(1).css("text-align","left");

	$(".printArea").children().removeClass("innerpage1");
	//$(".printArea").children().removeClass("main");

		$("#printArea").children().find(".main").css("width", "100%");
	$(".printArea").append("<div class='lösungsplace' id='felderBox'></div>");

	printVierfelder();
	printBaumdiagramm();
}

function printVierfelder(){ //+Aufgabe in Container
	var string= lösungenVierfelder[window.aufgabenwahl];
	for(i=0;i<16;i++){																//in die originale Vierfeldertafel Lösungen hinzufügen
		var gerundet= string[0][0][i];
		if(!isNaN(gerundet)){
			gerundet=gerundet*1000;
			gerundet=Math.round(gerundet);
			gerundet=gerundet/1000;
		}
		$("#vierfelderBox").children().eq(i).html(gerundet);
	}
	$("#taBelle").show();
	$("#taBelle").clone().appendTo($("#felderBox")); //funzt nur bei show
//	$(".printArea").find(".tabelle").removeClass("tabelle");
	$(".printArea").find(".tabelle").removeAttr("Id");//Id entfernen
	$("#taBelle").hide(); //die originale Tabelle oben wird versteckt
	//tab-höhe ändern im resize programm
	//$("#gridContainer").clone().appendTo(	$("#felderBox")	);
		$(".printArea").find(".tabelle").css("top","0pt");
		$(".printArea").find(".tabelle").css("left","0pt");


	for(i=0;i<16;i++){
		var feldinhalt=$("#gridContainer").children().eq(1).children().eq(i).text();
		$("#felderBox").find(".tab").eq(i).text(feldinhalt); //hier funktioniert wohl was nicht...
	}
//	$(".printArea").find("#gridContainer").removeAttr(	'Id'	);

	$(".printArea").find('p').css("font-size","12pt");
	$(".printArea").find('div').css("font-size","12pt");
	$("#felderBox").children().css("color","black");
	$(".printArea").children().css("color","black");
}

function printBaumdiagramm(){
	$("#mySVG").find("foreignObject").hide();  //foreign
	var string= lösungenVierfelder[window.aufgabenwahl];
//Nennerposition korrigieren
	for(l=0;l<10;l++){
		var k=6+l*3;  //zählerelemente, die zur Eingabe benötigt ewerden

		var zähler = string[1][0][k];
		var nenner = string[1][0][k+2];
		var gerundet=zähler/nenner;
		gerundet=gerundet*1000;
		gerundet=Math.round(gerundet);
		gerundet=gerundet/1000;
		$("#mySVG").children().eq(k).text(gerundet);
	}
	for(i=0;i<6;i++){
		$("#mySVG").children().eq(i).text(string[1][0][i]);
		feldAnpassen(i);
	}
	baumDiagrammPrüfen(); //passt Rechteckfarbe an Rcihtigkeit des inhalts an
	//alert(string[1][0]);
	$("#svgDiv").clone().appendTo(	$("#felderBox")	);
//	$("#felderBox").find(".svg").children().eq(0).remove();
	$("#felderBox").children().removeAttr("Id");  // sonst dupliziert sich alles.
	$("#felderBox").find("path").css("stroke","black");
	$("#felderBox").find("text").css("fill","black");
}

function druckansicht(){
	$(".aufgabenübersicht").hide();
	$(".innerpage1").hide();
	$(".gridContainer").hide();
	$(".svg").hide(); //sonst bleibt überschrift sichtbar
	$(".lösungen").hide();

	$(".menu").find(".home").hide();
	$(".menu").find(".druck").show();
	$(".printArea").addClass("grid");
	$(".printArea").css("grid-template-columns","100%");

}

function vierf(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
//	$(".printArea").filter("div").hide();
	$(".lösungsplace").find(".tabelle").show();
$(".lösungsplace").find(".tabelle").next().hide(); //svg div ausblenden (hiter vierf)
	$(".printArea").css("grid-template-columns","80% 20%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumd(){
//	var svghöhe =  $(".printArea").find("#mySVG").height();
	$(".lösungsplace").css("width", "100%");
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").hide();
	$(".lösungsplace").find(".tabelle").next().show(); //baum
	//$(".lösungsplace").find("#svgDiv").css("height","180pt");

	$(".printArea").css("grid-template-columns","75% 25%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").css("width","100%");
}

function baumVier(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();

	$(".lösungsplace").find(".tabelle").show();
		$(".lösungsplace").find(".tabelle").next().show(); //baum

 	$(".printArea").css("grid-template-columns","100%");
 	$(".lösungsplace").css("grid-template-columns","60% 40%");
 	$(".lösungsplace").css("width","100%");
}

function nurAufgabe(){
	$(".lösungsplace").find(".üschrift").remove();
	$(".printArea").children().show();
	$(".lösungsplace").find(".tabelle").hide();
		$(".lösungsplace").find(".tabelle").next().hide(); //baum
	$(".printArea").css("grid-template-columns","100%");
	$(".lösungsplace").css("grid-template-columns","100%");
	$(".lösungsplace").hide();
}

function nurLös(){
		$(".printArea").children().hide();
		$(".lösungsplace").find(".üschrift").remove();
		var üschrift = 0;
	 	for(i=0;i<20;i++){
		  üschrift = $(".printArea").find(".Nüberschrift").eq(i).text();
			$(".lösungsplace").eq(i).prepend("<p class='üschrift'>" + üschrift + "</p>");
 		}
		$(".lösungsplace").show();
		$(".lösungsplace").find(".tabelle").show();
			$(".lösungsplace").find(".tabelle").next().show(); //baum
		$(".printArea").css("grid-template-columns","50% 50%");
		$(".lösungsplace").css("grid-template-columns","40% 60%");
		$(".lösungsplace").css("width","100%");
	//	$(".lösungsplace").css("grid-template-rows","10% 90%");
}

	function printer(){
		$(".menu").hide();
		window.print();

		$(".menu").show();

	}


function home(){
	$(".menu").find(".home").show();
	$(".menu").find(".druck").hide();


	$(".menu").show();
	$(".aufgabenübersicht").show();
	$(".innerpage1").show();

	$(".gridContainer").show();
	$(".svg").show();
		$(".lösungen").show();
}
