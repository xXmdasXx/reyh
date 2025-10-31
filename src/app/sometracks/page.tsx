'use client'
import React from 'react';
import AddTrackModal from '@/entities/profile/organisms/AddTrackModal/AddTrackModal';
import AddLicenseModal from '@/entities/profile/organisms/AddLicenseModal/AddLicenseModal';
import AddCollectionModal from '@/entities/profile/organisms/AddCollectionModal/AddCollectionModal';
import { useModals } from '@/hooks/useModals';

export default function SomeTracksPage() {
  const {
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
  } = useModals();

  const handleTrackSave = (trackData: any) => {
    console.log('Track created:', trackData);
    // Handle track creation success
  };

  const handleLicenseSave = (licenseData: any) => {
    console.log('License created:', licenseData);
    // Handle license creation success
  };

  const handleCollectionSave = (collectionData: any) => {
    console.log('Collection created:', collectionData);
    // Handle collection creation success
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Some Tracks Example
          </h1>
          <p className="text-blue-100 text-lg">
            This is a standalone example page showing the 3 modals
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add Track Button */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Add Track</h3>
            <p className="text-blue-100 mb-6 text-lg">Create a new track with cover and details</p>
            <button
              onClick={openAddTrackModal}
              className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold text-lg"
            >
              Add Track
            </button>
          </div>

          {/* Add License Button */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Add License</h3>
            <p className="text-green-100 mb-6 text-lg">Create a new license for your tracks</p>
            <button
              onClick={() => openAddLicenseModal('example-product-id')}
              className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold text-lg"
            >
              Add License
            </button>
          </div>

          {/* Add Collection Button */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Add Collection</h3>
            <p className="text-purple-100 mb-6 text-lg">Create a new collection of tracks</p>
            <button
              onClick={openAddCollectionModal}
              className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold text-lg"
            >
              Add Collection
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">About This Page</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            This is a standalone example page demonstrating the three modal components:
            <br />
            • <strong className="text-blue-400">Add Track Modal</strong> - For creating new tracks
            <br />
            • <strong className="text-green-400">Add License Modal</strong> - For creating track licenses
            <br />
            • <strong className="text-purple-400">Add Collection Modal</strong> - For creating track collections
            <br />
            <br />
            This page is not part of the dashboard and serves as an example for testing the modals.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AddTrackModal
        isOpen={isAddTrackModalOpen}
        onClose={closeAddTrackModal}
        onSave={handleTrackSave}
      />

      <AddLicenseModal
        isOpen={isAddLicenseModalOpen}
        onClose={closeAddLicenseModal}
        productId={selectedProductId}
        onSave={handleLicenseSave}
      />

      <AddCollectionModal
        isOpen={isAddCollectionModalOpen}
        onClose={closeAddCollectionModal}
        onSave={handleCollectionSave}
      />
    </div>
  );
}




