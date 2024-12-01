import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Nome do produto é obrigatório"),
  model: z.string().min(1, "Modelo é obrigatório"),
  sizes: z.array(z.string()).min(1, "Tamanho é obrigatório"),
  primaryColor: z.string().min(1, "Cor principal é obrigatória"),
  availableColors: z.array(z.string()).min(1, "Cor é obrigatória"),
  price: z.string().min(1, "Preço é obrigatório"),
});