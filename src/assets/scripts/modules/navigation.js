import createFocusTrap from "focus-trap";

class Utils {
  wait(ms = 200) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

class Navigation extends Utils {
  constructor() {
    super();
    this.body = document.querySelector("body");
    this.openButton = this.body.querySelector(".open-nav-button");
    this.overlay = this.body.querySelector(".overlay");
    this.closeButton = this.overlay.querySelector(".close-nav-button");
    this.mobileNavLinks = this.body.querySelectorAll(".mobile-nav a");

    this.focusTrap = createFocusTrap(this.overlay);

    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.openButton.addEventListener("click", this.openNav.bind(this));
    this.closeButton.addEventListener("click", this.closeNav.bind(this));
    this.mobileNavLinks.forEach((link) =>
      link.addEventListener("click", this.handleLinkClick.bind(this)),
    );
  }

  openNav() {
    this.overlay.classList.add("open");
    this.overlay.querySelector(".close-nav-button").focus();
    this.body.addEventListener("keyup", this.handleKeyUp);

    this.focusTrap.activate();
  }

  closeNav() {
    this.overlay.classList.remove("open");
    this.body.removeEventListener("keyup", this.handleKeyUp);

    this.focusTrap.deactivate();
  }

  async handleLinkClick() {
    await this.wait();
    this.closeNav();
  }

  handleKeyUp(e) {
    switch (e.keyCode) {
      case 27:
        this.closeNav();
        break;
    }
  }
}

export default Navigation;
