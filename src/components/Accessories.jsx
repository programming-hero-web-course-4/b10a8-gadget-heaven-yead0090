import ProductCard from "./productCard";


const Accessories = ({products}) => {
    return (
        <div>
            {products.map((p)=><ProductCard key={p.id}></ProductCard>)}
        </div>
    );
};

export default Accessories;