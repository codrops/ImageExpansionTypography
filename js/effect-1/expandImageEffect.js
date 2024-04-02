export class ExpandImageEffect {
  constructor(el) {
    // Validates the input element to ensure it's an HTML element.
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error('Invalid element provided.');
    }

    this.wrapElement = el;
    this.image = this.wrapElement.querySelector('.type__expand-img');
    this.expandTexts = this.wrapElement.querySelectorAll('.anim');
    this.textBlock = this.wrapElement.nextElementSibling;

    // Calls the method to set up the initial effect.
    this.initializeEffect(this.wrapElement);
  }
  
  // Sets up the initial effect on the provided element.
  initializeEffect(element) {
    // Scroll effect.
    this.scroll();
  }

  // Defines the scroll effect logic for the element.
  scroll() {
    // Temporarily add the final class to capture the final state
    this.wrapElement.classList.add('type--open');
    const flipstate = Flip.getState([
      this.image,
      this.expandTexts
    ], {
      props: 'transform'
    });
    // Remove the final class to revert to the initial state
    this.wrapElement.classList.remove('type--open');
    
    // Create the Flip animation timeline
    Flip.to(flipstate, {
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: this.wrapElement,
        start: 'clamp(top bottom)',
			  end: '+=135%',
        scrub: true
      }
    })
    .to(this.textBlock, {
      ease: 'sine.inOut',
      yPercent: -150,
      opacity: 0.2,
      skewX: -8,
      scrollTrigger: {
        trigger: this.textBlock,
        start: 'top bottom',
			  end: 'bottom top',
        scrub: true
      }
    }, 0)
  }
}
