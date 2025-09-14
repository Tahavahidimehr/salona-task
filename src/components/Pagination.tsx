type PaginationProps = {
    page: number;
    total: number;
    onChange: (page: number) => void;
};

export default function Pagination({ page, total, onChange }: PaginationProps) {
    const totalPages = Math.ceil(total / 10);

    const getPages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (page > 3) pages.push("...");

            for (let i = page - 1; i <= page + 1; i++) {
                if (i > 1 && i < totalPages) pages.push(i);
            }

            if (page < totalPages - 2) pages.push("...");

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
            <button
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 rounded-lg border border-gray-300 bg-[#F3F3F3] hover:bg-[#BC2BFF]/10 disabled:opacity-40"
            >
                Prev
            </button>

            {getPages().map((p, idx) =>
                    typeof p === "number" ? (
                        <button
                            key={idx}
                            onClick={() => onChange(p)}
                            className={`px-3 py-1 rounded-lg border border-gray-300 transition ${
                                p === page
                                    ? "bg-[#BC2BFF] text-white border-[#BC2BFF]"
                                    : "bg-white hover:bg-[#F3F3F3]"
                            }`}
                        >
                            {p}
                        </button>
                    ) : (
                        <span key={idx} className="px-3 py-1 text-gray-400">
            ...
          </span>
                    )
            )}

            <button
                onClick={() => onChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-1 rounded-lg border border-gray-300 bg-[#F3F3F3] hover:bg-[#BC2BFF]/10 disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
}
