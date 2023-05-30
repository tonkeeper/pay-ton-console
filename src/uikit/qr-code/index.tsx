import qrcode from 'qrcode-generator';
import { Component, createEffect } from 'solid-js';
import { QrCodeStyled } from './style';
import { Styleable } from 'src/models';

interface QrCodeProps extends Styleable {
    src: string;
}

export const QrCode: Component<QrCodeProps> = props => {
    let qrCodeCanvasRef: HTMLDivElement | undefined;

    createEffect(() => {
        const errorCorrectionLevel = 'L';
        const cellSize = 4;
        const qr = qrcode(0, errorCorrectionLevel);
        qr.addData(props.src);
        qr.make();
        qrCodeCanvasRef!.innerHTML = qr.createSvgTag(cellSize, 0);
    });

    return (
        <QrCodeStyled class={props.class}>
            <div ref={qrCodeCanvasRef} />
        </QrCodeStyled>
    );
};
