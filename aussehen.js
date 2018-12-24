coloring()

function coloring(){
	//Baumdiagramm allgemeines Layout:
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
//-----------------------------------------------------------------------------
	//Aufgaben-Farbe:


vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey");
$("div").addClass("rund");
$("p").addClass("rund");
$("h3").addClass("rund");


$("h1").addClass("rund");
$("h2").addClass("rund");
$("h3").addClass("rund");
//$(".aufgabenübersicht").children().addClass("verydarkgrey");


//Baum-Hintergrund:
$("#mySVG").addClass("rund");


$(".section").addClass("padding");
$(".main").find("p").addClass("padding");

$(".flex-behälter").addClass("padding");
}

function vierfarbengeben(dunkel2, dunkel1, hell1, hell2){
	$("button").addClass(dunkel2);
	$(".ungerade").addClass(hell1);
	$(".ungerade").children().addClass(hell1);
	$(".main").children().eq(1).addClass(hell1);

	$(".gerade").addClass(hell2);
	$(".gerade").children().addClass(hell2);

//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).addClass(hell1);
		$(".intro").addClass(dunkel1);

		$("h1").addClass(dunkel2);
		$("h2").addClass(dunkel2);
		$("h3").addClass(dunkel2);

		//allgemeiner Hintergrund:
		$("div").addClass(dunkel1);

}

function vierfarbenlöschen(dunkel2, dunkel1, hell1, hell2){
		$("button").removeClass(dunkel2);
	$(".ungerade").removeClass(hell1);
	$(".ungerade").children().removeClass(hell1);
	$(".main").children().eq(1).removeClass(hell1);

	$(".gerade").removeClass(hell2);
	$(".gerade").children().removeClass(hell2);

//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).removeClass(hell1);
		$(".intro").removeClass(dunkel1);

		$("h1").removeClass(dunkel2);
		$("h2").removeClass(dunkel2);
		$("h3").removeClass(dunkel2);

		//allgemeiner Hintergrund:
		$("div").removeClass(dunkel1);

}

var clicker =0;
	function layOut() {
		clicker++;
		if(clicker==1){
vierfarbenlöschen("verydarkgrey", "darkgrey", "lightgrey", "lightergrey");
vierfarbengeben("verydarkblue", "darkblue", "lightblue", "lighterblue");
}
else if(clicker==2){
	vierfarbenlöschen("verydarkblue", "darkblue", "lightblue", "lighterblue");
	vierfarbengeben("verydarklila", "darklila", "lightlila", "lighterlila");
}






	else if(clicker==3){
		vierfarbenlöschen("verydarklila", "darklila", "lightlila", "lighterlila");
	vierfarbengeben("verydarkgrey", "darkgrey", "lightgrey", "lightergrey");
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
