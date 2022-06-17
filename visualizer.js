
/*===========================
Does not work yet
=============================*/

// Get the audio canvas once the page has loaded
let audioCanvas = document.getElementById('audioCanvas');

// Get the 2D context of the canvas to draw on it in wallpaperAudioListener
let audioCanvasCtx = audioCanvas.getContext('2d');

// Setting internal canvas resolution to user screen resolution
// (CSS canvas size differs from internal canvas size)
audioCanvas.height = window.innerHeight;
audioCanvas.width = window.innerWidth;

function wallpaperAudioListener(audioArray) {
  alert("Test");
    // Clear the canvas and set it to black
    audioCanvasCtx.fillStyle = 'rgb(0,0,0)';
    audioCanvasCtx.fillRect(0, 0, audioCanvas.width, audioCanvas.height);

    // Render bars along the full width of the canvas
    var barWidth = Math.round(1.0 / 128.0 * audioCanvas.width);
    var halfCount = audioArray.length / 2;

    // Begin with the left channel in red
    audioCanvasCtx.fillStyle = 'rgb(255,0,0)';
    // Iterate over the first 64 array elements (0 - 63) for the left channel audio data
    for (var i = 0; i < halfCount; ++i) {
      // Create an audio bar with its hight depending on the audio volume level of the current frequency
      var height = audioCanvas.height * Math.min(audioArray[i], 1);
      audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
    }

    // Now draw the right channel in blue
    audioCanvasCtx.fillStyle = 'rgb(0,0,255)';
    // Iterate over the last 64 array elements (64 - 127) for the right channel audio data
    for (var i = halfCount; i < audioArray.length; ++i) {
        // Create an audio bar with its hight depending on the audio volume level
        // Using audioArray[191 - i] here to inverse the right channel for aesthetics
        var height = audioCanvas.height * Math.min(audioArray[191 - i], 1);
        audioCanvasCtx.fillRect(barWidth * i, audioCanvas.height - height, barWidth, height);
    }
}


// Register the audio listener provided by Wallpaper Engine.
window.wallpaperRegisterAudioListener(wallpaperAudioListener);