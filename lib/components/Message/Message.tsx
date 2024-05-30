import { ReactNode } from "react";

export interface MessageProps {
    accent?: "red" | "purple" | "green" | "blue" | "yellow",
    children?: ReactNode
}

export function Message({ children }: MessageProps) {
    return (
        <div className="adw message">
            
        </div>
    )
}

Message.displayName = "Adw.Message"
