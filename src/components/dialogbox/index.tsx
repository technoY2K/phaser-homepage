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
}: DialogBoxProps) {}
