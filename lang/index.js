fr = {
  "menu" : {
    "confrerie" : "La Confrérie",
    "discord" : "Discord",
    "guilded" : "Guilded",
  },
  "lang" : "<img src='https://discordapp.com/assets/427c845111c8328fb785dbfe7052337e.svg' width='32' height='32'/>",
};
en = {
  "menu" : {
    "confrerie" : "The Confrérie",
    "discord" : "Discord",
    "guilded" : "Guilded",
  },
  "lang" : "<img src='https://discordapp.com/assets/6c2b2176dab23f4abaceb3bf23338483.svg' width='32' height='32'/>",
};
sv = {
  "menu" : {
    "confrerie" : "Confrérien",
    "discord" : "Discord",
    "guilded" : "Guilded",
  },
  "lang" : "<img src='https://discordapp.com/assets/bf7d9389ab36e9417de5e1ebbff03831.svg' width='32' height='32'/>",
};

function applyLang(lang) {
  switch (lang) {
    case "fr":
      document.getElementById("confrerie").innerHTML = "<img src='resources/die.gif'/><br/>" + fr.menu.confrerie;
      document.getElementById("discord").innerHTML = "<img src='https://discordapp.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg'/><br/>" + fr.menu.discord;
      document.getElementById("guilded").innerHTML = "<img src='https://www.guilded.gg/asset/Icons/apple-icon-114x114.png'/><br/>" + fr.menu.guilded;
      document.getElementById("lang-btn").innerHTML = fr.lang;
      break;
    case "sv":
      document.getElementById("confrerie").innerHTML = "<img src='resources/die.gif'/><br/>" + sv.menu.confrerie;
      document.getElementById("discord").innerHTML = "<img src='https://discordapp.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg'/><br/>" + sv.menu.discord;
      document.getElementById("guilded").innerHTML = "<img src='https://www.guilded.gg/asset/Icons/apple-icon-114x114.png'/><br/>" + sv.menu.guilded;
      document.getElementById("lang-btn").innerHTML = sv.lang;
      break;
    case "en":
    default:
      document.getElementById("confrerie").innerHTML = "<img src='resources/die.gif'/><br/>" + en.menu.confrerie;
      document.getElementById("discord").innerHTML = "<img src='https://discordapp.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg'/><br/>" + en.menu.discord;
      document.getElementById("guilded").innerHTML = "<img src='https://www.guilded.gg/asset/Icons/apple-icon-114x114.png'/><br/>" + en.menu.guilded;
      document.getElementById("lang-btn").innerHTML = en.lang;
      break;
  }
};
