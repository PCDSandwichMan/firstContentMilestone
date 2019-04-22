// TODO add jQuery sliding effect to the nav menu instead of a toggle

$(document).ready(() => {
  // $dropdownMenu = li;

  $("li .nav-item")
    .on("mouseenter", event => {
      $(event.currentTarget)
        .next()
        .show();
    })
    .on("mouseleave", event => {
      $(event.currentTarget)
        .next()
        .hide();
    });
});

/*  STUFF THAT I HAVE FOUND OUT 

Siblings wont work for close be both drop down and nav item dont have that as a sibling
THE CALL HAS TO BE ON THE NAV-ITEM IT IS THE ONLY THING THAT IS AVAILABLE TO CLICK ON



*/
