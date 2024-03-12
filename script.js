document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          var iframe = document.createElement('iframe');
          
          iframe.src = 'https://www.youtube.com/embed/y0Ul9oH9zlc?controls=0&rel=0';
          iframe.title = 'YouTube video player';
          iframe.frameBorder = '0';
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          iframe.setAttribute('allowfullscreen', '');
          iframe.classList.add('responsive-video');
          
          document.getElementById('youtube-placeholder').appendChild(iframe);
          
          // Once the iframe is loaded, there's no need to observe the placeholder
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "900px" // Load a bit before the element is in view
    });
    
    observer.observe(document.getElementById('youtube-placeholder'));
});
