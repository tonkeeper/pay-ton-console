import { ConnectedWallet, THEME, TonConnectUI } from '@tonconnect/ui';
import { createSignal } from 'solid-js';
import { currentInvoice } from 'src/state/invoices/invoice.state';

export const [wallet, setWallet] = createSignal<ConnectedWallet | null>(null);

export const tonConnectUI = new TonConnectUI({
    manifestUrl: 'https://pay.tonconsole.com/tonconnect-manifest.json',
    uiPreferences: {
        theme: THEME.LIGHT
    }
});

tonConnectUI.onStatusChange(setWallet);

export async function payWithTonConnect(): Promise<void> {
    await tonConnectUI.sendTransaction(
        {
            validUntil: Math.round(Date.now() / 1000) + 360,
            messages: [
                {
                    address: currentInvoice()!.sendToAddress,
                    amount: currentInvoice()!.tonAmount
                }
            ]
        },
        {
            modals: 'all',
            notifications: []
        }
    );
}
