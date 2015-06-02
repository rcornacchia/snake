$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();

	//Let's paint the canvas now
	ctx.fillStyle="white";
	ctx.fillRect(0, 0, w, h);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, w, h);

	//Let's create the snake now
	var snake_array; //an array of cels to make up the snake

	create_snake()
	function create_snake()
	{
		var lenth = 5; // Length of the snake
		snake_array = []; //Empty array to start with
		for(var i= length-1; i>=0; i--)
		{
			//This will create a horizontal snake starting from the top left
			snake_array.push({x: i, y:0});
		}
	}

	//Let's paint the snake now 
})