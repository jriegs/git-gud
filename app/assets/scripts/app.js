import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), '75%');
new RevealOnScroll(document.querySelectorAll('.testimonial'), '60%');