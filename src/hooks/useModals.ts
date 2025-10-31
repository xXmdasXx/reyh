import { useState } from 'react';

export const useModals = () => {
  const [isAddTrackModalOpen, setIsAddTrackModalOpen] = useState(false);
  const [isAddLicenseModalOpen, setIsAddLicenseModalOpen] = useState(false);
  const [isAddCollectionModalOpen, setIsAddCollectionModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  const openAddTrackModal = () => setIsAddTrackModalOpen(true);
  const closeAddTrackModal = () => setIsAddTrackModalOpen(false);

  const openAddLicenseModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsAddLicenseModalOpen(true);
  };
  const closeAddLicenseModal = () => {
    setIsAddLicenseModalOpen(false);
    setSelectedProductId('');
  };

  const openAddCollectionModal = () => setIsAddCollectionModalOpen(true);
  const closeAddCollectionModal = () => setIsAddCollectionModalOpen(false);

  return {
    // Track Modal
    isAddTrackModalOpen,
    openAddTrackModal,
    closeAddTrackModal,
    
    // License Modal
    isAddLicenseModalOpen,
    openAddLicenseModal,
    closeAddLicenseModal,
    selectedProductId,
    
    // Collection Modal
    isAddCollectionModalOpen,
    openAddCollectionModal,
    closeAddCollectionModal,
  };
};




