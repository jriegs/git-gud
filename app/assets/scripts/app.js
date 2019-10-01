import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';
import Modal from './modules/modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), '70%');
new RevealOnScroll(document.querySelectorAll('.testimonial'), '70%');
var stickyHeader = new StickyHeader();
var modal = new Modal();