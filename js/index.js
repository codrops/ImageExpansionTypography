// Importing utility function for preloading images
import { preloadImages } from './utils.js';
// Importing ExpandImageEffect classes from different effect files with renamed imports to avoid name conflicts
import { ExpandImageEffect as ExpandImageEffect1 } from './effect-1/expandImageEffect.js';
import { ExpandImageEffect as ExpandImageEffect2 } from './effect-2/expandImageEffect.js';
import { ExpandImageEffect as ExpandImageEffect3 } from './effect-3/expandImageEffect.js';
import { ExpandImageEffect as ExpandImageEffect4 } from './effect-4/expandImageEffect.js';
import { ExpandImageEffect as ExpandImageEffect5 } from './effect-5/expandImageEffect.js';

// Registers the ScrollTrigger and Flip plugins with GSAP
gsap.registerPlugin(ScrollTrigger, Flip);

// Define the initialize function to set up the effects and animations on the webpage.
const init = () => {
  // Apply the first effect to all elements with a specific data attribute, creating a new instance of the effect
  // for each selected element. This is repeated for each effect type (1 through 5), targeting elements with
  // corresponding data attributes (`data-expand-1`, `data-expand-2`, etc.)
  // Array of effect classes
  const effects = [
    { selector: '[data-expand-1]', effect: ExpandImageEffect1 },
    { selector: '[data-expand-2]', effect: ExpandImageEffect2 },
    { selector: '[data-expand-3]', effect: ExpandImageEffect3 },
    { selector: '[data-expand-4]', effect: ExpandImageEffect4 },
    { selector: '[data-expand-5]', effect: ExpandImageEffect5 }
  ];

  // Iterate over each effect configuration and apply the effect to all matching elements
  effects.forEach(({ selector, effect }) => {
    document.querySelectorAll(selector).forEach(el => {
      new effect(el);
    });
  });
};

// Preloading images and initializing setup when complete
preloadImages('.type__expand-img-inner').then(() => {
  document.body.classList.remove('loading');
  init();
});
