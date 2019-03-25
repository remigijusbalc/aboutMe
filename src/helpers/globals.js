import { getPassedTime, getLocationTitle } from "./helperFunctions";

export const languageImages = {
  lt: "ltflag",
  en: "usflag"
};

export const skills = [
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 60 },
  { name: "React-Native", percent: 80 },
  { name: "Swift", percent: 40 },
  { name: "Node.js", percent: 60 },
  { name: "C#", percent: 40 },
  { name: "Photoshop", percent: 50 },
  { name: "Java", percent: 30 },
  { name: "Git", percent: 60 },
  { name: "SQL", percent: 50 }
];

export const personalInfo = [
  {
    iconName: "linkedin",
    title: "www.linkedin.com/in/remigijusbalc"
  },
  { iconName: "github", title: "https://github.com/remigijusbalc" },
  {
    iconName: "mail",
    title: "remigijus.balc@gmail.com",
    url: "mailto:remigijus.balc@gmail.com"
  },
  { iconName: "phone", title: "+37063520558", url: "tel://+37063520558" },
  {
    iconName: "map-pin",
    title: getLocationTitle(),
    url: "https://www.google.com/maps/@54.687046, 25.282911, 14z"
    //"https://www.google.com/maps/search/?api=1&query=54.687156,25.279651"
  }
];

export const workExperience = {
  "Lexita UAB": {
    lt: { title: "Aplikacijų kūrėjas", duration: getPassedTime("lt") },
    en: { title: "Mobile developer", duration: getPassedTime("en") }
  }
};

export default {
  languageImages,
  skills,
  workExperience,
  personalInfo
};
