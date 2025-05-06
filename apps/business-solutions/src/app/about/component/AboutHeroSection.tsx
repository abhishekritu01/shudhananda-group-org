import React from 'react'

const AboutHeroSection = () => {
    return (
        <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                            Empowering Innovation Across <span className="text-orange-600">Industries</span>
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                        Founded in 2010 as SAS Poorna Arogya Healthcare, SBPL has evolved into a multi-sector enterprise spanning  IT, ITES, US Home Insurance, accounts, data science and more. Today, our ventures include hospitals in India and the Kingdom of Saudi Arabia, pharmaceuticals, hotels, organic farming, sports clubs, and cutting-edge IT / ITES solutions, with a growing team dedicated to excellence in India and the US.
                        </p>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <div className="relative">
                                <img
                                    alt=""
                                    src="/sbplteam/ppa.jpeg"
                                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                        </div>
                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <div className="relative">
                                <img
                                    alt=""
                                     src="/sbplteam/sbpl.JPG"
                                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                            <div className="relative">
                                <img
                                    alt=""
                                     src="/sbplteam/claims_bookrolls.JPG"
                                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg h-44"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                        </div>
                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <div className="relative">
                                <img
                                    alt=""
                                     src="/sbplteam/sbpl.JPG"
                                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg h-44"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                            <div className="relative">
                                <img
                                    alt=""
                                    src ="/sbplteam/Testing.JPG"
                                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg h-44"
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeroSection