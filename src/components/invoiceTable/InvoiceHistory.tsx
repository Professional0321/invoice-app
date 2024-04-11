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
import { InvoiceType, AccountsType } from '@/types/type';
import { InvoiceHistoryRow } from './InvoiceHistoryRow';

const Title = styled(Typography)({
  fontSize: '24px',
  color: '#78787d',
  fontWeight: '400',
  textAlign: 'left',
});

const StyledTable = styled(Table)`
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
  accounts: AccountsType[];
}

export const InvoiceHistory: React.FC<Props> = ({ invoices, accounts }) => {
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
              <TableCell>Account Name</TableCell>
              <TableCell>Invoice #</TableCell>
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
              <InvoiceHistoryRow
                invoice={row}
                key={index}
                accounts={accounts}
              />
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </Stack>
  );
};
