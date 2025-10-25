//@ts-nocheck
import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import ContactCards from "./contact-us/_components/ContactCards";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
	title: title,
	description: description,
	icons: SEODATA.defaultOGImage,
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

const page = () => {
	return (
		
		<AppLayout className="className='pt-10 mx-auto max-w-[1256px] mt-36 lg:mt-14 pb-10 lg:pb-20">
			<AllCategorySection />
			<div className='mt-4 sm:mt-10'>
				<SortedProducts />
			</div>

			<section className='bg-white mx-auto w-full pt-'>
				<h3 className='font-semibold text-xl sm:text-2xl slg:text-3xl tracking-tighter text-center mt-10'>
					Contact Us
				</h3>

				<div className='flex flex-wrap w-full justify-center gap-8 mt-10 px-4 slg:px-0'>
					<ContactCards />
				</div>
			</section>
		</AppLayout>
	);
};

export default page;
