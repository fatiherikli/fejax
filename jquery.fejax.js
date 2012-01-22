/*
 * 	fejax (jQuery Easy Ajax Plugin
 * 	Fatih Erikli
 * 	http://fatiherikli.com/fejax
 * 	fatiherikli@gmail.com
 * 
 * */

(function ($) {
	$.fn.fejax = function (_options) {				
		// parent  (page container)
		var parent = this;
		
		// default options
		var options = $.extend({		
			// default selectors
			"parent_selector" : parent.selector,
			"link_selector" : "a",
			"exclude_selector" : "a[href^='http'], .no_ajax",
			
			// effect options
			"effects" : true,				
			"close_effect" : function (parent) { return this.effects && parent.fadeOut(100); },
			"open_effect" : function (parent) { return this.effects && parent.fadeIn(200); },
		}, _options || {});
		
		// links configuration
		function setup_hash() {		  			
			var links = $(options.link_selector).not(options.exclude_selector);
			links.each(function () {
				var link = $(this);
				link.attr("href", "#" + link.attr("href"));	
			});
		}
		
		// load page with ajax
		function load_page(page) {
			var selector = options.parent_selector;		
			options.close_effect($(selector));
			var callback = function (data) {
				setup_hash();
				options.open_effect($(selector));
			};
			$(selector).load(page + " " + selector, callback);			
		}
		
		// active hash link
		function get_active_hash() {
			return window.location.hash.replace("#","");
					
		}
		
		// hash change event
		function hash_change() {
			var page = get_active_hash();
			load_page(page);
		} 
		
		function init() {	
			// configure links
			setup_hash();
		
			// catch page load hash
			if (get_active_hash()) {
				load_page(get_active_hash());
			}
		
			// catch hash change
			$(window).bind('hashchange', hash_change);		
		}
		
		init();
	};
})(jQuery);