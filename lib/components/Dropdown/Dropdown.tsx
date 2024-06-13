import { ReactNode, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import clsx from "clsx";

export interface DropdownHandles {
    open(): void,
    close(): void,
}

export interface DropdownProps {
    content: ReactNode,
    menu: ReactNode,

    className?: {
        container?: string,
        content?: string,
        menu?: string,
    },
}

const Dropdown = forwardRef<DropdownHandles, DropdownProps>(function Dropdown({
    className,
    content,
    menu,
}, ref) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = useCallback(() => {

    }, [])

    const onClose = useCallback(() => {
        
    }, [])

    useImperativeHandle(ref, () => {
        return {
            close: onClose,
            open: onOpen,
        }
    })

    const containerProps = {
        className: clsx("adw dropdown", className?.container, { opened: isOpen }),
        "data-is-active": isOpen,
    }

    const contentProps = {
        className: clsx("content", className?.content)
    }

    const menuProps = {
        className: clsx("menu", className?.menu)
    }

    return (
        <div {...containerProps}>
            <div {...contentProps}>
                {content}
            </div>
            <div {...menuProps}>
                <div className="content">
                    {menu}
                </div>
            </div>
        </div>
    )
})