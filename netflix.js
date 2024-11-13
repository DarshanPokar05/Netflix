function playMovie(movieFile) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = 'D:/Movies/Marvels/Part 3/' + movieFile;
    videoPlayer.play();
}

