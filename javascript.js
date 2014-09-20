$(document).ready(function(){
	$('#set-color input').on("keyup", function(){
		color = "#" + $(this).val();
		var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
		if (isOk) {
			$('#color-display').css("background-color", color);
		}
	});

	$('#hex-color div:before').on("click", function(){
		console.log("up");
	});

	$('#hex-color div:after').on("click", function(){
		console.log("down");
	});
});