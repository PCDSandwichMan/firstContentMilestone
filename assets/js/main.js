// TODO add jQuery sliding effect to the nav menu instead of a toggle

$(document).ready(() => {
  // ? Dropdown open single element
  $navMenuDropdown = document.getElementsByClassName('drowdown-menu');

  $('.nav-item').on('mouseover', event => {
    $('.dropdown-menu').removeClass('show');
    $(event.currentTarget)
      .next()
      .toggleClass('show');
  });

  // ? Dropdown close (edgecase handling)
  $('.dropdown-menu').on('mouseleave', event => {
    $('.dropdown-menu').removeClass('show');
  });

  $(document).on('wheel', event => {
    $('.dropdown-menu').removeClass('show');
  });
});
