import React from 'react';

const Store = () => {
  const products = [
    { name: 'iPhone 15 Pro', price: '$999', category: 'iPhone' },
    { name: 'iPhone 15', price: '$799', category: 'iPhone' },
    { name: 'MacBook Pro 14"', price: '$1,999', category: 'Mac' },
    { name: 'MacBook Air 13"', price: '$1,099', category: 'Mac' },
    { name: 'iPad Pro 12.9"', price: '$1,099', category: 'iPad' },
    { name: 'iPad Air', price: '$599', category: 'iPad' },
    { name: 'Apple Watch Series 9', price: '$399', category: 'Watch' },
    { name: 'Apple Watch Ultra 2', price: '$799', category: 'Watch' },
    { name: 'AirPods Pro 2', price: '$249', category: 'AirPods' },
    { name: 'AirPods Max', price: '$549', category: 'AirPods' },
    { name: 'Apple TV 4K', price: '$129', category: 'TV' },
    { name: 'HomePod', price: '$299', category: 'Home' },
  ];

  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Apple Store</h1>
        <p style={styles.heroSubtitle}>The best place to buy Apple products.</p>
           <img 
          src="your-apple-image-url.jpg" 
          alt="iPhone 15 Pro"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1696446701796-da51225697cc?w=800";
            e.target.onerror = null; // Prevent infinite loop
          }}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </section>

      <section style={styles.benefits}>
        <div style={styles.benefitItem}>
          <span style={styles.benefitIcon}>🚚</span>
          <h4>Free Delivery</h4>
          <p style={styles.benefitText}>Get free delivery direct to your door</p>
        </div>
        <div style={styles.benefitItem}>
          <span style={styles.benefitIcon}>💳</span>
          <h4>Apple Card</h4>
          <p style={styles.benefitText}>Get 3% Daily Cash back</p>
        </div>
        <div style={styles.benefitItem}>
          <span style={styles.benefitIcon}>🔄</span>
          <h4>Trade In</h4>
          <p style={styles.benefitText}>Get credit for your eligible device</p>
        </div>
      </section>

      <section style={styles.categories}>
        <button style={styles.categoryBtn}>All</button>
        <button style={styles.categoryBtn}>iPhone</button>
        <button style={styles.categoryBtn}>Mac</button>
        <button style={styles.categoryBtn}>iPad</button>
        <button style={styles.categoryBtn}>Watch</button>
        <button style={styles.categoryBtn}>AirPods</button>
      </section>

      <section style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.productIcon}>
              {product.category === 'iPhone' && '📱'}
              {product.category === 'Mac' && '💻'}
              {product.category === 'iPad' && '📟'}
              {product.category === 'Watch' && '⌚'}
              {product.category === 'AirPods' && '🎧'}
              {product.category === 'TV' && '📺'}
              {product.category === 'Home' && '🔊'}
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>{product.price}</p>
            <div style={styles.actions}>
              <button style={styles.buyBtn}>Buy</button>
              <button style={styles.infoBtn}>Learn more</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: '#f5f5f7',
    padding: '60px 20px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 10,
    color: '#1d1d1f',
  },
  heroSubtitle: {
    fontSize: 24,
    fontWeight: 400,
    color: '#6e6e73',
  },
  benefits: {
    display: 'flex',
    justifyContent: 'center',
    gap: 40,
    maxWidth: 1280,
    margin: '40px auto',
    padding: '0 20px',
    flexWrap: 'wrap',
  },
  benefitItem: {
    textAlign: 'center',
  },
  benefitIcon: {
    fontSize: 32,
    display: 'block',
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 14,
    color: '#6e6e73',
  },
  categories: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    margin: '30px 0',
    flexWrap: 'wrap',
  },
  categoryBtn: {
    padding: '8px 20px',
    borderRadius: 20,
    border: '1px solid #d2d2d7',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 20,
    maxWidth: 1280,
    margin: '0 auto 60px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    textAlign: 'center',
    border: '1px solid #f5f5f7',
  },
  productIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: '#1d1d1f',
  },
  productCategory: {
    fontSize: 14,
    color: '#6e6e73',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 500,
    color: '#1d1d1f',
    marginBottom: 15,
  },
  actions: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
  },
  buyBtn: {
    backgroundColor: '#06c',
    color: '#fff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: 20,
    cursor: 'pointer',
  },
  infoBtn: {
    backgroundColor: '#f5f5f7',
    color: '#06c',
    border: 'none',
    padding: '8px 20px',
    borderRadius: 20,
    cursor: 'pointer',
  },
};

export default Store;