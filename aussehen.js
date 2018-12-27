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

}

function vierfarbengeben(dunkel2, dunkel1, hell1, hell2,hintergrund){
	$(".mySvg").addClass(hell1);

	$(".aufgabenübersicht").addClass(hell2);
	$("button").addClass(dunkel2);
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
		$("div").addClass(hintergrund);

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

		$("h1").removeClass(dunkel2);
		$("h2").removeClass(dunkel2);
		$("h3").removeClass(dunkel2);

		//allgemeiner Hintergrund:
		$("div").removeClass(hintergrund);

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
	vierfarbengeben("verydarkgrey", "verydarkblue", "darkblue", "lightblue","darkgrey");
}


else if(clicker==3){
	vierfarbenlöschen("verydarkgrey", "verydarkblue", "darkblue", "lightblue","darkgrey");
	vierfarbengeben("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
}






	else if(clicker==4){
		vierfarbenlöschen("verydarklila", "darklila", "lightlila", "lighterlila","darklila");
	vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey","darkgrey");
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
