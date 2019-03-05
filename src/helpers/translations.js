import { getPassedTime } from "./helperFunctions";


export default DICTIONARY = {
    description: {
        lt: "As esu blablabla",
        en: "Hi, I am blablalba"
    },
    title: {
        lt: "Profilis",
        en: "Profile"
    },
    workExperienec: {
        lt: {title: "Mobilių aplikacijų kurėjas su React-Native karkasu", duration: getPassedTime("lt")},
        en: {title:"Mobile application developer with React-Native framework", duration: getPassedTime("en")}
    },
    personalEducation: {
        lt: {university: "Vilniaus Kolegijos Elektronikos ir Informatikos fakultetas", degree: "Informatikos inžinerijos profesinis bakalauras", field: "Išmaniųjų įrenginių technologijos"},
        en: {university: "Vilniaus Kolegija/University of Applied Sciences", degree: "Professional Bachelor of Informatics Engineering", field: "Smart Device Technology"}
    },
    skills: {
        lt: "Įgudžiai",
        en: "Skills"
    },
    education: {
        lt: "Išsilavinimas",
        en: "Education"
    }

}

export const TRANSLATIONS = (lang = "lt") => {
    return Object.keys(DICTIONARY).reduce((acc,val) => {
    acc[val] = DICTIONARY[val][lang];
    return acc;
},{});
}