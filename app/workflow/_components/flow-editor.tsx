"use client";

import { CreateFlowNode } from '@/lib/workflow/create-flow-node';
import { TaskType } from '@/types/task';
import { Workflow } from '@prisma/client';
import { Background, BackgroundVariant, Controls, ReactFlow, useNodesState } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import NodeComponent from './nodes/node-component';

const nodeTypes = {
    FlowScrapeNode: NodeComponent,
};

const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

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
                snapToGrid
                fitView
                snapGrid={snapGrid}
                fitViewOptions={fitViewOptions}
            >
                <Controls position='top-left' fitViewOptions={fitViewOptions} />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </main>
    )
}

export default FlowEditor