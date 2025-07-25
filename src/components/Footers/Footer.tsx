"use client";
import React from "react";
import * as Iconbi from "react-icons/bi";
import { motion } from "framer-motion";
import FooterCard from "../Cards/FooterCard";
import Link from "next/link";
import { ChatServiceIconSvg, FileIconSvg, RocketIconSvg } from "../SvgIcons";
import useToken from "../hooks/useToken";
import { signOut } from "@utils/lib";
import { CompanyName, filterCustomersByEmail } from "@constants";
import { useCustomer } from "../lib/woocommerce";
import { LogoImage } from "@utils/function";

interface footerDataProps {
	title: string;
	links: {
		label: string;
		href: string;
		function?: () => void;
	}[];
}

const Footer = () => {
	const { email } = useToken();
	const currentYear = new Date().getFullYear();
	const { data: customer, isLoading, isError } = useCustomer("");
	const wc_customer2_info: Woo_Customer_Type[] = customer;
	const wc_customer_info: Woo_Customer_Type | undefined =
		filterCustomersByEmail(wc_customer2_info, email);
	const firstName = wc_customer_info?.first_name;
	const footer1socialMediaIcons = [
		{
			id: 1,
			icon: <Iconbi.BiLogoFacebook className='text-lg text-white' />,
			link: "http://facebook.com",
			backgroundColor: "bg-[#365493]",
		},
		// {
		// 	id: 2,
		// 	icon: <Iconbi.BiLogoTwitter className='text-lg text-white' />,
		// 	link: "#",
		// 	backgroundColor: "bg-[#3CF]",
		// },
		{
			id: 3,
			icon: <Iconbi.BiLogoLinkedin className='text-lg text-white' />,
			link: "http://instagram.com",
			backgroundColor: "bg-[#0274B3]",
		},
	];

	const footerCardData = [
		{
			icon: <RocketIconSvg />,
			name: "Delivery Assistance",
			description: "Seller Online Delivery",
		},
		{
			icon: <FileIconSvg />,
			name: "Secure Purchase",
			description: "100% Secure Payment",
		},
		{
			icon: <ChatServiceIconSvg />,
			name: "Unmatched Service",
			description: "Dedicated Support",
		},
	];

	const footerData: footerDataProps[] = [
		{
			title: "Account",
			links: [
				{
					label: firstName ? "Update Account" : "Create Account",
					href: firstName ? "/user/account-details" : "/user/register",
				},
				{
					label: firstName ? "Log Out" : "Login",
					href: firstName ? "" : "/user/login",
					function: firstName ? signOut : () => {},
				},
				{
					label: firstName ? "Change Password" : "Forget Password",
					href: firstName ? "/user/change-password" : "/user/forget-password",
				},
			],
		},
		{
			title: "Information",
			links: [
				{ label: "FAQ", href: "/faq" },
				{ label: "Support", href: "/contact-us" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Terms of Use", href: "/terms-of-use?terms-of-use" },
				{ label: "Privacy Policy", href: "/terms-of-use?privacy-policy" },
				{ label: "Delivery & Shipping", href: "/terms-of-use?delivery-return" },
				{ label: "Refund Policy", href: "/terms-of-use?refund-policy" },
			],
		},
	];

	const productCards = footerCardData.map((item, index) => (
		<FooterCard
			key={index}
			icon={item.icon}
			name={item.name}
			description={item.description}
			borderRight={index !== footerCardData.length - 1}
		/>
	));

	const staggerDelay = 0.2;

	return (
		<footer className='bg-white w-full border-t border-gray-100'>
			{/* Main Footer Content */}
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* Top Section - Logo, Links, Newsletter */}
				<div className='grid grid-cols-2 gap-8 py-4 lg:py-12 md:grid-cols-2 lg:grid-cols-5'>
					{/* Brand Info */}
					<div className='space-y-4'>
						<LogoImage className='h-10 w-auto' />
						<p className='text-gray-600 text-xs lg:text-sm'>
							The best e-commerce store for your needs!
						</p>
					</div>
					<div className='' />

					{/* Navigation Links */}
					{footerData.map((section, index) => (
						<div key={index} className='space-y-4'>
							<h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider'>
								{section.title}
							</h3>
							<ul className='space-y-2'>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href={link.href}
											className='text-sm text-gray-600 hover:text-primary transition-colors'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Divider */}
				<div className='border-t border-primary/60'></div>

				{/* Bottom Section - Copyright, Payment Methods */}
				<div className='py-1.5 lg:py-3 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-xs text-gray-500'>
						&copy; {currentYear} {CompanyName}. All rights reserved.
					</p>

					{/* Payment Methods */}
					<div className='mt-2 md:mt-0 flex space-x-4'>
						{/* Social Media */}
						<div className='flex space-x-2 lg:space-x-4'>
							{footer1socialMediaIcons.map((item, index) => (
								<motion.a
									href={item.link}
									key={index}
									whileHover={{ y: -2, scale: 1.1 }}
									className={`p-2 rounded-full ${item.backgroundColor} transition-all duration-300`}
								>
									{item.icon}
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
