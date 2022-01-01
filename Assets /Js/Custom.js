// Menu side toggle
$('document').ready(function(){
  $('button.navbar-toggle').click(function(){
    var navbar_obj = $($(this).data("target"));
    navbar_obj.toggleClass("open");
  });
});