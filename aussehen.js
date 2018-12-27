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
//$(".lösungen"),css("padding", "5pt");
$(".innerpage2").append('<hr class="line" id="linie1">');
$(".innerpage2").append('<hr class="line" id="linie2">');
$(".innerpage2").append('<hr class="line" id="linie3">');
$(".line").css("position","relative");
//obere Kante: -500, untere Kante: 327;
var pos1 = - svghöhe -25 - 220*0.25 + "px";
$("#linie1").css("top",pos1);						//	svg-höhe:320pt, vierfeldertafel:200pt
var pos2 = -svghöhe -25-220*0.25*2 +"px";
$("#linie2").css("top", pos2);
var pos3 = -svghöhe -25-220*0.25*3+"px";
$("#linie3").css("top", pos3);

$(".innerpage2").append('<hr class="senkrechtline" id="linie4">');
$(".innerpage2").append('<hr class="senkrechtline" id="linie5">');
$(".innerpage2").append('<hr class="senkrechtline" id="linie6">');

$(".senkrechtline").css("position","relative");
$(".senkrechtline").css("border-color","red");
$(".senkrechtline").css("background-color","red");
$(".senkrechtline").css("height","220px");
$(".senkrechtline").css("width","1px");
var positionX = -svghöhe -25-220+"px";
var positionX2 = -svghöhe -25-220*2+"px";
var positionX3 = -svghöhe -25-220*3+"px";

$("#linie4").css("top",positionX);
$("#linie5").css("top",positionX2);
$("#linie6").css("top",positionX3);

$("#linie4").css("left", "25%");
$("#linie5").css("left", "49%");
$("#linie6").css("left", "73%");

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
			$("#mySVG").find("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
		}
		else if(clicker==4){
			vierfarbenlöschen("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
			vierfarbengeben("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
			$(".page").css("color","black");
			$("#mySVG").find("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
		}
		else if(clicker==5){
			$("#mySVG").find("path").css("stroke","lightergrey");
			vierfarbenlöschen("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
			vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
			$("#mySVG").find("text").css("fill","darkgrey");
				$("#mySVG").find("path").css("stroke","darkgrey");
			$(".page").css("color","darkgrey");
			$("button").css("color", "darkgrey");
			clicker=0;
		}
}

function myFunction() {
	var hintergrund= 	$(".mittelfeld").attr("class");
	//alert(hintergrund);
 if(hintergrund.indexOf("orange")!=-1){ //string enthält den string orange
	 //Vierfeldertafel färben:
	 $(".ü").removeClass("blue");
	 $(".summe").removeClass("blue");
	 $(".mittelfeld").removeClass("orange");
	 $(".rechtsfeld").removeClass("green");
	 $(".untenfeld").removeClass("red");
	 //Baumdiagramm färben:
	 $("text").css("fill", "darkgrey");
 }

else{
	//Vierfeldertafel färben:
	$(".ü").addClass("blue");
	$(".summe").addClass("blue");
	$(".mittelfeld").addClass("orange");
	$(".rechtsfeld").addClass("green");
	$(".untenfeld").addClass("red");
	//Baumdiagramm färben:
	$("text").filter("#baumStamm").css("fill", "#0A450F");//grün
	$("text").filter("#baumStamm").css("fill", "#750900"); //rot
	$("text").filter("#baumAst").css("fill", "darkmagenta");
	$("text").filter("#baumErgebnis").css("fill", "#B78800");
}
}
