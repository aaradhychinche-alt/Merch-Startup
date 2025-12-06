export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    tag?: string;
    soldOut?: boolean;
    description?: string;
}

export const products: Product[] = [
    {
        id: "vedam-hoodie",
        title: "Vedam Signature Hoodie",
        price: 85.00,
        image: "/products/hoodie.png",
        tag: "Best Seller",
        description: "Premium heavyweight cotton blend hoodie with embroidered red Vedam logo. Designed for comfort and style."
    },
    {
        id: "vedam-jersey",
        title: "Pro Team Jersey 2025",
        price: 70.00,
        image: "/products/jersey.png",
        tag: "New Season",
        description: "Official 2025 season player jersey. Moisture-wicking fabric with athletic cut."
    },
    {
        id: "vedam-ticket",
        title: "Invitational 2025 Ticket",
        price: 150.00,
        image: "/products/ticket.png",
        tag: "Limited",
        soldOut: true,
        description: "Access to the Vedam Invitational 2025. VIP perks included."
    },
    {
        id: "vedam-tshirt",
        title: "Core Logo Tee",
        price: 35.00,
        image: "/products/tshirt.png",
        description: "Soft cotton tee with classic Vedam branding."
    },
    {
        id: "vedam-cap",
        title: "Snapback Cap",
        price: 30.00,
        image: "/products/cap.png",
        description: "Adjustable snapback cap with 3D embroidery."
    },
    {
        id: "vedam-mousepad",
        title: "Precision Mousepad XL",
        price: 45.00,
        image: "/products/mousepad.png",
        description: "XL desk mat with speed surface for esports performance."
    }
];
