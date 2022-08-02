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
    trail = 35,
    onMessageEnded,
    forceShowFullMessage = false,
}: MessageProps) {
    const items = useMemo(
        () =>
            message
                .trim()
                .split("")
                .map((letter, i) => {
                    return {
                        item: letter,
                        key: i,
                    };
                }),
        [message]
    );

    const transitions = useTransition(items, {
        trail,
        from: { display: "none" },
        enter: { display: "" },
        onRest: (status, controller, item) => {
            if (item.key === items.length - 1) {
                onMessageEnded();
            }
        },
    });

    return (
        <div style={baseStyle}>
            {forceShowFullMessage && <span>{message}</span>}
            {!forceShowFullMessage &&
                transitions((styles, { item, key }) => (
                    <animated.span key={key} style={styles}>
                        {item}
                    </animated.span>
                ))}
        </div>
    );
}
