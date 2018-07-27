// remap jQuery to $
(function($){})(window.jQuery);
//========================================= READY FUNCTION ===========================================================	
$(document).ready(function(){
//-----------------------------------XX--SCRIPT  menu--XX
if (document.documentElement.clientWidth > 640){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 270) {
		$("#top_logo").fadeIn();
		$(".navbar-custom").css( 'background-color','rgba(15,15,15,0.55)');
		} else {
		//$("#entete").removeClass("fix");
		$("#top_logo").hide();
		$(".navbar-custom").css( 'background-color','rgba(15,15,15,0)');
		}
	}); 	
	//Passe devant les i-frame aussi.
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
