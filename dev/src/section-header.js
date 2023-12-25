// class SidebarToggle extends HTMLElement {
//   constructor() {
//     super();

//     const template = document.getElementById("sidebar-toggle-template");

//     const burgerIcon = this.querySelector(".nav__icon--burger");
//     const closeIcon = this.querySelector(".nav__icon--close");
//     const shopButton = this.querySelector(".nav__link--Shop");
//     const closeIconDesktop = this.querySelector(".nav__icon--close--desktop");
//     const desktopWrapper = this.querySelector(".sidebar-nav-overlay--desktop");
//     const links = this.querySelectorAll(".js-sidebar-nav__link");
//     const backButtons = this.querySelectorAll(
//       ".js-secondary-menu__top-bar--back"
//     );
//     const closeButtons = document.querySelectorAll(
//       ".js-secondary-menu__top-bar--close"
//     );

//     const toggleIconsClasses = () => {
//       this.querySelector(".sidebar-nav-wrapper--mobile").classList.toggle(
//         "nav-active"
//       );
//       const icons = this.querySelectorAll(".nav__icon");
//       icons.forEach((icon) => icon.classList.toggle("nav__icon--js-hidden"));
//     };

//     const openNav = () => {
//       this.querySelector("#sidebar-menu-desktop").style.left = "0";
//       this.querySelector("#sidebar-nav-overlay--desktop").style.display =
//         "block";
//     };

//     const closeNav = () => {
//       this.querySelector("#sidebar-menu-desktop").style.left = "-100%";
//       this.querySelector("#sidebar-nav-overlay--desktop").style.display =
//         "none";
//     };

//     burgerIcon.addEventListener("click", (event) => {
//       event.preventDefault();
//       toggleIconsClasses();
//       this.querySelector(".nav__icon--close").classList.toggle("close-active");
//     });

//     closeIcon.addEventListener("click", (event) => {
//       event.preventDefault();
//       toggleIconsClasses();
//     });

//     shopButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       openNav();
//       this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle(
//         "nav-active"
//       );
//     });

//     closeIconDesktop.addEventListener("click", (event) => {
//       event.preventDefault();
//       closeNav();
//       this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle(
//         "nav-active"
//       );
//     });

//     desktopWrapper.addEventListener("click", () => {
//       closeNav();
//       this.querySelector(".sidebar-nav-wrapper--desktop").classList.remove(
//         "nav-active"
//       );
//     });

//     links.forEach((link) =>
//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         link.nextElementSibling.classList.toggle("secondary-menu-open");
//       })
//     );

//     backButtons.forEach((backButton) =>
//       backButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         document
//           .querySelector(".secondary-menu-open")
//           .classList.toggle("secondary-menu-open");
//       })
//     );

//     closeButtons.forEach((closeButton) =>
//       closeButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         toggleIconsClasses();
//       })
//     );
//   }
// }

// customElements.define("sidebar-toggle", SidebarToggle);

class SidebarToggle extends HTMLElement {
  connectedCallback() {

    this.burgerIcon = this.querySelector(".nav__icon--burger");
    this.closeIcon = this.querySelector(".nav__icon--close");
    this.shopButton = this.querySelector(".nav__link--Shop");
    this.closeIconDesktop = this.querySelector(".nav__icon--close--desktop");
    this.desktopWrapper = this.querySelector(".sidebar-nav-overlay--desktop");
    this.links = this.querySelectorAll(".js-sidebar-nav__link");
    this.backButtons = this.querySelectorAll(".js-secondary-menu__top-bar--back");
    this.closeButtons = document.querySelectorAll(".js-secondary-menu__top-bar--close");

    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  addEventListeners() {
    this.toggleIconsClasses = () => {
      this.querySelector(".sidebar-nav-wrapper--mobile").classList.toggle("nav-active");
      const icons = this.querySelectorAll(".nav__icon");
      icons.forEach((icon) => icon.classList.toggle("nav__icon--js-hidden"));
    };

    this.openNav = () => {
      this.querySelector("#sidebar-menu-desktop").style.left = "0";
      this.querySelector("#sidebar-nav-overlay--desktop").style.display = "block";
    };

    this.closeNav = () => {
      this.querySelector("#sidebar-menu-desktop").style.left = "-100%";
      this.querySelector("#sidebar-nav-overlay--desktop").style.display = "none";
    };

    this.burgerIcon.addEventListener("click", (event) => {
      event.preventDefault();
      this.toggleIconsClasses();
      this.querySelector(".nav__icon--close").classList.toggle("close-active");
    });

    this.closeIcon.addEventListener("click", (event) => {
      event.preventDefault();
      this.toggleIconsClasses();
    });

    this.shopButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.openNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle("nav-active");
    });

    this.closeIconDesktop.addEventListener("click", (event) => {
      event.preventDefault();
      this.closeNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.toggle("nav-active");
    });

    this.desktopWrapper.addEventListener("click", () => {
      this.closeNav();
      this.querySelector(".sidebar-nav-wrapper--desktop").classList.remove("nav-active");
    });

    this.links.forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();
        link.nextElementSibling.classList.toggle("secondary-menu-open");
      })
    );

    this.backButtons.forEach((backButton) =>
      backButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.querySelector(".secondary-menu-open").classList.toggle("secondary-menu-open");
      })
    );

    this.closeButtons.forEach((closeButton) =>
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        this.toggleIconsClasses();
      })
    );
  }

  removeEventListeners() {
    this.burgerIcon.removeEventListener("click", this.toggleIconsClasses);
    this.closeIcon.removeEventListener("click", this.toggleIconsClasses);
    this.shopButton.removeEventListener("click", this.openNav);
    this.closeIconDesktop.removeEventListener("click", this.closeNav);
    this.desktopWrapper.removeEventListener("click", this.closeNav);

    this.links.forEach((link) =>
      link.removeEventListener("click", (event) => {
        event.preventDefault();
        link.nextElementSibling.classList.toggle("secondary-menu-open");
      })
    );

    this.backButtons.forEach((backButton) =>
      backButton.removeEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.querySelector(".secondary-menu-open").classList.toggle("secondary-menu-open");
      })
    );

    this.closeButtons.forEach((closeButton) =>
      closeButton.removeEventListener("click", (event) => {
        event.preventDefault();
        this.toggleIconsClasses();
      })
    );
  }
}

customElements.define("sidebar-toggle", SidebarToggle);
