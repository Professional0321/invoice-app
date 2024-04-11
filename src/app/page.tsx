'use client';

import React, { useEffect, useState } from 'react';
import { InvoicePage } from '@/components/pages';
import invoiceService from '@/services/invoice-service';
import { InvoiceType, UserType, AccountsType } from '@/types/type';

export default function Home() {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [accounts, setAccounts] = useState<AccountsType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const fetchedInvoices = await invoiceService.fetchInvoices();
        const fetchedAccounts = await invoiceService.fetchUsers();
        const fetchedUser = await invoiceService.fetchUser();
        setInvoices(fetchedInvoices);
        if (fetchedAccounts) {
          setAccounts(fetchedAccounts);
        }
        if (fetchedUser) {
          setUser(fetchedUser);
        }
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    }

    fetchInvoices();
  }, []);

  if (invoices?.length === 0 || accounts?.length === 0 || !user)
    return <>Loading</>;

  return <InvoicePage invoices={invoices} accounts={accounts} user={user} />;
}
