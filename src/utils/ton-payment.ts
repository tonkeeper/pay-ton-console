export function generatePaymentLink(receiverAddress: string, amount?: string | number): string {
    const link = `ton://transfer/${receiverAddress}`; // TODO
    if (!amount) {
        return link;
    }

    return `${link}?amount=${amount}`;
}

export function generateTonkeeperPaymentLink(
    receiverAddress: string,
    amount?: string | number
): string {
    const link = `https://app.tonkeeper.com/transfer/${receiverAddress}`;
    if (!amount) {
        return link;
    }

    return `${link}?amount=${amount}`;
}

export function generateTonhubPaymentLink(
    receiverAddress: string,
    amount?: string | number
): string {
    const link = `https://tonhub.com/transfer/${receiverAddress}`;
    if (!amount) {
        return link;
    }

    return `${link}?amount=${amount}`;
}
