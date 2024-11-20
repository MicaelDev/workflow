// pages/api/users/[id].ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao carregar usuário" });
    }
  } else if (req.method === "PUT") {
    const { name, email, address, dateOfBirth, isActive } = req.body;
    try {
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          name,
          email,
          address,
          dateOfBirth,
          isActive,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }
}
