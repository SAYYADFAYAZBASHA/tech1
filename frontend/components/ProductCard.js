import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
    return (
        <motion.div className="border rounded-xl p-4 shadow-md hover:scale-105 transition" whileHover={{ scale: 1.05 }}>
            <img src={product.image} alt={product.name} className="rounded-xl mb-3" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
        </motion.div>
    );
}