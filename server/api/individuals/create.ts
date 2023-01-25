import { individualCreateData } from "../../data/individuals/create.js";

export default defineEventHandler(() => {
  const data = JSON.stringify(individualCreateData);
  return data;
});
