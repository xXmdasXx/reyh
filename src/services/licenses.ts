import { api } from "@/lib/Axios";

export type LicenseFormData = {
  file: File;
  title: string;
  description: string;
  price: number;
  offer?: number | null;
  exclusive: boolean;
  formats: string;
  type: string;
};

export type LicenseResponse = {
  id: string;
  title: string;
  description: string;
  price: number;
  offer?: number | null;
  exclusive: boolean;
  formats: string;
  type: string;
  product_id: string;
  created_at: string;
  updated_at: string;
};

export async function createLicense(
  productId: string,
  licenseData: LicenseFormData
): Promise<LicenseResponse> {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('User not authenticated');
    }

    const formData = new FormData();

    // افزودن همه فیلدهای ضروری
    formData.append('title', licenseData.title);
    formData.append('description', licenseData.description);
    formData.append('price', licenseData.price.toString());
    formData.append('exclusive', licenseData.exclusive ? 'true' : 'false');
    formData.append('formats', licenseData.formats);
    formData.append('type', licenseData.type);

    // فایل را در آخر اضافه کن
    if (!licenseData.file) {
      throw new Error('File is required');
    }
    formData.append('file', licenseData.file);

    console.log('📤 Sending license data:', {
      endpoint: `http://echora.ir/api/licenses/${productId}`,
      title: licenseData.title,
      price: licenseData.price,
      exclusive: licenseData.exclusive,
      formats: licenseData.formats,
      type: licenseData.type,
    });

    const response = await fetch(`http://echora.ir/api/licenses/${productId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-Type' را ست نکن! مرورگر خودش هنگام ارسال FormData تنظیم می‌کند
      },
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('❌ Server error:', errData);
      throw new Error(errData.detail || `Failed to create license (status ${response.status})`);
    }

    const data = await response.json();
    console.log('✅ License created successfully:', data);
    return data;
  } catch (error: any) {
    console.error('🔥 Error creating license:', error);
    throw new Error(error.message || 'Unexpected error while creating license');
  }
}

export async function getLicenses(productId: string): Promise<LicenseResponse[]> {
  try {
    const response = await api.get(`/licenses/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching licenses:', error);
    throw error;
  }
}

export async function updateLicense(
  licenseId: string,
  licenseData: Partial<LicenseFormData>
): Promise<LicenseResponse> {
  try {
    const formData = new FormData();
    
    if (licenseData.file) {
      formData.append('file', licenseData.file);
    }
    
    if (licenseData.title) {
      formData.append('title', licenseData.title);
    }
    
    if (licenseData.description) {
      formData.append('description', licenseData.description);
    }
    
    if (licenseData.price !== undefined) {
      formData.append('price', licenseData.price.toString());
    }
    
    if (licenseData.offer !== undefined) {
      formData.append('offer', licenseData.offer?.toString() || '');
    }
    
    if (licenseData.exclusive !== undefined) {
      formData.append('exclusive', licenseData.exclusive.toString());
    }
    
    if (licenseData.formats) {
      formData.append('formats', licenseData.formats);
    }
    
    if (licenseData.type) {
      formData.append('type', licenseData.type);
    }

    const response = await api.put(`/licenses/${licenseId}`, formData);

    return response.data;
  } catch (error) {
    console.error('Error updating license:', error);
    throw error;
  }
}

export async function deleteLicense(licenseId: string): Promise<void> {
  try {
    await api.delete(`/licenses/${licenseId}`);
  } catch (error) {
    console.error('Error deleting license:', error);
    throw error;
  }
}
