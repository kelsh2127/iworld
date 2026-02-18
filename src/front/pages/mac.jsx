import React from 'react';

const Mac = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Mac</h1>
        <p style={styles.heroSubtitle}>If you can dream it, Mac can do it.</p>
        <div style={styles.macGrid}>
          <div style={styles.macCard}>
            <img src="https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero/hero_16__c6ox0u3kz0y6_large.jpg" alt="MacBook Pro" style={styles.macImage} />
            <h3>MacBook Pro</h3>
            <p>Supercharged by M2 Pro and M2 Max.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://www.apple.com/v/macbook-air/c/images/overview/hero/hero_macbook_air_15_midnight__c6zqymxzz8q2_large.jpg" alt="MacBook Air" style={styles.macImage} />
            <h3>MacBook Air</h3>
            <p>Superlight. Superfast. Super M2.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://www.apple.com/v/imac/c/images/overview/hero/hero_imac__es1stq5s9c6u_large.jpg" alt="iMac" style={styles.macImage} />
            <h3>iMac</h3>
            <p>Brilliant. Colorful. M3.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    padding: '60px 40px',
    textAlign: 'center',
    backgroundColor: '#f5f5f7',
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 600,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 400,
    marginBottom: 40,
  },
  macGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30,
    maxWidth: 1280,
    margin: '0 auto',
  },
  macCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
  },
  macImage: {
    width: '100%',
    maxWidth: 300,
    height: 'auto',
    marginBottom: 20,
  },
};

export default Mac;