setTimeout(() => {
  // Remove clarification box
  const box = document.getElementById("clarify-box");
  if (box) {
    box.style.display = "none";
    box.remove();
  }

  // Remove "Featured" sections
  const dismissable = document.getElementById("dismissable");
  if (dismissable) {
    dismissable.style.display = "none";
    dismissable.remove();
  }
}, 5000);
