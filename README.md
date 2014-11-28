Loading widget
===============

An Angular directive that can show (or hide) an element when something is loading

Usage
---------

include in your Angular App

    var app = angular.module('app', [
      'benjaminWilliams.loadingWidget'
    ]);

Then add notifications as needed in your js

    // to start loading
    requestNotificationChannel.requestStarted();

    // to end loading
    requestNotificationChannel.requestEnded();

Add the directive to an element to show when loading

    <img blw-loading-widget src="loading.gif">

Or hide an element when loading

    <p blw-not-loading-widget>this content is hidden while loading</p>

And finally the class .invisible to your css

    .invisible {
        display: none;
    }