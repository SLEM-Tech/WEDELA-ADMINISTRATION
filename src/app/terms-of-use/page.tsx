"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto m-28 lg:mt-32 pb-12 lg:pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						Wedela Administration Global Investment Ltd Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-black/80 sm:max-w-3xl slg:max-w-2xl'>
						At Wedela Administration Global Investment Ltd, we excel in import
						and export operations, supply premium general goods and digital
						equipment while serving as manufacturers' representatives with
						comprehensive contract services and global trade solutions.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Delivery & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - Wedela Administration Global Investment Ltd
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By engaging Wedela Administration Global Investment Ltd for
								import/export services, digital equipment supply, manufacturers'
								representative services, or general contracts, you agree to the
								following comprehensive terms and conditions:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										Global Import & Export Services:
									</span>{" "}
									Wedela Administration specializes in comprehensive import and
									export operations including customs clearance, international
									shipping coordination, documentation handling, regulatory
									compliance, and cross-border trade facilitation. We maintain
									partnerships with global suppliers and distributors across
									multiple continents.
								</li>
								<li>
									<span className='font-medium'>Digital Equipment Supply:</span>{" "}
									Our digital equipment portfolio includes computers, mobile
									devices, audio/visual equipment, telecommunications hardware,
									industrial automation systems, and emerging technology
									products. All equipment comes with international warranties
									and technical support coordination.
								</li>
								<li>
									<span className='font-medium'>
										Manufacturers' Representative Services:
									</span>{" "}
									As authorized representatives for international manufacturers,
									we provide market entry assistance, local distribution
									networks, technical support coordination, warranty service
									facilitation, and regulatory compliance support for foreign
									brands entering Nigerian markets.
								</li>
								<li>
									<span className='font-medium'>General Goods Trading:</span> We
									source and supply diverse general goods including consumer
									products, industrial materials, specialty items, and bulk
									commodities. Our global supplier network ensures competitive
									pricing, quality assurance, and reliable delivery schedules.
								</li>
								<li>
									<span className='font-medium'>
										International Trade Compliance:
									</span>{" "}
									All import/export operations comply with Nigerian customs
									regulations, international trade laws, and destination country
									requirements. We handle documentation including commercial
									invoices, bills of lading, certificates of origin, and
									regulatory compliance certificates.
								</li>
								<li>
									<span className='font-medium'>Currency & Payment Terms:</span>{" "}
									International transactions are processed in multiple
									currencies with competitive exchange rates. Payment methods
									include letters of credit, wire transfers, and trade financing
									options. Currency hedging available for large transactions to
									manage exchange rate risks.
								</li>
								<li>
									<span className='font-medium'>Shipping & Logistics:</span> We
									coordinate international shipping via sea freight, air
									freight, and land transportation with comprehensive tracking
									and insurance coverage. Delivery terms include FOB, CIF, DDP,
									and other Incoterms as specified in agreements.
								</li>
								<li>
									<span className='font-medium'>
										Quality Assurance & Inspection:
									</span>{" "}
									Pre-shipment inspection services available for all imported
									goods. Quality control includes factory audits, product
									testing, and compliance verification. Third-party inspection
									services coordinated when required by customers or
									regulations.
								</li>
								<li>
									<span className='font-medium'>
										General Contract Obligations:
									</span>{" "}
									Contract services include project management, timeline
									coordination, milestone delivery, and quality assurance across
									diverse industries. We maintain professional liability
									insurance and performance bonds for large contract
									engagements.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Risk Management:</span>{" "}
								International trade insurance covers goods in transit, political
								risks, and commercial disputes. We maintain relationships with
								trade finance institutions and provide guidance on international
								payment risks.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Regulatory Updates:</span> We
								monitor changes in international trade regulations, customs
								procedures, and import/export requirements, providing updates
								and compliance guidance to clients as regulations evolve.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - WEDELA ADMINISTRATION GLOBAL INVESTMENT LTD
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Wedela Administration Global Investment Ltd is committed to
								protecting confidential business information while providing
								international trade services, equipment supply, and global
								business solutions. This policy explains our data practices for
								international commerce and trade operations.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								INTERNATIONAL TRADE DATA COLLECTION
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									Business entity information (company registration, trade
									licenses, financial credentials)
								</li>
								<li>
									International shipping and logistics data including origin,
									destination, and cargo details
								</li>
								<li>
									Customs documentation and regulatory compliance information
									for trade facilitation
								</li>
								<li>
									Payment processing data for international transactions and
									currency exchanges
								</li>
								<li>
									Supplier and manufacturer relationship data for representative
									services
								</li>
								<li>
									Product specifications and quality assurance records for
									imported/exported goods
								</li>
								<li>
									Contract service requirements and project management data
								</li>
								<li>
									Market analysis and competitive intelligence for business
									development
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								GLOBAL BUSINESS DATA USAGE
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To facilitate international import and export operations and
									customs clearance
								</li>
								<li>
									To coordinate global supply chains and logistics for efficient
									trade execution
								</li>
								<li>
									To represent manufacturers in local markets and provide
									distribution services
								</li>
								<li>
									To process international payments and manage currency exchange
									transactions
								</li>
								<li>
									To ensure regulatory compliance across multiple jurisdictions
									and trade agreements
								</li>
								<li>
									To maintain quality standards and coordinate product
									inspections
								</li>
								<li>
									To develop strategic partnerships and expand global business
									networks
								</li>
								<li>
									To provide market intelligence and competitive analysis for
									business decisions
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								INTERNATIONAL DATA SECURITY PROTOCOLS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement international-grade security measures including
								encrypted communications for sensitive trade data, secure
								document storage for compliance records, and restricted access
								protocols for confidential business information. Cross-border
								data transfers comply with international privacy regulations and
								trade agreements. Financial transaction data is protected
								through banking-level security systems.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								GLOBAL PARTNER & REGULATORY DATA SHARING
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Trade documentation is shared with customs authorities, shipping
								companies, and regulatory agencies as required for international
								commerce. Manufacturer partnership data is shared with
								principals under strict confidentiality agreements. Financial
								institutions receive necessary information for trade finance and
								payment processing. All sharing complies with international
								trade regulations and privacy requirements.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CLIENT CONTROL & TRADE CONFIDENTIALITY
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Business clients have access to their trade records, shipping
								documentation, and transaction history. Proprietary business
								information is protected under non-disclosure agreements. Market
								intelligence and competitive data is anonymized when shared for
								industry analysis. For international trade privacy inquiries and
								data access requests, contact privacy@wedelaglobal.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								INTERNATIONAL DELIVERY & TRADE POLICY - WEDELA ADMINISTRATION
								GLOBAL INVESTMENT
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Wedela Administration Global Investment Ltd provides
								comprehensive international trade solutions with reliable
								delivery services, customs clearance support, and quality
								assurance across global supply chains to ensure successful
								international commerce operations.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									International Shipping & Logistics
								</h4>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Import Operations
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Sea freight: 15-45 days depending on origin country
											</li>
											<li>
												Air freight: 3-10 days for urgent or high-value
												shipments
											</li>
											<li>
												Customs clearance coordination with full documentation
												support
											</li>
											<li>
												Port handling and inland transportation to final
												destination
											</li>
										</ul>
									</div>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Export Operations
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>Export documentation and compliance verification</li>
											<li>Quality inspection and certification coordination</li>
											<li>International shipping arrangement and tracking</li>
											<li>Destination country customs support and delivery</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Digital Equipment & Technology Supply
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Direct manufacturer sourcing with authentic product
										guarantees
									</li>
									<li>
										Technical specifications verification and compatibility
										confirmation
									</li>
									<li>
										Bulk ordering and volume pricing for business customers
									</li>
									<li>
										Professional installation and setup services available
									</li>
									<li>
										Warranty registration and international support coordination
									</li>
									<li>
										Technology refresh programs and equipment upgrading services
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Customs & Regulatory Compliance
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Complete customs documentation preparation and submission
									</li>
									<li>Duty and tax calculation with optimization strategies</li>
									<li>
										Regulatory compliance verification for all product
										categories
									</li>
									<li>
										Import/export license coordination and renewal assistance
									</li>
									<li>
										Trade agreement utilization for preferential duty rates
									</li>
									<li>
										Customs audit support and compliance verification services
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Quality Assurance & Risk Management
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Pre-Shipment Services:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>Factory inspection and quality audit coordination</li>
											<li>Product testing and certification verification</li>
											<li>Packaging and shipping preparation oversight</li>
											<li>Documentation review and compliance confirmation</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Insurance & Protection:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Comprehensive cargo insurance for goods in transit
											</li>
											<li>Political risk insurance for volatile markets</li>
											<li>
												Trade credit insurance for international payment
												protection
											</li>
											<li>Performance bonds for large contract obligations</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Manufacturers' Representative Services
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Local market analysis and entry strategy development</li>
									<li>Distribution network establishment and management</li>
									<li>Technical support and training program coordination</li>
									<li>Warranty service and after-sales support facilitation</li>
									<li>Marketing and promotional campaign development</li>
									<li>Regulatory approval and certification assistance</li>
								</ul>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									International Trade Contact
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Import Operations: imports@wedelaglobal.com.ng</li>
									<li>Export Services: exports@wedelaglobal.com.ng</li>
									<li>Equipment Supply: equipment@wedelaglobal.com.ng</li>
									<li>Manufacturers' Rep: manufacturing@wedelaglobal.com.ng</li>
									<li>Phone: �801-234-5011</li>
									<li>Website: www.wedelaglobal.com.ng</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - WEDELA ADMINISTRATION GLOBAL INVESTMENT LTD
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At Wedela Administration Global Investment Ltd, we are committed
								to delivering exceptional international trade services, quality
								equipment supply, and reliable global business solutions. Our
								comprehensive refund policy addresses the complexities of
								international commerce while ensuring fair treatment for all
								parties.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. Import/Export Service Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Full service fee refund if shipment cannot be cleared
											through customs due to our documentation errors
										</li>
										<li>
											Prorated refunds for incomplete logistics services due to
											our service failures
										</li>
										<li>
											Customs clearance fee refunds for incorrect duty
											calculations or procedure errors
										</li>
										<li>
											Shipping coordination refunds if alternative arrangements
											must be made due to our booking errors
										</li>
										<li>
											Documentation service refunds for errors that cause
											shipment delays or rejections
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Digital Equipment Supply Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											30-day refund for equipment that doesn't meet published
											specifications
										</li>
										<li>
											Full refund for counterfeit or non-authentic equipment
											with immediate replacement
										</li>
										<li>
											Compatibility refund if equipment cannot integrate with
											existing systems as promised
										</li>
										<li>
											Bulk order refunds for quantities not meeting agreed
											quality standards
										</li>
										<li>
											International warranty claim support with manufacturer
											coordination at no cost
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. Manufacturers' Representative Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Market entry service refunds if promised market access
											cannot be achieved
										</li>
										<li>
											Distribution setup refunds for networks that don't meet
											agreed coverage requirements
										</li>
										<li>
											Regulatory approval refunds if certifications cannot be
											obtained due to our service failures
										</li>
										<li>
											Technical support coordination refunds for inadequate
											manufacturer liaison services
										</li>
										<li>
											Marketing campaign refunds for promotional activities not
											meeting agreed scope
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										4. International Trade Risk Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Force majeure refunds for services impossible to deliver
											due to political instability
										</li>
										<li>
											Regulatory change refunds when new laws prevent completion
											of agreed services
										</li>
										<li>
											Currency fluctuation protection for contracts with hedging
											provisions
										</li>
										<li>
											Shipping disruption refunds for alternative routing costs
											exceeding agreed terms
										</li>
										<li>
											Insurance claim assistance for covered losses during
											international transit
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										5. Non-Refundable International Services
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Successfully completed customs clearance and documentation
											services
										</li>
										<li>
											Equipment delivered and accepted according to agreed
											specifications
										</li>
										<li>
											Market analysis and consulting services delivered within
											agreed scope
										</li>
										<li>
											Third-party costs including shipping, insurance, and
											government fees already incurred
										</li>
										<li>
											Services cancelled by client after international
											commitments have been made
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. International Refund Process
									</span>
									<p className='mt-1'>
										To request refunds for international trade services:
									</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@wedelaglobal.com.ng</li>
										<li>International Hotline: �801-234-5011</li>
										<li>
											Provide complete documentation including contracts,
											shipping papers, and correspondence
										</li>
										<li>
											Include third-party verification for equipment quality or
											service delivery issues
										</li>
										<li>
											Submit formal claim with timeline of events and financial
											impact assessment
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Multi-Jurisdictional Assessment
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											International trade law review for complex cross-border
											refund situations
										</li>
										<li>
											Third-party arbitration services for disputed
											international transactions
										</li>
										<li>
											Currency conversion and exchange rate impact analysis for
											refund calculations
										</li>
										<li>
											Regulatory compliance verification for refund processing
											requirements
										</li>
										<li>
											Insurance claim coordination for covered risks and trade
											disruptions
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										8. Alternative Global Solutions
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Service credits applicable to future international trade
											transactions
										</li>
										<li>
											Alternative supplier sourcing at no additional cost for
											equipment issues
										</li>
										<li>
											Extended service agreements and enhanced support as
											compensation
										</li>
										<li>
											Priority handling for future shipments and trade
											documentation
										</li>
										<li>
											Preferred client status with enhanced service terms and
											conditions
										</li>
									</ul>
								</li>
							</ul>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For international trade refunds and resolution:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Wedela Administration Global Investment Ltd</li>
									<li>Email: refunds@wedelaglobal.com.ng</li>
									<li>Trade Services: trade@wedelaglobal.com.ng</li>
									<li>Phone: �801-234-5011</li>
									<li>Website: www.wedelaglobal.com.ng</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
