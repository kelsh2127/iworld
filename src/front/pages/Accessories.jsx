import React from 'react';

const Accessories = () => {
  const accessories = [
    { name: 'MagSafe Charger', price: '$39', type: 'Charging' },
    { name: 'iPhone 15 Silicone Case', price: '$49', type: 'Cases' },
    { name: 'Apple Watch Band', price: '$49', type: 'Bands' },
    { name: 'AirTag', price: '$29', type: 'Tracking' },
    { name: 'Magic Keyboard', price: '$99', type: 'Keyboards' },
    { name: 'Magic Mouse', price: '$79', type: 'Mice' },
    { name: 'Apple Pencil (2nd gen)', price: '$129', type: 'Pencils' },
    { name: '20W USB-C Power Adapter', price: '$19', type: 'Power' },
    { name: 'iPhone 15 Clear Case', price: '$39', type: 'Cases' },
    { name: 'MagSafe Battery Pack', price: '$99', type: 'Batteries' },
    { name: 'Lightning to USB-C Cable', price: '$19', type: 'Cables' },
    { name: 'AirPods Pro Silicone Case', price: '$29', type: 'Cases' },
  ];

  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Accessories</h1>
        <p style={styles.heroSubtitle}>Discover the perfect accessories for your devices.</p>
      </section>

      <section style={styles.filters}>
        <button style={styles.filterBtn}>All</button>
        <button style={styles.filterBtn}>Charging</button>
        <button style={styles.filterBtn}>Cases</button>
        <button style={styles.filterBtn}>Bands</button>
        <button style={styles.filterBtn}>Cables</button>
      </section>

      <section style={styles.grid}>
        {accessories.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>
              {item.type === 'Charging' && '🔋'}
              {item.type === 'Cases' && '📱'}
              {item.type === 'Bands' && '⌚'}
              {item.type === 'Tracking' && '📍'}
              {item.type === 'Keyboards' && '⌨️'}
              {item.type === 'Mice' && '🖱️'}
              {item.type === 'Pencils' && '✏️'}
              {item.type === 'Power' && '⚡'}
              {item.type === 'Batteries' && '🔋'}
              {item.type === 'Cables' && '🔌'}
            </div>
            <h3 style={styles.cardTitle}>{item.name}</h3>
            <p style={styles.cardType}>{item.type}</p>
            <p style={styles.cardPrice}>{item.price}</p>
            <button style={styles.buyBtn}>Buy</button>
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
  filters: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    margin: '30px 0',
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '8px 16px',
    borderRadius: 20,
    border: '1px solid #d2d2d7',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: 14,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
  icon: {
    fontSize: 48,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
    color: '#1d1d1f',
  },
  cardType: {
    fontSize: 14,
    color: '#6e6e73',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 500,
    color: '#1d1d1f',
    marginBottom: 15,
  },
  buyBtn: {
    backgroundColor: '#06c',
    color: '#fff',
    border: 'none',
    padding: '8px 24px',
    borderRadius: 20,
    fontSize: 14,
    cursor: 'pointer',
  },
};

export default Accessories;