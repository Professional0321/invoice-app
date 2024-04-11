export interface AccountsType {
  accountId: string;
  accountName: string;
  parentAccountId: string;
}

export interface UserType {
  accessToken: string;
  email: string;
  id: string;
  name: string;
}

export interface InvoiceType {
  accountId: string;
  amountDue: number;
  dueDate: string;
  invoiceDate: string;
  invoiceNumber: string;
  paymentStatus: PaymentStatus;
  projectName: string;
  savings: number;
  total: number;
}

export type PaymentStatus = 'Due' | 'Past Due' | 'Paid' | string;
