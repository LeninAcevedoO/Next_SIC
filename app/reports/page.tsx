"use client";
import { SendIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import {
  Table,
  TableHeader,
  TableRow,
  TableColumn,
  TableBody,
  TableCell,
  Input,
  Button,
  Card,
} from "@heroui/react";
import { useState } from "react";
import ModalLlenadoHoras from "./Components/modal-llenado-horas";

export default function BlogPage() {
  const [horasVacaciones, setHorasVacaciones] = useState(0);
  const [horasAusentismo, setHorasAusentismo] = useState(0);

  return (
    <div className="w-full flex-center">
      <div className="w-full flex justify-center text-center">
        <h1 className={title({ color: "blue" })}>Reporte de horas Infomedia</h1>
      </div>
      <div className="w-full" id="ConsultantInfo">
        <Table className="w-full text-center mt-4" classNames={{wrapper: 'p-2'}} isCompact >
          <TableHeader>
            <TableColumn className="text-center w-2/3">
              Nombre del consultor
            </TableColumn>
            <TableColumn className="text-center rounded-r-md" colSpan={2}>
              Periodo
            </TableColumn>
            <TableColumn className="hidden"> </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell className="text-center">
                Luis Lenin Acevedo Ortiz
              </TableCell>
              <TableCell className="text-center">01-Ene-25</TableCell>
              <TableCell className="text-center">31-Ene-25</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell className="text-end">
                Horas disponibles en el periodo:
              </TableCell>
              <TableCell className="text-center">172</TableCell>
              <TableCell className="text-center">100%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full" id="ProyectClientInfo">
        <Card className="w-full rounded-md text-center text-xl mt-8 p-1">
          Horas en proyecto en cliente
        </Card>
        <Table className="w-full text-center mt-2" classNames={{wrapper: 'p-2'}} isCompact >
          <TableHeader>
            <TableColumn className="text-center">
              Nombre del cliente
            </TableColumn>
            <TableColumn className="text-center">
              Nombre del proyecto
            </TableColumn>
            <TableColumn className="text-center">%Asig</TableColumn>
            <TableColumn className="text-center w-1/4">Horas</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell className="text-center">RESULTANT</TableCell>
              <TableCell className="text-center">
                DESARROLLO GOOGLE RESULTANT
              </TableCell>
              <TableCell className="text-center">50</TableCell>
              <TableCell className="flex justify-center">
                <Input
                  type="number"
                  className="text-md w-20"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full" id="InterProyectInfo">
        <Card className="w-full rounded-md text-center text-xl mt-8 p-1">
          Horas en proyectos interno
        </Card>
        <Table className="w-full text-center mt-2" classNames={{wrapper: 'p-2'}} isCompact >
          <TableHeader>
            <TableColumn className="text-center">
              Nombre del proyecto o actividad
            </TableColumn>
            <TableColumn className="text-center">%Asig</TableColumn>
            <TableColumn className="text-center w-1/4">Horas</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell className="text-center">DESARROLLO NEXT SIC</TableCell>
              <TableCell className="text-center">50</TableCell>
              <TableCell className="flex justify-center">
                <Input
                  type="number"
                  className="text-md w-20"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full" id="CapacitacionInfo">
        <Card className="w-full rounded-md text-center text-xl mt-8 p-1">
          Horas en capacitación recibida
        </Card>
        <Table className="w-full text-center mt-2" classNames={{wrapper: 'p-2'}} isCompact >
          <TableHeader>
            <TableColumn className="text-center">Nombre del curso</TableColumn>
            <TableColumn className="text-center w-1/4">Horas</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key={1}>
              <TableCell className="text-center w-2/3">Curso 1</TableCell>
              <TableCell className="flex justify-center">
                <Input
                  type="number"
                  className="text-md w-20"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-full flex justify-between mt-5">
        <Input
          type="number"
          className="w-49"
          placeholder="00"
          label="Horas de vacaciones"
          labelPlacement="outside"
          value={horasVacaciones.toString()}
          onChange={(e) => setHorasVacaciones(Number(e.target.value))}
        />
        <Input
          type="number"
          className="w-49"
          placeholder="00"
          label="Horas de ausentismo"
          labelPlacement="outside"
          value={horasAusentismo.toString()}
          onChange={(e) => setHorasAusentismo(Number(e.target.value))}
        />
      </div>
      <div className="w-full flex justify-center mt-5 mb-6">
        <Button variant="shadow" color="success">
          <SendIcon />
          Guardar
        </Button>
      </div>

      <ModalLlenadoHoras />
    </div>
  );
}
