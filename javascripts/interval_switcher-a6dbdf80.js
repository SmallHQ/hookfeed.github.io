$(document).ready(function(){$("#toggle_monthly").click(function(){return $(this).addClass("active"),$("#toggle_annual").removeClass("active"),!1}),$("#toggle_annual").click(function(){return $(this).addClass("active"),$("#toggle_monthly").removeClass("active"),!1})});