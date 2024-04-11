'use client';

import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AccountSummary } from '@/components/accountSummary';
import { InvoiceHistory } from '@/components/invoiceTable';
import { AccountsType, InvoiceType, UserType } from '@/types/type';

const StyledContainer = styled(Container)(
  {
    backgroundColor: '#F4FBFF',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ theme }) => ({
    [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
      maxWidth: 'none',
    },
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      height: '100%',
      width: '100%',
      display: 'revert',
      padding: '20px',
    },
  })
);

interface Props {
  invoices: InvoiceType[];
  accounts: AccountsType[];
  user: UserType;
}

export const InvoicePage: React.FC<Props> = ({ invoices, accounts, user }) => {
  return (
    <StyledContainer>
      <Stack useFlexGap spacing={7} direction={'column'}>
        <Typography
          variant='h5'
          fontWeight='500'
          textAlign={'center'}
        >{`Welcome ${user.name}!`}</Typography>
        <AccountSummary invoices={invoices} />
        <InvoiceHistory invoices={invoices} accounts={accounts} />
      </Stack>
    </StyledContainer>
  );
};
