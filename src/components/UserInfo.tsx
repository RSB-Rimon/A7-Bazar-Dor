
'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [open, setOpen] = useState(false);

    const hendleSignOut = async () => {
        try {
        await authClient.signOut();
        toast.success("Successfully signed out!");
        setOpen(false);
    } catch (error) {
        toast.error("Sign out failed!");
    }
    };

    return (
        <div className="relative">
            {user ? (
                <div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 transition"
                    >
                        <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>

                        <span className="text-xs font-medium text-gray-700">
                            {user.name}
                        </span>

                        <span className="text-gray-500 text-xs">
                            {open ? "▲" : "▼"}
                        </span>
                    </button>

                    {open && (
                        <div className="absolute right-0 top-11 z-50 w-64 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
                            <div className="p-4 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-800">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1 break-all">
                                    {user.email}
                                </p>
                            </div>

                            <div className="p-2">
                                <Link
                                    href="/profile"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
                                >
                                    <span>👤</span>
                                    <span>আমার প্রোফাইল</span>
                                </Link>

                                <button
                                    onClick={hendleSignOut}
                                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                                >
                                    <span>↪</span>
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href="/sign-up"
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-100 transition"
                    >
                        সাইন আপ
                    </Link>

                    <Link
                        href="/sign-in"
                        className="px-4 py-2 rounded-lg bg-[#05893e] text-white font-medium text-sm hover:bg-[#057b38] shadow-sm transition"
                    >
                        সাইন ইন
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
