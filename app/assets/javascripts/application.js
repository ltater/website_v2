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
//= require_tree .


$(function() {
	console.log("ready");

// Begin Bootstrap Components
	$('.dropdown-toggle').dropdown();
// End Bootstrap Components

// Begin Tableau API
	var viz, workbook, activeSheet;

	function initializeViz() {
		var placeholderDiv = document.getElementById("tableauViz");
		var url = "https://public.tableau.com/views/RestaurantScoresinAustinTexas/RestaurantYearlyAverageScore";
		var options = {
		    width: '100%',
		    height: '600px',
		    hideTabs: true,
		    hideToolbar: true,
		    onFirstInteractive: function () {
		    	workbook = viz.getWorkbook();
		    	activeSheet = workbook.getActiveSheet();
		    	console.log("firstInteractive");
		    }
		};
  		viz = new tableau.Viz(placeholderDiv, url, options);
  		console.log(viz);
	}

	initializeViz();
// End Tableau API

});

// Begin Tableau API


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
