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
	$(".ungerade").addClass("lightgrey");
	$(".ungerade").children().addClass("lightgrey");

	$(".gerade").addClass("lightergrey");
	$(".gerade").children().addClass("lightergrey");

	$(".main").children().eq(1).addClass("lightgrey");

//vierfelder hintergrund:
	$(".gridContainer").children().eq(1).addClass("lightgrey");
		$(".intro").addClass("darkgrey");

$("div").addClass("rund");
$("p").addClass("rund");
$("h3").addClass("rund");

$("h1").addClass("verydarkgrey");
$("h2").addClass("verydarkgrey");
$("h3").addClass("verydarkgrey");
$("h1").addClass("rund");
$("h2").addClass("rund");
$("h3").addClass("rund");
//$(".aufgabenübersicht").children().addClass("verydarkgrey");
//Vierfeldertafel färben:
//$(".ü").addClass("blue");
//$(".summe").addClass("blue");
//$(".mittelfeld").addClass("orange");
//$(".rechtsfeld").addClass("green");
//$(".untenfeld").addClass("red");

//Baumdiagramm färben:
//$("text").filter("#baumStamm").css("fill", "#0A450F");//grün
//$("text").filter("#baumStamm").css("fill", "#750900"); //rot
//$("text").filter("#baumAst").css("fill", "darkmagenta");
//$("text").filter("#baumErgebnis").css("fill", "#B78800");

//Baum-Hintergrund:
$("#mySVG").addClass("rund");
//allgemeiner Hintergrund:
$("div").addClass("darkgrey");

$(".lösungen").addClass("red");



}


	function myFunction() {
var hintergrund = $("div").attr('class');
$("div").removeClass("main");
$("div").removeClass("aufträge");
$("div").removeClass("lösungen");
$("div").removeClass("gridContainer");
$("div").removeClass("mySvg");

$("p").removeClass("gerade");
$("p").removeClass("ungerade");
$("div").removeClass("auftrag");
$("div").addClass("red");
$("h1").addClass("lila");
$("h2").addClass("lila");
$("h3").addClass("lila");
if(hintergrund=='page red'){
	$("div").removeClass("red");
	$("h1").removeClass("lila");
	$("h2").removeClass("lila");
	$("h3").removeClass("lila");
}
}
//
	//alert(hintergrund);
//
//			$("div").removeClass("red");
//			$("div").css("background-color", "MidnightBlue");
//			$("div").addClass("blue");
//			$("#mySVG").css("background-color","MidnightBlue");

//}else{
//		$("div").removeClass("blue");
//		$("div").css("background-color", "red");
//			$("div").addClass("red")
//		$("#mySVG").css("background-color","red");




//$("#mySVG").children().eq(3).css("fill", "green");
