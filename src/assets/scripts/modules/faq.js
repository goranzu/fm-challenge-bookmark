class FAQ {
  constructor(faqEl) {
    if (!(faqEl instanceof Element)) {
      throw new Error("Invalid HTML element.");
    }

    this.faq = faqEl;
    this.questionButtons = this.faq.querySelectorAll(".question");
    this.answers = Array.from(this.faq.querySelectorAll(".answer"));

    this.handleQuestionClick = this.handleQuestionClick.bind(this);

    this.questionButtons.forEach((button) =>
      button.addEventListener("click", this.handleQuestionClick),
    );
  }

  handleQuestionClick(e) {
    const questionId = e.target.getAttribute("aria-controls");

    const question = this.answers.find(
      (question) => question.id === questionId,
    );

    const ariaExpanded = e.target.getAttribute("aria-expanded");

    question.hidden = !question.hidden;
    e.target.setAttribute(
      "aria-expanded",
      ariaExpanded === "true" ? "false" : "true",
    );

    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("open");
  }
}

export default FAQ;
