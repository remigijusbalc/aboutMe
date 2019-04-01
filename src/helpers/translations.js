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
    lt:
      "Esu 22 metų jaunesnysis mobiliųjų aplikacijų kūrėjas. Šiais metais, baigęs studijas, supratau, kad mano mėgstamiausia programavimo šaka - aplikacijų kūrimas. Dabar nuosekliai siekiu tobulėti, todėl ieškau galimybių išvykti stažuotis į užsienį. Esu punktualus, mėgstų spręsti problemas, nes esu iš Panevežio bei myliu programavimą.",
    en:
      "I am 22 years old junior mobile developer. After graduating I understood that my favorite programming field is application development. Now I am seeking to improve myself in this field. I also would like to try native app development and learn from the best ones. I am punctual and I love problem-solving as much as programming it self."
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
    lt: "Įvyko klaidą atidarant pasirinktą elementą",
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
      description:
        "Jau 12 metų groju būgnais, koncertuoju su įvairaus stiliaus grupėmis, taip pat, dalyvavau būgninkų konkurse. ",
      openVideos: "Peržiūrėti"
    },
    en: {
      title: "Drumming",
      description:
        "I am playing drums for 12 years now. I play various styles of music with a few bands. I also participated in drummers contest which you can check down below. ",
      openVideos: "Check out"
    }
  },
  football: {
    lt: {
      title: "Futbolas",
      description:
        "Futbolas yra mano mėgtstamiausia sporto šaka nuo pat vaikystės. Įdomu tai, kad pats varžybų stebėjimas manęs nedomina taip, kaip pats žaidimas."
    },
    en: {
      title: "Football",
      description:
        "Football is my favorite sport since childhood. Interseting fact is that I prefer playing rather than watching. "
    }
  },
  jogging: {
    lt: {
      title: "Bėgiojimas",
      description:
        "Bėgioti pradėjau norėdamas ne tik fiziškai, bet ir psichologiškai sustiprėti. Tai veikla, kuri padeda lengviau susitvarkyti su įvairaus tipo sunkumais."
    },
    en: {
      title: "Jogging",
      description:
        "I started jogging to embrace my physical and psychological abilities. It helps me to achieve the best results."
    }
  },
  books: {
    lt: {
      title: "Skaitymas",
      description:
        "Skaitymas padeda ne tik nurimti dienos pabaigoje, bet ir plečia pasaulėžiūrą, leidžia pažiūrėti į viską kitu kampu."
    },
    en: {
      title: "Reading books",
      description:
        "After a long day reading books helps me to relieve stress and also it changes the way I think."
    }
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
