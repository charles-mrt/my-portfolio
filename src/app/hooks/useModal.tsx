import { useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModalHandle = () => {
    setShowModal(false);
  };

  return { showModal, openModal, closeModal: closeModalHandle };
};