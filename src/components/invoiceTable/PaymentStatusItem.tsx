import React from 'react';
import {
  ListItemButton,
  Stack,
  Typography,
  listItemTextClasses,
  typographyClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { formatDate } from '@/utils/formatDate';
import { PaymentStatus } from '@/types/type';

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

const StyledTypography = styled(Typography)<{ status: PaymentStatus }>(
  ({ status }) => ({
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor:
      status === 'Due' ? '#4962FA' : status === 'Past Due' ? '#DB502F' : '#fff',
    borderRadius: '10px',
    padding: '1px 5px',
    color: status === 'Due' || status === 'Past Due' ? '#fff' : '#61936E',
    border: status === 'Paid' ? '1px solid #61936E' : 'none',
  })
);

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
      <Stack
        direction='row'
        useFlexGap
        spacing={4}
        justifyContent='space-between'
        alignItems='left'
        width={'100%'}
      >
        <StyledTypography status={paymentStatus}>
          {paymentStatus}
        </StyledTypography>

        {invoiceDate && (
          <Typography variant='h5' fontWeight='400'>
            {formatDate(invoiceDate)}
          </Typography>
        )}
      </Stack>
    </StyledListItemButton>
  );
};
