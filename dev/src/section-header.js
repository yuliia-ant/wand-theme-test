class SidebarToggle extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("sidebar-toggle-template");

    const burgerIcon = this.querySelector(".nav__icon--burger");
    const closeIcon = this.querySelector(".nav__icon--close");
    const shopButton = this.querySelector(".nav__link--Shop");
    const closeIconDesktop = this.querySelector(".nav__icon--close--desktop");
    const desktopWrapper = this.querySelector(".sidebar-nav-overlay--desktop");

    const toggleIconsClasses = () => {
      this.querySelector(".sidebar-nav-wrapper--mobile").classList.toggle(
        "nav-active"
      );
      const icons = this.querySelectorAll(".nav__icon");
      icons.forEach((icon) => icon.classList.toggle("nav__icon--js-hidden"));
    };

    const openNav = () => {
      this.querySelector("#sidebar-menu-desktop").style.left = "0";
      this.querySelector("#sidebar-nav-overlay--desktop").style.display =
        "block";
    };

    const closeNav = () => {
      this.querySelector("#sidebar-menu-desktop").style.left = "-100%";
      this.querySelector("#sidebar-nav-overlay--desktop").style.display =
        "none";
    };

    burgerIcon.addEventListener("click", (event) => {
      event.preventDefault();
      toggleIconsClasses();
      this.querySelector(".nav__icon--close").classList.toggle("close-active");
    });

    closeIcon.addEventListener("click", (event) => {
      event.preventDefault();
      toggleIconsClasses();
    });

    shopButton.addEventListener("click", (event) => {
      event.preventDefault();
      openNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle(
        "nav-active"
      );
    });

    closeIconDesktop.addEventListener("click", (event) => {
      event.preventDefault();
      closeNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle(
        "nav-active"
      );
    });

    desktopWrapper.addEventListener("click", () => {
      closeNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.remove(
        "nav-active"
      );
    });

  }
}

customElements.define("sidebar-toggle", SidebarToggle);
