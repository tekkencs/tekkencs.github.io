function charlookupfunc(){var e,t,i;for(e=document.getElementById("charlookupinput").value.toUpperCase(),t=document.getElementById("char").getElementsByTagName("li"),i=0;i<t.length;i++)t[i].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(e)>-1?t[i].style.display="":t[i].style.display="none"}$(document).ready(function(){$("#slide").click(function(){return $("#slidetext").slideToggle("fast",function(){$(slidetext).is(":visible")&&$("html,body").animate({scrollTop:$(slide).offset().top-5},"medium")}),!1})}),$(document).ready(function(){$("#slide_1").click(function(){return $("#slidetext_1").slideToggle("fast",function(){$(slidetext_1).is(":visible")&&$("html,body").animate({scrollTop:$(slide_1).offset().top-5},"medium")}),!1})}),$(document).ready(function(){$("#slide_2").click(function(){return $("#slidetext_2").slideToggle("fast",function(){$(slidetext_2).is(":visible")&&$("html,body").animate({scrollTop:$(slide_2).offset().top-5},"medium")}),!1})}),$(document).ready(function(){$("#slide_3").click(function(){return $("#slidetext_3").slideToggle("fast",function(){$(slidetext_3).is(":visible")&&$("html,body").animate({scrollTop:$(slide_3).offset().top-5},"medium")}),!1})}),$(document).ready(function(){$("#slide_4").click(function(){return $("#slidetext_4").slideToggle("fast",function(){$(slidetext_4).is(":visible")&&$("html,body").animate({scrollTop:$(slide_4).offset().top-5},"medium")}),!1})}),$(document).ready(function(){$("li").click(function(){$(this).toggleClass("textborder")})});
function punishlookupfunc() {
	   var input, filter, table, tr, td, i;
	  input = document.getElementById('punishlookupinput');
	  filter = input.value.toUpperCase();
	  table = document.getElementById("punishlookup");
	  tr = table.getElementsByTagName("tr");
	  for (i = 1; i < tr.length; i++) {
	    var filtered = false;
	    var tds = tr[i].getElementsByTagName("td");
	    for(t=0; t<tds.length; t++) {
	    	var td = tds[t];
			if (td) {
	          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	            filtered = true;
	          }
	        }     
	    }
	    if(filtered===true) {
	        tr[i].style.display = '';
			$('tr').removeClass('stripedrow'); $("#punishlookup").find('tr:visible:odd').addClass('stripedrow');
	    }
	    else {
	        tr[i].style.display = 'none';
			$('tr').removeClass('stripedrow'); $("#punishlookup").find('tr:visible:odd').addClass('stripedrow');
	    }
	  }	 
}
$(document).ready(function(){
   	 $("#punishlookup").find("tr:odd").addClass("stripedrow");
});
$(document).ready(function(){
	$("td").click(function(){
		$(this).toggleClass("textborder")
	})
});
$(document).ready(function(){
	var timer;
	$(".showtooltip").hover(function (e) {
	    $('.bryantt:hidden').css({'top':e.pageY -550, 'left':e.pageX -200}).fadeIn(150);
	});
	$(".bryantt,.showtooltip").hover(function (e) {
	    if (timer) timer = clearTimeout(timer)
	}).mouseleave(function (e) {
	    timer = setTimeout(function () {
	        console.log(e.target);
	        $(".bryantt").fadeOut(200);
	    }, 100)
	});
});
$(document).ready(function(){
	var timer;
	$("[class^=twittertooltip]").hover(function (e) {
		  var ttipnum = $(this).attr('class').match(/\d+$/)[0];
	    $(".twittervid"+ttipnum+":hidden").css({'top':e.pageY + 30, 'left':e.pageX}).fadeIn(150);
	});
	$("[class^=twittervid],[class^=twittertooltip]").hover(function (e) {
	    if (timer) timer = clearTimeout(timer)
	}).mouseleave(function (e) {
	    timer = setTimeout(function () {
	        console.log(e.target);
	        $("[class^=twittervid]").fadeOut(200);
	    }, 100)
	});
});