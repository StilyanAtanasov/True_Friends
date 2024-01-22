document.addEventListener("DOMContentLoaded", function () {
  hideLoadingScreen();
});

function hideLoadingScreen() {
  var loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
}
