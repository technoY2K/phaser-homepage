import styled from "styled-components";
import dialogBorder from "~/images/dialog-border.png";

type DialogContainerProps = {
    screenWidth: number;
    screenHeight: number;
};

export const DialogContainer = styled.div<DialogContainerProps>`
    image-rendering: pixelated;
    text-transform: uppercase;
    background-color: #e2b27e;
    border: solid;
    border-image: url(${dialogBorder}) 6 / 12px 12px 12px 12px stretch;
    padding: 16px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    ${(props) => `
        min-height: calc(${props.screenHeight} / 3.5)px;
        top: calc(${props.screenHeight} - ((${props.screenHeight} / 3.5) + ((${props.screenHeight} / 3.5) * 0.1)))px;
        width: calc((${props.screenHeight} / 3.5) * 0.8)px;
    `};
`;

export const DialogTitle = styled.div`
    font-size: 16px;
    margin-bottom: 12px;
    font-weight: bold;
`;

export const DialogFooter = styled.footer`
    font-size: 16px;
    cursor: pointer;
    text-align: end;
    position: absolute;
    right: 12px;
    bottom: 12px;
`;
