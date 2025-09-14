export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-[#BC2BFF]">Salona Store</h1>

                <input
                    type="text"
                    placeholder="Search products..."
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC2BFF]"
                />
            </div>
        </header>
    );
}
