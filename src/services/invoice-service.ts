import { apiServer } from './base';
import { InvoiceType, UserType, AccountsType } from '@/types/type';

class InvoiceService {
  async fetchInvoices(): Promise<InvoiceType[]> {
    const response = await apiServer.get('invoices/all');
    return response.data;
  }
  async fetchAccounts(): Promise<AccountsType[]> {
    const response = await apiServer.get('accounts/all');
    return response.data;
  }
}

const invoiceService = new InvoiceService();

export default invoiceService;
