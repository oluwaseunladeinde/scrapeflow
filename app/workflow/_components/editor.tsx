"use client";

import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./flow-editor";
import { Topbar } from "./topbar/topbar";

export const Editor = ({ workflow }: { workflow: Workflow }) => {
    return (
        <ReactFlowProvider>
            <div className="flex flex-col h-full w-full overflow-hidden">
                <Topbar workflowId={workflow.id} title="Workflow editor" subtitle="Workflow name" />
                <section className="flex h-full overflow-auto">
                    <FlowEditor workflow={workflow} />
                </section>
            </div>
        </ReactFlowProvider>
    )
}
