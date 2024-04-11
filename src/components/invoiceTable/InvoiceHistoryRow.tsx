import React, { useMemo } from 'react';
import { TableRow, TableCell } from '@mui/material';

import { InvoiceItem } from './InvoiceItem';
import { PaymentStatusItem } from './PaymentStatusItem';
import { formatPrice } from '@/utils/formatPrice';
import { formatDate } from '@/utils/formatDate';
import { InvoiceType, AccountsType } from '@/types/type';

interface Props {
  invoice: InvoiceType;
  accounts: AccountsType[];
}

export const InvoiceHistoryRow: React.FC<Props> = ({ invoice, accounts }) => {
  const invoiceItems = useMemo(
    () => ({
      accountName: accounts.find(
        (account) => account.accountId === invoice.accountId
      )?.accountName,
      invoiceNumber: invoice.invoiceNumber,
      projectName: invoice.projectName,
      invoiceDate: formatDate(invoice.invoiceDate),
      savings: formatPrice(invoice.savings),
      total: formatPrice(invoice.total),
      amountDue: formatPrice(invoice.amountDue),
    }),
    [accounts, invoice]
  );

  const paymentStatusItem = useMemo(
    () => (
      <PaymentStatusItem
        paymentStatus={invoice.paymentStatus}
        invoiceDate={
          invoice.paymentStatus === 'Due' ||
          invoice.paymentStatus === 'Past Due'
            ? invoice.dueDate
            : ''
        }
      />
    ),
    [invoice]
  );

  return (
    <TableRow>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.accountName || ''} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.invoiceNumber} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.projectName} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.invoiceDate} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.savings} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.total} />
      </TableCell>
      <TableCell padding='none'>
        <InvoiceItem item={invoiceItems.amountDue} />
      </TableCell>
      <TableCell padding='none'>{paymentStatusItem}</TableCell>
    </TableRow>
  );
};
