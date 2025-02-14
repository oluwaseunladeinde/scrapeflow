import { AppNode } from "@/types/app-node"
import { TaskType } from "@/types/task"

export const CreateFlowNode = (nodeType: TaskType, position?: { x: number, y: number }): AppNode => {
    return {
        id: crypto.randomUUID(),
        type: "FlowScrapeNode",
        dragHandle: ".drag-handle",
        data: {
            type: nodeType,
            inputs: {},
        },
        position: position ?? { x: 0, y: 0 }
    };
}