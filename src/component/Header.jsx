import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import logo from '../assets/logo-full.svg';
import logo_mobile from '../assets/printify-E3TBSF5R.svg';
import Font from 'react-font';

const Header = () => {
    // State to manage side navigation and dropdowns
    const [sideNav, setSideNav] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        services: false,
        usecases: false,
        howItWorks: false,
        needhelp: false,
    });

    // Function to toggle dropdown visibility
    const toggleDropdown = (dropdown) => {
        setDropdowns((prevState) => {
            const newState = {
                services: false,
                usecases: false,
                howItWorks: false,
                needhelp: false,
            };
            newState[dropdown] = !prevState[dropdown];
            return newState;
        });
    };

    // Function to toggle the side navigation
    const handleChange = () => {
        setSideNav(!sideNav);
    };

    return (
        <div>
            <header className="fixed top-0 left-0 w-full lg:py-4 bg-white shadow z-50">
                <div className="flex lg:justify-evenly justify-start items-center ">
                    {/* Hamburger Menu for mobile view */}
                    <RxHamburgerMenu 
                        size={30} 
                       className="cursor-pointer lg:hidden m-4 md:ml-10 text-[#39b75d]"
                        onClick={handleChange} 

                    />
                    <p>happy</p>
                    {/* Logo */}
                    <div className="sm:w-[18%] lg:w-[9%] sm:mr-80 lg:mr-0">
                        <img src={logo} alt='logo' />
                    </div>
                    {/* {mobilw view logo } */}
                    <div className="sm:hidden w-[10%] bg-[#39b75d] mr-16">
                        <img src={logo_mobile} alt='logo' />
                    </div>
                    {/* Navigation Links for larger screens */}
                    <div className="hidden lg:flex items-center justify-around text-[#353a47] gap-8 text-2xl cursor-pointer">
                        <p className="hover:text-[#39b75d] text-[16px]">
                            <Font family='Roboto'>Catalog</Font>
                        </p>
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center" onMouseEnter={() => toggleDropdown('howItWorks')}>
                            <Font family='Roboto'>How it works</Font>
                            {dropdowns.howItWorks ? <IoMdArrowDropup className="ml-1 size-6" /> : <MdOutlineArrowDropDown className="ml-1 size-6" />}
                        </p>
                        {dropdowns.howItWorks && (
                            <div className="absolute bg-white shadow-lg mt-56 mr-96 border" onMouseLeave={() => toggleDropdown('howItWorks')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">How Printify Works</li>
                                        <li className="hover:text-[#39b75d] px-2">Print On Demand</li>
                                        <li className="hover:text-[#39b75d] px-2">Printify Quality Promise</li>
                                        <li className="hover:text-[#39b75d] px-2">What to Sell?</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        {/* Additional links */}
                        <p className="hover:text-[#39b75d] text-[16px]"><Font family='Roboto'>Pricing</Font></p>
                        <p className="hover:text-[#39b75d] text-[16px]"><Font family='Roboto'>Blog</Font></p>
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center" onMouseEnter={() => toggleDropdown('services')}>
                            <Font family='Roboto'>Services</Font>
                            {dropdowns.services ? <IoMdArrowDropup className="ml-1 size-6" /> : <MdOutlineArrowDropDown className="ml-1 size-6" />}
                        </p>
                        {dropdowns.services && (
                            <div className="absolute bg-white shadow-lg mt-64 ml-60 border" onMouseLeave={() => toggleDropdown('services')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Printify Studio</li>
                                        <li className="hover:text-[#39b75d] px-2">Printify Express Delivery</li>
                                        <li className="hover:text-[#39b75d] px-2">Transfer Products</li>
                                        <li className="hover:text-[#39b75d] px-2">Order In Bulk</li>
                                        <li className="hover:text-[#39b75d] px-2">Experts Program</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center" onMouseEnter={() => toggleDropdown('usecases')}>
                            <Font family='Roboto'>Use-cases</Font>
                            {dropdowns.usecases ? <IoMdArrowDropup className="ml-1 size-6" /> : <MdOutlineArrowDropDown className="ml-1 size-6" />}
                        </p>
                        {dropdowns.usecases && (
                            <div className="absolute bg-white shadow-lg mt-56 ml-102 border" onMouseLeave={() => toggleDropdown('usecases')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Merch for Fans</li>
                                        <li className="hover:text-[#39b75d] px-2">Merch for eCommerce</li>
                                        <li className="hover:text-[#39b75d] px-2">Merch for Enterprises</li>
                                        <li className="hover:text-[#9af4b3] px-2">Merch for Store</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center" onMouseEnter={() => toggleDropdown('needhelp')}>
                            <Font family='Roboto'>Need help?</Font>
                            {dropdowns.needhelp ? <IoMdArrowDropup className="ml-1 size-6" /> : <MdOutlineArrowDropDown className="ml-1 size-6" />}
                        </p>
                        {dropdowns.needhelp && (
                            <div className="absolute bg-white shadow-lg mt-48 ml-104 border" onMouseLeave={() => toggleDropdown('needhelp')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Help Center</li>
                                        <li className="hover:text-[#39b75d] px-2">Contacts</li>
                                        <li className="hover:text-[#39b75d] px-2">My Requests</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Login and Sign Up buttons */}
                    <div className="flex gap-5 items-center">
                        <button className='border py-2 px-4 rounded font-semibold tracking-[0.1rem]'>
                            <Font family='Roboto'>Log in</Font>
                        </button>
                        <button className='border py-2 px-4 rounded font-bold text-white bg-[#39b75d] hover:bg-[#3da35a] tracking-[0.1rem]'>
                            <Font family='Roboto'>Sign up</Font>
                        </button>
                    </div>
                </div>
                {/* Side Navigation for mobile view */}
                {sideNav && (
                    <div className="fixed inset-0 z-50">
                    {/* Grey transparent overlay */}
                    <div 
                    className="fixed inset-0 bg-gray-900 opacity-50" 
                    onClick={handleChange} // Close the menu when clicking outside
                    ></div>
                    <div className="lg:hidden absolute top-0 left-0 w-[60%] sm:w-[35%] h-[100vh] bg-white shadow">
                        <div className="flex justify-between p-4 shadow">
                        <p className='font-bold text-[25px] mx-auto'>Menu</p>
                            <RxCross1 size={20} className="cursor-pointer my-auto " onClick={handleChange} />
                        </div>
                        {/* Add your mobile navigation items here */}
                        <div className="flex flex-col p-4 ">
                            <p className="hover:text-[#39b75d] text-[16px] m-2 font-bold">
                            <Font family='Roboto'>Catalog</Font>
                        </p>
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center m-2 font-bold" onMouseEnter={() => toggleDropdown('howItWorks')}>
                            <Font family='Roboto'>How it works</Font>
                            {dropdowns.howItWorks ? <RiArrowDropUpLine className="ml-1 size-6" /> : <RiArrowDropDownLine className="ml-1 size-6" />}
                        </p>
                        {dropdowns.howItWorks && (
                            <div className="relative bg-white mx-auto" onMouseLeave={() => toggleDropdown('howItWorks')}>
                                <ul className="flex flex-col text-[16px] p-2">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">How Printify Works</li>
                                        <li className="hover:text-[#39b75d] px-2">Print On Demand</li>
                                        <li className="hover:text-[#39b75d] px-2">Printify Quality Promise</li>
                                        <li className="hover:text-[#39b75d] px-2">What to Sell?</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        {/* Additional links */}
                        <p className="hover:text-[#39b75d] text-[16px] m-2 font-bold"><Font family='Roboto'>Pricing</Font></p>
                        <p className="hover:text-[#39b75d] text-[16px] m-2 font-bold"><Font family='Roboto'>Blog</Font></p>
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center m-2 font-bold" onMouseEnter={() => toggleDropdown('services')}>
                            <Font family='Roboto'>Services</Font>
                            {dropdowns.services ? <RiArrowDropUpLine className="ml-1 size-6" /> : <RiArrowDropDownLine className="ml-1 size-6" />}
                        </p>
                        {dropdowns.services && (
                            <div className="relative bg-white mx-auto" onMouseLeave={() => toggleDropdown('services')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Printify Studio</li>
                                        <li className="hover:text-[#39b75d] px-2">Printify Express Delivery</li>
                                        <li className="hover:text-[#39b75d] px-2">Transfer Products</li>
                                        <li className="hover:text-[#39b75d] px-2">Order In Bulk</li>
                                        <li className="hover:text-[#39b75d] px-2">Experts Program</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center m-2 font-bold" onMouseEnter={() => toggleDropdown('usecases')}>
                            <Font family='Roboto'>Use-cases</Font>
                            {dropdowns.usecases ? <RiArrowDropUpLine className="ml-1 size-6" /> : <RiArrowDropDownLine className="ml-1 size-6" />}
                        </p>
                        {dropdowns.usecases && (
                            <div className="relative bg-white mx-auto" onMouseLeave={() => toggleDropdown('usecases')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Merch for Fans</li>
                                        <li className="hover:text-[#39b75d] px-2">Merch for eCommerce</li>
                                        <li className="hover:text-[#39b75d] px-2">Merch for Enterprises</li>
                                        <li className="hover:text-[#9af4b3] px-2">Merch for Store</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        <p className="hover:text-[#39b75d] text-[16px] flex items-center m-2 font-bold" onMouseEnter={() => toggleDropdown('needhelp')}>
                            <Font family='Roboto'>Need help?</Font>
                            {dropdowns.needhelp ? <RiArrowDropUpLine className="ml-1 size-6" /> : <RiArrowDropDownLine className="ml-1 size-6" />}
                        </p>
                        {dropdowns.needhelp && (
                            <div className="relative bg-white mx-auto" onMouseLeave={() => toggleDropdown('needhelp')}>
                                <ul className="flex flex-col text-[16px] p-4">
                                    <Font family='Roboto'>
                                        <li className="hover:text-[#39b75d] px-2">Help Center</li>
                                        <li className="hover:text-[#39b75d] px-2">Contacts</li>
                                        <li className="hover:text-[#39b75d] px-2">My Requests</li>
                                    </Font>
                                </ul>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;
