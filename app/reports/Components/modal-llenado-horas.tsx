import { QuestionIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import {
    Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@heroui/react";

export default function ModalLlenadoHoras() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Información de cómo llenar el reporte de horas">
        <Button
          variant="light"
          className="fixed right-5 top-24"
          onPress={onOpen}
        >
          <QuestionIcon />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                <h1 className="text-2xl">Explicación de llenador de horas</h1>
              </ModalHeader>
              <Divider />
              <ModalBody>
                <div className="text-sm/2 mt-2">
                  <b>Personal de Ingreso Fijo</b>
                  <br />
                  Proyectos en cliente + Proyectos internos + Capacitación +
                  Ausencias + Vacaciones = <b>Horas disponibles del periodo.</b>
                  <br />
                  Para Proyectos por Horas, las horas reportadas en proyectos
                  del cliente deben coincidir con las horas documentadas en los
                  reportes de actividades semanales que autoriza el cliente.
                </div>
                <div className="text-sm/2 mt-4">
                  <b>Personal de Ingreso Variable</b>
                  <br />
                  Proyectos en cliente + Proyectos Internos + Capacitación
                  (Horas aceptadas por el cliente y/o Lider de Proyecto)
                </div>
                <div className="text-sm/2 mt-4">
                  <b>Vacaciones</b>
                  <br />
                  Un dia de vacaciones equivale a 8 horas laborales.
                </div>
                <div className="text-sm/2 mt-4">
                  <b>
                    Si usted no esta de acuerdo con la información mostrada,
                    comuníquese con su lider para corregir horas de
                    ausencias/vacaciones, comuníquese con su gerente para
                    corregir datos de proyectos ó comuníquese con Karla Espinosa
                    para corregir datos de cursos y así poder enviar su reporte
                    a la brevedad.
                  </b>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
