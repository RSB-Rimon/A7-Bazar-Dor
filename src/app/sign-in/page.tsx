
'use client'

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name: string,
            email: string,
            password: string
        };

        console.log(user, 'user came user');

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success('Sign In succesfully');
            redirect("/");
        }

        if (error) {
            toast.error(error.message);
        }

        console.log(data, 'dataaaaaaaaa');
    };

    const handleGoogleSignIn = async ()=>{
    await authClient.signIn.social({
            provider: 'google'
        })
        
    };
    const handleGithubSignIn = async ()=>{
      await authClient.signIn.social({
            provider:'github'
        })  
      
    }

    return (
        <div className="min-h-screen bg-[#f1f5f0] px-4 py-10">
            <div className="mx-auto w-full max-w-[360px]">

                <div className="mb-5 text-center">
                    <h1 className="text-xl font-bold text-gray-800">
                        সাইন ইন 
                    </h1>
                    <p className="mt-1 text-xs text-gray-500">
                        নির্দিষ্ট নাম, পাসওয়ার্ড ব্যবহার করে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </div>

                <form
                    onSubmit={onSubmit}
                    className="rounded-xl border border-gray-200 bg-white/80 p-5 shadow-sm"
                >
                    <fieldset className="space-y-2">

                        <label className="block text-xs font-medium text-gray-700">
                            ইমেইল
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-xs outline-none focus:border-green-600"
                            placeholder="you@example.com"
                        />

                        <label className="block pt-1 text-xs font-medium text-gray-700">
                            পাসওয়ার্ড
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-xs outline-none focus:border-green-600"
                            placeholder="আপনার পাসওয়ার্ড"
                        />

                        <button
                            type="submit"
                            className="mt-2 h-10 w-full cursor-pointer rounded-md bg-green-700 text-xs font-semibold text-white shadow-md transition hover:bg-green-800"
                        >
                            সাইন ইন
                        </button>

                    </fieldset>

                    <div className="my-3 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-[10px] text-gray-500">
                            অথবা
                        </span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button
                           onClick={handleGoogleSignIn}
                            type="button"
                            className="rounded-md border border-gray-200 px-2 py-2 text-[10px] text-gray-700"
                        >
                            🌐 Google দিয়ে চালিয়ে যান
                        </button>

                        <button 
                        onClick={handleGithubSignIn}
                            type="button"
                            className="rounded-md border cursor-pointer border-gray-200 px-2 py-2 text-[10px] text-gray-700"
                        >
                            ◉ GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    <p className="mt-3 text-center text-[11px] text-gray-500">
                        অ্যাকাউন্ট নেই?{' '}
                        <a
                            href="/sign-up"
                            className="font-medium text-green-700 hover:underline"
                        >
                            সাইন আপ করুন
                        </a>
                    </p>
                </form>

                <p className="mt-5 text-center text-[11px] text-gray-400">
                    ← হোম পেজে ফিরে যান
                </p>

            </div>
        </div>
    );
};

export default SignInPage;
