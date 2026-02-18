// pages/iPad.js
import React from 'react';

const iPad = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>iPad</h1>
          <h2 style={styles.heroSubtitle}>Lovable. Drawable. Magical.</h2>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLink}>Learn more ›</a>
            <a href="#" style={styles.heroLink}>Buy ›</a>
          </div>
          <img 
            src="https://www.apple.com/v/ipad/home/ca/images/overview/hero/hero_ipad__em8yseefseq2_large.jpg" 
            alt="iPad lineup"
            style={styles.heroImage}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200";
            }}
          />
        </div>
      </section>

      {/* iPad Lineup */}
      <section style={styles.lineupSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Which iPad is right for you?</h2>
          <div style={styles.lineupGrid}>
            {/* iPad Pro */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/ipad-pro/c/images/overview/hero/hero_ipad_pro__c3k9w2z1x3em_large.jpg" 
                alt="iPad Pro"
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600";
                }}
              />
              <h3 style={styles.productName}>iPad Pro</h3>
              <p style={styles.productPrice}>From $799</p>
              <p style={styles.productDescription}>M2 chip. 12.9" or 11" Liquid Retina XDR display.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
            
            {/* iPad Air */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/ipad-air/c/images/overview/hero/hero_ipad_air__c1k9w2z1x3em_large.jpg" 
                alt="iPad Air"
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600";
                }}
              />
              <h3 style={styles.productName}>iPad Air</h3>
              <p style={styles.productPrice}>From $599</p>
              <p style={styles.productDescription}>M1 chip. 10.9" Liquid Retina display.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            {/* iPad 10th gen */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/ipad-10.9/c/images/overview/hero/hero_ipad__c1k9w2z1x3em_large.jpg" 
                alt="iPad 10th gen"
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600";
                }}
              />
              <h3 style={styles.productName}>iPad</h3>
              <p style={styles.productPrice}>From $449</p>
              <p style={styles.productDescription}>A14 Bionic chip. 10.9" Liquid Retina display.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            {/* iPad mini */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/ipad-mini/c/images/overview/hero/hero_ipad_mini__c1k9w2z1x3em_large.jpg" 
                alt="iPad mini"
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600";
                }}
              />
              <h3 style={styles.productName}>iPad mini</h3>
              <p style={styles.productPrice}>From $499</p>
              <p style={styles.productDescription}>A15 Bionic chip. 8.3" Liquid Retina display.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why iPad</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>✏️</div>
              <h3 style={styles.featureTitle}>Apple Pencil</h3>
              <p style={styles.featureText}>Draw, sketch, and take notes like never before.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⌨️</div>
              <h3 style={styles.featureTitle}>Magic Keyboard</h3>
              <p style={styles.featureText}>Best typing experience with trackpad.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🚀</div>
              <h3 style={styles.featureTitle}>iPadOS 17</h3>
              <p style={styles.featureText}>New levels of productivity and versatility.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📱</div>
              <h3 style={styles.featureTitle}>Stage Manager</h3>
              <p style={styles.featureText}>Work with multiple overlapping windows.</p>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
    maxWidth: 200,
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
    backgroundColor: '#f5f5f7',
    borderRadius: 20,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 20,
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

export default iPad;