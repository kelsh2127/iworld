import React from 'react';

const TvHome = () => {
  return (
    <div style={{ paddingTop: 44 }}>
      {/* Apple TV+ Hero */}
      <section style={styles.tvHero}>
        <div style={styles.heroContent}>
          <div style={styles.tvLogo}>
            <svg height="44" viewBox="0 0 34 44" width="34" fill="#fff">
              <path d="M17 0L0 10v24l17 10 17-10V10L17 0z"/>
            </svg>
            <span style={styles.tvLogoText}>TV+</span>
          </div>
          <h2 style={styles.heroTitle}>Apple TV+</h2>
          <h3 style={styles.heroSubtitle}>All Apple Originals. Only on Apple TV+.</h3>
          <div style={styles.heroLinks}>
            <a href="#" style={styles.heroLinkPrimary}>Stream now ›</a>
            <a href="#" style={styles.heroLinkSecondary}>Learn more ›</a>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmm9a9EMfeuZ8V5ZUgdODb4epigAeRT5rgJw&s" 
            alt="Apple TV+"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Apple TV 4K */}
      <section style={styles.deviceSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Apple TV 4K</h2>
          <p style={styles.sectionSubtitle}>The best way to watch TV.</p>
          <div style={styles.deviceGrid}>
            <div style={styles.deviceCard}>
              <img 
                src="https://knowtechie.com/wp-content/uploads/2022/10/appletv.webp" 
                alt="Apple TV 4K"
                style={styles.deviceImage}
              />
              <h3 style={styles.deviceTitle}>A15 Bionic chip</h3>
              <p style={styles.deviceText}>Faster performance and better video quality.</p>
            </div>
            <div style={styles.deviceCard}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UHXB8YeqirjBfmg3Uhfmy_yIiAG1wurdyw&s" 
                alt="Siri Remote"
                style={styles.deviceImage}
              />
              <h3 style={styles.deviceTitle}>Siri Remote</h3>
              <p style={styles.deviceText}>Precision control with touch-enabled clickpad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HomePod */}
      <section style={styles.homeSection}>
        <div style={styles.container}>
          <div style={styles.homeGrid}>
            <div style={styles.homeCard}>
              <h2 style={styles.homeTitle}>HomePod</h2>
              <p style={styles.homeText}>Breakthrough sound and intelligence.</p>
              <img 
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=Q1RBQitMYmJvQlQ1STVESXY1WlV2UHpjMkwxYU8rbXJpUkFjQlJDOEdId21kWFdyUmdaSDBPOWtrUUs1Q1BGR3VUb3VPa2FUZVhQMFhDQnVBMWhwQTdMd09oclphb09tVUFNSEdpQmlqb0E" 
                alt="HomePod"
                style={styles.homeImage}
              />
            </div>
            <div style={styles.homeCard}>
              <h2 style={styles.homeTitle}>HomePod mini</h2>
              <p style={styles.homeText}>Big sound for its size.</p>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvmr8OJBNKOoCpKMK88xIjL4Ac9HjvpW2mw&s" 
                alt="HomePod mini"
                style={styles.homeImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shows */}
      <section style={styles.showsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Apple Originals</h2>
          <div style={styles.showsGrid}>
            <div style={styles.showCard}>
              <div style={styles.showPoster}>
                <span style={styles.showEmoji}>🎬</span>
              </div>
              <h3 style={styles.showTitle}>Killers of the Flower Moon</h3>
              <p style={styles.showDesc}>From Martin Scorsese</p>
            </div>
            <div style={styles.showCard}>
              <div style={styles.showPoster}>
                <span style={styles.showEmoji}>📺</span>
              </div>
              <h3 style={styles.showTitle}>The Morning Show</h3>
              <p style={styles.showDesc}>Starring Jennifer Aniston & Reese Witherspoon</p>
            </div>
            <div style={styles.showCard}>
              <div style={styles.showPoster}>
                <span style={styles.showEmoji}>⚽</span>
              </div>
              <h3 style={styles.showTitle}>MLS Season Pass</h3>
              <p style={styles.showDesc}>All the action. All season long.</p>
            </div>
            <div style={styles.showCard}>
              <div style={styles.showPoster}>
                <span style={styles.showEmoji}>🎵</span>
              </div>
              <h3 style={styles.showTitle}>Apple Music Live</h3>
              <p style={styles.showDesc}>Live performances from top artists</p>
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
  tvHero: {
    backgroundColor: '#000',
    padding: '80px 0',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
  },
  tvLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  tvLogoText: {
    fontSize: 32,
    fontWeight: 600,
    color: '#fff',
  },
  heroTitle: {
    fontSize: 56,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 30,
  },
  heroLinks: {
    display: 'flex',
    gap: 40,
    justifyContent: 'center',
    marginBottom: 50,
  },
  heroLinkPrimary: {
    fontSize: 21,
    color: '#2997ff',
    textDecoration: 'none',
    fontWeight: 500,
  },
  heroLinkSecondary: {
    fontSize: 21,
    color: '#2997ff',
    textDecoration: 'none',
  },
  heroImage: {
    width: '100%',
    maxWidth: 980,
    height: 'auto',
  },
  deviceSection: {
    padding: '80px 0',
    backgroundColor: '#f5f5f7',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 10,
    color: '#1d1d1f',
  },
  sectionSubtitle: {
    fontSize: 28,
    fontWeight: 400,
    color: '#6e6e73',
    marginBottom: 50,
  },
  deviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: 30,
  },
  deviceCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 40,
  },
  deviceImage: {
    width: '100%',
    maxWidth: 400,
    height: 'auto',
    marginBottom: 30,
  },
  deviceTitle: {
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 12,
    color: '#1d1d1f',
  },
  deviceText: {
    fontSize: 19,
    color: '#6e6e73',
  },
  homeSection: {
    padding: '80px 0',
    backgroundColor: '#fff',
  },
  homeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: 30,
  },
  homeCard: {
    backgroundColor: '#f5f5f7',
    borderRadius: 24,
    padding: 40,
    textAlign: 'center',
  },
  homeTitle: {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: 12,
    color: '#1d1d1f',
  },
  homeText: {
    fontSize: 21,
    color: '#6e6e73',
    marginBottom: 30,
  },
  homeImage: {
    width: '100%',
    maxWidth: 300,
    height: 'auto',
  },
  showsSection: {
    padding: '80px 0',
    backgroundColor: '#000',
    color: '#fff',
  },
  showsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 30,
  },
  showCard: {
    textAlign: 'center',
  },
  showPoster: {
    width: '100%',
    height: 200,
    backgroundColor: '#1d1d1f',
    borderRadius: 12,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showEmoji: {
    fontSize: 48,
  },
  showTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8,
    color: '#fff',
  },
  showDesc: {
    fontSize: 16,
    color: '#86868b',
  },
};

export default TvHome;