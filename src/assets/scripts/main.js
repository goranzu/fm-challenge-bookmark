// Focus Visible Polyfill
import "focus-visible";
import Tabs from "./modules/tabs";
import Navigation from "./modules/navigation";

// Internal Modules

new Tabs(document.querySelector(".tabs")).init();
new Navigation().init();
