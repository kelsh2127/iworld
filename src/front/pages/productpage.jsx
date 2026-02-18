import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productUrl } = useParams();
    
    console.log("Product URL from params:", productUrl);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch('/iphone.json'); // fetch('http://localhost:3000/getproducts')
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log("All products:", data);
                
                // Check if data has products array
                const productsList = data.products || data;
                
                if (Array.isArray(productsList)) {
                    // Find the single product that matches the URL
                    const foundProduct = productsList.find(
                        (item) => item.product_url === productUrl
                    );
                    
                    if (foundProduct) {
                        setProduct(foundProduct);
                        setError(null);
                    } else {
                        setError("Product not found");
                    }
                } else {
                    setError("Invalid data format");
                }
                
                setLoading(false);
            } catch (err) {
                console.error("Error fetching product:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        if (productUrl) {
            fetchProduct();
        }
    }, [productUrl]); // Dependency array correctly placed

    // Log product when it changes
    useEffect(() => {
        console.log("Fetched product data:", product);
    }, [product]);

    // Loading state
    if (loading) {
        return (
            <div className="container text-center mt-5 pt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading product details...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="container text-center mt-5 pt-5">
                <div className="alert alert-danger">
                    <h2>Error</h2>
                    <p>{error}</p>
                    <Link to="/" className="btn btn-primary mt-3">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // No product found
    if (!product) {
        return (
            <div className="container text-center mt-5 pt-5">
                <div className="alert alert-warning">
                    <h2>Product Not Found</h2>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary mt-3">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Display product details
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Product Image */}
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src={product.product_img || 'https://via.placeholder.com/500x600?text=iPhone'} 
                        alt={product.product_name}
                        className="img-fluid rounded-4 shadow"
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/500x600?text=Product+Image';
                        }}
                    />
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold mb-3">{product.product_name}</h1>
                    <p className="fs-3 text-secondary mb-4">{product.product_brief}</p>
                    
                    <div className="bg-light p-4 rounded-4 mb-4">
                        <h2 className="h4 mb-3">Description</h2>
                        <p className="fs-5">{product.product_description || 'No description available'}</p>
                    </div>

                    <div className="mb-4">
                        <p className="h3 fw-semibold text-primary mb-2">
                            {product.start_price ? `$${product.start_price}` : ''}
                        </p>
                        <p className="text-muted fs-5">{product.price_range}</p>
                    </div>

                    <div className="d-flex gap-3">
                        <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
                            Buy Now
                        </button>
                        <Link to="/" className="btn btn-outline-secondary btn-lg px-5 py-3 rounded-pill">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Additional Details Section */}
            <div className="row mt-5 pt-4">
                <div className="col-12">
                    <hr className="mb-4" />
                    <h3 className="h3 mb-4">Product Details</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <strong>Product ID:</strong> {product.product_id}
                                </li>
                                <li className="mb-3">
                                    <strong>Product URL:</strong> {product.product_url}
                                </li>
                                {product.created_at && (
                                    <li className="mb-3">
                                        <strong>Added on:</strong> {new Date(product.created_at).toLocaleDateString()}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;