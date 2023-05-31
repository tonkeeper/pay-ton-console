import { ConnectedWallet, THEME, TonConnectUI } from '@tonconnect/ui';
import { createSignal } from 'solid-js';

export const [wallet, setWallet] = createSignal<ConnectedWallet | null>(null);

export const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json', // TODO
    uiPreferences: {
        theme: THEME.LIGHT
    }
});

tonConnectUI.onStatusChange(setWallet);
