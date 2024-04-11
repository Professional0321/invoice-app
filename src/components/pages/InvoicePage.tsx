'use client';

import React, { useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AccountSummary } from '@/components/shared';
import { InvoiceHistory } from '@/components/shared';

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
  })
);

export interface InvoiceType {
  accountId: string;
  amountDue: number;
  dueDate: string;
  invoiceDate: string;
  invoiceNumber: string;
  paymentStatus: string;
  projectName: string;
  savings: number;
  total: number;
}

interface Props {
  invoices: InvoiceType[];
}

export const InvoicePage: React.FC<Props> = ({ invoices }) => {
  return (
    <StyledContainer>
      <Stack useFlexGap spacing={7}>
        <AccountSummary invoices={invoices} />
        <InvoiceHistory invoices={invoices} />
      </Stack>
    </StyledContainer>
  );
};
