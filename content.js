setTimeout(() => {
  const box = document.getElementById("clarify-box");
  if (box) {
    box.style.display = "none";
    box.remove();
  }
}, 2500);
