import React from 'react';

const AirPods = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>AirPods</h1>
          <h2 style={styles.heroSubtitle}>Magic like you've never heard.</h2>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLink}>Learn more ›</a>
            <a href="#" style={styles.heroLink}>Buy ›</a>
          </div>
          <img 
            src="https://www.apple.com/v/airpods-pro/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
            alt="AirPods"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* AirPods Lineup */}
      <section style={styles.lineupSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Which AirPods are right for you?</h2>
          <div style={styles.lineupGrid}>
            {/* AirPods Pro 2 */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/airpods-pro/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
                alt="AirPods Pro 2"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>AirPods Pro (2nd gen)</h3>
              <p style={styles.productPrice}>$249</p>
              <p style={styles.productDescription}>Active Noise Cancellation, Adaptive Audio, Touch control</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
            
            {/* AirPods Max */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/airpods-max/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
                alt="AirPods Max"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>AirPods Max</h3>
              <p style={styles.productPrice}>$549</p>
              <p style={styles.productDescription}>High-fidelity audio, Active Noise Cancellation</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            {/* AirPods 3 */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/airpods-3rd-generation/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
                alt="AirPods 3"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>AirPods (3rd gen)</h3>
              <p style={styles.productPrice}>$169</p>
              <p style={styles.productDescription}>Spatial Audio, Sweat and water resistant</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>

            {/* AirPods 2 */}
            <div style={styles.productCard}>
              <img 
                src="https://www.apple.com/v/airpods-2nd-generation/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
                alt="AirPods 2"
                style={styles.productImage}
              />
              <h3 style={styles.productName}>AirPods (2nd gen)</h3>
              <p style={styles.productPrice}>$129</p>
              <p style={styles.productDescription}>Lightning Charging Case, H1 chip</p>
              <a href="#" style={styles.productLink}>Learn more ›</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🎧</div>
              <h3 style={styles.featureTitle}>Spatial Audio</h3>
              <p style={styles.featureText}>With dynamic head tracking, sounds place all around you.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔇</div>
              <h3 style={styles.featureTitle}>Active Noise Cancellation</h3>
              <p style={styles.featureText}>Block out external noise for immersive sound.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>💧</div>
              <h3 style={styles.featureTitle}>Sweat & Water Resistant</h3>
              <p style={styles.featureText}>Sweat and water resistant for workouts.</p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔋</div>
              <h3 style={styles.featureTitle}>Long Battery Life</h3>
              <p style={styles.featureText}>Up to 30 hours of listening time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Experience */}
      <section style={styles.magicalSection}>
        <div style={styles.container}>
          <h2 style={styles.magicalTitle}>A magical connection.</h2>
          <p style={styles.magicalText}>
            Seamless setup, automatic switching, and Siri voice activation.
          </p>
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
    fontSize: 64,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 32,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 20,
  },
  heroLinks: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
    marginBottom: 50,
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
    fontSize: 22,
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
  magicalSection: {
    padding: '100px 0',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },
  magicalTitle: {
    fontSize: 56,
    fontWeight: 600,
    marginBottom: 20,
    color: '#fff',
  },
  magicalText: {
    fontSize: 28,
    fontWeight: 400,
    color: '#86868b',
  },
};

export default AirPods;