import { productCollection } from "../constants/details";

// Product card colors for visual variety
const cardColors = [
    "bg-gradient-to-br from-[#1a2a3a] to-[#0a1520]", // Navy
    "bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]", // Charcoal
    "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]", // Black
    "bg-gradient-to-br from-[#2a3a3a] to-[#1a2525]", // Slate
    "bg-gradient-to-br from-[#1a2a1a] to-[#0a150a]", // Forest
    "bg-gradient-to-br from-[#0f0f1a] to-[#050510]", // Midnight
    "bg-gradient-to-br from-[#2a1a1a] to-[#150a0a]", // Wine
    "bg-gradient-to-br from-[#1a1a2a] to-[#0a0a15]", // Indigo
];

const NewArrivalsSection = () => {
    return (
        <section className="bg-[#0a0a0a] py-20 px-6 md:px-12">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-5xl md:text-7xl font-bold text-[#f5f5f0] uppercase tracking-tight">
                    New Arrivals
                </h2>
                <p className="text-[#a0a0a0] text-sm mt-2 tracking-widest uppercase">The Collection</p>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {productCollection.map((product, index) => (
                    <div
                        key={product.name}
                        className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] ${cardColors[index % cardColors.length]} border border-[#ffffff08] hover:border-[#c9a66b40]`}
                    >
                        {/* Material Tag */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className="text-[9px] uppercase tracking-widest text-[#a0a0a0] bg-[#0a0a0a99] px-2 py-1 rounded-full backdrop-blur-sm">
                                {product.material}
                            </span>
                        </div>

                        {/* Quick Add Button */}
                        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="size-9 rounded-full bg-[#c9a66b] text-[#0a0a0a] flex items-center justify-center hover:scale-110 transition-transform">
                                <i className="ri-shopping-bag-line"></i>
                            </button>
                        </div>

                        {/* Product Image Area */}
                        <div className="aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                            {/* NEW: Actual Product Image */}
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                            <h3 className="text-[#f5f5f0] text-sm md:text-base font-semibold uppercase tracking-tight leading-tight">
                                {product.name}
                            </h3>
                            <p className="text-[#c9a66b] text-base md:text-lg font-bold mt-1">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="max-w-7xl mx-auto mt-12 flex justify-center">
                <button className="px-10 py-4 rounded-full border border-[#ffffff20] text-[#f5f5f0] font-semibold uppercase tracking-wider hover:bg-[#c9a66b] hover:text-[#0a0a0a] hover:border-[#c9a66b] transition-all duration-300 flex items-center gap-2">
                    View All Products
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </section>
    );
};

export default NewArrivalsSection;
