// Store a preference in localStorage
localStorage.setItem("user", "Jennifer");

// Retrieve it
const user = localStorage.getItem("user");
console.log("Welcome back, " + user);

// Trigger animation on button click
const btn = document.getElementById("animateBtn");

btn.addEventListener("click", () => {
  btn.classList.add("animate");

  // Remove animation class after 0.5s to allow replay
  setTimeout(() => {
    btn.classList.remove("animate");
  }, 500);
});
