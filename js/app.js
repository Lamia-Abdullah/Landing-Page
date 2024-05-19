
// Store sections in list
const sections = Array.from(document.querySelectorAll("section"));

// Build the nav
const navbarList = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment(); 

sections.forEach((section) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${section.id}`;
  link.dataset.nav = section.id;
  link.className = "menu__link";
  link.textContent = section.dataset.nav;
  li.appendChild(link);
  fragment.appendChild(li);
});

navbarList.appendChild(fragment); 

// Scroll to section
navbarList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.dataset.nav) {
    const section = document.getElementById(target.dataset.nav);
    section.scrollIntoView({ behavior: "smooth" });
  }
});
