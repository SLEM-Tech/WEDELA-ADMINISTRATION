"use client";
import React, { useEffect, useRef, useState } from "react";

import Picture from "../picture/Picture";
import { useCategories, WooCommerce } from "../lib/woocommerce";
import ProductCard from "../Cards/ProductCard";
import HomeCard from "../Cards/HomeCard";
import Carousel from "../Reusables/Carousel";
import Link from "next/link";
import { convertToSlug, convertToSlug2 } from "@constants";
import { useEncryptionHelper } from "../EncryptedData";
import { useDispatch } from "react-redux";
import { updateCategorySlugId } from "../config/features/subCategoryId";
import { usePathname, useRouter } from "next/navigation";
import {
	heroImage,
	highestImage,
	iphoneImage,
	phoneSample,
} from "@public/images";
import { ImSpinner2 } from "@node_modules/react-icons/im";
import { FiSearch } from "@node_modules/react-icons/fi";

const AllCategorySection = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [maxScrollTotal, setMaxScrollTotal] = useState(0);
	const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	// State to hold products by category
	const [categoryProductsMap, setCategoryProductsMap] = useState<{
		[key: string]: ProductType[];
	}>({});
	// WooCommerce API Category
	const {
		data: categories,
		isLoading: categoryWpIsLoading,
		isError: categoryIsError,
	} = useCategories("");

	const Categories: CategoryType[] = categories;
	const TotalCatgory = Categories?.length - 1;

	useEffect(() => {
		const fetchCategoryProducts = async () => {
			try {
				setIsLoading(true);

				const filteredCategories = categories
					?.filter((category: CategoryType) => category?.count > 0)
					?.slice(0, 5);

				if (filteredCategories) {
					const productsPromises = filteredCategories.map(
						async (category: CategoryType) => {
							const response = await WooCommerce.get(
								`products?category=${category?.id}`,
							);

							// Check if there is at least one product in the category
							const firstProductImage =
								response?.data.length > 0
									? response?.data[0]?.images[0]?.src
									: null;

							return {
								categoryId: category?.id,
								firstProductImage: firstProductImage, // Store the first product's image
							};
						},
					);

					const productsResults = await Promise.all(productsPromises);

					// Update the state with the first product images mapped by category
					const productsMap = productsResults.reduce(
						(acc: any, result: any) => ({
							...acc,
							[result.categoryId]: result.firstProductImage,
						}),
						{},
					);

					setCategoryProductsMap(productsMap);
				}
			} catch (error) {
				console.error("Error fetching category products:", error);
			} finally {
				setIsLoading(false);
			}
		};

		if (categories?.length) {
			fetchCategoryProducts();
		}
	}, [categories]);

	const handleNext = () => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
			const maxScroll = scrollWidth - clientWidth;
			setScrollLeftTotal(scrollLeft);
			setMaxScrollTotal(maxScroll);

			sliderRef.current.scrollLeft += 600; // Adjust the scroll distance as needed
			setCurrentIndex((prevIndex) =>
				prevIndex < TotalCatgory - 1 ? prevIndex + 1 : prevIndex,
			);
		}
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
			const maxScroll = scrollWidth - clientWidth;
			setScrollLeftTotal(scrollLeft);
			setMaxScrollTotal(maxScroll);
			// console.log(scrollLeft);
			if (scrollLeft > 0) {
				sliderRef.current.scrollLeft -= 600; // Adjust the scroll distance as needed
				setCurrentIndex((prevIndex) =>
					prevIndex > 0 ? prevIndex - 1 : prevIndex,
				);
			}
		}
	};

	// const handleCategoryClick = (index: number) => {
	// 	const categorySlugId = `${
	// 		convertToSlug(Categories[index]?.name) + "-" + Categories[index]?.id
	// 	}`;
	// 	dispatch(updateCategorySlugId({ categorySlugId }));
	// 	router.push(
	// 		`/category/${
	// 			convertToSlug(Categories[index]?.name) + "-" + Categories[index]?.id
	// 		}`,
	// 	);
	// };

	return (
		<>
			<section className='flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-10 items-center px-6 gap-6 min-h-screen bg-white relative overflow-hidden'>
				{/* LEFT TEXT CONTENT */}
				<div className='lg:col-span-4 z-10 text-black space-y-2 lg:space-y-4 h-full flex flex-col justify-center'>
					<h3 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight md:leading-8'>
						Grab{" "}
						<span className='inline-block bg-primary text-white px-4 py-1 rounded-md text-3xl md:text-4xl lg:text-5xl font-bold transform -rotate-2'>
							50%
						</span>{" "}
						<br />
						Off Smartphone Collection
					</h3>

					<p className='text-base md:text-lg lg:text-xl leading-7 text-gray-600 max-w-md'>
						Upgrade to the latest models with premium features at half the
						price. Limited stock available - shop now before they're gone!
					</p>

					<div className='flex items-center gap-2 lg:gap-4 pt-2 lg:pt-4'>
						<Picture
							src={phoneSample}
							alt='phone sample'
							className='size-16 lg:size-24 rounded-xl object-contain'
						/>
						<div>
							<p className='text-lg lg:text-xl font-semibold'>Latest Phones</p>
						</div>
					</div>
				</div>

				{/* RIGHT IMAGE CONTENT */}
				<div className='lg:col-span-6 relative flex justify-center lg:justify-end items-center h-full'>
					{/* Optional background gradient or shadow */}
					<div className='absolute top-10 lg:-top-10 -left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary-500 via-primary to-orange-500 opacity-20 blur-2xl z-0'></div>

					{/* Main phone image */}
					<Picture
						src={iphoneImage}
						alt='iPhone'
						className='relative z-10 w-[80%] lg:w-[50%] object-cover object-center'
					/>

					{/* Label tags */}
					<Picture
						src={highestImage}
						alt='highest'
						className='absolute bottom-10 lg:bottom-40 left-20 lg:left-96 z-10 object-contain w-[80px] lg:w-[150px]'
					/>
				</div>
			</section>
			<div className='w-full space-y-4 lg:space-y-8 mt-8 lg:mt-0'>
				<h3 className='font-bold text-2xl sm:text-4xl md:text-5xl text-center tracking-tight'>
					What <span className='text-primary'>we</span> provide?
				</h3>
				<div
					className='flex w-full justify-center gap-1 sm:gap-12 overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar'
					ref={sliderRef}
				>
					{Categories?.map((category: CategoryType) => {
						const productImage: any = categoryProductsMap[category?.id]; // Fetch the first product image

						// Only show categories that have a product image
						if (productImage) {
							return (
								<>
									<HomeCard
										key={category?.id}
										id={category?.id.toString()}
										image={productImage} // Use the first product image
										name={category?.name}
									/>
								</>
							);
						}

						return null;
					})}
				</div>
			</div>
		</>
	);
};

export default AllCategorySection;
