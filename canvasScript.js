function canvas(){
	var c = document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	var width = $("#myCanvas").width();
	var height = $("#myCanvas").height();

	ctx.strokeStyle = "#D6E9FE";
	ctx.fillStyle = "#D6E9FE";

	//Linien
	ctx.moveTo(10,height/2);
	ctx.lineTo(width/3-17,height/3);
	ctx.stroke();

	ctx.moveTo(10,height/2);
	ctx.lineTo(width/3-17,height*2/3);
	ctx.stroke();

	$("div").children().eq(0).text(width, height);

	//2Kreise:
	ctx.beginPath();
	ctx.arc(width/3, height/3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width/3, height*2/3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	//2Texte:

	ctx.font = "20px Arial";
	ctx.fillText("A", width/3-7, height/3+7);

	ctx.font = "20px Arial";
	ctx.fillText("A", width/3-7, height*2/3+7);

	// 2. Spalte: Linien:
	ctx.moveTo(width/3+17,height/3-4);
	ctx.lineTo(width*2/3-13,height/5-9);
	ctx.stroke();

	ctx.moveTo(width/3+17,height/3-4);
	ctx.lineTo(width*2/3-13,height*2/5-3);
	ctx.stroke();

	ctx.moveTo(width/3+17,height*2/3+4);
	ctx.lineTo(width*2/3-13,height*3/5+3);
	ctx.stroke();

	ctx.moveTo(width/3+17,height*2/3+4);
	ctx.lineTo(width*2/3-13,height*4/5+9);
	ctx.stroke();

	//Kreise:
	ctx.beginPath();
	ctx.arc(width*2/3, height/5-9, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*2/5-3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*3/5+3, 15, 0, 2 * Math.PI);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(width*2/3, height*4/5+9, 15, 0, 2 * Math.PI);
	ctx.stroke();

	//4Texte:

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height/5-3);

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*2/5+3);


	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*3/5+9);

	ctx.font = "20px Arial";
	ctx.fillText("A", width*2/3-7, height*4/5+15);
}
