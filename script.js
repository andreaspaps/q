document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.createElement('iframe');
    
    iframe.src = 'https://www.youtube.com/embed/y0Ul9oH9zlc?controls=0&rel=0';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.setAttribute('allowfullscreen', '');
    iframe.classList.add('responsive-video'); // Make sure you define the CSS for responsiveness
    
    document.getElementById('youtube-placeholder').appendChild(iframe);
  });