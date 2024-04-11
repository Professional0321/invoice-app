import React from 'react';

import { InvoicePage } from '@/components/pages';

const Invoices = [
  {
    accountId: 'account-1',
    amountDue: 123.66,
    dueDate: '2024-05-15',
    invoiceDate: '2023-07-19',
    invoiceNumber: '00185419',
    paymentStatus: 'Due',
    projectName: 'Mazon',
    savings: 1074.96,
    total: 600,
  },
  {
    accountId: 'account-1',
    amountDue: 674.59,
    dueDate: '2023-11-02',
    invoiceDate: '2023-07-19',
    invoiceNumber: '00185419',
    paymentStatus: 'Past Due',
    projectName: 'Mazon',
    savings: 1074.96,
    total: 9674.59,
  },
  {
    accountId: 'account-2',
    amountDue: 0,
    dueDate: '2023-07-29',
    invoiceDate: '2023-07-19',
    invoiceNumber: '00185415',
    paymentStatus: 'Paid',
    projectName: 'Glenwood',
    savings: 1051.67,
    total: 9465,
  },
  {
    accountId: 'account-2',
    amountDue: 0,
    dueDate: '2023-06-24',
    invoiceDate: '2023-06-14',
    invoiceNumber: '00179221',
    paymentStatus: 'Paid',
    projectName: 'Glenwood',
    savings: 116.5,
    total: 1048.49,
  },
  {
    accountId: 'account-2',
    amountDue: 0,
    dueDate: '2023-06-24',
    invoiceDate: '2023-06-14',
    invoiceNumber: '00179086',
    paymentStatus: 'Paid',
    projectName: 'Glenwood',
    savings: 564.87,
    total: 5083.83,
  },
  {
    accountId: 'account-3',
    amountDue: 0,
    dueDate: '2023-06-16',
    invoiceDate: '2023-06-06',
    invoiceNumber: '00177994',
    paymentStatus: 'Paid',
    projectName: 'Mazon',
    savings: 115.46,
    total: 1039.11,
  },
];

export default async function Home() {
  return <InvoicePage invoices={Invoices} />;
}
