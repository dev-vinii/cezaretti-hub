import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductDialog } from "./product-dialog";
import { useState } from "react";
import { Trash } from "lucide-react";

function Products() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col justify-center bg-[#dbdbcb] py-10">
      <header className="pr-10">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="ml-auto flex cursor-pointer rounded-md bg-black p-4 text-sm text-white hover:opacity-90"
        >
          Novo Produto
        </Button>
      </header>
      <div className="flex-1 p-10">
        <Table className="rounded-lg bg-white shadow-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] whitespace-nowrap">
                ID Produto
              </TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Tamanhos Disponíveis</TableHead>
              <TableHead>Cor Principal</TableHead>
              <TableHead>Cores Disponíveis</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">RP001</TableCell>
              <TableCell>Camisa Polo</TableCell>
              <TableCell>Clássica</TableCell>
              <TableCell>M, G, GG</TableCell>
              <TableCell>Azul Marinho</TableCell>
              <TableCell>Azul Marinho, Branco, Preto</TableCell>
              <TableCell>R$ 150,00</TableCell>
              <TableCell className="text-right">
                <Trash size={20} className="cursor-pointer" color="red" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">RP002</TableCell>
              <TableCell>Calça Jeans</TableCell>
              <TableCell>Skinny</TableCell>
              <TableCell>38, 40, 42, 44</TableCell>
              <TableCell>Preto</TableCell>
              <TableCell>Preto, Azul Claro, Azul Escuro</TableCell>
              <TableCell>R$ 200,00</TableCell>
              <TableCell className="text-right">
                <Trash size={20} className="cursor-pointer" color="red" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <ProductDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export { Products };
