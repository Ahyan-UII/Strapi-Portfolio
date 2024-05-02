import logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";
const config = {
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Workplace",

      "Auth.form.welcome.title": "Welcome to Avav Dashboard",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
  document.title= "Dashboard Avav"
};

export default {
  config,
  bootstrap,
};
