import { conflictError } from "@/errors";
import signinRepository from "@/repositories/signinAdmRepository";
import { v4 as uuidv4 } from "uuid";

async function signinAdm (name: string, password: string){
  
  const restaurantExist = await signinRepository.findRestaurant(name);
    
  if(!restaurantExist){
    throw conflictError("nome ou senha errados");
  }

  if (password !== restaurantExist.password) {
    throw conflictError("nome ou senha errados");
  }
  
  const existSession = await signinRepository.existSession(Number(restaurantExist.id))
  if(existSession){
    return { token: existSession.token }
  }

  const token = uuidv4();
  const createdSession = await signinRepository.createSession(Number(restaurantExist.id),token);
  if(!createdSession){
    throw conflictError("Não foi possível criar sessão");
  }

  return { token,
  restaurantId: restaurantExist.id };
}

const signinAdmService = {
    signinAdm,
  };
  
  export default signinAdmService;