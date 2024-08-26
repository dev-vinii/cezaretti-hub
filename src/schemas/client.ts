import { z } from "zod";

export const clientSchema = z.object({
  username: z.string({ message: "O nome do cliente é obrigatório" }),
  email: z
    .string({ message: "O email do cliente é obrigatório" })
    .email("O email do cliente é inválido"),
  phone: z.string({ message: "O telefone do cliente é obrigatório" }),
  birthdate: z.string({
    message: "A data de nascimento do cliente é obrigatória",
  }),
  state: z.string({ message: "O estado do cliente é obrigatório" }),
});
