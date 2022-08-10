import { useCallback, useEffect, useState } from "react";
import Message from "../Message";
import * as Styled from "./index.styled";

type DialogBoxProps = {
    messages: string[];
    characterName: string;
    onDialogEnded: VoidFunction;
    screenWidth: number;
    screenHeight: number;
};

export default function DialogBox({
    messages,
    characterName,
    onDialogEnded,
    screenWidth,
    screenHeight,
}: DialogBoxProps) {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [messageEnded, setMessageEnded] = useState(false);
    const [forceShowFullMessage, setForceShowFullMessage] = useState(false);

    useEffect(() => {
        const handleKeyPressed = (e: KeyboardEvent) => {
            if (["Enter", "Space", "Escape"].includes(e.code)) {
                handleClick();
            }
        };

        window.addEventListener("keydown", handleKeyPressed);

        return () => window.removeEventListener("keydown", handleKeyPressed);
    }, []);

    const handleClick = useCallback(() => {
        if (messageEnded) {
            setMessageEnded(false);
            setForceShowFullMessage(false);

            if (currentMessage < messages.length - 1) {
                setCurrentMessage(currentMessage + 1);
            } else {
                setCurrentMessage(0);
                onDialogEnded();
            }
        } else {
            setMessageEnded(true);
            setForceShowFullMessage(true);
        }
    }, [currentMessage, messageEnded, messages.length, onDialogEnded]);

    return (
        <Styled.DialogContainer
            screenWidth={screenWidth}
            screenHeight={screenHeight}
        >
            <Styled.DialogTitle>{characterName}</Styled.DialogTitle>
            <Message
                message={messages[currentMessage]}
                trail={3}
                onMessageEnded={() => setMessageEnded(true)}
                forceShowFullMessage={forceShowFullMessage}
            />
            <Styled.DialogFooter>
                {currentMessage === messages.length - 1 && messageEnded
                    ? "Ok"
                    : "Next"}
            </Styled.DialogFooter>
        </Styled.DialogContainer>
    );
}
