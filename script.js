function allCaps() {
  const input = document.querySelector("#textInput").value;
  const caps = input.toUpperCase();
  console.log(caps);
  return caps;
}

//For browser (AKA not for Jest testing)
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#capsButton");
    if (button) {
      button.addEventListener("click", allCaps);
    }
  });
}

// Export 
 module.exports = allCaps;



