$(document).ready(function(){
  
  $(".link_project").click(function(){
	$(".content_toggle").load("project_intro.html");
	$(".fadeout").fadeOut('slow');
  }); 
  
  $(".link_to_do").click(function(){
	$(".content_toggle").load("to_do_list.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_idea").click(function(){
	$(".content_toggle").load("idea_pool.html");
	$(".fadeout").fadeOut('slow');
  });
  
  $(".link_team").click(function(){
	$(".content_toggle").load("team_member.html");
	$(".fadeout").fadeOut('slow');
  });
  
  	$(".link_contact").click(function(){
	$(".content_toggle").load("contact_us.html");
	$(".fadeout").fadeOut('slow');
  });
  //按下導覽列，網站內容切換
});

