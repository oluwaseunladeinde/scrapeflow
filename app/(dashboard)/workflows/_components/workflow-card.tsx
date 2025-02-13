'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Workflow } from '@prisma/client';
import { FileText, MoreVertical, Play, Shuffle, Trash } from 'lucide-react';

import { WorkflowStatus } from '@/types/workflow';

import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { TooltipWrapper } from '@/components/tooltip-wrapper';
import { useState } from 'react';
import { DeleteWorkflowDialog } from './delete-workflow-dialog';


interface WorkflowCardProps {
    workflow: Workflow;
}

const statusColors = {
    [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorkflowStatus.PUBLISHED]: "bg-primary"
}
export const WorkflowCard = ({ workflow }: WorkflowCardProps) => {
    const isDraft = workflow.status === WorkflowStatus.DRAFT;

    return (
        <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30 '>
            <CardContent className='p-4 flex items-center justify-between h-[100px]'>
                <div className='flex items-center justify-end space-x-3'>
                    <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        statusColors[workflow.status as WorkflowStatus]
                    )}>
                        {isDraft ? <FileText className='h-5 w-5' /> : <Play className='h-5 w-5 text-white' />}
                    </div>
                    <div className="">
                        <h3 className='text-base font-bold text-muted-foreground flex items-center '>
                            <Link href={`/workflow/editor/${workflow.id}`} className='flex items-center hover:underline'>
                                {workflow.name}
                            </Link>
                            {isDraft && (<span className='ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full '>Draft</span>)}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Link
                        href={`/workflow/editor/${workflow.id}`}
                        className={cn(
                            buttonVariants({
                                variant: "outline",
                                size: "sm",
                            }),
                            "flex items-center gap-2"
                        )}
                    >
                        <Shuffle size={16} />
                        Edit
                    </Link>
                    <WorkflowActions workflow={workflow} />
                </div>
            </CardContent>
        </Card>
    )
};

export const WorkflowActions = ({ workflow }: WorkflowCardProps) => {

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    return (
        <>
            <DeleteWorkflowDialog
                open={showDeleteDialog}
                setOpen={setShowDeleteDialog}
                workflowName={workflow.name}
                workflowId={workflow.id}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"} size={"sm"}>
                        <TooltipWrapper content={"More actions"}>
                            <div className="flex items-center justify-center w-fullh-full">
                                <MoreVertical size={18} />
                            </div>
                        </TooltipWrapper>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className='text-destructive flex items-center gap-2'
                        onSelect={() => setShowDeleteDialog((prev) => !prev)}
                    >
                        <Trash size={16} />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
