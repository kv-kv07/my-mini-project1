function filterVideos(category) {
    const videoGrid = document.getElementById('video-grid');
    const videos = videoGrid.getElementsByClassName('video-card');
    for (let i = 0; i < videos.length; i++) {
        const videoCategory = videos[i].getAttribute('data-category');
        if (category === 'all' || videoCategory === category) {
            videos[i].style.display = 'block';
        } else {
            videos[i].style.display = 'none';
        }
    }
}
