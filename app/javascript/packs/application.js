// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("packs/bootstrap")

import "../stylesheets/application"

import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap'
// require("stylesheets/application.scss")

import "@fortawesome/fontawesome-free/css/all.css";

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$( document ).ready(function() {
	// Intersection Observers
	const panels = document.querySelectorAll('.a_section');

	const panelOptions = {
		threshold: 0
	}

	const panelInView = new IntersectionObserver(function(entries, panelObserver) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return
			} else {
				entry.target.classList.add('inView');
				panelObserver.unobserve(entry.target);
			}
		})
	}, panelOptions);

	panels.forEach(panel => {
		panelInView.observe(panel);
	});

	// image modal
	$(".container").on('click', '.pr-img', function(e){
	    var imgel = $(this).find('#ImgM')
	    var imgurl = $(this).attr('src') 


	    imgel.attr("src", imgurl)
	    
	    $('#imgModal').on('show.bs.modal', function (event) {
	        
	        $(this).find('#ImgM').attr("src", imgurl);
	    
	    })
	});

	$('#imgModal').on('hidden.bs.modal', function (event) {
	    
	    $(this).find('#ImgM').attr("src", ' ');

	})

	$('#offcanvasNavbar').on('click', 'a', function () {
		$('#offcanvasNavbar').offcanvas('toggle')
	})

})