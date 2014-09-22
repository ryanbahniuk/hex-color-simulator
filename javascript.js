$(document).ready(function(){
	setColor();

	$(window).on("keydown", function(event){
		console.log(event.keyCode);
		switch(event.keyCode) {
    case 49:
        increment("red");
        break;
    case 50:
    		decrement("red");
        break;
    case 51:
        increment("green");
        break;
    case 52:
    		decrement("green");
        break;
    case 53:
        increment("blue");
        break;
    case 54:
    		decrement("blue");
        break;
    default:
        break;
		}
	});

	$('.fa-arrow-circle-o-up').on("click", function(){
		var $valueContainer = $(this).parent().find(".value");
		var hex = $valueContainer.html();
		if ((parseInt(hex, 16) >= parseInt("00", 16)) && (parseInt(hex, 16) < parseInt("ff", 16))) {
			var newHex = incrementColor(hex, 1);
			$valueContainer.html(newHex);
			setColor();
		}
	});

	$('.fa-arrow-circle-o-down').on("click", function(){
		var $valueContainer = $(this).parent().find(".value");
		var hex = $valueContainer.html();
		if ((parseInt(hex, 16) > parseInt("00", 16)) && (parseInt(hex, 16) <= parseInt("ff", 16))) {
			var newHex = incrementColor(hex, -1);
			$valueContainer.html(newHex);
			setColor();
		}
	});
});

var incrementColor = function(color, step){
    var colorToInt = parseInt(color, 16);                     // Convert HEX color to integer
        nstep = parseInt(step);                                         // Convert step to integer
    if(!isNaN(colorToInt) && !isNaN(nstep)){                            // Make sure that color has been converted to integer
        colorToInt += nstep;                                            // Increment integer with step
        var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
        ncolor = (new Array(3-ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
        return ncolor;
    }
    return color;
};

var increment = function(color) {
	var div = "." + color;
	var $valueContainer = $(div).find(".value");
	var hex = $valueContainer.html();
	if ((parseInt(hex, 16) >= parseInt("00", 16)) && (parseInt(hex, 16) < parseInt("ff", 16))) {
		var newHex = incrementColor(hex, 1);
		$valueContainer.html(newHex);
		setColor();
	}
}

var decrement = function(color) {
	var div = "." + color;
	var $valueContainer = $(div).find(".value");
	var hex = $valueContainer.html();
	if ((parseInt(hex, 16) > parseInt("00", 16)) && (parseInt(hex, 16) <= parseInt("ff", 16))) {
		var newHex = incrementColor(hex, -1);
		$valueContainer.html(newHex);
		setColor();
	}
}

var setColor = function() {
	var red = $(".red").find(".value").html();
	var green = $(".green").find(".value").html();
	var blue = $(".blue").find(".value").html();

	var color = "#" + red + green + blue;
	$('#color-display').css("background-color", color);
	$('#current-color').html(color);
}