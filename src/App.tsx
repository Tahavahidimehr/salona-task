import { useEffect, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import ProductSkeleton from "./components/ProductSkeleton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

export type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

export default function App() {
    const [page, setPage] = useState(1);
    const { data, isPending, isError, isFetching } = useProducts(page);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);

    const noDataYet = !data;

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
            <Header />

            <main className="flex-1 py-6">
                <div className="max-w-6xl mx-auto px-4">
                    {isError && (
                        <p className="text-center text-red-500">Error loading products</p>
                    )}

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-[#BC2BFF]">Products</h2>
                        <span className="text-gray-500 text-sm">
                          {data?.total ?? 0} items
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {(isPending && noDataYet) &&
                            Array.from({ length: 8 }).map((_, i) => (
                                <ProductSkeleton key={i} />
                            ))}

                        {data?.products?.map((p: Product) => (
                            <div
                                key={p.id}
                                className="w-full h-full border border-gray-300 rounded-xl shadow-sm p-4 bg-white hover:shadow-md hover:border-[#BC2BFF] transition flex flex-col"
                            >
                                <div className="w-full h-40 mb-3">
                                    <img
                                        src={p.thumbnail}
                                        alt={p.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                                    {p.title}
                                </h3>

                                <p className="text-gray-500 mt-auto">${p.price}</p>
                            </div>
                        ))}

                        {isFetching && !isPending &&
                            Array.from({ length: 8 }).map((_, i) => (
                                <ProductSkeleton key={`fetching-${i}`} />
                            ))}
                    </div>

                    {!isPending && data && (
                        <Pagination
                            page={page}
                            total={data.total}
                            onChange={(p) => setPage(p)}
                        />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}