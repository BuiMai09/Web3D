import React from "react";
const Nav = () => {
    return (
        <div>
            <nav className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-20 flex items-baseline space-x-4">
                                    <a
                                        href="/"
                                        className=" hover:bg-gray-200 text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Product
                                    </a>
                                    <a
                                        href="/Contact"
                                        className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Nav;
