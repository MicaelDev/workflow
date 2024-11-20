// pages/users/edit/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import UserForm from '@/components/UserForm';

const EditUserPage = (props) => {
  const router = useRouter();
  const { id } = router.query;

  // Se o id não estiver disponível (ainda está carregando a página)
  if (!id) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <UserForm userId={Number(id)}/>
    </div>
  );
};

export default EditUserPage;
