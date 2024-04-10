import React, { MouseEventHandler, useCallback } from 'react';
import {
  ListItemButton,
  Typography,
  listItemTextClasses,
  typographyClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { InvoiceData } from '../pages';
import { formatDate } from '@/utils/formatDate';

const StyledListItemButton = styled(ListItemButton)({
  padding: '1rem 1.5rem',
  backgroundColor: '#fff',
  justifyContent: 'space-between',

  [`& .${listItemTextClasses.root}`]: {
    margin: 0,
  },

  [`& .${typographyClasses.h5}`]: {
    fontSize: '14px',
  },
});

const DueFont = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  backgroundColor: '#4962FA',
  borderRadius: '10px',
  padding: '1px 5px',
  color: '#fff',
});

const PastDueFont = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  backgroundColor: '#DB502F',
  borderRadius: '10px',
  padding: '1px 5px',
  color: '#fff',
});

const PaidFont = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '1px 5px',
  color: '#61936E',
  border: '1px solid #61936E',
});

interface Props {
  paymentStatus: string;
  invoiceDate: string;
}

export const PaymentStatusItem: React.FC<Props> = ({
  paymentStatus,
  invoiceDate,
}) => {
  return (
    <StyledListItemButton disableRipple>
      {paymentStatus === 'Due' ? (
        <DueFont>{paymentStatus}</DueFont>
      ) : paymentStatus === 'Past Due' ? (
        <PastDueFont>{paymentStatus}</PastDueFont>
      ) : (
        <PaidFont>{paymentStatus}</PaidFont>
      )}
      {invoiceDate && (
        <Typography variant='h5' fontWeight='400'>
          {formatDate(invoiceDate)}
        </Typography>
      )}
    </StyledListItemButton>
  );
};
