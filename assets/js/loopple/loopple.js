
// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
 document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
 setTimeout(function(){
   document.querySelector('.loopple-alert').remove();
 }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('[id^="countto"]');

  const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // Trigger when 50% of the element is in view
  };

  const startCount = (counter) => {
      const countTo = parseInt(counter.getAttribute('countto'));
      const decimal = counter.getAttribute('data-decimal') || 0;
      let currentCount = 0;
      const increment = countTo / 100;

      const countInterval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= countTo) {
              currentCount = countTo;
              clearInterval(countInterval);
          }
          counter.textContent = currentCount.toFixed(decimal);
      }, 20); // Speed of counting
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCount(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
