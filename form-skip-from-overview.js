const skipDivs = document.querySelectorAll('[dataSkipTo]');
const clickDivs = document.querySelectorAll('[dataClick]');

skipDivs.forEach(skipDiv => {
  const skipToNumber = skipDiv.getAttribute('dataSkipTo');
  const clickDiv = document.querySelector(`[dataClick="${skipToNumber}"]`);

  skipDiv.addEventListener('click', function() {
    clickDiv.click();
  });
});
