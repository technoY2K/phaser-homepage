import styled from "styled-components";
import dialogBorder from "~/images/dialog-border.png";

export const DialogContainer = styled.div`
    image-rendering: pixelated;
    text-transform: uppercase;
    background-color: #e2b27e;
    border: solid;
    border-image: url(${dialogBorder}) 6 / 12px 12px 12px 12px stretch;
    padding: 16px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    min-height: 200px;
    top: 0;
    width: 300px;
`;

export const DialogTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const DialogFooter = styled.footer`
    bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    right: 12px;
    text-align: end;
`;
