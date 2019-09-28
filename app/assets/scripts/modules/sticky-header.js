import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = document.querySelectorAll('.lazyload');
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__description');
        this.createHeaderWaypoint();
        this.pageSections = document.querySelectorAll('.page-section');
        this.headerLinks = document.querySelectorAll('.primary-nav a');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.addEventListener('load', () => {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        $('.primary-nav a').smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement,
            handler: function(direction) {
                if (direction == 'down') {
                    that.siteHeader.classList.add('site-header--dark');
                } else {
                    that.siteHeader.classList.remove('site-header--dark');
                    that.headerLinks[0].classList.remove('current-link');
                }
            }
        }); 
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.forEach((section) => {        
            new Waypoint({
                element: section,
                handler: function(direction) {
                    if (direction == 'down') {
                        var matchingHeaderLink = document.querySelector(section.getAttribute("data-matching-link"));
                        that.headerLinks.forEach((link) => {
                            link.classList.remove('current-link');
                        })
                        matchingHeaderLink.classList.add('current-link');
                    }
                },
                offset: "0%"
            });

            new Waypoint({
                element: section,
                handler: function(direction) {
                    if (direction == 'up') {
                        var matchingHeaderLink = document.querySelector(section.getAttribute("data-matching-link"));
                        that.headerLinks.forEach((link) => {
                            link.classList.remove('current-link');
                        })
                        matchingHeaderLink.classList.add('current-link');
                    }
                },
                offset: "-20%"
            });
        });
    }
}

export default StickyHeader;