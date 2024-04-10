import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Stack, Typography } from '@mui/material';
import { InvoiceType } from '../pages';
import { InvoiceItem } from './InvoiceItem';
import { PaymentStatusItem } from './PaymentStatusItem';
import { formatPrice } from '@/utils/formatPrice';
import { formatDate } from '@/utils/formatDate';

const Title = styled(Typography)({
  fontSize: '18px',
  color: '#78787d',
  fontWeight: '400',
  textAlign: 'left',
});

const StyledTable = styled(Table)`
  border: '2px solid #B9E2FD';

  & .MuiTableHead-root th {
    background-color: #d3f1fe;
    font-size: 14px;
    font-weight: 700;
  }

  & .MuiTableCell-root {
    border: 1px solid #b9e2fd;
  }
`;

interface Props {
  invoices: InvoiceType[];
}

export const InvoiceHistory: React.FC<Props> = ({ invoices }) => {
  return (
    <Stack
      direction='column'
      useFlexGap
      spacing={2}
      justifyContent='center'
      alignItems='left'
    >
      <Title>Invoice History</Title>
      <TableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>Invoice#</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Savings</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Amount Due</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((row, index) => (
              <TableRow key={index}>
                <TableCell padding='none'>
                  <InvoiceItem item={row.invoiceNumber} />
                </TableCell>
                <TableCell padding='none'>
                  <InvoiceItem item={row.projectName} />
                </TableCell>
                <TableCell padding='none'>
                  <InvoiceItem item={formatDate(row.invoiceDate)} />
                </TableCell>
                <TableCell padding='none'>
                  <InvoiceItem item={formatPrice(row.savings)} />
                </TableCell>
                <TableCell padding='none'>
                  <InvoiceItem item={formatPrice(row.total)} />
                </TableCell>
                <TableCell padding='none'>
                  <InvoiceItem item={formatPrice(row.amountDue)} />
                </TableCell>
                <TableCell padding='none'>
                  <PaymentStatusItem
                    paymentStatus={row.paymentStatus}
                    invoiceDate={
                      row.paymentStatus === 'Due' ||
                      row.paymentStatus === 'Past Due'
                        ? row.dueDate
                        : ''
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </Stack>
  );
};
