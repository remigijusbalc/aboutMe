import moment from "moment/min/moment-with-locales";

export const getPassedTime = (lang) => {
  moment.locale(lang);
    const date = ["2018", "05", "14"];
  const startDate = moment(["2018", "05", "14"]);
  return moment(startDate).fromNow(true);
};
