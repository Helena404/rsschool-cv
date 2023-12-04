document.addEventListener('DOMContentLoaded', function() {
	var currentPageUrl = window.location.href;
	var link = document.getElementById('menu');

	if (link && link.href === currentPageUrl) {
	  link.classList.add('inactive-menu');
	}
  });