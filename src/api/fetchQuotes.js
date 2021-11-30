import axios from "axios";

export default async function fetchQuotes() {
  const api = await axios.get("https://zenquotes.io/api/quotes/");
  return api.data;
}
