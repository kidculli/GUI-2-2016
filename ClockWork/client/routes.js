/**
 * Created by Son on 2/15/2016.
 * File: /ClockWork/client/routes.js
 * Description: configure the routes for all files.
 *
 */
angular
    .module('ClockWork')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "client/tab/tab.html"
        })
        .state('tabs.event-feed', {
            url: "/event-feed",
            views: {
                'event-tab': {
                    templateUrl: "client/events/event-feed/event-feed.html",
                    controller: 'EventFeedCtrl',
                    controllerAs: 'EventFeed'
                }
            }
        })
        .state('tabs.event-detail', {
            url: "/event-detail",
            views: {
                'event-tab': {
                    templateUrl: "client/events/event-detail/event-detail.html",
                    controller: 'EventDetailCtrl'
                }
            }
        })
        .state('tabs.facts2', {
            url: "/facts2",
            views: {
                'event-tab': {
                    templateUrl: "client/templates/facts2.html"
                }
            }
        })
        .state('tabs.about', {
            url: "/about",
            views: {
                'about-tab': {
                    templateUrl: "client/templates/about.html"
                }
            }
        })
        .state('tabs.navstack', {
            url: "/navstack",
            views: {
                'about-tab': {
                    templateUrl: "client/templates/nav-stack.html"
                }
            }
        })
        .state('tabs.contact', {
            url: "/contact",
            views: {
                'contact-tab': {
                    templateUrl: "client/templates/contact.html"
                }
            }
        });


    $urlRouterProvider.otherwise('tab/event-feed');
}