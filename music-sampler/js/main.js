$(document).ready(() => {

  // Hides Audio Players
  function hideAll() {
    $('.mTrees').hide();
    $('.u08').hide();
    $('.cSix').hide();
    $('.dna').hide();
    $('.cSixDesc').hide();
    $('.mTreesDesc').hide();
    $('.dnaDesc').hide();
    $('.u08Desc').hide();
  }

  // Run Function
  hideAll();

  // Switch statement affects all classes/IDs in the "albumCover" class
  $('.albumCover').click(function() {

    hideAll();

    switch ($(this).attr("id")) {
      case "section80":
        $('.cSix').show();
        $('.cSixDesc').slideToggle();
        break;
      case "gkmc":
        $('.mTrees').show();
        $('.mTreesDesc').slideToggle();
        break;
      case "damn":
        $('.dna').show();
        $('.dnaDesc').slideToggle();
        break;
      case "untitled":
        $('.u08').show();
        $('.u08Desc').slideToggle();
        break;
    }

    $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
    });



  });

});
