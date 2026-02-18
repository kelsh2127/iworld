import React from 'react';

const Support = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Apple Support</h1>
        <p style={styles.heroSubtitle}>We're here to help.</p>
      </section>

      <section style={styles.searchSection}>
        <input 
          type="text" 
          placeholder="Search support topics" 
          style={styles.searchInput}
        />
        <button style={styles.searchBtn}>Search</button>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.cardIcon}>📱</div>
          <h3 style={styles.cardTitle}>iPhone</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>💻</div>
          <h3 style={styles.cardTitle}>Mac</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>⌚</div>
          <h3 style={styles.cardTitle}>Watch</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>📟</div>
          <h3 style={styles.cardTitle}>iPad</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>🎧</div>
          <h3 style={styles.cardTitle}>AirPods</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>🔒</div>
          <h3 style={styles.cardTitle}>Apple ID</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>🎬</div>
          <h3 style={styles.cardTitle}>Apple TV</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardIcon}>🎵</div>
          <h3 style={styles.cardTitle}>Apple Music</h3>
          <a href="#" style={styles.link}>Get help ›</a>
        </div>
      </section>

      <section style={styles.helpSection}>
        <h2 style={styles.helpTitle}>Get personalized support</h2>
        <div style={styles.helpGrid}>
          <div style={styles.helpCard}>
            <h4>Start a support ticket</h4>
            <p>Get help with your products</p>
          </div>
          <div style={styles.helpCard}>
            <h4>Chat with us</h4>
            <p>Available 24/7</p>
          </div>
          <div style={styles.helpCard}>
            <h4>Schedule a call</h4>
            <p>Talk to an expert</p>
          </div>
          <div style={styles.helpCard}>
            <h4>Find a store</h4>
            <p>Get in-person support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 24,
    fontWeight: 400,
    color: '#86868b',
  },
  searchSection: {
    maxWidth: 600,
    margin: '-30px auto 60px',
    padding: '0 20px',
    display: 'flex',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    padding: '12px 20px',
    borderRadius: 8,
    border: '1px solid #d2d2d7',
    fontSize: 16,
  },
  searchBtn: {
    padding: '12px 24px',
    backgroundColor: '#06c',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 20,
    maxWidth: 1280,
    margin: '0 auto 60px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#f5f5f7',
    borderRadius: 12,
    padding: 30,
    textAlign: 'center',
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
    color: '#1d1d1f',
  },
  link: {
    color: '#06c',
    textDecoration: 'none',
  },
  helpSection: {
    backgroundColor: '#f5f5f7',
    padding: '60px 20px',
  },
  helpTitle: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 40,
    color: '#1d1d1f',
  },
  helpGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20,
    maxWidth: 1280,
    margin: '0 auto',
  },
  helpCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 12,
    textAlign: 'center',
  },
};

export default Support;