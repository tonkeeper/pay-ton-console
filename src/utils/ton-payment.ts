export function generatePaymentLink(receiverAddress: string, amount?: string | number): string {
    const link = `https://app.tonkeeper.com/transfer/${receiverAddress}`; // TODO
    if (!amount) {
        return link;
    }

    return `${link}?amount=${amount}`;
}
