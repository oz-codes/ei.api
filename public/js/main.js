$(function() {
	$("form").submit(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var target = $(".endpoint").val();
		var json   = $(".json").val();
		$.post("/"+target, {json: json}, function(d) {

			$(".output").fadeOut(300, function() { 	
				$(".tmp").remove();
				code = $("<pre><code class='tmp'></code></pre>");
				code.html(d);
				$(".output").append(code);
				$(".output").fadeIn(300);
			})
		})
		return false;
	});
})
