window.sr=ScrollReveal(),$(function(){menu=$("nav ul"),$("#toggle-btn").on("click",function(e){e.preventDefault(),menu.slideToggle()}),$(window).resize(function(){580<$(this).width()&&menu.is(":hidden")&&menu.removeAttr("style")}),$("nav li").on("click",function(e){$(window).width()<580&&menu.slideToggle()}),$(".open-menu").height($(window).height())}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);(n=n.length?n:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:n.offset().top},1e3,function(){var e=$(n);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});