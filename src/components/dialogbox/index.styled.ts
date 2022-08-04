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
    left: 50%;
    transform: translate(-50%, 0);
    ${(props) => `
        min-height: calc(${props.screenHeight} / 3.5)
        top: calc(${props.screenHeight} - ((${props.screenHeight} / 3.5) + ((${props.screenHeight} / 3.5) * 0.1)))px
        width: calc((${props.screenHeight} / 3.5) * 0.8)px;
    `};
`;
