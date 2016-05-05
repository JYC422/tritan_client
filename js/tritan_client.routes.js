
(function() {
  "use strict";

  angular
    .module("tritan_client")
    .config(tritanClientRoutes);

  tritanClientRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function tritanClientRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/home.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "js/about.html"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "js/contact.html"
      });
    $urlRouterProvider.otherwise("/");
  }
})();
