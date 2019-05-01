$(document).ready(() => {
  $('.nav-item').on('mouseover', event => {
    $('.dropdown-menu').slideUp('fast');
    $(event.currentTarget)
      .next()
      .slideDown('fast');
  });

  // ? Dropdown close (edgecase handling)
  $('.dropdown-menu').on('mouseleave', event => {
    $('.dropdown-menu').slideUp('fast');
  });

  $(document).on('wheel', event => {
    $('.dropdown-menu').slideUp('fast');
  });
});
