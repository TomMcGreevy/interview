'use client'
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from '@/hooks/use-media-query';
import { NavItem } from '@/types/navigation';
import MenuIcon from '@mui/material/Menu';

type HeaderProps = {
    items: Array<NavItem>;
}
const Header: FC<HeaderProps> = ({ items }: HeaderProps) => {
    const isMobile = useMediaQuery("(max-width: 1024px)");

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {isMobile ?
                    (
                        <>
                            <NavigationMenuItem key={0} className='min-w-96'>
                                <Link href={items[0].href} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {items[0].logo ? <Image src={items[0].logo} width={200} height={38} alt="logo" /> : items[0].title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem key={1}>
                                <NavigationMenuTrigger><MenuIcon open={false} /></NavigationMenuTrigger>
                                <NavigationMenuContent className={"flex flex-col gap-y-4 w-screen"}>
                                    {items?.length && items?.map((item, index) => (
                                        <Link href={item.href} legacyBehavior passHref key={index} >
                                            <NavigationMenuLink className='pl-5 border-b border-neutral-200 pb-2.5'>
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </>

                    )
                    : (
                        items?.length && items?.map((item, index) => (
                            <NavigationMenuItem key={index} className={!index ? `lg:min-w-96 2xl:min-w-full` : ""}>
                                <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={`${!!item.button ? "px-7 bg-orange-500 text-white hover:bg-orange-600 hover:text-white focus:text-white " : ""} ${navigationMenuTriggerStyle()}`}>
                                        {item.logo ? <Image src={item.logo} width={200} height={38} alt="logo" /> : item.title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))
                    )
                }
            </NavigationMenuList>
        </NavigationMenu >
    );
}
export default Header;