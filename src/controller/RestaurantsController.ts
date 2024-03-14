import { Request, Response } from "express";
import Restaurantes from "../database/schemas/Restaurants";

class RestaurantsController {

    async update(request: Request, response: Response) {
        const { id } = request.params; // Obter o ID do restaurante dos parâmetros da requisição
        const { name, category, address } = request.body; // Obter os novos dados do restaurante a partir do corpo da requisição

        try {
            const updatedRestaurant = await Restaurantes.findByIdAndUpdate(id, { name, category, address }, { new: true }); // Atualizar o restaurante com os novos dados
            
            if (!updatedRestaurant) {
                return response.status(404).json({
                    error: "Restaurant not found",
                    message: "Restaurant with specified ID not found"
                });
            }
            
            return response.json(updatedRestaurant); // Retornar o restaurante atualizado
        } catch (error) {
            return response.status(500).json({
                error: "Internal server error",
                message: error
            });
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params; // Obter o ID do restaurante dos parâmetros da requisição
        
        try {
            const deletedRestaurant = await Restaurantes.findByIdAndDelete(id); // Excluir o restaurante com o ID especificado
            
            if (!deletedRestaurant) {
                return response.status(404).json({
                    error: "Restaurant not found",
                    message: "Restaurant with specified ID not found"
                });
            }
            
            return response.status(204).send(); // Enviar uma resposta 204 No Content
        } catch (error) {
            return response.status(500).json({
                error: "Internal server error",
                message: error
            });
        }
    }    
       

    async find(request: Request, response: Response) {
        try {
            const restaurant = await Restaurantes.find();
            return response.json(restaurant);
        } catch (error) {
            return response.status(500).send({
                error: "Something wrong happened, try again",
                message: error
            });
        }
    }

    async create(request: Request, response: Response) {
        const {name, category, address} = request.body;

        try {
            const restaurantExists = await Restaurantes.findOne({ name });

            if(restaurantExists) {
                return response.status(400).json({
                    error: "Ooops",
                    message: "Restaurants already exists",
                });
            }


            const restaurant = await Restaurantes.create({
                name,
                category,
                address
            });

            return response.json(restaurant);

        } catch (error) {
            return response.status(500).send({
                error: "Registration failed",
                message: error
            })
        }
    }
}

export default new RestaurantsController;