

$(window).bind('resizeEnd',function(){
  //alert(elementNummer);
  var breite =$("#mySVG").width();
  var höhe =$("#mySVG").height();
  window.svghöhe=höhe;
    var xpos = $('#mySVG').children().eq(elementNummer).attr("x")
    var ypos = $('#mySVG').children().eq(elementNummer).attr("y")
  //Breite und höhe des Fensters ermitteln

  //position ermitteln: (-10 Korrektur) 550 ist die breite der Viewbox, 320 höhe
  var position1 = breite*xpos/svgWidth-5;
  var position2 =  höhe*ypos/svgHeight +10;


		// box neu positionieren:
		$('#inputt').css("left", position1);
		$('#inputt').css("top", position2);

    //Vierfeldertafel die drei horizontelen Linien ausrichten:
    var pos1 = - höhe -40 - 220*0.25 + "px";
    $("#linie1").css("top",pos1);						//	svg-höhe:320pt, vierfeldertafel:200pt
    var pos2 = -höhe -40-220*0.25*2 +"px";
    $("#linie2").css("top", pos2);
    var pos3 = -höhe -40-220*0.25*3+"px";
    $("#linie3").css("top", pos3);
    //und die höhe der senkrechten linien vom vierFelderTafelAufgaben
    var positionX = -höhe -40-220+5+"px";
    var positionX2 = -höhe -40-220*2+"px";
    var positionX3 = -höhe -40-220*3+"px";

    $("#linie4").css("top",positionX);
    $("#linie5").css("top",positionX2);
    $("#linie6").css("top",positionX3);

    $(".tabelle").css("top",positionX);

  //  var printSVGhöhe = $(".printArea").find("#mySVG").height();
  //  var printSVGhöhe  = (printSVGhöhe)/4-5;
  //  $(".printArea").find(".tab").css("height",printSVGhöhe);
  //  if(printSVGhöhe<20){
  //    $(".printArea").find(".tab").css("font-size","8px");
  //  }else if(printSVGhöhe<30){
  //    $(".printArea").find(".tab").css("font-size","12px");
  //  }else if(printSVGhöhe<40){
  //    $(".printArea").find(".tab").css("font-size","14px");
  //  }else if(printSVGhöhe>=40){
  //    $(".printArea").find(".tab").css("font-size","16px");
  //  }

    $(".printArea").find(".tabelle").css("top","0pt");
    $(".printArea").find(".tabelle").css("left","0pt");
  //  alert(printSVGhöhe);

});

$(window).resize(function() {
      if(this.resizeTO) clearTimeout(this.resizeTO);
      	this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
      }, 500);
});
