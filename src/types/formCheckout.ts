export interface FormCheckout {
  personalData: PersonalData;
  paymentData: PaymentData;
  address: Address;
}

interface PersonalData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

interface PaymentData {
  cardNumber: string;
  cvv: string;
  expiresAt: string;
}

interface Address {
  postalCode: string;
  street: string;
  number: number;
  complement?: string;
}
