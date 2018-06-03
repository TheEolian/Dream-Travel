
$(document).ready(function () {

  // init sidenav
  $('.button-collapse').sideNav();

  // init slider
  $('.slider').slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

  // init autocomplete
  $('.autocomplete').autocomplete({
    data: {
      "Aruba": null,
      "Cancun": null,
      "Mexicio": null,
      "Florida": null,
      "California": null,
      "Jamaica": null,
      "Bahamas": null,
      "Europe": null,
    }
  });

  // init scrollspy
  $('.scrollspy').scrollSpy();
});
