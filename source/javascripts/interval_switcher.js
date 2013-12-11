$(document).ready(function(){
  $('#toggle_monthly').click(function(){
    $(this).addClass('active');
    $('#toggle_annual').removeClass('active');

    return false;
  });

  $('#toggle_annual').click(function(){
    $(this).addClass('active');
    $('#toggle_monthly').removeClass('active');

    return false;
  });
});