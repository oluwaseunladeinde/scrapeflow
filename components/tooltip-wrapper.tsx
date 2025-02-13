"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface TooltipWrapperProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
}
export const TooltipWrapper = ({ content, children, side }: TooltipWrapperProps) => {
    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent side={side}>{content}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
