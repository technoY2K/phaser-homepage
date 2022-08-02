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
    onMessageEnded = () => {},
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

    return <div style={baseStyle}>Message</div>;
}
