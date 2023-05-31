export const InvoiceStatus = {
    pending: 'pending',
    success: 'success',
    cancelled: 'cancelled',
    expired: 'expired'
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type InvoiceStatus = keyof typeof InvoiceStatus;

export interface InvoiceCommon {
    id: string;
    tonAmount: string;
    validUntil: Date;
    subtractFeeFromAmount: boolean;
    description: string;
    creationDate: Date;
    receiverAddress: string;
    sendToAddress: string;
}

export interface InvoiceSuccessful extends InvoiceCommon {
    paidBy: string;
    paymentDate: Date;
    status: 'success';
}

export interface InvoiceNotSuccessful extends InvoiceCommon {
    status: Exclude<InvoiceStatus, 'success'>;
}

export type Invoice = InvoiceNotSuccessful | InvoiceSuccessful;
