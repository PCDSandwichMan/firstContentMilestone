$(document).ready(() => {
  //! Nav Menu Drop Animation
  $(function() {
    $('ul.navbar > li').hover(
      function() {
        $(this)
          .find('div.dropdown-menu')
          .slideDown(300);
      },
      function() {
        $(this)
          .find('div.dropdown-menu')
          .slideUp(400);
      }
    );
  });
});
