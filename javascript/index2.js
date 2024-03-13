const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});
