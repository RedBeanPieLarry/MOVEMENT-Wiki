$(document).ready(function(){
  
  $(".link_project").click(function(){
	$(".content_toggle").load("project_intro.html");
	$(".fadeout").fadeOut('slow');
	return false
  }); 
  
  $(".link_expected").click(function(){
	$(".content_toggle").load("expected_features.html");
	$(".fadeout").fadeOut('slow');
	return false
  });
  
  $(".link_idea").click(function(){
	$(".content_toggle").load("idea_pool.html");
	$(".fadeout").fadeOut('slow');
	return false
  });
  
  $(".link_team").click(function(){
	$(".content_toggle").load("team_member.html");
	$(".fadeout").fadeOut('slow');
	return false
  });
  
  	$(".link_contact").click(function(){
	$(".content_toggle").load("contact_us.html");
	$(".fadeout").fadeOut('slow');
	return false
  });
  //按下導覽列，網站內容切換
});

