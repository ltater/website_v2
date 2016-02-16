// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


$(function() {

// Begin Bootstrap Components
	$('.dropdown-toggle').dropdown();
// End Bootstrap Components

// Present Email Address
	var username = "larissa.tater";
	var hostname = "gmail.com";
	var linktext = username + "@" + hostname;
	$(".home-email").append("<a href='" + "mail" + "to:" + username + "@" + hostname + "'><strong>Email: </strong>" + linktext + "</a></li>");
	console.log("ready");
// End Present Email Address


	var seenFactsArray = [];
	var funFactsArray = [
	"I race mountain bikes. I've been the State Champ in my division twice!",
	"I have a pit-mix rescue named Lucy.",
	"I grew up on a farm. We raise horses, cows, and pigs.",
	"I'm currently restoring my great-great-grandparent's 1800s house. It's haunted.",
	"I love to travel abroad. I try to go one new place each year.",
	"I bought my first truck with pig money. My brother impaled it with the forklift on the tractor (not his best day).",
	"In college, I wanted to be a sports writer and wrote for the Universtity of Texas at Austin Athletics department. One of my stories was picked up by ESPN!",
	"I've been an avid reader my whole life. I also love to cook and quilt. I enjoy talking to strangers.",
	"I didn't grow up with television or good music, so your pop culture references are lost on me. My friends have me on the 'Tater Improvement Plan' to help make up for lost time."
	];

	function funFacts() {

		var newFact = funFactsArray[Math.floor(Math.random()*funFactsArray.length)];
		var newFactIndex = funFactsArray.indexOf(newFact);

		if (newFactIndex > -1) {
			seenFactsArray = funFactsArray.splice(newFactIndex, 1);
		}

		console.log(newFact);
		console.log(seenFactsArray);
		console.log(funFactsArray);

		if (funFactsArray.length === 0) {
			$(".fun-fact-list").append("<p>No more facts!</p>");
		} else {
			$(".fun-fact-list").append("<p>" + seenFactsArray + "</p>");
		}
	}

	$("#fun-facts").on("click", funFacts);

});

// Nate's Journey
var nate = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	
	if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=828450210587169";
		fjs.parentNode.insertBefore(js, fjs);
	}

(document, 'script', 'facebook-jssdk'));
// End Nate's Journey

// NYT API
	// var articles;

	// $.ajax({
	// 	url: "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=" + ENV['NYT_API_KEY'],
	// 	dataType: "json",
	// 	method: "GET",
	// 	async: false,
	// 	success: function(data, textStatus, jqXHR) {
	// 		articles = data.results;
	// 	}
	// });

	// // Go into the array of objects
	// // In each object, find the title, published date, section, subsection, and url
	// // Add each of these to a variable create a new array of objects
	// var homeArticles = [];

	// function getHomeArticles(articles) {

	// 	for (var i=0; i < articles.length; i++) {
	// 		homeArticles.push({
	// 			title: articles[i].title,
	// 			published_date: articles[i].published_date,
	// 			section: articles[i].section,
	// 			subsection: articles[i].subsection,
	// 			url: articles[i].url,
	// 		});
	// 	}
	// }

	// getHomeArticles(articles);

	// // For each object in the homeArticles array
	// // Display the data in the div homeArticlesData
	// $(".homeArticlesData").html(homeArticles.map(function(value) {
	// 	return('<span class="title">' + value.title + '</span><span class="published-date">' + value.published_date + '</span><span class="section">' + value.section + '</span><span class="subsection">' + value.subsection + '</span><span class="url"> <a href="' + value.url + '">URL</a></span>');
	// }).join(""));
// End NYT API

// Begin GitHub API
	// var repoContents;

	// $.ajax({
	// 	url: "https://api.github.com/repos/ltater/code-snippets/contents/",
	// 	dataType: "json",
	// 	method: "GET",
	// 	async: false,
	// 	success: function(data, textStatus, jqXHR) {
	// 		repoContents = data;
	// 	}
	// });

	// console.log(repoContents);

	// var html = [];

	// function getRepoContents(repoContents) {
	// 	for (var i = 0; i < repoContents.length; i++) {
	// 		html.push({
	// 			url: repoContents.path
	// 		});
	// 	}
	// }

	// getRepoContents(repoContents);

	// console.log(html);
// Close GitHub API