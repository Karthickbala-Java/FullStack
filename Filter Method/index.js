import { trips } from "./data.js";

export default function getMatchingTrips(arr, keyword) {
  return arr.filter((item) => item.budget < 3000);
}
