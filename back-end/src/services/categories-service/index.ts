//import { conflictError, notFoundError } from "@/errors";
import { notFoundError } from "@/errors";
import categoriesRepository from "@/repositories/categories-repository";

async function getCategories () {
  const lstCategories = await categoriesRepository.getCategories();

  if (!lstCategories) {  //.length
    throw notFoundError();
  }
  return lstCategories;
}

const categoriesService = { 
    getCategories
}

export default categoriesService;