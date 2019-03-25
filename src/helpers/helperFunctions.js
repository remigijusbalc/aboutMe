import moment from "moment/min/moment-with-locales";
import { workExperience } from "./globals";
import Store from "../redux/Store";

export const getPassedTime = lang => {
  moment.locale(lang);
  const startDate = moment(["2018", "05", "14"]);
  return moment(startDate).fromNow(true);
};

export const getWorkExperience = lang => {
  return Object.keys(workExperience).reduce((acc, value) => {
    acc[value] = workExperience[value][lang];
    return acc;
  }, {});
};

export const getLocationTitle = () => {
  const { key } = Store.getState();
  const location = key === "lt" ? "Lietuva, Vilnius" : "Lithuania, Vilnius";
  return location;
};
