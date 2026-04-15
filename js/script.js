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

// Toggle Class active untuk shopping cart //
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault()
}

// Klik di luar elemen //
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector('#shopping-cart-button');

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
  if (
    sc &&
    shoppingCart &&
    !sc.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
})


// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}