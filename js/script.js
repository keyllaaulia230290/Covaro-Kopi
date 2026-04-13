// Toggle class active untuk hamburger menu//
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik //
const hamburger = document.querySelector("#hamburger-menu");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });
}

// Toggle class active untuk search form//
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-button");

if (searchBtn) {
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault(); // pindahin ke atas
    searchForm.classList.toggle("active");
    searchBox.focus();
  });
}

// Klik di luar elemen //
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (
    hm &&
    navbarNav &&
    !hm.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }

  if (
    sb &&
    searchForm &&
    !sb.contains(e.target) &&
    !searchForm.contains(e.target)
  ) {
    searchForm.classList.remove("active");
  }
});
