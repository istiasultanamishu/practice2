$(function () {
  "use strict";
  // Mixitup js start
  // var containerEl = document.querySelector(".all-project");

  // var mixer = mixitup(containerEl);

  // $(".project-btn li").on("click", function () {
  //   $(".project-btn li").removeClass("active");
  //   $(this).toggleClass("active");
  // });

  // isotop

  // external js: isotope.pkgd.js

  var $grid = $(".all-project").isotope({
    itemSelector: ".my-project",
    stagger: 30,
  });

  $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".project-btn li").on("click", function () {
    $(".project-btn li").removeClass("active");
    $(this).toggleClass("active");
  });

  // protfolilo hover  wrap
  $(window).load(function () {
    $(".main-project").hover(
      function (event) {
        // mouseenter
        var $item = $(this),
          direction = $item.entry({
            e: event,
          });

        // fix jquery slide issue when moving cursor too fast
        if ($item.hasClass("opened"))
          $item.find(".hover-wrap").stop(true, true).show();

        $.when(
          $item.find(".hover-wrap").stop(true, true).show(
            "slide",
            {
              direction: direction,
            },
            255,
            "easeOutQuad"
          )
        ).done(function () {
          $item.addClass("opened");
        });

        // fix javascript missing events when moving cursor too fast.
        // hover may stay active if javascript miss mousemove event, simply hide them
        var inverted_direction = $item.entry({
          e: event,
          invert: true,
        });
        $item
          .siblings(".opened")
          .removeClass("opened")
          .find(".hover-wrap")
          .hide(
            "slide",
            {
              direction: direction,
            },
            255,
            "easeOutQuad"
          );
      },
      function (event) {
        // mouseleave
        var $item = $(this),
          direction = $item.entry({
            e: event,
          });
        $.when(
          $item.find(".hover-wrap").stop(true, true).hide(
            "slide",
            {
              direction: direction,
            },
            255,
            "easeOutQuad"
          )
        ).done(function () {
          $item.removeClass("opened");
        });
      }
    );
  });

  // back to top button
  $(".back_top_btn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  $(window).scroll(function () {
    const scroll_top = $(this).scrollTop();
    // console.log(scroll_top);
    if (scroll_top > 450) {
      $(".back_top_btn")
        .addClass("animate__animated animate__fadeInDownBig")
        .fadeIn(2000);
    } else {
      $(".back_top_btn")
        .removeClass("animate__animated animate__fadeInDownBig")
        .fadeOut();
    }
  });

  // Pre Loader js start
  $(window).on("load", function () {
    $(".pre_loader").delay(1200).fadeOut(500);
  });
});
