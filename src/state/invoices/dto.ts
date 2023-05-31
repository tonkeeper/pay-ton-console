/* eslint-disable @typescript-eslint/naming-convention */

export enum DTOInvoicesInvoiceStatus {
    DTOPendingStatus = 'pending_status',
    DTOSuccessStatus = 'success_status',
    DTOCancelStatus = 'cancel_status',
    DTOExpiredStatus = 'expired_status'
}

export interface DTOInvoice {
    id: string;
    app_id: number;
    amount: number;
    life_time: number;
    subtract_fee_from_amount: boolean;
    description: string;
    status: DTOInvoicesInvoiceStatus;
    recipient_address: string;
    paid_address?: string;
    date_paid?: string;
    date_create: string;
}
