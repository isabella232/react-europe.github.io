"use strict";$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(".nav").find(".active-re").removeClass("active-re"),$(this).parent().addClass("active"),$(this).parent().addClass("active-re")});var hash=location.hash;if(""!==hash){var a=$("a[href="+hash+"]");$(".nav").find(".active").removeClass("active"),$(".nav").find(".active-re").removeClass("active-re"),a.parent().addClass("active"),a.parent().addClass("active-re")}$(".nav a").on("click",function(){$(".navbar-toggle").is(":visible")&&$(".navbar-toggle").click()}),$(".toggle-modal[type=button]").click(function(){$("#talkModal").modal(),$("#talkModalBody").html($($(this).data("target")).html())}),$(function(){$("#accordion").on("shown.bs.collapse",function(a){var e=$(".panel.panel-default > .panel-collapse.in").offset();e&&$("html,body").animate({scrollTop:$(".panel-title a").offset().top-50},500)})}),"serviceWorker"in navigator?navigator.serviceWorker.register("sw.js").then(function(a){console.log("ServiceWorker registration successful with scope: ",a.scope)})["catch"](function(a){console.log("ServiceWorker registration failed: ",a)}):appCacheNanny.start({checkInterval:18e5}),$.get("https://api.eventlama.com/geoip",function(a){console.log(a.CountryCode),a&&a.CountryCode&&"FR"===a.CountryCode&&$(".formation-link, .formation-ticket").removeClass("hidden")}),$('[data-toggle="tooltip"]').tooltip();