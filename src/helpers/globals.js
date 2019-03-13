import { getPassedTime } from "./helperFunctions";

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

export const remoteAccounts = [
  {
    imageName: "linkedin",
    uri: "https://www.linkedin.com/in/remigijus-bal%C4%8Di%C5%ABnas-b47152163/"
  },
  { imageName: "github", uri: "https://github.com/remigijusbalc" }
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
  remoteAccounts
};
