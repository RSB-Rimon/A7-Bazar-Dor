
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">

        <div className="mb-6 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100 text-5xl">
            🛒
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-green-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found!
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          ← Go to Home
        </Link>

        <p className="mt-8 text-sm text-gray-400">
          বাজার দর (BazarDor)
        </p>

      </div>
    </div>
  );
};

export default NotFoundPage;
