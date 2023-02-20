import React from 'react'

export default function ProductCollections() {
    return (
        <div class="bg-slate-100">
            <section class="text-black body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="flex flex-wrap -mx-14 -m-4">
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-4/5 rounded overflow-hidden">
                                <img src="./images/kurti.jpg" alt="ecommerce" class="object-cover object-center w-full h-full block" />
                            </a>
                            <div class="mt-4">
                                {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
                                <label class="bg-blue-500 text-2xl p-2 text-white font-semibold">8% OFF</label>
                                <label class="bg-orange-500 text-2xl p-2 text-white font-semibold">Deal Of The Day</label>
                                <h2 class="text-black title-font font-bold text-3xl">The Great Wave Of Coffee</h2>
                                <h2 class="text-gray-600 title-font  text-xl">Design by GloopZ</h2>
                                <span class="mt-1 line-through text-2xl">₹320</span>
                                <span class="mx-3 text-2xl font-bold">₹250</span>
                            </div>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-4/5 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="./images/shirt.jpg" />
                            </a>
                            <div class="mt-4">
                                <label class="bg-blue-500 text-2xl p-2 text-white font-semibold">15% OFF</label>
                                <label class="bg-orange-500 text-2xl p-2 text-white font-semibold">Best Selling</label>
                                <h2 class="text-black title-font font-bold text-3xl">The Great Wave Of Coffee</h2>
                              
                                <h2 class="text-gray-600 title-font  text-xl">Design by GloopZ</h2>
                                <span class="mt-1 line-through text-2xl">₹700</span>
                                <span class="mx-3 text-2xl font-bold">₹590</span>
                            </div>
                        </div>
                       
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-4/5 rounded overflow-hidden" href='/singleproduct'>
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="./images/hoodie.png"/>
                            </a>
                            <div class="mt-4">
                                <label class="bg-blue-500 text-2xl p-2 text-white font-semibold">15% OFF</label>
                                <h2 class="text-black title-font font-bold text-3xl">The Great Wave Of Coffee</h2>
                                <h2 class="text-gray-600 title-font  text-xl">Design by GloopZ</h2>
                                <span class="mt-1 line-through text-2xl">₹799</span>
                                <span class="mx-3 text-2xl font-bold">₹649</span>
                            </div>
                        </div>
                      
                     
                        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-4/5 rounded overflow-hidden" href='/singleproduct'>
                                <img src="./images/OptimistPrime.jpeg" alt="ecommerce" class="object-cover object-center w-full h-full block" />
                            </a>
                            <div class="mt-4">
                                <label class="bg-blue-500 text-2xl p-2 text-white font-semibold">12% OFF</label>
                                <label class="bg-orange-500 text-2xl p-2 text-white font-semibold">Limited Time Deal</label>
                                <h2 class="text-black title-font font-bold text-3xl">The Great Wave Of Coffee</h2>
                                <h2 class="text-gray-600 title-font  text-xl">Design by GloopZ</h2>
                                <span class="mt-1 line-through text-2xl">₹799</span>
                                <span class="mx-3 text-2xl font-bold">₹649</span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </section>
        </div>
    )
}
