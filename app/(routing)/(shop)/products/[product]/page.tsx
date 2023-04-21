interface ProductProps {
    params: {
        product: number;
    };
}

export default function Product({ params }: ProductProps) {
    return (
        <div>
            <h2>Product #{params.product}</h2>
            <p>Page with dynamic segment</p>
        </div>
    );
}
