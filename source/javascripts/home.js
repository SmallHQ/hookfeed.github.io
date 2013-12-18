$(document).ready(function(){
  window.setTimeout(function(){
    $('[data-typer-targets]').typer({
      highlightSpeed    : 400,
      typeSpeed         : 50,
      clearDelay        : 200,
      typeDelay         : 100,
      clearOnHighlight  : true,
      typerInterval     : 4000
    });
  }, 2000);
});