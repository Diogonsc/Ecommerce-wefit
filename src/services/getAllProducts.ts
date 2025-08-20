import { getApi } from "../utils/api";
import { toast } from "react-toastify";
import type { ProductsResponse, ErrorResponse } from "./schema";

export const getAllProducts = async (): Promise<ProductsResponse | ErrorResponse> => {
	try{
		const response = await getApi().get("/movies");
		return response.data;
	} catch {
		toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
		return { products: [] };
	}
}