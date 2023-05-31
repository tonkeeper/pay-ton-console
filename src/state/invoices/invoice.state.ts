import { getWindow } from 'src/utils';
import { createResource } from 'solid-js';
import { Invoice, InvoiceCommon, InvoiceStatus } from 'src/models/invoice';
import { DTOInvoice, DTOInvoicesInvoiceStatus } from 'src/state/invoices/dto';
import { withBaseUrl } from 'src/envinroment';

function getCurrentInvoiceId(): string | undefined {
    const window = getWindow();
    if (!window) {
        return;
    }

    let pathName = window.location.pathname;
    if (pathName.startsWith('/')) {
        pathName = pathName.slice(1);
    }

    if (pathName.endsWith('/')) {
        pathName = pathName.slice(0, -1);
    }

    const slashes = pathName.match(/\\/g)?.length;
    if (slashes) {
        console.error('Path must contain only invoice ID');
    }

    return pathName;
}

const mapInvoiceDTOStatusToInvoiceStatus: Record<DTOInvoice['status'], InvoiceStatus> = {
    [DTOInvoicesInvoiceStatus.DTOSuccessStatus]: 'success',
    [DTOInvoicesInvoiceStatus.DTOPendingStatus]: 'pending',
    [DTOInvoicesInvoiceStatus.DTOExpiredStatus]: 'expired',
    [DTOInvoicesInvoiceStatus.DTOCancelStatus]: 'cancelled'
};

function mapInvoiceDTOToInvoice(invoiceDTO: DTOInvoice): Invoice {
    const creationDate = new Date(invoiceDTO.date_create);
    const commonInvoice: InvoiceCommon = {
        tonAmount: String(invoiceDTO.amount),
        creationDate,
        subtractFeeFromAmount: invoiceDTO.subtract_fee_from_amount,
        id: invoiceDTO.id,
        validUntil: new Date(creationDate.getTime() + invoiceDTO.life_time * 1000),
        description: invoiceDTO.description,
        receiverAddress: invoiceDTO.recipient_address,
        sendToAddress: invoiceDTO.recipient_address // TODO
    };

    const status = mapInvoiceDTOStatusToInvoiceStatus[invoiceDTO.status];

    if (status === 'success') {
        return {
            ...commonInvoice,
            paidBy: invoiceDTO.paid_address!,
            paymentDate: new Date(invoiceDTO.date_paid!),
            status
        };
    }

    return { ...commonInvoice, status };
}

export const [currentInvoice, { refetch }] = createResource<Invoice | null, string | undefined>(
    getCurrentInvoiceId,
    async id => {
        if (!id) {
            return null;
        }

        const result = await (await fetch(withBaseUrl(`/api/v1/services/invoices/${id}`))).json();
        return mapInvoiceDTOToInvoice(result.invoice);
    }
);

setInterval(refetch, 30 * 1000);
