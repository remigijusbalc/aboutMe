import { getPassedTime } from "./helperFunctions";
import Store from "../redux/Store";

export const languageImages = {
  lt: "ltflag",
  en: "usflag"
};

export const skills = [
  { name: "JavaScript", percent: 80, expanded: false },
  { name: "React", percent: 60, expanded: false },
  { name: "React-Native", percent: 80, expanded: false },
  { name: "Swift", percent: 40, expanded: false },
  { name: "Node.js", percent: 60, expanded: false },
  { name: "C#", percent: 40, expanded: false },
  { name: "Photoshop", percent: 50, expanded: false },
  { name: "Java", percent: 30, expanded: false }
];

export const personalInfo = [
  {
    iconName: "linkedin",
    title:
      "https://www.linkedin.com/in/remigijus-bal%C4%8Di%C5%ABnas-b47152163/"
  },
  { iconName: "github", title: "https://github.com/remigijusbalc" },
  { iconName: "mail", title: "remigijus.balc@gmail.com" },
  { iconName: "phone", title: "+37063520558" },
  {
    iconName: "map-pin",
    title: Store.getState().language.translations.location,
    mapsUri: "geo:54.687156,25.279651"
    //"https://www.google.com/maps/search/?api=1&query=${}"
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
