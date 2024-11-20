// formSchema.ts
export const formSchema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "Nome",
        minLength: 1,
      },
      email: {
        type: "string",
        format: "email",
        title: "Email",
        minLength: 1,
      },
      address: {
        type: "string",
        title: "Endereço",
      },
      dateOfBirth: {
        type: "string",
        format: "date",
        title: "Data de Nascimento",
      },
      isActive: {
        type: "boolean",
        title: "Ativo",
        default: true,
      },
    },
    required: ["name", "email"], // Torna nome e email obrigatórios
  };
  