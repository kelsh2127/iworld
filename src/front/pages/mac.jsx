import React from 'react';

const Mac = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
         <h1 style={styles.heroTitle}>Mac</h1>
        <p style={styles.heroSubtitle}>If you can dream it, Mac can do it.</p>
            {/* <img src="https://www.okamac.com/img/cms/pourquoi%20acheter%20un%20mac%20reconditionn%C3%A9.jpg" style={styles.heroImage} alt="MacBook Pro" /> */}
        </section>

      <section style={styles.featuresSection}>
        <div style={styles.macGrid}>
          <div style={styles.macCard}>
            <img src="https://alephksa.com/cdn/shop/files/MacBookPro16_silver_pdp_US_2.jpg?v=1698583080&width=823" style={styles.macImage} alt="MacBook Pro" />
            <h3>MacBook Pro</h3>
            <p>Supercharged by M2 Pro and M2 Max.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://m.media-amazon.com/images/I/61CQnlbCk9L.jpg" alt="MacBook Air" style={styles.macImage} />
            <h3>MacBook Air</h3>
            <p>Superlight. Superfast. Super M2.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iMac" style={styles.macImage} />
            <h3>iMac</h3>
            <p>Brilliant. Colorful. M3.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://cdn.images.express.co.uk/img/dynamic/59/590x/717867_1.jpg" alt="Mac Studio" style={styles.macImage} />
            <h3>Mac Studio</h3>
            <p>Mind-blowing performance. Endless possibilities.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D" alt="Mac Pro" style={styles.macImage} />
            <h3>Mac Pro</h3>
            <p>Ultimate performance. PCIe expansion.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mac mini" style={styles.macImage} />
            <h3>Mac mini</h3>
            <p>Small chip. Giant leap.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://www.okamac.com/img/cms/pourquoi%20acheter%20un%20mac%20reconditionn%C3%A9.jpg" alt="MacBook Air 15" style={styles.macImage} />
            <h3>MacBook Air 15"</h3>
            <p>Big screen. Super light.</p>
          </div>
          <div style={styles.macCard}>
            <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iMac Pro" style={styles.macImage} />
            <h3>iMac Pro</h3>
            <p>Pro performance. Pro display.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
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
    marginBottom: 40,
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
  macGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 30,
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 20px',
  },
  macCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  macImage: {
    width: '100%',
    maxWidth: 300,
    height: 'auto',
    marginBottom: 20,
    borderRadius: 10,
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

export default Mac;