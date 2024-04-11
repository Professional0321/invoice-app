'use client';

import React, { useEffect, useState } from 'react';
import { InvoicePage } from '@/components/pages';
import invoiceService from '@/services/invoice-service';
import userService from '@/services/user-service';
import { InvoiceType, UserType, AccountsType } from '@/types/type';
import { setToken } from '@/services/base';
import { CircularProgress, Stack } from '@mui/material';

export default function Home() {
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);
  const [accounts, setAccounts] = useState<AccountsType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const fetchedUser = await userService.fetchUser();

        if (fetchedUser) {
          setUser(fetchedUser);
          setToken(fetchedUser.accessToken);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const fetchedInvoices = await invoiceService.fetchInvoices();
        const fetchedAccounts = await invoiceService.fetchAccounts();
        setInvoices(fetchedInvoices);
        if (fetchedAccounts) {
          setAccounts(fetchedAccounts);
        }
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    }
    if (user?.accessToken) {
      fetchInvoices();
    }
  }, [user?.accessToken]);

  if (invoices?.length === 0 || accounts?.length === 0 || !user)
    return (
      <Stack
        sx={{ color: 'grey.500' }}
        spacing={2}
        direction='row'
        alignItems={'center'}
        justifyContent={'center'}
        height={'100vh'}
      >
        <CircularProgress color='secondary' />
      </Stack>
    );

  return <InvoicePage invoices={invoices} accounts={accounts} user={user} />;
}
