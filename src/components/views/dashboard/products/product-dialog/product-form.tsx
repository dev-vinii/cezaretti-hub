import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "@/schemas/product";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/widgets/molecules/multiselect";

const availableSizes = ["S", "M", "L", "XL"];
const availableColors = ["Red", "Green", "Blue", "Black"];

function ProductForm() {
  const productForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    console.log(values);
  }

  const { control } = productForm;

  return (
    <Form {...productForm}>
      <form
        onSubmit={productForm.handleSubmit(onSubmit)}
        className="grid gap-5"
      >
        <section className="flex flex-1 gap-6">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Nome</FormLabel>
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
            control={control}
            name="model"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="sizes"
            render={({ field }) => (
              <div className="grid flex-1 gap-2">
                <FormLabel>Tamanhos disponíveis</FormLabel>
                <MultiSelect
                  options={availableSizes.map((size) => ({
                    value: size,
                    label: size,
                  }))}
                  selectedValues={field.value}
                  onSelect={field.onChange}
                  placeholder="Selecione os tamanhos"
                />
                <FormMessage />
              </div>
            )}
          />
        </section>

        <section className="flex flex-1 gap-6">
          <FormField
            control={control}
            name="primaryColor"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Cor Principal</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a Cor" />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {availableColors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="availableColors"
            render={({ field }) => (
              <div className="grid flex-1 gap-2">
                <FormLabel>Cores disponíveis</FormLabel>
                <MultiSelect
                  options={availableColors.map((color) => ({
                    value: color,
                    label: color,
                  }))}
                  selectedValues={field.value}
                  onSelect={field.onChange}
                  placeholder="Selecione as cores"
                />
                <FormMessage />
              </div>
            )}
          />
        </section>

        <section className="flex flex-1 gap-6">
          <FormField
            control={control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <Button
          type="submit"
          className="ml-auto flex cursor-pointer rounded-md bg-black p-4 text-sm text-white hover:opacity-90"
        >
          Cadastrar Produto
        </Button>
      </form>
    </Form>
  );
}

export { ProductForm };
