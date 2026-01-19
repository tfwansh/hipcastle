//Video Path - Using existing videos as placeholders for Watch & Buy feature
import f1 from "../assets/videos/f1.mp4"
import f2 from "../assets/videos/f2.mp4"
import f3 from "../assets/videos/f3.mp4"
import f4 from "../assets/videos/f4.mp4"
import f5 from "../assets/videos/f5.mp4"
import f6 from "../assets/videos/f6.mp4"
import f7 from "../assets/videos/f7.mp4"
import { getImage } from "../utils/media"

// Define types
interface Product {
    name: string;
    price: string;
    material: string;
    color: string;
    rotation: string;
    img: string;
}

interface Category {
    name: string;
    description: string;
    color: string;
    rotation: string;
    productCount: number;
    img: string; // Added image field for category background
}

interface ConstructionSpec {
    label: string;
    value: string;
}

interface VideoCard {
    src: any;
    rotation: string;
    name: string;
    category: string;
    price: string;
    img: string;
    translation?: string;
    products: ProductPreview[];
}

interface ProductPreview {
    name: string;
    price: string;
    material: string;
    size?: string;
}

// HIPCASTLE Product Collection
const productCollection: Product[] = [
    {
        name: "Palm in the Dark Blue",
        price: "₹747",
        material: "Cotton Blend",
        color: "navy",
        rotation: "md:rotate-[-8deg] rotate-0",
        img: getImage("palm-in-the-dark-blue.png"),
    },
    {
        name: "Square Abstract",
        price: "₹868",
        material: "Cotton Blend",
        color: "charcoal",
        rotation: "md:rotate-[8deg] rotate-0",
        img: getImage("square-abstract.png"),
    },
    {
        name: "Win Anyway",
        price: "₹897",
        material: "100% Cotton",
        color: "black",
        rotation: "md:rotate-[-8deg] rotate-0",
        img: getImage("win-anyway.png"),
    },
    {
        name: "Motion Creates Growth",
        price: "₹957",
        material: "100% Cotton",
        color: "slate",
        rotation: "md:rotate-[8deg] rotate-0",
        img: getImage("motion-creates-growth.png"),
    },
    {
        name: "Dark Green Red Checked",
        price: "₹1,177",
        material: "Cotton Blend",
        color: "forest",
        rotation: "md:rotate-[-8deg] rotate-0",
        img: getImage("dark-green-red-checked.png"),
    },
    {
        name: "Absolute Growth",
        price: "₹947",
        material: "300+ GSM Cotton",
        color: "midnight",
        rotation: "md:rotate-[8deg] rotate-0",
        img: getImage("absolute-growth.png"),
    },
    {
        name: "Unbreakable",
        price: "₹847",
        material: "300+ GSM Cotton",
        color: "wine",
        rotation: "md:rotate-[-8deg] rotate-0",
        img: getImage("unbreakable.png"),
    },
    {
        name: "New Chapter",
        price: "₹787",
        material: "100% Cotton",
        color: "indigo",
        rotation: "md:rotate-[8deg] rotate-0",
        img: getImage("new-chapter.png"),
    },
];

// Shop by Category - Uses f1-f7 images as requested
const categoryCollection: Category[] = [
    {
        name: "Minimalist",
        description: "Clean lines, bold statements",
        color: "charcoal",
        rotation: "md:rotate-[-6deg] rotate-0",
        productCount: 12,
        img: getImage("f1.webp"),
    },
    {
        name: "Back Print",
        description: "Statement pieces that speak",
        color: "midnight",
        rotation: "md:rotate-[5deg] rotate-0",
        productCount: 18,
        img: getImage("f2.webp"),
    },
    {
        name: "Oversized",
        description: "Comfort meets confidence",
        color: "black",
        rotation: "md:rotate-[-4deg] rotate-0",
        productCount: 15,
        img: getImage("f3.webp"),
    },
    {
        name: "Essentials",
        description: "Everyday builders wear",
        color: "slate",
        rotation: "md:rotate-[6deg] rotate-0",
        productCount: 24,
        img: getImage("f4.webp"),
    },
    {
        name: "Signature",
        description: "Premium 300+ GSM collection",
        color: "forest",
        rotation: "md:rotate-[-5deg] rotate-0",
        productCount: 8,
        img: getImage("f5.png"),
    },
    {
        name: "Limited Edition",
        description: "Exclusive drops, limited runs",
        color: "wine",
        rotation: "md:rotate-[4deg] rotate-0",
        productCount: 6,
        img: getImage("f6.png"),
    },
    {
        name: "Graphic Tees",
        description: "Art meets ambition",
        color: "indigo",
        rotation: "md:rotate-[-3deg] rotate-0",
        productCount: 20,
        img: getImage("f7.png"),
    },
];

// Construction Breakdown Specs
const constructionSpecs: ConstructionSpec[] = [
    { label: "Fabric Weight", value: "300+ GSM" },
    { label: "Wash Cycles", value: "150+" },
    { label: "Stitching", value: "Double-Needle" },
    { label: "Quality Check", value: "100%" },
    { label: "Lifespan", value: "5+ Years" },
];

// Watch & Buy Video Cards - Each clickable to open modal with products
const watchAndBuyCards: VideoCard[] = [
    {
        src: f1,
        rotation: "rotate-z-[-10deg]",
        name: "Absolute Growth",
        category: "Street",
        price: "₹947",
        img: "../assets/images/p1.png",
        translation: "translate-y-[-5%]",
        products: [
            { name: "Motion Creates Growth", price: "₹957", material: "100% Cotton" },
            { name: "Dark Green Red Checked", price: "₹1,177", material: "Cotton Blend" },
            { name: "Absolute Growth", price: "₹947", material: "300+ GSM" },
            { name: "Unbreakable", price: "₹847", material: "300+ GSM" },
        ]
    },
    {
        src: f2,
        rotation: "rotate-z-[4deg]",
        name: "Unbreakable",
        category: "Signature",
        price: "₹1,047",
        img: "../assets/images/p2.png",
        products: [
            { name: "Unbreakable", price: "₹1,047", material: "300+ GSM" },
            { name: "Signature Joggers", price: "₹1,647", material: "French Terry" },
            { name: "Win Anyway", price: "₹897", material: "100% Cotton" },
            { name: "New Chapter", price: "₹787", material: "100% Cotton" },
        ]
    },
    {
        src: f3,
        rotation: "rotate-z-[-4deg]",
        name: "New Chapter",
        category: "Core",
        price: "₹897",
        img: "../assets/images/p3.png",
        translation: "translate-y-[-5%]",
        products: [
            { name: "New Chapter", price: "₹897", material: "100% Cotton" },
            { name: "Chapter Shorts", price: "₹1,147", material: "Cotton Blend" },
            { name: "Palm in the Dark Blue", price: "₹747", material: "Cotton Blend" },
            { name: "Square Abstract", price: "₹868", material: "Cotton Blend" },
        ]
    },
    {
        src: f4,
        rotation: "rotate-z-[4deg]",
        name: "Purpose",
        category: "Oversized",
        price: "₹1,147",
        img: "../assets/images/p4.png",
        translation: "translate-y-[5%]",
        products: [
            { name: "Purpose Oversized Tee", price: "₹1,147", material: "300+ GSM" },
            { name: "Mission Statement Tee", price: "₹947", material: "100% Cotton" },
            { name: "Motion Creates Growth", price: "₹957", material: "100% Cotton" },
            { name: "Absolute Growth", price: "₹947", material: "300+ GSM" },
        ]
    },
    {
        src: f5,
        rotation: "rotate-z-[-10deg]",
        name: "Growth",
        category: "Essential",
        price: "₹847",
        img: "../assets/images/p5.png",
        products: [
            { name: "Growth Essential Tee", price: "₹847", material: "100% Cotton" },
            { name: "Daily Driver Tee", price: "₹747", material: "Cotton Blend" },
            { name: "Win Anyway", price: "₹897", material: "100% Cotton" },
            { name: "Unbreakable", price: "₹847", material: "300+ GSM" },
        ]
    },
    {
        src: f6,
        rotation: "rotate-z-[4deg]",
        name: "Waves",
        category: "Summer",
        price: "₹747",
        img: "../assets/images/p6.png",
        translation: "translate-y-[5%]",
        products: [
            { name: "Waves Summer Tee", price: "₹747", material: "Light Cotton" },
            { name: "Ocean Breeze Tank", price: "₹547", material: "Breathable Mesh" },
            { name: "Palm in the Dark Blue", price: "₹747", material: "Cotton Blend" },
            { name: "New Chapter", price: "₹787", material: "100% Cotton" },
        ]
    },
    {
        src: f7,
        rotation: "rotate-z-[-3deg]",
        name: "Magnetize Future",
        category: "Minimal",
        price: "₹957",
        img: "../assets/images/p7.png",
        translation: "translate-y-[10%]",
        products: [
            { name: "Magnetize Future", price: "₹957", material: "300+ GSM" },
            { name: "Future Vision Hoodie", price: "₹2,147", material: "Premium Fleece" },
            { name: "Square Abstract", price: "₹868", material: "Cotton Blend" },
            { name: "Dark Green Red Checked", price: "₹1,177", material: "Cotton Blend" },
        ]
    },
];

// Marquee text items
const marqueeItems: string[] = [
    "Growth isn't linear",
    "Neither are our clothes",
    "Built for the sprint",
    "Define your era",
    "Silence the noise",
    "Wear your ambition",
    "Crafted for now",
    "Designed for forever",
];

// Blog/Journal entries
interface JournalEntry {
    category: string;
    date: string;
    title: string;
}

const journalEntries: JournalEntry[] = [
    {
        category: "Philosophy",
        date: "Dec 28, 2025",
        title: "I Failed 12th Grade. Here's What It Taught Me About Building."
    },
    {
        category: "Founder Stories",
        date: "Dec 15, 2025",
        title: "The 60-Day Backpack Test: Why I Refused to Make Thin T-Shirts."
    },
    {
        category: "Customer Wins",
        date: "Nov 30, 2025",
        title: "Rajesh Wore One HIPCASTLE Tee for 45 Days During Startup Launch."
    },
];

// Legacy exports for compatibility (mapping old names to new)
const flavorlists = categoryCollection;
const nutrientLists = constructionSpecs;
const cards = watchAndBuyCards;

export {
    productCollection,
    categoryCollection,
    constructionSpecs,
    watchAndBuyCards,
    marqueeItems,
    journalEntries,
    // Legacy exports
    flavorlists,
    nutrientLists,
    cards
};