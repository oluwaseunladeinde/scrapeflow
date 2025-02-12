"use client";

import { usePathname } from 'next/navigation';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    //BreadcrumbSeparator
} from './ui/breadcrumb';
import { Fragment } from 'react';
import { MobileSidebar } from './sidebar';

const BreadcrumbHeader = () => {
    const pathName = usePathname();
    const paths = pathName === "/" ? [""] : pathName?.split("/")
    return (
        <div className='flex items-center flex-start'>
            <MobileSidebar />
            <Breadcrumb>
                <BreadcrumbList>
                    {paths.map((path, index) => (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='capitalize' href={`/${path}`}>
                                    {path === "" ? "home" : ""}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbHeader;
