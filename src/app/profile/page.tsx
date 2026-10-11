
'use client'

import { authClient } from "@/lib/auth-client";

const ProfilePages = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleUpateUserInfo = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newData = Object.fromEntries(formData.entries()) as {
            name: string;
        };

        await authClient.updateUser({
            ...newData
        });
    };

    return (
        <div className="min-h-screen bg-[#f0f5f0] py-10 px-4">
            <div className="max-w-[650px] mx-auto">

                {/* Heading */}
                <div className="mb-5">
                    <h2 className="text-xl font-bold text-gray-800">
                        আমার প্রোফাইল
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        আপনার ব্যক্তিগত তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Information */}
                <div className="bg-white/80 border border-gray-200 rounded-xl p-4 mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                            <span className="text-xl font-bold text-gray-600">
                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </span>
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-gray-800">
                                {user?.name || "User"}
                            </h3>
                            <p className="text-xs text-gray-500 truncate">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="text-xs text-red-500 border border-red-300 rounded-md px-3 py-2 shrink-0"
                    >
                       ↩ সাইন আউট
                    </button>
                </div>

                {/* Update Profile Form */}
                <div className="bg-white/80 border border-gray-200 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">
                        তথ্য
                    </h3>

                    <form onSubmit={handleUpateUserInfo}>
                        <label
                            htmlFor="name"
                            className="block text-xs text-gray-700 mb-2"
                        >
                            নাম
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user?.name || ""}
                            placeholder="আপনার নাম লিখুন"
                            className="w-full h-9 px-3 text-sm border border-gray-200 rounded-md outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full mt-2 h-9 rounded-md bg-green-700 hover:bg-green-800 text-white text-sm font-medium shadow-sm transition-colors"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProfilePages;
