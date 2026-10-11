import { notFound } from "next/navigation";

const DetailsPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${slug}`
    );

    const productData = await res.json();

     if (!res.ok || !productData?.id) {
    notFound();
  }

    const prices = [
        {
            title: "গতকাল",
            price: productData.yesterday,
        },
        {
            title: "গত সপ্তাহ",
            price: productData.lastWeek,
        },
        {
            title: "গত মাস",
            price: productData.lastMonth,
        },
    ];

    return (
        <div className="min-h-screen bg-[#f0f5f0] py-6 px-3">
            <div className="container mx-auto max-w-5xl">

                {/* Breadcrumb */}
                <p className="text-xs text-gray-500 mb-5">
                    হোম / {productData.categoryNameBn} /{" "}
                    {productData.nameBn}
                </p>

                {/* Product Header */}
                <div className="bg-white/80 border border-gray-100 rounded-xl p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#f0f5f0] flex items-center justify-center text-2xl">
                            {productData.image}
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-gray-800">
                                {productData.nameBn}
                            </h1>

                            <p className="text-xs text-gray-500 mt-1">
                                {productData.categoryNameBn} • প্রতি{" "}
                                {productData.unit === "kg"
                                    ? "কেজি"
                                    : productData.unit === "liter"
                                    ? "লিটার"
                                    : productData.unit === "dozen"
                                    ? "ডজন"
                                    : productData.unit === "piece"
                                    ? "পিস"
                                    : productData.unit}
                            </p>

                            <p className="text-xs text-gray-500 mt-1">
                                বাজারভেদে পণ্যের দাম পরিবর্তিত হতে পারে।
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f0f5f0] rounded-lg p-3 text-center shrink-0">
                        <p className="text-xs text-gray-500">
                            আজকের দাম
                        </p>

                        <p className="text-xl font-bold text-gray-800">
                            {productData.today?.toLocaleString("bn-BD")}
                        </p>

                        <p className="text-xs text-gray-500">
                            টাকা / {productData.unit}
                        </p>

                        <p
                            className={`text-xs font-medium mt-1 ${
                                productData.change?.dir === "up"
                                    ? "text-red-600"
                                    : productData.change?.dir === "down"
                                    ? "text-green-700"
                                    : "text-gray-500"
                            }`}
                        >
                            {productData.change?.dir === "up"
                                ? "▲"
                                : productData.change?.dir === "down"
                                ? "▼"
                                : "—"}{" "}
                            {productData.change?.pct?.toLocaleString("bn-BD") || 0}%
                        </p>
                    </div>
                </div>

                {/* Price History */}
                <div className="mt-4 bg-white/80 border border-gray-100 rounded-xl p-4 sm:p-5">
                    <h2 className="text-sm font-bold text-gray-800 mb-4">
                        দামের ইতিহাস
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="rounded-lg border border-gray-100 p-4">
                            <p className="text-xs text-gray-500">
                                আজকের দাম
                            </p>
                            <p className="text-lg font-bold text-green-700 mt-2">
                                ৳ {productData.today?.toLocaleString("bn-BD")}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                বর্তমান বাজারদর
                            </p>
                        </div>

                        {prices.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-lg border border-gray-100 p-4"
                            >
                                <p className="text-xs text-gray-500">
                                    {item.title}
                                </p>

                                <p className="text-lg font-bold text-red-600 mt-2">
                                    ৳ {item.price?.toLocaleString("bn-BD")}
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    প্রতি {productData.unit}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Market Prices */}
                    <h2 className="text-sm font-bold text-gray-800 mt-6 mb-3">
                        বাজারভিত্তিক বাজারদর
                    </h2>

                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full min-w-[550px] text-left text-xs">
                            <thead className="bg-[#f0f5f0] text-gray-600">
                                <tr>
                                    <th className="px-3 py-3 font-medium">
                                        বাজার
                                    </th>
                                    <th className="px-3 py-3 font-medium">
                                        বিভাগ
                                    </th>
                                    <th className="px-3 py-3 font-medium">
                                        সর্বনিম্ন
                                    </th>
                                    <th className="px-3 py-3 font-medium">
                                        সর্বোচ্চ
                                    </th>
                                    <th className="px-3 py-3 font-medium text-right">
                                        গড়
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {productData.markets?.map(
                                    (market: {
                                        market: string;
                                        division: string;
                                        min: number;
                                        max: number;
                                    }, index: number) => (
                                        <tr
                                            key={`${market.market}-${index}`}
                                            className="hover:bg-green-50/50"
                                        >
                                            <td className="px-3 py-3 font-medium text-gray-800">
                                                {market.market}
                                            </td>

                                            <td className="px-3 py-3 text-gray-600">
                                                {market.division}
                                            </td>

                                            <td className="px-3 py-3 text-gray-700">
                                                ৳ {market.min.toLocaleString("bn-BD")}
                                            </td>

                                            <td className="px-3 py-3 text-gray-700">
                                                ৳ {market.max.toLocaleString("bn-BD")}
                                            </td>

                                            <td className="px-3 py-3 text-right font-semibold text-gray-800">
                                                ৳ {Math.round(
                                                    (market.min + market.max) / 2
                                                ).toLocaleString("bn-BD")}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;