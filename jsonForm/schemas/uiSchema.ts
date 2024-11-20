// uiSchema.ts
export const uiSchema = {
    name: { "ui:widget": "text" },
    email: { "ui:widget": "email" },
    address: { "ui:widget": "textarea" },
    dateOfBirth: { "ui:widget": "date" },
    isActive: {
      "ui:widget": "checkbox",
      "ui:options": {
        inline: true,
      },
    },
  };
  