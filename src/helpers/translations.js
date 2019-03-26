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
  aboutMe: {
    lt: "Apie mane",
    en: "About me"
  },
  location: {
    lt: "Vilnius, Lietuva",
    en: "Vilnius, Lithuania"
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
  errorDescription: {
    lt: "Įvyko klaidą atidarant pasirinktą elementa",
    en: "There was an error opening chosen element"
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
  },
  closeModalText: {
    lt: "Uždaryti",
    en: "Close"
  },
  errorTextTitle: {
    lt: "Klaida",
    en: "Error"
  },
  errorTextDescription: {
    lt: "Įvyko klaida kraunant vaizdo įrašus. Ar norite atidaryti naršyklėje?",
    en:
      "There was an error loading videos, do you want to open video in the browser?"
  },
  alertOK: {
    lt: "Gerai",
    en: "Yes"
  },
  alertNO: {
    lt: "Ne",
    en: "No"
  },
  understood: {
    lt: "Supratau",
    en: "Got it"
  }
});

export const TRANSLATIONS = (lang = "lt") => {
  return Object.keys(DICTIONARY).reduce((acc, val) => {
    acc[val] = DICTIONARY[val][lang];
    return acc;
  }, {});
};
