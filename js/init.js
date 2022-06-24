!(function (o) {
    "use strict";
    var t = {
        root: o(":root"),
        init: function () {
                t.imgToSVG(),
                t.rightPanelScroll(),
                t.rightNav(),
                t.tabs(),
                t.progress(),
                t.cursor(),
                t.portfolioCarousel(),
                t.movingPlaceholder(),
                t.contactForm(),
                t.scrollToAnchor(),
                t.pageWidthAnimation(),
                t.typed();
        },
        typed: function () {
            o(".animated_title").each(function () {
                var t = o(this),
                    e = t.find(".title_in");
                if ("" !== e) {
                    var n = [];
                    e.each(function () {
                        n.push(o(this).text());
                    }),
                        t.typed({ strings: n, loop: !0, smartBackspace: !1, typeSpeed: 40, startDelay: 700, backDelay: 3e3 });
                }
            });
        },
        modal: function () {
            var t = this,
                e = o(".fn_modalbox"),
                n = o(".modal_item"),
                a = e.find(".closer,.extra_closer"),
                s = e.find(".fn__nav");
            e
                .find(".extra_closer")
                .on("mouseenter", function () {
                    e.addClass("hovered");
                })
                .on("mouseleave", function () {
                    e.removeClass("hovered");
                }),
                n.on("click", function () {
                    var n = o(this),
                        a = n.find(".fn__hidden").html(),
                        i = n.closest(".modal_items"),
                        r = n.attr("data-index"),
                        l = i.attr("data-from");
                    return s.attr("data-index", r), s.attr("data-from", l), o("body").addClass("modal"), e.addClass("opened"), e.find(".modal_in").html(a), t.modal_prevnext(s, e), t.imgToSVG(), t.BgImg(), !1;
                }),
                t.modal_prevnext(s, e),
                a.on("click", function () {
                    return e.removeClass("opened hovered"), e.find(".modal_in").html(""), o("body").removeClass("modal"), !1;
                });
        },
        modal_prevnext: function (t, e) {
            var n = this;
            t.find("a")
                .off()
                .on("click", function () {
                    var a = o(this),
                        s = t.attr("data-from"),
                        i = parseInt(t.attr("data-index")),
                        r = o('.modal_items[data-from="' + s + '"]'),
                        l = parseInt(r.attr("data-count"));
                    a.hasClass("prev") ? i-- : i++, i < 1 && (i = l), i > l && (i = 1);
                    var c = r.find('.modal_item[data-index="' + i + '"] .fn__hidden').html();
                    return (
                        t.removeClass("disabled"),
                        t.attr("data-index", i),
                        setTimeout(function () {
                            e.find(".modal_in").fadeOut(500, function () {
                                o(this).html("").html(c).fadeIn(500);
                            });
                        }, 500),
                        o(".fn_modalbox .modal_content").stop().animate({ scrollTop: 0 }, 500, "swing"),
                        n.modal_prevnext(t, e),
                        n.imgToSVG(),
                        n.BgImg(),
                        !1
                    );
                });
        },
        scrollToAnchor: function () {
            o('a[href^="#"]')
                .not('[href="#"]')
                .not('[href^="#tab"]')
                .on("click", function () {
                    var t = o(this),
                        e = o(t.attr("href"));
                    if (e.length)
                        return (
                            o("html, body").animate({ scrollTop: e.offset().top }, 1e3),
                            o("#nav ul li").css({ transitionDelay: "0ms" }),
                            o(".fn_wrapper").removeClass("nav-opened nav-hover-close"),
                            o(".fn_navigation .nav_footer").removeClass("ready"),
                            !1
                        );
                }),
                o(".fn_totop").on("click", function () {
                    o("html, body").animate({ scrollTop: 0 }, 1500);
                });
        },
        pageWidthAnimation: function () {
            t.changeWidth(),
                o(window).on("scroll", function () {
                    t.changeWidth();
                });
        },
        changeWidth: function () {
            var e = o(window).scrollTop(),
                n = 0;
            e > 0 && !o("body").hasClass("scrolled") ? (o("body").addClass("scrolled"), n++) : 0 === e && o("body").hasClass("scrolled") && (o("body").removeClass("scrolled"), n++),
                n > 0 &&
                    setTimeout(function () {
                        t.portfolioCarousel(), t.testimonialCarousel();
                    }, 500);
        },
        contactForm: function () {
            o("#send_message").on("click", function () {
                var t = o(".fn_contact .contact_form"),
                    e = o("#name").val(),
                    n = o("#email").val(),
                    a = o("#message").val(),
                    s = o("#phone").val(),
                    i = t.find(".success"),
                    r = i.data("success"),
                    l = t.data("email");
                return (
                    i.empty(),
                    "" === e || "" === n || "" === a || "" === l || "" === s
                        ? o(".empty_notice").slideDown(500).delay(2e3).slideUp(500)
                        : o.post("modal/contact.php", { ajax_name: e, ajax_email: n, ajax_emailto: l, ajax_message: a, ajax_phone: s }, function (o) {
                              i.append(o),
                                  i.find(".contact_error").length ? i.slideDown(500).delay(2e3).slideUp(500) : (i.append("<span class='contact_success'>" + r + "</span>"), i.slideDown(500).delay(4e3).slideUp(500)),
                                  "" === o && t[0].reset();
                          }),
                    !1
                );
            });
        },
        movingPlaceholder: function () {
            o(".fn_contact .input_wrapper").each(function () {
                var t = o(this),
                    e = t.find("input, textarea");
                "" === e.val() && t.removeClass("active"),
                    e
                        .on("focus", function () {
                            t.addClass("active");
                        })
                        .on("blur", function () {
                            "" === e.val() && t.removeClass("active");
                        });
            });
        },

        testimonialCarousel: function () {
            o(".fn_testimonials .owl-carousel").each(function () {
                var t = o(this),
                    e = t.closest(".fn_testimonials");
                t.owlCarousel({ autoplay: !0, autoplayTimeout: 7e3, smartSpeed: 1e3, margin: 20, nav: !1, loop: !0, items: 1, dots: !1 }),
                    t.trigger("refresh.owl.carousel"),
                    t.on("changed.owl.carousel", function () {
                        t.trigger("stop.owl.autoplay"), t.trigger("play.owl.autoplay");
                    });
                var n = e.find(".my__nav .prev"),
                    a = e.find(".my__nav .next");
                n.off().on("click", function () {
                    return t.trigger("prev.owl"), !1;
                }),
                    a.off().on("click", function () {
                        return t.trigger("next.owl"), !1;
                    });
            }),
                t.imgToSVG(),
                t.BgImg();
        },
        portfolioCarousel: function () {
            o("#portfolio .owl-carousel").each(function () {
                var t = o(this),
                    e = t.closest("#portfolio");
                t.owlCarousel({ autoplay: !0, autoplayTimeout: 7e3, smartSpeed: 1e3, margin: 20, nav: !1, loop: !0, autoWidth: !0, items: 4, dots: !1, responsive: { 0: { autoWidth: !1, items: 1 }, 700: { autoWidth: !0, items: 4 } } }),
                    t.trigger("refresh.owl.carousel"),
                    t.on("changed.owl.carousel", function () {
                        t.trigger("stop.owl.autoplay"), t.trigger("play.owl.autoplay");
                    });
                var n = e.find(".my__nav .prev"),
                    a = e.find(".my__nav .next");
                n.off().on("click", function () {
                    return t.trigger("prev.owl"), !1;
                }),
                    a.off().on("click", function () {
                        return t.trigger("next.owl"), !1;
                    });
            }),
                t.imgToSVG(),
                t.BgImg();
        },
        cursor: function () {
            if (o(".frenify-cursor").length) {
                const n = document.querySelector(".cursor-inner"),
                    a = document.querySelector(".cursor-outer");
                var t = "a, input[type='submit'], .cursor-link, button, .modal_item",
                    e = ".owl-carousel, .swiper-container, .cursor-link";
                (window.onmousemove = function (o) {
                    (a.style.transform = "translate(" + o.clientX + "px, " + o.clientY + "px)"), (n.style.transform = "translate(" + o.clientX + "px, " + o.clientY + "px)"), o.clientY, o.clientX;
                }),
                    o("body").on("mouseenter", t, function () {
                        n.classList.add("cursor-hover"), a.classList.add("cursor-hover");
                    }),
                    o("body").on("mouseleave", t, function () {
                        (o(this).is("a") && o(this).closest(".cursor-link").length) || (n.classList.remove("cursor-hover"), a.classList.remove("cursor-hover"));
                    }),
                    (n.style.visibility = "visible"),
                    (a.style.visibility = "visible"),
                    o("body")
                        .on("mouseenter", e, function () {
                            n.classList.add("cursor-slider"), a.classList.add("cursor-slider");
                        })
                        .on("mouseleave", e, function () {
                            n.classList.remove("cursor-slider"), a.classList.remove("cursor-slider");
                        }),
                    o("body")
                        .on("mousedown", e, function () {
                            n.classList.add("mouse-down"), a.classList.add("mouse-down");
                        })
                        .on("mouseup", e, function () {
                            n.classList.remove("mouse-down"), a.classList.remove("mouse-down");
                        }),
                    o("body")
                        .on("mouseenter", ".dark-section", function () {
                            n.classList.add("dark"), a.classList.add("dark");
                        })
                        .on("mouseleave", ".dark-section", function () {
                            n.classList.remove("dark"), a.classList.remove("dark");
                        });
            }
        },
        progress: function () {
            o(".fn_progress_bar").each(function () {
                var e = o(this);
                e.waypoint({
                    handler: function () {
                        t.progressF(e);
                    },
                    offset: "90%",
                });
            });
        },
        progressF: function (t) {
            t.find(".progress_item").each(function (t) {
                var e = o(this),
                    n = parseInt(e.data("value")),
                    a = e.find(".progress_percent");
                e.find(".progress_bg").css({ width: n + "%" }),
                    setTimeout(function () {
                        e.addClass("open"), a.html(n + "%").css({ right: 100 - n + "%" });
                    }, 500 * t);
            });
        },
        recallProgress: function (o) {
            o.find(".progress_bg").css({ width: "0%" }), o.find(".progress_percent").html("").css({ right: "100%" }), o.find(".progress_item").removeClass("open"), t.progress();
        },
        tabs: function () {
            o(".fn_tabs .tab_header a")
                .off()
                .on("click", function () {
                    var e = o(this),
                        n = e.parent(),
                        a = e.closest(".fn_tabs");
                    return !n.hasClass("active") && (n.siblings().removeClass("active"), a.find(".tab_content").children().removeClass("active"), n.addClass("active"), o(e.attr("href")).addClass("active"), t.recallProgress(a), !1);
                });
        },
        rightNav: function () {
            var t = o(".fn_navigation .closer,.fn_nav_overlay"),
                e = o(".fn_nav_overlay"),
                n = o(".fn_right .menu_trigger"),
                a = o(".fn_wrapper"),
                s = o(".fn_navigation .nav_footer"),
                i = o("#nav ul li"),
                r = 200 * (i.length + 1) + 700;
            n.on("click", function () {
                return (
                    a.addClass("nav-opened"),
                    i.each(function (t, e) {
                        o(e).css({ transitionDelay: 200 * t + 700 + "ms" });
                    }),
                    setTimeout(function () {
                        s.addClass("ready");
                    }, r),
                    !1
                );
            }),
                t.on("click", function () {
                    return i.css({ transitionDelay: "0ms" }), a.removeClass("nav-opened nav-hover-close"), s.removeClass("ready"), !1;
                }),
                e
                    .on("mouseenter", function () {
                        a.addClass("nav-hover-close");
                    })
                    .on("mouseleave", function () {
                        a.removeClass("nav-hover-close");
                    });
        },
        rightPanelScroll: function () {
            var t = o(".fn_right .right_in"),
                e = o(".fn_navigation .nav_in"),
                n = o("#nav"),
                a = o(".fn_navigation .nav_footer");
            t.css({ height: o(window).height() }),
                n.css({ height: e.height() - a.outerHeight() }),
                o().niceScroll &&
                    (t.niceScroll({ touchbehavior: !1, cursorwidth: 0, autohidemode: !0, cursorborder: "0px solid #333" }), n.niceScroll({ touchbehavior: !1, cursorwidth: 0, autohidemode: !0, cursorborder: "1px solid #333" }));
        },
        imgToSVG: function () {
            o("img.fn__svg").each(function () {
                var t = o(this),
                    e = t.attr("class"),
                    n = t.attr("src");
                o.get(
                    n,
                    function (n) {
                        var a = o(n).find("svg");
                        void 0 !== e && (a = a.attr("class", e + " replaced-svg")), t.replaceWith(a);
                    },
                    "xml"
                );
            });
        },
        BgImg: function () {
            o("*[data-bg-img]").each(function () {
                var t = o(this),
                    e = t.attr("data-bg-img");
                void 0 !== e && t.css({ backgroundImage: "url(" + e + ")" });
            }),
                o("*[data-fn-bg-img]").each(function () {
                    var t = o(this),
                        e = t.attr("data-fn-bg-img");
                    void 0 !== e && t.css({ backgroundImage: "url(" + e + ")" });
                });
        },
    };
    o(document).ready(function () {
        t.init();
    }),
        o(window).on("resize", function () {
            t.rightPanelScroll();
        }),
        o(window).on("load", function () {
            setTimeout(function () {}, 10);
        }),
        o(window).on("scroll", function () {});
})(jQuery);
