const sunsetTheme = {
  bodyBg: "linear-gradient(135deg, #1f1135, #ff6b6b)",
  containerBg: "linear-gradient(145deg, #2a1847, #331a56)",
  showtimeBg: "linear-gradient(145deg, #331a56, #3d1f66)",
  buttonsBg: "linear-gradient(145deg, #2a1847, #331a56)",
  btnBg: "linear-gradient(145deg, #2a1847, #331a56)",
  textColor: "#ffd36b",
  shadowColor: "rgba(255, 211, 107, 0.3)",
};

let isSunsetTheme = false;

function toggleTheme() {
  isSunsetTheme = !isSunsetTheme;

  if (isSunsetTheme) {
    // Apply sunset theme
    document.body.style.background = sunsetTheme.bodyBg;
    document.getElementById("container").style.background =
      sunsetTheme.containerBg;
    document.getElementById("showtime").style.background =
      sunsetTheme.showtimeBg;
    document.getElementById("buttons").style.background = sunsetTheme.buttonsBg;

    // Update colors
    document.querySelectorAll(".btn, #showtime").forEach((element) => {
      element.style.color = sunsetTheme.textColor;
      element.style.borderColor = sunsetTheme.textColor;
      element.style.boxShadow = `0 0 15px ${sunsetTheme.shadowColor}`;
    });
  } else {
    // Reset to default theme (remove inline styles)
    document.body.removeAttribute("style");
    document.getElementById("container").removeAttribute("style");
    document.getElementById("showtime").removeAttribute("style");
    document.getElementById("buttons").removeAttribute("style");
    document
      .querySelectorAll(".btn")
      .forEach((btn) => btn.removeAttribute("style"));
  }
}

// Add theme button click listener
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("themeBtn").addEventListener("click", toggleTheme);
});
