"use client";

import { useId, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ParamProps } from "@/types/app-node";


export const StringParam = ({ param, value, updateNodeParamValue }: ParamProps) => {
    const [intenalValue, setInternalValue] = useState(value);
    const id = useId();

    return (
        <div className="space-y-1 p-1 w-full">
            <Label htmlFor={id} className="text-xs flex">
                {param.name}
                {param.required && (
                    <p className="text-red-400 px-1">*</p>
                )}
            </Label>
            <Input
                id={id}
                className="text-xs"
                value={intenalValue}
                placeholder="Enter value here..."
                onChange={(e) => setInternalValue(e.target.value)}
                onBlur={(e) => updateNodeParamValue(e.target.value)}
            />
            {param.helperText && (
                <p className="text-muted-foreground px-2">{param.helperText}</p>
            )}
        </div>
    )
}
