const statusEl = document.getElementById("status");

function updateStatus() {
  if (navigator.onLine) {
    statusEl.innerText = "You are ONLINE";
    statusEl.className = "online";
  } else {
    statusEl.innerText = "You are OFFLINE";
    statusEl.className = "offline";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

updateStatus();
