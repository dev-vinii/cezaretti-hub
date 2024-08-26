import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { states } from "@/data/states";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clientSchema } from "@/schemas/client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ClientForm() {
  const clientForm = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
  });

  function onSubmit(values: z.infer<typeof clientSchema>) {
    console.log(values);
  }

  return (
    <Form {...clientForm}>
      <form onSubmit={clientForm.handleSubmit(onSubmit)} className="grid gap-5">
        <section className="flex flex-1 gap-6">
          <FormField
            control={clientForm.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={clientForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <section className="flex flex-1 gap-6">
          <FormField
            control={clientForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={clientForm.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Data de nascimento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <section className="flex flex-1 gap-6">
          <FormField
            control={clientForm.control}
            name="state"
            render={({ field }) => (
              <div className="grid flex-1 gap-2">
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent className="bg-white shadow-lg">
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </div>
            )}
          />
        </section>
        <Button
          type="submit"
          className="ml-auto flex cursor-pointer rounded-md bg-black p-4 text-sm text-white hover:opacity-90"
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  );
}

export { ClientForm };
