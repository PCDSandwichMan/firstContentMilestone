$(document).ready(() => {
  $(".nav-item").on("click", event => {
    $(event.currentTarget)
      .siblings(".dropdown-menu")
      .toggle();
  });
});
