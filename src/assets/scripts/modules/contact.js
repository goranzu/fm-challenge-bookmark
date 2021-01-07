class ContactForm {
  constructor(formEl) {
    if (!(formEl instanceof Element)) {
      throw new Error("Invalid HTML element.");
    }

    this.form = formEl;
    this.emailInput = this.form.querySelector("input[type=text]");
    this.submitButton = this.form.querySelector("button[type=submit]");
    this.errorMessage = this.form.querySelector("p.error-message");

    this.handleSubmit = this.handleSubmit.bind(this);

    this.form.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(e) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (email.trim().length === 0 || !emailRegex.test(email.toLowerCase())) {
      this.errorMessage.hidden = false;
      return;
    }

    this.errorMessage.hidden = true;
    e.target.email.value = "";
    alert("sending email :)");
  }
}

export default ContactForm;
