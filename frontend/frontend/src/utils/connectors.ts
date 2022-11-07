import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  // 5: goerli, 80001: mumbai
  supportedChainIds: [1, 3, 4, 5, 42, 31337, 80001]
});
