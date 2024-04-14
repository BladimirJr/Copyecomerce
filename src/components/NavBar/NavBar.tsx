/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import logo from '@assets/logo.webp'
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'
import { FaSearch, FaShoppingCart, FaCaretDown } from "react-icons/fa";
import { Menu } from '../../utils/datamock';

export default function NavBar() {
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/**upper nabvar */}
            <div className='bg-primary/40 py-2 '>
                <div className='container flex justify-between items-center'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} alt="logo" className='w-10 uppercase' />
                            Shopsy
                        </a>
                    </div>
                    {/**search bar */}
                    <div>
                        <div className='group h-10'>
                            <Input radius='full' type="text" className='w-[200px] h-full  group-hover:w-[230px]  transition-all' endContent={<div className="pointer-events-none flex items-center">
                                <FaSearch />
                            </div>}
                            />
                        </div>
                    </div>
                    {/*order button */}
                    <Badge content="1" color="danger">
                        <Button radius='full' size='sm' startContent={<FaShoppingCart size={'20px'} />} className='bg-gradient-to-r from-primary to-secondary transition-all' />
                    </Badge>
                </div>

            </div>
            {/**lower nabvar */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((item) => (
                        <li>
                            <a key={item.id} className='inline-block px-4 hover:text-primary duration-200' href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li>
                        <Dropdown>
                            <DropdownTrigger>
                            <li className='group relative cursor-pointer'>
                            <a  className='flex items-center gap-[2px] py-2'>Treding Products
                            <span>
                                <FaCaretDown
                                className='transition-all duration-200 group-hover:rotate-180'
                                />
                            </span>
                            </a>
                        </li>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new" color="primary" >New file</DropdownItem>
                                <DropdownItem key="copy" color="primary" >Copy link</DropdownItem>
                                <DropdownItem key="edit" color="primary" >Edit file</DropdownItem>
                                <DropdownItem key="delete"  color="primary">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
}
