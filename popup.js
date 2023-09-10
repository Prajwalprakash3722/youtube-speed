document.addEventListener("DOMContentLoaded", function () {
  const setSpeedButton = document.getElementById("setSpeedButton");

  setSpeedButton.addEventListener("click", function () {
    const speedInput = document.getElementById("speedInput").value;
    if (speedInput) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: (speed) => {
            document.getElementsByClassName(
              "video-stream html5-main-video"
            )[0].playbackRate = speed;
          },
          args: [parseFloat(speedInput)],
        });
      });
    }
  });
});
