import { ReactNode } from "react"
import { clsx } from "clsx"
import Icon from "./Icon"
import { Bars3Icon } from "@heroicons/react/24/solid"

export type Props = {
    children: ReactNode
    sidebar: ReactNode
}

export function Drawer({ children, sidebar }: Props) {
    return (
        <div className={clsx("drawer")}>
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{children}</div>

            <div className="drawer-side z-[100] h-full">
                <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {sidebar}
            </div>
        </div>
    )
}

type DrawerButtonProps = {
    mobileOnly?: boolean
    className?: string
}

export function DrawerButton({ mobileOnly = false, className }: DrawerButtonProps) {
    return (
        <label
            htmlFor="drawer"
            className={clsx("btn btn-ghost btn-sm drawer-button px-1", { "lg:hidden": mobileOnly }, className)}
        >
            <Icon icon={Bars3Icon} />
        </label>
    )
}
