
const backToTopButton = document.getElementById("backToTop");
window.onscroll = () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navFeatures: "Features",
    navWhy: "Why Choose Us",
    navContact: "Contact",
    mainHeading: "Smart Water Pump Controller",
    mainTagline: "Automate your water tank refilling with intelligent control and savings.",
    demoHeading: "🎥 Watch Demo"
  },
  hi: {
    navHome: "मुखपृष्ठ",
    navAbout: "परिचय",
    navFeatures: "विशेषताएँ",
    navWhy: "हमें क्यों चुनें",
    navContact: "संपर्क करें",
    mainHeading: "स्मार्ट वॉटर पंप नियंत्रक",
    mainTagline: "बुद्धिमान नियंत्रण के साथ अपने जल टैंक को भरना स्वचालित करें और बचत करें।",
    demoHeading: "🎥 डेमो देखें"
  }
};

function changeLanguage(lang) {
  const keys = Object.keys(translations[lang]);
  keys.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.innerText = translations[lang][key];
  });
}
