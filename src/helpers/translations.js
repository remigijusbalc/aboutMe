import { getPassedTime } from "./helperFunctions";
import { getWorkExperience } from "./helperFunctions";

export default (DICTIONARY = {
  description: {
    lt: "As esu blablabla",
    en: "Hi, I am blablalba"
  },
  Home: {
    lt: "Profilis",
    en: "Profile"
  },
  homeProffesion: {
    lt: "Mobilių aplikacijų kūrėjas",
    en: "Mobile application developer"
  },
  homeButton: {
    lt: "Plačiau",
    en: "More"
  },
  homeDescription: {
    lt: "As Remis esu is tadada",
    en: "Im rmgl from lt"
  },
  workExperience: {
    lt: getWorkExperience("lt"),
    en: getWorkExperience("en")
  },
  personalEducation: {
    lt: {
      university: {
        title: "Kolegija",
        value: "Vilniaus Kolegijos Elektronikos ir Informatikos fakultetas"
      },
      degree: {
        title: "Diplomas",
        value: "Informatikos inžinerijos profesinis bakalauras"
      },
      field: { title: "Specialybė", value: "Išmaniųjų įrenginių technologijos" }
    },
    en: {
      university: {
        title: "University",
        value: "Vilniaus Kolegija/University of Applied Sciences"
      },
      degree: {
        title: "Degree",
        value: "Professional Bachelor of Informatics Engineering"
      },
      field: { title: "Field", value: "Smart Device Technology" }
    }
  },
  Details: {
    lt: "Įgudžiai",
    en: "Skills"
  },
  education: {
    lt: "Išsilavinimas",
    en: "Education"
  },
  experience: {
    lt: "Patirtis",
    en: "Experience"
  },
  Hobbies: {
    lt: "Laisvalaikis",
    en: "Hobbies"
  },
  drumming: {
    lt: {
      title: "Grojimas būgnais",
      description: "Groju bugnais blablabla",
      openVideos: "Peržiūrėti"
    },
    en: {
      title: "Drumming",
      description: "I play drums blablalba",
      openVideos: "Check out"
    }
  },
  football: {
    lt: { title: "Futbolas", description: "Megstu zaisti futbola" },
    en: { title: "Football", description: "I like to play football" }
  },
  jogging: {
    lt: { title: "Bėgiojimas", description: "Man patinka begioti" },
    en: { title: "Jogging", description: "I like jogging" }
  },
  books: {
    lt: { title: "Skaitymas", description: "Megstu skaityti knygas" },
    en: { title: "Reading books", description: "I like to read books" }
  }
});

export const TRANSLATIONS = (lang = "lt") => {
  return Object.keys(DICTIONARY).reduce((acc, val) => {
    acc[val] = DICTIONARY[val][lang];
    return acc;
  }, {});
};
