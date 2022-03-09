import BigNumber from 'bignumber.js';

const toWad = (value: string) => new BigNumber(value).times(1e18).toFixed();

export const accounts: { privateKey: string; balance: string }[] = [
  {
    privateKey: '305c66c0a6a05832a9b289061fabb9ef08da19d0e8a1af2226873f7b2fa3c85a',
    balance: toWad('1000000'),
  },
];
