coloring()

function coloring(){
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

	var positionX = -window.svghöhe -25-220+"px";
	$("#taBelle").css("top",positionX);

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
		$(".intro").addClass(hell1);
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
var feldfarbe="lightgrey";
$(".tabelle").hide();

	function layOut() {
		clicker++;
		if(clicker==1){
			vierfarbenlöschen("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
			vierfarbengeben("verydarkblue", "darkblue", "lightblue", "lighterblue","darkblue");
			window.feldfarbe="lightblue";

		}
		else if(clicker==2){
			vierfarbenlöschen("verydarkblue", "darkblue", "lightblue", "lighterblue","darkblue");
			vierfarbengeben("verydarkgrey", "darkblue", "darkblue", "lightblue","darkgrey");
			window.feldfarbe="darkblue";
		}
		else if(clicker==3){
			vierfarbenlöschen("verydarkgrey", "verydarkblue", "darkblue", "lightblue","darkgrey");
			vierfarbengeben("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
				window.feldfarbe="lightlila";
			//Textfarbe schwarz:

			$("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
			$(".page").toggleClass("schwarz");
			$(".page").children().toggleClass("schwarz");

				$(".intro").toggleClass("schwarz");

		}
		else if(clicker==4){
			$(".tabelle").show();
			vierfarbenlöschen("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
			vierfarbengeben("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
				window.feldfarbe="whiten";

			$("text").css("fill","black");
			$("#mySVG").find("path").css("stroke","black");
			$("button").css("color", "black");
		//	$(".gridFenster").children().css("color","black");
		}
		else if(clicker==5){
			$(".tabelle").hide();
			$("#mySVG").find("path").css("stroke","lightergrey");
			vierfarbenlöschen("lightlightgrey", "whiten", "whiten", "whiten", "whiten");
			vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
				window.feldfarbe="lightgrey";
			$("text").css("fill","darkgrey"); //im svg und in vierfeldertafel die mathematik
			$("#mySVG").find("path").css("stroke","darkgrey");
			$("button").css("color", "darkgrey");

			$(".page").toggleClass("schwarz");
			$(".page").children().toggleClass("schwarz");

				$(".intro").toggleClass("schwarz");
			clicker=0;
		}
}

function myFunction() {

	var hintergrund= 	$(".mittelfeld").attr("class");
	var textfarbe = $(".main").css("color");
	//Entferne gegebenfalls schriftfarben-classen/Color:

	$(".intro").removeClass("schwarz");
		$(".intro").removeClass("weißgrau");

		$(".ü").toggleClass("bluetext");
		$(".summe").toggleClass("bluetext");
		$(".mittelfeld").toggleClass("orangetext");
		$(".rechtsfeld").toggleClass("greentext");
		$(".untenfeld").toggleClass("redtext");

		$(".ü").find("text").css("fill","#0751c6;"); //blau
		$(".summe").find("text").css("fill","#0751c6;");//blau
		$(".mittelfeld").find("text").css("fill","orange");
		$(".rechtsfeld").find("text").css("fill","green");
		$(".untenfeld").find("text").css("fill","red");

	//	alert($(".ü").find("text").css("fill") + "  " + textfarbe);
	//alert($(".ü").attr("class"));
		if(	$(".ü").attr("class").indexOf("bluetext")==-1){

			$(".ü").find("text").css("fill",textfarbe);
			$(".summe").find("text").css("fill",textfarbe);
			$(".mittelfeld").find("text").css("fill",textfarbe);
			$(".rechtsfeld").find("text").css("fill",textfarbe);
			$(".untenfeld").find("text").css("fill",textfarbe);
		} else{

		}

	//alert(	$(".ü").attr("class") );

		if($(".mittelfeld").attr("class").indexOf("orangetext")!=-1){
			//Baumdiagramm färben:
			$("text").filter("#baumStamm").css("fill", "green");//grün
			$("text").filter("#baumStamm").css("fill", "red"); //rot
			$("text").filter("#baumAst").css("fill", "purple");
			$("text").filter("#baumErgebnis").css("fill", "orange");


		//	$("foreignObject").find("text").setAttributeNS(null, "color", "green");
				$("#mySVG").find("#Ast1").css("color", "green");
				$("#mySVG").find("#Ast1").next().css("color", "green");
				$("#mySVG").find("#Ast1").css("color", "red");
				$("#mySVG").find("#Ast1").next().css("color", "red");

				$("#mySVG").find("#Ast2").css("color", "purple");
				$("#mySVG").find("#Ast2").next().css("color", "purple");
				$("#mySVG").find("#Ast2").next().next().css("color", "purple");
				$("#mySVG").find("#Ast2").next().next().next().css("color", "purple");

				$("#mySVG").find("#Ast3").css("color", "orange");
					$("#mySVG").find("#Ast3").next().css("color", "orange");
					$("#mySVG").find("#Ast3").next().next().css("color", "orange");
						$("#mySVG").find("#Ast3").next().next().next().css("color", "orange");
		}else{
			$("text").filter("#baumStamm").css("fill", textfarbe);//grün
			$("text").filter("#baumStamm").css("fill", textfarbe); //rot
			$("text").filter("#baumAst").css("fill", textfarbe);
			$("text").filter("#baumErgebnis").css("fill", textfarbe);



			$("#mySVG").find("#Ast1").css("color", textfarbe);
			$("#mySVG").find("#Ast1").next().css("color", textfarbe);
			$("#mySVG").find("#Ast1").css("color", textfarbe);
			$("#mySVG").find("#Ast1").next().css("color", textfarbe);

			$("#mySVG").find("#Ast2").css("color", textfarbe);
			$("#mySVG").find("#Ast2").next().css("color", textfarbe);
			$("#mySVG").find("#Ast2").next().next().css("color", textfarbe);
			$("#mySVG").find("#Ast2").next().next().next().css("color", textfarbe);

			$("#mySVG").find("#Ast3").css("color", textfarbe);
				$("#mySVG").find("#Ast3").next().css("color", textfarbe);
				$("#mySVG").find("#Ast3").next().next().css("color", textfarbe);
					$("#mySVG").find("#Ast3").next().next().next().css("color", textfarbe);
		}

}
