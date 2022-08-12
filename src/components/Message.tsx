import { useMemo } from "react";
import { animated, useTransition } from "react-spring";

type MessageProps = {
    message: string;
    trail: number;
    onMessageEnded: VoidFunction;
    forceShowFullMessage: boolean;
};

const baseStyle: React.CSSProperties = {
    fontSize: "12px",
    textTransform: "uppercase",
};

export default function Message({
    message = "",
    trail,
    onMessageEnded,
    forceShowFullMessage = false,
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
        onRest: (status, controller, letter) => {
            if (letter.index === lettersList.length - 1) {
                onMessageEnded();
            }
        },
    });

    return (
        <div style={baseStyle}>
            {forceShowFullMessage && <span>{message}</span>}
            {!forceShowFullMessage &&
                transitions((styles, { item, index }) => (
                    <animated.span key={index} style={styles}>
                        {item}
                    </animated.span>
                ))}
        </div>
    );
}
