import Head from 'next/head';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
    return (
        <div>
            <Head>
                <title>My eCommerce Site</title>
                <meta name="description" content="Best products online" />
            </Head>
            <main className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/api/products');
    const products = await res.json();
    return { props: { products } };
}