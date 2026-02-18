import React from 'react';

const Vision = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.visionPro}>Vision Pro</span>
          </h1>
          <h2 style={styles.heroSubtitle}>
            Welcome to the era of spatial computing.
          </h2>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLink}>Learn more ›</a>
            <a href="#" style={styles.heroLink}>Pre-order ›</a>
          </div>
          <img 
            src="https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/hero__c1k9w2z1x3em_large.jpg" 
            alt="Apple Vision Pro"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Vision Pro Features */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>A revolutionary spatial computer</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Digital Crown</h3>
              <p style={styles.featureText}>Stay present or go fully immersive.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>EyeSight</h3>
              <p style={styles.featureText}>Reveal your eyes when someone approaches.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>3D Camera</h3>
              <p style={styles.featureText}>Capture spatial photos and videos.</p>
            </div>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>visionOS</h3>
              <p style={styles.featureText}>The world's first spatial operating system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Display Section */}
      <section style={styles.displaySection}>
        <div style={styles.container}>
          <div style={styles.displayContent}>
            <h2 style={styles.displayTitle}>A display system unlike any other.</h2>
            <p style={styles.displayText}>
              4K resolution for each eye — 23 million pixels — deliver stunning, lifelike clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section style={styles.appsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Infinite canvas. Infinite possibilities.</h2>
          <div style={styles.appsGrid}>
            <div style={styles.appCard}>
              <h3>Work</h3>
              <p>Your Mac display wirelessly. Multiple apps anywhere.</p>
            </div>
            <div style={styles.appCard}>
              <h3>Entertainment</h3>
              <p>A personal theater with 100-ft wide screen.</p>
            </div>
            <div style={styles.appCard}>
              <h3>Gaming</h3>
              <p>Immersive spatial games like never before.</p>
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
    padding: '100px 0',
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
    marginBottom: 20,
  },
  visionPro: {
    background: 'linear-gradient(135deg, #fff, #86868b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: 32,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 30,
  },
  heroLinks: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
    marginBottom: 60,
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
  featuresSection: {
    padding: '100px 0',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 56,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 60,
    color: '#1d1d1f',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 40,
  },
  featureCard: {
    textAlign: 'center',
    padding: 40,
  },
  featureTitle: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 16,
    color: '#1d1d1f',
  },
  featureText: {
    fontSize: 19,
    color: '#6e6e73',
    lineHeight: 1.5,
  },
  displaySection: {
    padding: '100px 0',
    backgroundColor: '#000',
    color: '#fff',
  },
  displayContent: {
    textAlign: 'center',
    maxWidth: 800,
    margin: '0 auto',
  },
  displayTitle: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 24,
    color: '#fff',
  },
  displayText: {
    fontSize: 24,
    fontWeight: 400,
    color: '#86868b',
    lineHeight: 1.4,
  },
  appsSection: {
    padding: '100px 0',
    backgroundColor: '#f5f5f7',
  },
  appsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30,
  },
  appCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 40,
    textAlign: 'center',
  },
};

export default Vision;