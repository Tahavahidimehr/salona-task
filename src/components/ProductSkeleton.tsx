export default function ProductSkeleton() {
    return (
        <div className="w-full h-full border border-gray-300 rounded-xl shadow-sm p-4 bg-white animate-pulse flex flex-col">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-auto"></div>
        </div>
    );
}