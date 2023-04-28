import { notFoundError } from "@/errors";
import productsRepository from "@/repositories/products-repository";

async function getProducts (categoryId: number) {
  const lstProducts = await productsRepository.getproducts(categoryId);

  if (lstProducts.length === 0) { 
    throw notFoundError();
  }
  return lstProducts;
}

const productsService = { 
    getProducts
}

export default productsService;