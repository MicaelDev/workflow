// components/UserForm.tsx
import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { formSchema } from "@/jsonForm/schemas/formSchema";
import { uiSchema } from "@/jsonForm/schemas/uiSchema";

const UserForm = ({ userId }: { userId?: number }) => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    address: "",
    dateOfBirth: "",
    isActive: true,
  });

  useEffect(() => {
    if (userId) {
      // Carregar dados do usuário para edição
      fetch(`/api/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }
  }, [userId]);

  const handleSubmit = async () => {
    const method = userId ? "PUT" : "POST";
    const url = userId ? `/api/users/${userId}` : "/api/users";
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(userId ? "Usuário atualizado com sucesso" : "Usuário criado com sucesso");
    } else {
      alert("Erro ao salvar usuário");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{userId ? "Editar" : "Criar"} Usuário</h1>
      <JsonForms
        schema={formSchema}
        uischema={uiSchema}
        data={formData}
        onChange={({ data }) => setFormData(data)}
        renderers={materialRenderers}
      />
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
        {userId ? "Atualizar" : "Criar"} Usuário
      </button>
    </div>
  );
};

export default UserForm;
