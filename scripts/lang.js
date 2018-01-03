function autoDetect() {
  if (location.hash != "" || "#") {
    autoSet();
  } else {
    var lang = navigator.language;
    switch (lang) {
      case "fr":
        setLang("fr");
        break;
      case "sv":
        setLang("sv");
        break;
      case "en":
      default:
        setLang("en");
        break;
    }
  }
};
function autoSet() {
  var lang = location.hash;
  switch (lang) {
    case "#fr":
      setLang("fr");
      break;
    case "#sv":
      setLang("sv");
      break;
    case "#en":
    default:
      setLang("en");
      break;
  }
};

function setLang(lang) {
  switch (lang) {
    case "fr":
      document.documentElement.setAttribute("lang", "fr");
      document.documentElement.setAttribute("hreflang", "fr");
      location.hash = "fr";
      applyLang("fr");
      break;
    case "sv" :
      document.documentElement.setAttribute("lang", "sv");
      document.documentElement.setAttribute("hreflang", "sv");
      location.hash = "sv";
      applyLang("sv");
      break;
    case "en":
    default:
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("hreflang", "en");
      location.hash = "en";
      applyLang("en");
      break;
  }
};
