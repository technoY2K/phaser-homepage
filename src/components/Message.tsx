import { useMemo } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";

const MessageContainer = styled.div`
    font-size: "12px";
    text-transform: uppercase;
`;

interface MessageProps {
    forceShowFullMessage: boolean;
    message: string;
    onMessageEnded: VoidFunction;
    trail: number;
}

export default function Message({
    forceShowFullMessage = false,
    message = "",
    onMessageEnded,
    trail,
}: MessageProps) {
    const lettersList = useMemo(
        () =>
            message
                .trim()
                .split("")
                .map((letter, i) => {
                    return {
                        item: letter,
                        index: i,
                    };
                }),
        [message]
    );

    const transitions = useTransition(lettersList, {
        trail,
        from: { display: "none" },
        enter: { display: "" },
        onRest: (...args) => {
            const [, , letter] = args;
            if (letter.index === lettersList.length - 1) {
                onMessageEnded();
            }
        },
    });

    return (
        <MessageContainer>
            {forceShowFullMessage && <span>{message}</span>}
            {!forceShowFullMessage &&
                transitions((styles, { item, index }) => (
                    <animated.span key={index} style={styles}>
                        {item}
                    </animated.span>
                ))}
        </MessageContainer>
    );
}
