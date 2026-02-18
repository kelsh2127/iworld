import React from 'react';

const Iphone = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>iPhone 15 Pro</h1>
          <h2 style={styles.heroSubtitle}>Titanium. So strong. So light. So Pro.</h2>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLink}>Learn more ›</a>
            <a href="#" style={styles.heroLink}>Buy ›</a>
          </div>
          <img 
            src="https://www.apple.com/v/iphone-15-pro/c/images/overview/welcome/hero_iphone_15_pro__i70z9oz3hj2i_largetall.jpg" 
            alt="iPhone 15 Pro"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* iPhone 15 Lineup */}
      <section style={styles.lineupSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Which iPhone is right for you?</h2>
          <div style={styles.lineupGrid}>
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/iphone-15/c/images/overview/hero/hero_iphone_15__fmms16fl77yq_large.jpg" 
                alt="iPhone 15"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>iPhone 15</h3>
              <p style={styles.productPrice}>From $799</p>
              <p style={styles.productDescription}>6.1" or 6.7" display. Dynamic Island. 48MP camera.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
            
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/iphone-15-pro/c/images/overview/hero/hero_iphone_15_pro__i70z9oz3hj2i_large.jpg" 
                alt="iPhone 15 Pro"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>iPhone 15 Pro</h3>
              <p style={styles.productPrice}>From $999</p>
              <p style={styles.productDescription}>Titanium design. A17 Pro chip. Action button.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14__ewfc1g4i6u26_large.jpg" 
                alt="iPhone 14"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>iPhone 14</h3>
              <p style={styles.productPrice}>From $699</p>
              <p style={styles.productDescription}>6.1" or 6.7" display. Dual-camera system.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Explore the lineup</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>A17 Pro chip</h3>
              <p style={styles.featureText}>Mind‑blowing. Game‑changing. Ground‑breaking.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Titanium design</h3>
              <p style={styles.featureText}>Strong. Light. Pro. Incredibly durable.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>48MP camera</h3>
              <p style={styles.featureText}>Next‑generation portrait with Focus and Depth Control.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Action button</h3>
              <p style={styles.featureText}>A shortcut to your favorite feature.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 22px',
  },
  hero: {
    backgroundColor: '#000',
    padding: '80px 0',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 20,
  },
  heroLinks: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
    marginBottom: 40,
  },
  heroLink: {
    fontSize: 21,
    color: '#2997ff',
    textDecoration: 'none',
  },
  heroImage: {
    width: '100%',
    maxWidth: 980,
    height: 'auto',
  },
  lineupSection: {
    padding: '80px 0',
    backgroundColor: '#f5f5f7',
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 60,
    color: '#1d1d1f',
  },
  lineupGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  productImage: {
    width: '100%',
    maxWidth: 250,
    height: 'auto',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    color: '#1d1d1f',
  },
  productPrice: {
    fontSize: 17,
    color: '#6e6e73',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 14,
    color: '#1d1d1f',
    marginBottom: 20,
    lineHeight: 1.5,
  },
  productLink: {
    fontSize: 17,
    color: '#06c',
    textDecoration: 'none',
  },
  featuresSection: {
    padding: '80px 0',
    backgroundColor: '#fff',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 30,
  },
  featureCard: {
    textAlign: 'center',
    padding: 30,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 12,
    color: '#1d1d1f',
  },
  featureText: {
    fontSize: 17,
    color: '#6e6e73',
    lineHeight: 1.5,
  },
};

export default Iphone;