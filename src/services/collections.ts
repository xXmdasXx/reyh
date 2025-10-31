import { api } from "@/lib/Axios";

export type CollectionFormData = {
  cover?: File | null;
  name: string;
  description: string;
  isVisible?: boolean; // 👈 این خط باید اضافه بشه
};

export type CollectionResponse = {
  id: string;
  name: string;
  description: string;
  cover?: string;
  created_at: string;
  updated_at: string;
  user_id: string;
    // 👈 این خط جدید اضافه شود
};

export async function createCollection(
  collectionData: CollectionFormData
): Promise<CollectionResponse> {
  try {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User not authenticated');
    }

    const formData = new FormData();
    
    // Add cover file if provided
    if (collectionData.cover) {
      formData.append('cover', collectionData.cover);
    }
    
    // Add required fields
    formData.append('name', collectionData.name);
    formData.append('description', collectionData.description);

    console.log('Creating collection with data:', {
      name: collectionData.name,
      description: collectionData.description,
      hasCover: !!collectionData.cover
    });

    const response = await api.post('/collections', formData);

    return response.data;
  } catch (error: any) {
    console.error('Error creating collection:', error);
    
    if (error.response?.status === 401) {
      throw new Error('Authentication failed. Please login again.');
    } else if (error.response?.status === 422) {
      throw new Error('Validation error: ' + (error.response.data?.detail || 'Invalid data'));
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please try again.');
    } else {
      throw new Error(error.response?.data?.detail || 'Failed to create collection');
    }
  }
}

export async function getCollections(): Promise<CollectionResponse[]> {
  try {
    const response = await api.get('/collections');
    return response.data;
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw error;
  }
}

export async function getCollection(collectionId: string): Promise<CollectionResponse> {
  try {
    const response = await api.get(`/collections/${collectionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching collection:', error);
    throw error;
  }
}

export async function updateCollection(
  collectionId: string,
  collectionData: Partial<CollectionFormData>
): Promise<CollectionResponse> {
  try {
    const formData = new FormData();
    
    if (collectionData.cover) {
      formData.append('cover', collectionData.cover);
    }
    
    if (collectionData.name) {
      formData.append('name', collectionData.name);
    }
    
    if (collectionData.description) {
      formData.append('description', collectionData.description);
    }

    const response = await api.put(`/collections/${collectionId}`, formData);

    return response.data;
  } catch (error) {
    console.error('Error updating collection:', error);
    throw error;
  }
}

export async function deleteCollection(collectionId: string): Promise<void> {
  try {
    await api.delete(`/collections/${collectionId}`);
  } catch (error) {
    console.error('Error deleting collection:', error);
    throw error;
  }
}
