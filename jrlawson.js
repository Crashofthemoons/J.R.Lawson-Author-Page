$(".two-books").hover(
  function() {
  		$(".homepage1", this).css("display", "block");
	}, 
    function() {
  		$(".homepage1", this).css("display", "none");
});