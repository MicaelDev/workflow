// pages/api/users.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao carregar usuários" });
    }
  } else if (req.method === "POST") {
    const { name, email, address, dateOfBirth, isActive } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          address,
          dateOfBirth,
          isActive,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }
}
