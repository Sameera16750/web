// Equivalent plain JavaScript code
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onWindowScroll(event) {
  const elementsWithClass = document.querySelectorAll('.animated-crd');

  if (elementsWithClass.length > 0) {
    for (let element of elementsWithClass) {
      if (isElementInViewport(element)) {
        element.classList.add('card-animation');
      }
    }
  }
}

// Listen to the scroll event on the window
window.addEventListener('scroll', onWindowScroll);
