import React from 'react';
import { styled } from '@mui/material/styles';

import { Stack, Typography } from '@mui/material';

const Title = styled(Typography)({
  fontSize: '18px',
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

const AmountTitle = styled(Typography)({
  fontSize: '14px',
  color: '#004b9b',
  fontWeight: '400',
  textAlign: 'center',
});

const PastDueTitle = styled(Typography)({
  fontSize: '14px',
  color: '#f04b2d',
  fontWeight: '500',
  textAlign: 'center',
});

const Price = styled(Typography)({
  fontSize: '24px',
  color: '#004b9b',
  fontWeight: '700',
  textAlign: 'center',
});

export const AccountSummary = () => {
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
        direction='row'
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
          <AmountTitle>Included Savings</AmountTitle>
          <Price>$2149.34</Price>
        </Stack>
        <Stack
          direction='column'
          useFlexGap
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <AmountTitle>Total Amount Due</AmountTitle>
          <Price>$2149.34</Price>
        </Stack>
        <Stack
          direction='column'
          useFlexGap
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <PastDueTitle>Past Due</PastDueTitle>
          <Price>$2149.34</Price>
        </Stack>
      </SummaryContainer>
    </Stack>
  );
};
