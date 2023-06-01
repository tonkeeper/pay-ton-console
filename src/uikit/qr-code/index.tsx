import qrcode from 'qrcode-generator';
import { Component, createEffect, Show } from 'solid-js';
import { CopyButtonStyled, QrCodeStyled } from './style';
import { Styleable } from 'src/models';

interface QrCodeProps extends Styleable {
    src: string;

    showCopyButton?: boolean;
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
            <Show when={props.showCopyButton !== false}>
                <CopyButtonStyled text={props.src} />
            </Show>
            <div ref={qrCodeCanvasRef} />
        </QrCodeStyled>
    );
};
