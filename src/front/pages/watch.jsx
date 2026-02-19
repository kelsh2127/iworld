import React from 'react';

const Watch = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.watchLogo}>
            <svg height="44" viewBox="0 0 34 44" width="34" fill="#fff">
              <path d="M26.9 12.3L24.1 6.8C23.4 5.4 21.9 4.5 20.3 4.5H13.7C12.1 4.5 10.6 5.4 9.9 6.8L7.1 12.3C6.4 13.7 6.4 15.3 7.1 16.7L9.9 22.2C10.6 23.6 12.1 24.5 13.7 24.5H20.3C21.9 24.5 23.4 23.6 24.1 22.2L26.9 16.7C27.6 15.3 27.6 13.7 26.9 12.3Z"/>
            </svg>
            <span style={styles.watchLogoText}>WATCH</span>
          </div>
          <span style={styles.watchSeries}>SERIES 9</span>
          <h2 style={styles.heroSubtitle}>Double tap. A magical new way to use Apple Watch.</h2>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLink}>Learn more ›</a>
            <a href="#" style={styles.heroLink}>Buy ›</a>
          </div>
          <img 
            src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" 
            alt="Apple Watch Series 9"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Watch Lineup */}
      <section style={styles.lineupSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Which Apple Watch is right for you?</h2>
          <div style={styles.lineupGrid}>
            {/* Apple Watch Series 9 */}
            <div style={styles.productCard}>
              <img 
                src="https://media.cnn.com/api/v1/images/stellar/prod/apple-watch-10-product-offer-card.png?c=16x9&q=h_720,w_1280,c_fill" 
                alt="Apple Watch Series 9"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>Apple Watch Series 9</h3>
              <p style={styles.productPrice}>From $399</p>
              <p style={styles.productDescription}>S9 chip. Double tap gesture. Brighter display.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
            
            {/* Apple Watch Ultra 2 */}
            <div style={styles.productCard}>
              <img 
                src="https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/1/t/v/-original-imah4jp2nfbhthz2.jpeg?q=90" 
                alt="Apple Watch Ultra 2"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>Apple Watch Ultra 2</h3>
              <p style={styles.productPrice}>From $799</p>
              <p style={styles.productDescription}>49mm titanium case. Precision GPS. 36hr battery.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            {/* Apple Watch SE */}
            <div style={styles.productCard}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFG-4KLVu2bp8IsU82YWjaGF2shZmj5rLTw&s" 
                alt="Apple Watch SE"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>Apple Watch SE</h3>
              <p style={styles.productPrice}>From $249</p>
              <p style={styles.productDescription}>Essential features. Great value.</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Features */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Health & Fitness</h3>
              <p style={styles.featureText}>ECG, Blood Oxygen, Sleep tracking, and more.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Always-On Retina</h3>
              <p style={styles.featureText}>Brighter display that never sleeps.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Workout App</h3>
              <p style={styles.featureText}>Advanced metrics for all your activities.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Emergency SOS</h3>
              <p style={styles.featureText}>Help when you need it most.</p>
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
  watchLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  watchLogoText: {
    fontSize: 24,
    fontWeight: 500,
    color: '#fff',
  },
  watchSeries: {
    color: '#ff204a',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.1em',
    marginBottom: 8,
    display: 'block',
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

export default Watch;