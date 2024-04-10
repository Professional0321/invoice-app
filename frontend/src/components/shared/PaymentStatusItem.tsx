import React, { MouseEventHandler, useCallback } from 'react';
import {
  ListItemButton,
  Typography,
  listItemTextClasses,
  typographyClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { InvoiceData } from '../pages';

const StyledListItemButton = styled(ListItemButton)({
  padding: '1rem 1.5rem',
  backgroundColor: '#fff',

  [`& .${listItemTextClasses.root}`]: {
    margin: 0,
  },

  [`& .${typographyClasses.h5}`]: {
    fontSize: '14px',
  },
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
      <Typography variant='h5' fontWeight='400'>
        {invoiceDate}
      </Typography>
    </StyledListItemButton>
  );
};
