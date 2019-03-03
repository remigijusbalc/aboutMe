import { SET_LANGUAGE, GET_LANGUAGE, GET_LANGUAGE_FAIL } from "../Types";
import { TRANSLATIONS } from "../../helpers/translations";
import { AsyncStorage } from "react-native";

 saveLanguageLocaly = async (lang) =>{
   try {
     await AsyncStorage.setItem("language", JSON.stringify(lang));
    return true;
   } catch(err) {
      console.log(err,"error of saving language locally");
      return false;
   }
}

getLocalLanguage = async () =>{
   try {
      const item = await AsyncStorage.getItem("language");
      return JSON.parse(item);
   } catch(err) {
      console.log(err,"err of getting lang");
      return null;
   }
  }

export function setLanguage(lang) {
   return dispatch => {
        const translatedLanguage = TRANSLATIONS(lang);
        dispatch({ type: SET_LANGUAGE, translations: translatedLanguage, key: lang});
        saveLanguageLocaly(lang);
      return Promise.resolve();
      }
}

export function getLanguage() {
   return dispatch => {
     return getLocalLanguage()
      .then(language => {
         if(language) {
            const translatedLanguage = TRANSLATIONS(language);
         dispatch({ type: GET_LANGUAGE, translations: translatedLanguage, key: language});
         return Promise.resolve();
         } else {
            dispatch({ type: GET_LANGUAGE_FAIL, error: "Language doesn't exist"});
            return Promise.reject();
         }
         
   })
   }
}

   export default {
      getLanguage,
      setLanguage
   }