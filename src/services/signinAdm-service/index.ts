import { conflictError } from "@/errors";
import signinRepository from "@/repositories/signinAdmRepository";
import bcrypt from "bcrypt";
import { uuid } from "uuidv4";

async function signinAdm (name: string, password: string){
  
    const restaurantExist = await signinRepository.findRestaurant(name);
  if(!restaurantExist){
    throw conflictError("nome ou senha errados");
  }
  
  //const isValid = await bcrypt.compareSync(password, restaurantExist.password);
  //if

  if (password !== restaurantExist.password) {
    throw conflictError("nome ou senha errados");
  }
  

  const existSession = await signinRepository.existSession(Number(restaurantExist.id))
  if(existSession){
    return { token: existSession.token }
  }

  const token = uuid();
  await signinRepository.createSession(Number(restaurantExist.id),token)

  return { token,
  restaurantId: restaurantExist.id };
}

const signinAdmService = {
    signinAdm,
  };
  
  export default signinAdmService;