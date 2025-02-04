"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader, Divider, Input } from "@heroui/react";
import { VisibilityIcon, VisibilityOffIcon } from "@/components/icons";
import { Button } from "@heroui/button";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isShow, setIsShow] = React.useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación
    console.log("Email:", email, "Password:", password);
    router.push("/home");
  };

  return (
    <div className="flex-center min-h-full">
      <Card className="p-4 w-1/3 h-1/3 text-center justify-center">
        <CardHeader>
          <div className="w-full flex-center">
            <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={handleLogin} className="mt-6">
            <Input
              placeholder="email@infomedia.com"
              label="Correo electrónico"
              type="email"
              labelPlacement="outside"
              value={email}
              classNames={{
                input: "text-md",
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <Input
              placeholder="Contraseña"
              label="Contraseña"
              type={isShow ? "text" : "password"}
              labelPlacement="outside"
              value={password}
              classNames={{
                input: "text-md",
              }}
              onChange={(e) => setPassword(e.target.value)}
              required
              endContent={
                isShow ? (
                  <Button variant="light" onPress={(e) => setIsShow(false)} className="bg-none">
                    <VisibilityIcon />
                  </Button>
                ) : (
                  <Button variant="light" onPress={(e) => setIsShow(true)}>
                    <VisibilityOffIcon />
                  </Button>
                )
              }
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Iniciar Sesión
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
