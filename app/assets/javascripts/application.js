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

	// Prevents the Tableau Viz from appearing at the bottom of every page!
	if($("#tableauViz").length) {
		initializeViz();
	}
// End Tableau API

});

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
