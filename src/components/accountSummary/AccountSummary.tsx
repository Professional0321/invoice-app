import React from 'react';
import { styled } from '@mui/material/styles';

import { Stack, Typography } from '@mui/material';
import { calculateSummary } from '@/utils/calculateSummary';
import { formatPrice } from '@/utils/formatPrice';
import { InvoiceType } from '@/types/type';

const Title = styled(Typography)({
  fontSize: '24px',
  color: '#78787d',
  fontWeight: '400',
  textAlign: 'left',
});

const SummaryContainer = styled(Stack)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '30px 100px',
  border: '1px solid #bfbfc3',
});

const StyledTypography = styled(Typography)<{ title: string }>(({ title }) => ({
  fontSize: '18px',
  color:
    title === 'Included Savings' || title === 'Total Amount Due'
      ? '#004b9b'
      : '#f04b2d',
  fontWeight: '500',
  textAlign: 'center',
}));

const Price = styled(Typography)({
  fontSize: '24px',
  color: '#004b9b',
  fontWeight: '700',
  textAlign: 'center',
});

interface Props {
  invoices: InvoiceType[];
}

export const AccountSummary: React.FC<Props> = ({ invoices }) => {
  const { includedSavings, totalAmountDue, oldestDueDate } =
    calculateSummary(invoices);

  return (
    <Stack
      direction='column'
      useFlexGap
      spacing={2}
      justifyContent='center'
      alignItems='left'
    >
      <Title>Account summary</Title>
      <SummaryContainer
        useFlexGap
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Stack
          direction='column'
          useFlexGap
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <StyledTypography title='Included Savings'>
            Included Savings
          </StyledTypography>
          <Price>{formatPrice(includedSavings)}</Price>
        </Stack>
        <Stack
          direction='column'
          useFlexGap
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <StyledTypography title='Total Amount Due'>
            Total Amount Due
          </StyledTypography>
          <Price>{formatPrice(totalAmountDue)}</Price>
        </Stack>
        <Stack
          direction='column'
          useFlexGap
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <StyledTypography title='Past Due'>Past Due</StyledTypography>
          <Price>{oldestDueDate}</Price>
        </Stack>
      </SummaryContainer>
    </Stack>
  );
};
