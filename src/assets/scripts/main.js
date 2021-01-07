import Tabs from "./modules/tabs";
import Navigation from "./modules/navigation";
import ContactForm from "./modules/contact";
import FAQ from "./modules/faq";

// Internal Modules

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    new ContactForm(document.querySelector(".contact-form"));
    new Tabs(document.querySelector(".tabs"));
    new Navigation();
    new FAQ(document.querySelector(".faq"));
  }
});
