import { InvoiceType } from '@/components/pages';
import { apiServer } from './base';

class InvoiceService {
  async fetchInvoices(): Promise<InvoiceType[]> {
    const response = await apiServer.get('/invoices');
    return response.data;
  }
}

const invoiceService = new InvoiceService();

export default invoiceService;
