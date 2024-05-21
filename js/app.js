// Store sections in list
const sections = Array.from(document.querySelectorAll("section"));

// Build the nav
const navbarList = document.getElementById("navbar__list");

sections.forEach((section) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${section.id}`;
  link.textContent = section.dataset.nav;
  link.classList.add("menu__link");
  listItem.appendChild(link);
  navbarList.appendChild(listItem);
});

// Scroll to section
navbarList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.tagName === "A" && target.hash) {
    const sectionId = target.hash.slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
});

// active section
window.addEventListener("scroll", () => {
  const scrollOffset = window.innerHeight * 0.4; 
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = navbarList.querySelector(`a[href="#${section.id}"]`);
    if (rect.top < scrollOffset && rect.bottom >= scrollOffset) {
      section.classList.add("active-section");
      link.classList.add("active_link");
    } else {
      section.classList.remove("active-section");
      link.classList.remove("active_link");
    }
  });
  whenToScroll();
});


