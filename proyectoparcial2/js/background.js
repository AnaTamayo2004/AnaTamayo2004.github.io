$(document).ready(function(){
	var h = $(window).height();
	var w = $(window).width();
	
	var time = 0, delay = 6000;

	//console.log(h);
	$("body,html").css("width",w).css("height",h);
	if(w>=2200){
		$(".background").css("height",h);
	}else{
		$(".background").css("height",h+100);
	}

	//console.log(w);
	if(w<=600){
		$(".slider-wrap").width(w-20);
	}
	
	$(".background").eq(0).fadeIn(1000);
	time = setInterval(back, delay);

	$(window).resize(function(){
		h = $(window).height();
		w = $(window).width();
		$("body,html").css("height",h).css("width",w);
		if(w>=2200){
			$(".background").css("height",h);
		}else{
			$(".background").css("height",h+100);
		}
		if(w<=600){
			$(".slider-wrap").width(w-20);
		}
	})


})
	
var cnt = 0;
function back(){
	
	$(".background").eq(cnt).stop().fadeOut(1000,function(){
		cnt++;
		if(cnt>3){cnt=0}
		
		$(".background").eq(cnt).stop().fadeIn(1500);
		
	});
}
