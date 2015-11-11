(function(){
  'use strict';

  	var header = document.getElementById('header');
  	var container = document.getElementById('container');
  	var toc = document.getElementById('article-toc');
  	var tocTop = document.getElementById('article-toc-top');
  	var headerHeight = header.clientHeight;

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	function debounce(func, wait, immediate) {
		var timeout;
		wait = wait || 50;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

  	if (!toc) return;

  	function updateSidebarPosition(){
    	var scrollTop = container.scrollTop;

		if (scrollTop > headerHeight){
		  	toc.classList.add('fixed');
		} else {
		  	toc.classList.remove('fixed');
		}
		container.scrollTop = scrollTop;
  	}

  	container.addEventListener('scroll', debounce(function(){
    	//window.requestAnimationFrame(updateSidebarPosition);
  	}));

  	//updateSidebarPosition();

  	tocTop.addEventListener('click', function(e){
    	e.preventDefault();
    	container.scrollTop = 0;
  	});

	$(function(){

		// Scrollspy
        var $window = $(window);
        var $body   = $(document.body);

        $body.scrollspy({
          target: '#article-toc'
        });
        $window.on('load', function () {
          $body.scrollspy('refresh');
        });

        // Sidenav affixing
        setTimeout(function () {

          var $sidebar = $('#article-toc'),
              sideBarOffsetTop = $sidebar.offset().top-20;

          $sidebar.affix({
            offset: {
              top:sideBarOffsetTop, 
              bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true));
              }
            }
          })
        }, 100);

	});

})();
