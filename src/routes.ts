import { Router } from "express";
import UserController from "./controller/UserController";
import RestaurantsController from "./controller/RestaurantsController";

const routes = Router();


//Usuários
routes.get("/user", UserController.find); //Buscar os Dados
routes.post("/user", UserController.create); // Criar os Dados

//Restaurantes
routes.get("/restaurantes", RestaurantsController.find);
routes.post("/restaurantes", RestaurantsController.create);
routes.delete("/restaurantes/:id", RestaurantsController.delete);
routes.put("/restaurantes/:id", RestaurantsController.update); // Adicionar rota para atualização de restaurante

export default routes