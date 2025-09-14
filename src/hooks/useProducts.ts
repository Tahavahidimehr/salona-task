import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (page: number) => {
    const limit = 10;
    const skip = (page - 1) * limit;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return res.json();
};

export function useProducts(page: number) {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts(page),
        placeholderData: (prev) => prev,
    });
}
