import { InvoiceType } from '@/types/type';

interface Summary {
  includedSavings: number;
  totalAmountDue: number;
  oldestDueDate: string;
}

export const calculateSummary = (invoices: InvoiceType[]): Summary => {
  const outstandingInvoices = invoices.filter(
    (invoice) => invoice.paymentStatus !== 'Paid'
  );

  const includedSavings = outstandingInvoices.reduce(
    (total, invoice) => total + invoice.savings,
    0
  );
  const totalAmountDue = outstandingInvoices.reduce(
    (total, invoice) => total + invoice.amountDue,
    0
  );

  let formattedDueDate = '';
  if (outstandingInvoices?.length > 0) {
    const oldestOutstandingInvoice = outstandingInvoices?.reduce(
      (oldest, current) => {
        const oldestDueDate = new Date(oldest.dueDate);
        const currentDueDate = new Date(current.dueDate);
        return oldestDueDate < currentDueDate ? oldest : current;
      },
      outstandingInvoices?.[0]
    );

    const { dueDate } = oldestOutstandingInvoice;

    formattedDueDate = new Date(dueDate).toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    });
  }
  return {
    includedSavings,
    totalAmountDue,
    oldestDueDate: formattedDueDate,
  };
};
