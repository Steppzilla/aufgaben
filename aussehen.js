coloring()

function coloring(){
//Aufgaben-Farbe:
//$("div").css("line-height","2");
$("p").css("line-height","1.5");

vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
$("div").addClass("rund");
$("p").addClass("rund");
$("h3").addClass("rund");


$("h1").addClass("rund");
$("h2").addClass("rund");
$("h3").addClass("rund");

//Baum-Hintergrund:
$("#mySVG").addClass("rund");

$(".main").find("p").addClass("padding");
$(".aufträge").find(".flex-behälter").addClass("padding");
$(".con").addClass("padding");

var positionX = -svghöhe -25-220+"px";

$(".tabelle").css("top",positionX);

}

function vierfarbengeben(dunkel2, dunkel1, hell1, hell2,hintergrund){
	$(".mySvg").addClass(hell1);
	$(".aufgabenübersicht").addClass(hell2);
	$("button").addClass(dunkel2);
	$("button").css("color", "darkgrey");
	$(".ungerade").addClass(hell2);
	$(".ungerade").children().addClass(hell2);
	$(".main").children().eq(1).addClass(hell1);
	$(".gerade").addClass(hell1);
	$(".gerade").children().addClass(hell1);
	//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).addClass(hell2);
		$(".intro").addClass(dunkel1);
		$("h1").addClass(dunkel2);
		$("h2").addClass(dunkel2);

		//allgemeiner Hintergrund:
		$(".page").addClass(hintergrund);
}

function vierfarbenlöschen(dunkel2, dunkel1, hell1, hell2,hintergrund){

		$(".mySvg").removeClass(hell1);
		$(".aufgabenübersicht").removeClass(hell2);
		$("button").removeClass(dunkel2);
	$(".ungerade").removeClass(hell2);
	$(".ungerade").children().removeClass(hell2);
	$(".main").children().eq(1).removeClass(hell1);
	$(".gerade").removeClass(hell1);
	$(".gerade").children().removeClass(hell1);
//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).removeClass(hell2);
		$(".intro").removeClass(dunkel1);
		$(".intro").removeClass(hell1);  //hier entsteht sonst diese farbe durchs div färben oder so...

		$("h1").removeClass(dunkel2);
		$("h2").removeClass(dunkel2);
		//allgemeiner Hintergrund:
		$(".page").removeClass(hintergrund);
}

var clicker =0;

			$(".tabelle").hide();

	function layOut() {
		clicker++;
		if(clicker==1){
			vierfarbenlöschen("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
			vierfarbengeben("verydarkblue", "darkblue", "lightblue", "lighterblue","darkblue");

		}
		else if(clicker==2){
			vierfarbenlöschen("verydarkblue", "darkblue", "lightblue", "lighterblue","darkblue");
			vierfarbengeben("verydarkgrey", "darkblue", "darkblue", "lightblue","darkgrey");
		}
		else if(clicker==3){
			vierfarbenlöschen("verydarkgrey", "verydarkblue", "darkblue", "lightblue","darkgrey");
			vierfarbengeben("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
			$(".page").css("color","black");
			$("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
			$(".gridFenster").children().css("color","black");
		}
		else if(clicker==4){
						$(".tabelle").show();
			vierfarbenlöschen("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
			vierfarbengeben("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
			$(".page").css("color","black");
			$("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
					$(".gridFenster").children().css("color","black");
		}
		else if(clicker==5){
				$(".tabelle").hide();
			$("#mySVG").find("path").css("stroke","lightergrey");
			vierfarbenlöschen("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
			vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
			$("text").css("fill","darkgrey"); //im svg und in vierfeldertafel die mathematik
				$("#mySVG").find("path").css("stroke","darkgrey");
			$(".page").css("color","darkgrey");
			$("button").css("color", "darkgrey");
					$(".gridFenster").children().css("color","darkgrey");

			clicker=0;
		}
}

function myFunction() {

	var hintergrund= 	$(".mittelfeld").attr("class");
	var textfarbe = $(".page").css("color");
	//alert($(".mittelfeld").css("color"));
 	if((hintergrund.indexOf("orange")!=-1)||($(".mittelfeld").css("color")=="rgb(255, 165, 0)"))
	{ //string enthält den string orange
	 	//Vierfeldertafel färben:
 		$(".ü").removeClass("blue");
	 	$(".summe").removeClass("blue");
	 	$(".mittelfeld").removeClass("orange");
	 	$(".rechtsfeld").removeClass("green");
	 	$(".untenfeld").removeClass("red");
	 	//Baumdiagramm färben:
	 	$("text").css("fill", textfarbe);
		$(".intro").css("color", textfarbe);
 		}
		else{
			if(textfarbe=="rgb(0, 0, 0)"){
				$(".ü").find("text").css("fill","blue");
				$(".ü").css("color","blue");
				$(".intro.summe").css("color","blue");
				$(".mittelfeld").find("text").css("fill","orange");
				$(".mittelfeld").css("color","orange");
				$(".rechtsfeld").find("text").css("fill","green");
					$(".rechtsfeld").css("color","green");
				$(".untenfeld").find("text").css("fill","red");
					$(".untenfeld").css("color","red");
			//	$(".intro").css("color","white");
				//Baumdiagramm färben:
				var grüne="green";
				var rote = "red";
				var pinke="purple";
				var orangen= "orange";
			}
			else{
				var grüne="#0A450F";
				var rote = "#750900";
				var pinke="darkmagenta";
				var orangen= "#B78800";
				//Vierfeldertafel färben:
				$(".ü").addClass("blue");
				$(".summe").addClass("blue");
				$(".mittelfeld").addClass("orange");
				$(".rechtsfeld").addClass("green");
				$(".untenfeld").addClass("red");
			}

			//Baumdiagramm färben:
			$("text").filter("#baumStamm").css("fill", grüne);//grün
			$("text").filter("#baumStamm").css("fill", rote); //rot
			$("text").filter("#baumAst").css("fill", pinke);
			$("text").filter("#baumErgebnis").css("fill", orangen);
		}
}
