import React from 'react';

const Entertainment = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Entertainment</h1>
        <p style={styles.heroSubtitle}>Apple TV+, Apple Music, Apple Arcade, and more.</p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple TV+</h2>
          <p style={styles.cardText}>Award-winning Apple Originals.</p>
          <a href="#" style={styles.link}>Try it free ›</a>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple Music</h2>
          <p style={styles.cardText}>Over 100 million songs.</p>
          <a href="#" style={styles.link}>Listen now ›</a>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple Arcade</h2>
          <p style={styles.cardText}>Ad-free. No in-app purchases.</p>
          <a href="#" style={styles.link}>Play now ›</a>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple Podcasts</h2>
          <p style={styles.cardText}>Millions of shows.</p>
          <a href="#" style={styles.link}>Listen free ›</a>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple Books</h2>
          <p style={styles.cardText}>Millions of books and audiobooks.</p>
          <a href="#" style={styles.link}>Read now ›</a>
        </div>
        
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Apple Fitness+</h2>
          <p style={styles.cardText}>Studio-style workouts.</p>
          <a href="#" style={styles.link}>Try it free ›</a>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
    maxWidth: 1280,
    margin: '40px auto',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#f5f5f7',
    borderRadius: 12,
    padding: 30,
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
    color: '#1d1d1f',
  },
  cardText: {
    fontSize: 16,
    color: '#6e6e73',
    marginBottom: 20,
  },
  link: {
    color: '#06c',
    textDecoration: 'none',
    fontSize: 17,
  },
};

export default Entertainment;