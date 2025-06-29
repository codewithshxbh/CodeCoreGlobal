
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkModeBtn");
  const isDark = localStorage.getItem("dark") === "true";

  if (isDark) {
    document.body.classList.add("dark");
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
  });
});
