export interface Address {
  addressId: number;
  streetNumber: number;
  street: string;
  city: string;
  country: string;
  postalCode: number;
  fullAddress: string;
  createdAt: Date;
  updatedAt: Date;
}
