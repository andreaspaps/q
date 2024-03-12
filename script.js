document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the play icon
    document.querySelector('.play-icon').addEventListener('click', function() {
        // Replace the placeholder with the YouTube video iframe
        loadYouTubePlayer();
    });
});

function loadYouTubePlayer() {
    var placeholder = document.getElementById('youtube-placeholder');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/y0Ul9oH9zlc?autoplay=1&controls=0&modestbranding=1&rel=0&title=0';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.setAttribute('allowfullscreen', '');
    iframe.classList.add('responsive-video');

    // Remove the placeholder image and play icon
    placeholder.innerHTML = '';
    // Append the YouTube player iframe to the placeholder
    placeholder.appendChild(iframe);
}
