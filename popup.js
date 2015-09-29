/* appending popup html */
$("body").append("<div id=\"optimizely_309060954\">...</div>");
$("#optimizely_309060954").replaceWith("<div id=\"optimizely_309060954\">...</div>\n <div id=\"light\" class=\"lightbox_content\">This is the persistent box content. <a class=\"lightbox_close\" href = \"javascript:void(0)\">Close</a></div>\n<div id=\"lightbox_fade\" class=\"black_overlay\"></div>");
$(".lightbox_content").css({"display":"none","position":"fixed","top":"25%","left":"25%","width":"50%","height": "50%","padding":"16px","border":"16px solid orange","background-color":"white","z-index":"1002","overflow":"auto"}); 
$('.black_overlay').css({"display":"none","position":"fixed","top":"0%","left":"0%","width":"100%","height":"100%","background-color":"black","z-index":"1001","-moz-opacity":"0.8","opacity":".80","filter":"alpha(opacity=80)"});

/* adding show persistent box button*/
$(".fd-header").append("<div id=\"optimizely_324198466\">...</div>");
$("#optimizely_324198466").replaceWith("<a href='#' class=\"show-persistent\">Show Persistent Box</a><div id=\"optimizely_324198466\" class=\"custom-nav\">\n  <div class=\"inner-container\">\n    <ul class=\"nav-custom\" >\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Product</a></li>\n      <li><a href=\"#\">Features</a></li>\n      <li><a href=\"#\">Pricing</a></li>\n      <li><a href=\"#\">Customers</a></li>\n    </ul>\n  </div>\n</div>");
/* show/hide popup */
$(document).ready(function(){
  var last_position = {};
	  $('.show-persistent').click(function(){
		$('.lightbox_content').css({"display":"block"});
		$('.black_overlay').css({"display":"block"});
	  });

	  $('.lightbox_close').click(function(){
		  $('.lightbox_content').css({"display":"none"});
		  $('.black_overlay').css({"display":"none"});
	  });
});
/* end of show/hide popup */
/* custom nav bar */
$('.custom_nav').css({"display":"block", "width":"100%"});
$('.inner-container').css({"width":"80%", "margin":"0 auto"});
$('.nav-custom').css({"list-style":"none", "margin":"0", "padding":"0"});
$('.nav-custom li').css({"display":"inline-block", "float":"left"});
$('.nav-custom li a').css({"display":"block", "padding":"8px 10px", "color":"#000", "text-align":"center"});

$('.nav-custom li a').hover(function(){
    $('.nav-custom li a').css({"display":"block", "padding":"8px 10px", "color":"#000", "text-align":"center"});
    $(this).css({"color":"#16a085"});
} );

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.nav-custom li').css({"display":"block", "float":"left", "width":"100%"});
}
else{
	$('.nav-custom li').css({"display":"inline-block", "float":"left"});
}
/* end of custom nav bar */
/* about to exit condition by checking mouse position*/
setTimeout(showpopup, 600000);
var last_position = {};
$(document).mousemove(function (event) {
   if (typeof(last_position.x) != 'undefined') {
        var deltaX = last_position.x - event.offsetX,
            deltaY = last_position.y - event.offsetY;    
        if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
			if(event.pageY <= 5){
				$('.lightbox_content').show();
				$('.black_overlay').show();
			}
        }
    }
    last_position = {
        x : event.offsetX,
        y : event.offsetY
    }; 
});
/* end of about to exit condition */
/* hover condition */
$(".fd-logo").replaceWith("<a href=\"/\" class=\"fd-logo custom-hover-popup\"></a>");
$('.custom-hover-popup').hover(function(){
	 showpopup();
});
/* end of hover condition */
/* scroll condition */
$(".home-customers").replaceWith("<div class=\"top-space-large home-customers custom-interval-popup\">\n    <div class=\"l-page customers-title align-center\">\n        <h1>50,000 HAPPY CUSTOMERS</h1>\n        <p>Companies of all sizes rely on Freshdesk for customer support</p>\n    </div>\n    <div class=\"company-logo-blocks\" id=\"company_logos\">\n        <div class=\"company-block sea-green\" id=\"cb-1\">\n            <img src=\"/themes/freshdesk-polygon/images/home/3M_logo.jpg\" class=\"cb-img active\" width=\"175\">\n            <img src=\"/files/5114/3151/4120/xiaiomi_logo_png.png\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Clear_channel_logo.jpg\" class=\"cb-img clear-channel\" width=\"200\">\n        </div>\t\n        <div class=\"company-block navy\" id=\"cb-3\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Dandelion_Chocolates_logo.jpg\" class=\"cb-img dc_logo\" width=\"195\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Honda_logo.jpg\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Hugo_boss_logo.jpg\" class=\"cb-img active\" width=\"175\">\n        </div>\n        <div class=\"company-block light-grey\" id=\"cb-6\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Macmillan_logo.jpg\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Movember_logo.jpg\" class=\"cb-img mac-millan\" width=\"195\">\n            <img src=\"/files/1114/2538/0390/Cisco_logo.png\" class=\"cb-img movember active\" width=\"155\">\n        </div>\n        <div class=\"company-block dim-grey active\" id=\"cb-4\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Petronas.jpg\" class=\"cb-img pearson\" width=\"195\">\n            <img src=\"/themes/freshdesk-polygon/images/home/QuizUp_logo.jpg\" class=\"cb-img\" width=\"195\">\n            <img src=\"/themes/freshdesk-polygon/images/home/pearson_logo.jpg\" class=\"cb-img active\" width=\"195\">\n        </div>\n        <div class=\"company-block cyan\" id=\"cb-2\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Toshiba_logo.jpg\" class=\"cb-img active\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Tutu_progect_logo.jpg\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/Sony_logo.jpg\" class=\"cb-img tutu\" width=\"195\">\n        </div>\n        <div class=\"company-block slate-grey\" id=\"cb-5\">\n            <img src=\"/themes/freshdesk-polygon/images/home/unicef_logo.jpg\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/goodreads_logo.jpg\" class=\"cb-img\" width=\"175\">\n            <img src=\"/themes/freshdesk-polygon/images/home/UPenn_logo.jpg\" class=\"cb-img active\" width=\"175\">\n        </div>\n    \n    </div>\n    \n        <div class=\"l-page top-space-medium fc align-center\">\n        </div>\n</div>");
var target = $(".custom-interval-popup").offset().top;
var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
        showpopup();
        clearInterval(interval);
    }
}, 250);
/* end of scroll condition */
function showpopup(){
	 $('.lightbox_content').show();
	 $('.black_overlay').show();  
}	
