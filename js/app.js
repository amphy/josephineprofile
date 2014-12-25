"use strict";

var app = angular.module('dabbble', ['dabbble.controllers', 'dabbble.filters', 'dabbble.services']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("#/about",  {controller:"ShotsCtrl", templateUrl: "partials/about.html"})
	.when("#/contact",  {controller:"ShotsListCtrl", templateUrl: "partials/contact.html"})
	.when("#/projects",  {controller:"ShotsListCtrl", templateUrl: "partials/projects.html"})
	.when("/",  {controller:"ShotsCtrl", templateUrl: "partials/home.html"})
	.otherwise({redirectTo: "/"});
	
	});