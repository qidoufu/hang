 $(".swap").click(function(){
	 
	 var l=$(".city-l").html();
	 var r=$(".city-r").html();
	 $(".city-l").html(r);
	 $(".city-r").html(l);
	 
 })
 
 $(".city-l").click(function(){
	 window.open('./city.html');
	 
 })