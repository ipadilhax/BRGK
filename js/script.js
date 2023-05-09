// let menu = document.querySelector("#menu-mobile");
// let navMenu = document.querySelector("#nav-menu");
// let search = document.querySelector("#search")
// let inputSearch = document.querySelector("#input-search")


// menu.addEventListener("click", openMenu);
// search.addEventListener("click", openSearch)

// function openSearch() {
//   if (search.classList.contains("fa-search") && menu.classList.contains("fa-bars")) {
//     search.classList.remove("fa-search");
//     search.classList.add("fa-times");
//     inputSearch.style.left = "15px";
//   }
//   else if (search.classList.contains("fa-times") && menu.classList.contains("fa-bars")) {
//     search.classList.remove("fa-times");
//     search.classList.add("fa-search");
//     inputSearch.style.left = "-100%";
//   }
//   else {
//     search.classList.remove("fa-search");
//     search.classList.add("fa-times");
//     inputSearch.style.left = "15px";
//     menu.classList.remove("fa-times");
//     menu.classList.add("fa-bars");
//     navMenu.style.left = "-100%";
//   }
// }

// function openMenu() {
//   if (menu.classList.contains("fa-bars") && search.classList.contains("fa-search")) {
//     menu.classList.remove("fa-bars");
//     menu.classList.add("fa-times");
//     navMenu.style.left = 0;
//   }
//   else if (menu.classList.contains("fa-times") && search.classList.contains("fa-search")) {
//     menu.classList.remove("fa-times");
//     menu.classList.add("fa-bars");
//     navMenu.style.left = "-100%";
//   }
//   else {
//     menu.classList.remove("fa-bars");
//     menu.classList.add("fa-times");
//     navMenu.style.left = 0;
//     search.classList.remove("fa-times");
//     search.classList.add("fa-search");
//     inputSearch.style.left = "-100%";
//   }
// }