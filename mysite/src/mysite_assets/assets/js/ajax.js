$(function () {
    let myDate = new Date();
    $('#currentTime').text(myDate);
});
// pseudo ajax
let loadPage = function () {
    let targetURL = $('#url').val();
    console.log(targetURL);
    $('#iframePosition').attr('src', targetURL);
}

// yt iframe api
let player;
// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
// 4. The API will call this function when the video player is ready.
let onPlayerReady = function (event) {
    event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
let onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
let stopVideo = function () {
    player.stopVideo();
}