"use client";

import { CreateFlowNode } from '@/lib/workflow/create-flow-node';
import { TaskType } from '@/types/task';
import { Workflow } from '@prisma/client';
import { Background, BackgroundVariant, Controls, ReactFlow, useNodesState } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import NodeComponent from './nodes/node-component';

const nodeTypes = {
    FlowScrapeNode: NodeComponent,
}

const FlowEditor = ({ workflow }: { workflow: Workflow }) => {

    const [nodes, setNodes, onNodesChange] = useNodesState([
        CreateFlowNode(TaskType.LAUNCH_BROWSER),
    ]);
    const [edges, setEdges, onEdgesChange] = useNodesState([

    ]);

    return (
        <main className='h-full w-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
                nodeTypes={nodeTypes}
            >
                <Controls position='top-left' />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </main>
    )
}

export default FlowEditor