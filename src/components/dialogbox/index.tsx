import { useEffect, useState } from "react";
import Message from "../Message";
import * as Styled from "./index.styled";

type DialogBoxProps = {
    messages: string[];
    characterName: string;
    onDialogEnded: VoidFunction;
};

export default function DialogBox({
    messages,
    characterName,
    onDialogEnded,
}: DialogBoxProps) {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [messageEnded, setMessageEnded] = useState(false);
    const [forceShowFullMessage, setForceShowFullMessage] = useState(false);

    console.log(currentMessage, "CURRENT MESSAGE");
    console.log(messageEnded, "MESSAGE ENDED");
    console.log(forceShowFullMessage, "FORCE");
    useEffect(() => {
        const handleKeyPressed = (e: KeyboardEvent | MouseEvent) => {
            if (e instanceof KeyboardEvent) {
                if (["Enter", "Space", "Escape"].includes(e.code)) {
                    handleClick();
                }
            }

            if (e instanceof MouseEvent) {
                handleClick();
            }
        };

        window.addEventListener("keydown", handleKeyPressed);

        return () => window.removeEventListener("keydown", handleKeyPressed);
    }, []);

    const handleClick = () => {
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
    };

    return (
        <Styled.DialogContainer>
            <Styled.DialogTitle>{characterName}</Styled.DialogTitle>
            <Message
                message={messages[currentMessage]}
                trail={50}
                onMessageEnded={() => setMessageEnded(true)}
                forceShowFullMessage={forceShowFullMessage}
            />
            <Styled.DialogFooter onClick={handleClick}>
                {currentMessage === messages.length - 1 && messageEnded
                    ? "Ok"
                    : "Next"}
            </Styled.DialogFooter>
        </Styled.DialogContainer>
    );
}
