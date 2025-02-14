"use client";

import { UpdateWorkflow } from "@/actions/workflows/update-workflow";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
import { Check } from "lucide-react";
import { toast } from "sonner";

export const SaveButton = ({ workflowId }: { workflowId: string; }) => {
    const { toObject } = useReactFlow();

    const { mutate, isPending } = useMutation({
        mutationFn: UpdateWorkflow,
        onSuccess: () => {
            toast.success(`Workflow saved successfully.`, { id: 'save-workflow' });
        },
        onError: () => {
            toast.error(`Workflow failed to save.`, { id: 'save-workflow' });
        }
    })
    return (
        <Button
            disabled={isPending}
            variant={"outline"}
            className="flex items-center gap-2"
            onClick={() => {
                const workflowDefinition = JSON.stringify(toObject());
                toast.loading("Saving workflow...", { id: 'save-workflow' });
                mutate({
                    id: workflowId,
                    definition: workflowDefinition
                })
            }}
        >
            <Check className="stroke-green-400 mr-2" size={16} />
            Save
        </Button>
    )
}
