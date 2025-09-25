function allCaps() {
  const input = document.querySelector("#textInput").value;
  const caps = input.toUpperCase();
  console.log(caps);
  return caps;
}


// Export 
 module.exports = allCaps;



