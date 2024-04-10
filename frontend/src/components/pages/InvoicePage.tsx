'use client';

import React, { useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AccountSummary } from '@/components/shared';
import { InvoiceHistory } from '@/components/shared';

const StyledContainer = styled(Container)({
  padding: '2.5rem 3.75rem',
  maxWidth: '78rem',
  backgroundColor: '#F4FBFF',
});

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
