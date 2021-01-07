class Tabs {
  constructor(tabEl) {
    if (!(tabEl instanceof Element)) {
      throw new Error("Invalid HTML element.");
    }
    this.tabEl = tabEl;
    this.tabButtons = this.tabEl.querySelectorAll("[role=tab]");
    this.tabPanels = Array.from(this.tabEl.querySelectorAll("[role=tabpanel]"));

    this.tabButtons.forEach((el) =>
      el.addEventListener("click", this.handleClick.bind(this)),
    );
  }

  handleTabButtons(e) {
    this.tabButtons.forEach(function removeAttribute(el) {
      el.setAttribute("aria-selected", false);
    });

    e.target.setAttribute("aria-selected", true);
  }

  handleTabPanels(e) {
    this.tabPanels.forEach(function hidePanel(el) {
      el.hidden = true;
    });
    const buttonId = e.target.id;

    const panel = this.tabPanels.find(
      (panel) => panel.getAttribute("aria-labelledby") === buttonId,
    );

    panel.hidden = false;
  }

  handleClick(e) {
    this.handleTabButtons(e);

    this.handleTabPanels(e);
  }
}

export default Tabs;
