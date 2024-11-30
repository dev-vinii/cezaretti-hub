import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClientDialog } from "./client-dialog";
import { useState } from "react";
import { Trash } from "lucide-react";

function Clients() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col justify-center bg-[#dbdbcb] py-10">
      <header className="pr-10">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="ml-auto flex cursor-pointer rounded-md bg-black p-4 text-sm text-white hover:opacity-90"
        >
          Novo Cliente
        </Button>
      </header>
      <div className="flex-1 p-10">
        <Table className="rounded-lg bg-white shadow-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID Cliente</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead>Gasto Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">CL001</TableCell>
              <TableCell>João Silva</TableCell>
              <TableCell>joaosilva@exemplo.com</TableCell>
              <TableCell>(11) 98765-4321</TableCell>
              <TableCell>15/01/2023</TableCell>
              <TableCell>R$ 1.250,00</TableCell>
              <TableCell className="text-right">
                <Trash size={20} className="cursor-pointer" color="red" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CL002</TableCell>
              <TableCell>Maria Oliveira</TableCell>
              <TableCell>mariaoliveira@exemplo.com</TableCell>
              <TableCell>(21) 91234-5678</TableCell>
              <TableCell>22/03/2023</TableCell>
              <TableCell>R$ 750,00</TableCell>
              <TableCell className="text-right">
                <Trash size={20} className="cursor-pointer" color="red" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <ClientDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export { Clients };
