// remap jQuery to $
(function($){})(window.jQuery);
//========================================= READY FUNCTION ===========================================================	
$(document).ready(function(){
//-----------------------------------XX--SCRIPT  menu--XX
if (document.documentElement.clientWidth > 640){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
		$("#top_logo").fadeIn();
		$(".navbar-custom").addClass("navbar-fade");
		} else {
		//$("#entete").removeClass("fix");
		$("#top_logo").hide();
		$(".navbar-custom").removeClass("navbar-fade");
		}
	}); 	
	//front of i-frame.
	$("iframe").each(function(){
	    var ifr_source = $(this).attr('src');
	    var wmode = "wmode=transparent";
	    if(ifr_source.indexOf('?') != -1) {
	        var getQString = ifr_source.split('?');
	        var oldString = getQString[1];
	        var newString = getQString[0];
	            $(this).attr('src',newString+'?'+wmode+'&'+oldString);
	    }
	    else $(this).attr('src',ifr_source+'?'+wmode);
	});
};

}); 
//============================================= LOAD FUNCTION ========================================================
$(window).load(function() {	
//--------------------------------------------XX
});
//============================================= RESIZE FUNCTION ======================================================
$(window).resize(function() {
//--------------------------------------------XX
});
//=====================================================================================================================
