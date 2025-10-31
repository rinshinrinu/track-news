import React, { useState, useEffect } from 'react';

// Import images from assets folder
import sportsFeaturedImg from './assets/images/sports-featured.jpg';
import politicsSecondaryImg from './assets/images/politics-secondary.jpg';
import educationSecondaryImg from './assets/images/education-secondary.jpg';
import fashionOtherImg from './assets/images/fashion-other.jpg';
import downpng from './assets/images/download.png';
import downjpg from './assets/images/download.jpg';

// Navigation Component
const NavBar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'politics', label: 'Politics' },
    { id: 'sports', label: 'Sports' },
    { id: 'education', label: 'Education' },
    { id: 'fashion', label: 'Fashion' }
  ];

  return (
    <nav className="nav-bar">
      {navItems.map(item => (
        <a
          key={item.id}
          href="#"
          className={currentPage === item.id ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

// Header Component
const Header = ({ setCurrentPage }) => (
  <header className="header" onClick={() => setCurrentPage('home')}>
    <h1>TRACK NEWS</h1>
    <p className="tagline">Your Source for Kerala & India News</p>
  </header>
);

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  return (
    // The main grid container
    <div className="home-page">
      
      {/* 1. Main Content Column (3fr) */}
      <div className="main-content">
        
        {/* Featured Story */}
        <article className="featured-card" onClick={() => setCurrentPage('sports-article')}>
          <div className="image-wrapper">
            <img src={sportsFeaturedImg} alt="Kohli and Rohit Return" />
            <span className="category-badge sports">Sports</span>
          </div>
          <div className="card-content">
            <h2>Kohli and Rohit Return to ODI Squad Against Australia: Team India Sets Eyes on 2027 World Cup</h2>
            <p className="excerpt">In a major development that has delighted cricket fans across the nation, Virat Kohli and Rohit Sharma have been named in India's ODI squad...</p>
            <button className="read-more" onClick={(e) => { e.stopPropagation(); setCurrentPage('sports-article'); }}>
              Read Full Story →
            </button>
          </div>
        </article>
      </div>
      
      {/* 2. Sidebar - Latest News Column (2fr) */}
      <aside className="sidebar">
        <div className="sidebar-section">
          <h3 className="section-title">Latest News</h3>
          
          <article className="sidebar-card" onClick={() => setCurrentPage('fashion-article')}>
            <img src={fashionOtherImg} alt="Prithviraj Shadow Lines" />
            <div className="sidebar-content">
              <span className="category-badge fashion"></span>
              <h4>Malayalam Star Prithviraj Returns with Big-Budget Thriller "Shadow Lines"</h4>
              <button className="read-more-small" onClick={(e) => { e.stopPropagation(); setCurrentPage('fashion-article'); }}>
                Read more →
              </button>
            </div>
          </article>
        </div>
      </aside>

      {/* 3. FULL-WIDTH SECTIONS (Spanning both columns) */}
      {/* This new div uses grid-column: 1 / -1; in the CSS to span the whole width */}
      <div className="full-width-sections">
        {/* Top Stories Section - Horizontal */}
        <section className="top-stories-section">
          <h2>📰 Top Stories</h2>
          <div className="top-stories-scroll">
            <article className="horizontal-card" onClick={() => setCurrentPage('politics-article')}>
              <img src={politicsSecondaryImg} alt="Kerala Elections" />
              <div className="horizontal-content">
                <span className="category-badge politics"></span>
                <h4>Political Tensions Rise in Kerala Ahead of Local Body Elections</h4>
                <button className="read-more-small" onClick={(e) => { e.stopPropagation(); setCurrentPage('politics-article'); }}>
                  Read more →
                </button>
              </div>
            </article>

            <article className="horizontal-card" onClick={() => setCurrentPage('education-article')}>
              <img src={educationSecondaryImg} alt="Smart Classroom" />
              <div className="horizontal-content">
                <span className="category-badge education"></span>
                <h4>Kerala Schools Face Digital Divide Despite Smart Classroom Revolution</h4>
                <button className="read-more-small" onClick={(e) => { e.stopPropagation(); setCurrentPage('education-article'); }}>
                  Read more →
                </button>
              </div>
            </article>
             {/* Added more placeholder cards for horizontal scroll visibility */}
            <article className="horizontal-card" onClick={() => setCurrentPage('politics-article')}>
              <img src={downpng} alt="Kerala Elections" />
              <div className="horizontal-content">
                <span className="category-badge politics"></span>
                <h4>Local Body Polls: Alliance Talks Heat Up</h4>
                <button className="read-more-small" onClick={(e) => { e.stopPropagation(); setCurrentPage(''); }}>
                  Read more →
                </button>
              </div>
            </article>
             <article className="horizontal-card" onClick={() => setCurrentPage('education-article')}>
              <img src={downjpg} alt="Smart Classroom" />
              <div className="horizontal-content">
                <span className="category-badge education"></span>
                <h4>New University Reforms Announced</h4>
                <button className="read-more-small" onClick={(e) => { e.stopPropagation(); setCurrentPage(''); }}>
                  Read more →
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Video Section - Horizontal Scrollable */}
        <section className="video-section">
          <h2>🎬 Video Stories</h2>
          <div className="video-scroll">
            <div className="video-card">
              <iframe src="https://www.youtube.com/embed/1wECsnGZcfc" title="24 News Live TV" frameBorder="0" allowFullScreen></iframe>
              <p className="video-title">24 News Live TV | Malayalam News Live</p>
            </div>
            <div className="video-card">
              <iframe src="https://www.youtube.com/embed/tXRuaacO-ZU" title="Asianet News Live" frameBorder="0" allowFullScreen></iframe>
              <p className="video-title">Asianet News Live | Kerala News Live</p>
            </div>
            <div className="video-card">
              <iframe src="https://www.youtube.com/embed/tgBTspqA5nY" title="Manorama News Live" frameBorder="0" allowFullScreen></iframe>
              <p className="video-title">Manorama News Live | മലയാളം ന്യൂസ് ലൈവ്</p>
            </div>
            <div className="video-card">
              <iframe src="https://www.youtube.com/embed/yiiqRHY1Bl8" title="Kairali News Live" frameBorder="0" allowFullScreen></iframe>
              <p className="video-title">Kairali News Live | കൈരളി ന്യൂസ് ലൈവ്</p>
            </div>
          </div>
        </section>
      </div> {/* End full-width-sections */}

    </div>
  );
};

// Category Pages
const PoliticsPage = () => (
  <div className="category-page">
    <h2>🇮🇳 Politics</h2>
    <p>Welcome to the Politics section. Explore our latest political news and analysis from Kerala and across India.</p>
  </div>
);

const SportsPage = () => (
  <div className="category-page">
    <h2>🏏 Sports</h2>
    <p>Welcome to the Sports section. Get the latest updates on cricket, football, and other sports.</p>
  </div>
);

const EducationPage = () => (
  <div className="category-page">
    <h2>📚 Education</h2>
    <p>Welcome to the Education section. Stay informed about educational developments and policies.</p>
  </div>
);

const FashionPage = () => (
  <div className="category-page">
    <h2>🎬 Fashion & Entertainment</h2>
    <p>Welcome to the Fashion & Entertainment section. Discover the latest in cinema, fashion, and culture.</p>
  </div>
);

// Article Pages
const PoliticsArticle = ({ setCurrentPage }) => (
  <article className="article-page">
    <button className="back-button" onClick={() => setCurrentPage('home')}>← Back to Home</button>
    <span className="category-badge politics"></span>
    <h1>Political Tensions Rise in Kerala Ahead of Local Body Elections</h1>
    <div className="article-meta">
      <span>📍 Thiruvananthapuram</span>
      <span>📅 October 18, 2025</span>
    </div>
    <img src={politicsSecondaryImg} alt="Political Rally" className="article-image" />
    
    <div className="article-content">
      <p className="lead">As Kerala gears up for the upcoming local body elections, the political atmosphere in the state has grown increasingly charged.</p>
      
      <p>The major political parties — the Communist Party of India (Marxist)-led Left Democratic Front (LDF), the Indian National Congress-led United Democratic Front (UDF), and the Bharatiya Janata Party (BJP) — are all vying for control of the state's grassroots governance structures.</p>
      
      <p>The LDF, which currently holds power in the state government, is seeking to maintain its dominance in local bodies, while the UDF aims to reclaim lost ground. The BJP, though traditionally a minor player in Kerala politics, has been making inroads and hopes to expand its footprint at the local level.</p>
      
      <p>Campaign rallies, political debates, and door-to-door canvassing have intensified across the state. Key issues dominating the discourse include unemployment, development projects, healthcare infrastructure, and the management of natural resources.</p>
      
      <p>Political analysts suggest that these elections will serve as a crucial indicator of public sentiment ahead of the next state assembly elections. With all parties deploying their top leaders and strategists, the battle for Kerala's local bodies promises to be fiercely contested.</p>
    </div>
  </article>
);

const SportsArticle = ({ setCurrentPage }) => (
  <article className="article-page">
    <button className="back-button" onClick={() => setCurrentPage('home')}>← Back to Home</button>
    <span className="category-badge sports">Sports</span>
    <h1>Kohli and Rohit Return to ODI Squad Against Australia: Team India Sets Eyes on 2027 World Cup</h1>
    <div className="article-meta">
      <span>📍 Mumbai</span>
      <span>📅 October 18, 2025</span>
    </div>
    <img src={sportsFeaturedImg} alt="Virat Kohli and Rohit Sharma" className="article-image" />
    
    <div className="article-content">
      <p className="lead">In a major development that has delighted cricket fans across the nation, Virat Kohli and Rohit Sharma have been named in India's ODI squad for the upcoming series against Australia.</p>
      
      <p>The Board of Control for Cricket in India (BCCI) announced the squad today, with Rohit Sharma retaining the captaincy and Virat Kohli returning to the middle order. The duo, who have been instrumental in India's success in limited-overs cricket over the past decade, bring a wealth of experience and leadership to the team.</p>
      
      <p>The five-match ODI series against Australia is scheduled to begin next month and will serve as a crucial testing ground for India's World Cup aspirations. The team management has indicated that they will be experimenting with different combinations while ensuring that the core group of experienced players remains intact.</p>
      
      <p>Young talents such as Shubman Gill, Yashasvi Jaiswal, and Rinku Singh have also been included in the squad, signaling a blend of youth and experience. The selectors have made it clear that the focus is on building a balanced team capable of performing under pressure on the global stage.</p>
      
      <p>Cricket experts believe that the return of Kohli and Rohit adds immense value to the squad, not just in terms of their batting prowess but also their ability to mentor younger players. With the 2027 World Cup on the horizon, all eyes will be on how this team shapes up in the coming months.</p>
    </div>
  </article>
);

const EducationArticle = ({ setCurrentPage }) => (
  <article className="article-page">
    <button className="back-button" onClick={() => setCurrentPage('home')}>← Back to Home</button>
    <span className="category-badge education"></span>
    <h1>Kerala Schools Face Digital Divide Despite Smart Classroom Revolution</h1>
    <div className="article-meta">
      <span>📍 Thiruvananthapuram</span>
      <span>📅 October 18, 2025</span>
    </div>
    <img src={educationSecondaryImg} alt="Digital Classroom" className="article-image" />
    
    <div className="article-content">
      <p className="lead">Kerala, long celebrated for its high literacy rate and progressive educational model, is now confronting a new challenge — the digital divide.</p>
      
      <p>While the state government has launched ambitious initiatives to introduce smart classrooms and digital learning tools across schools, significant disparities remain between urban and rural areas.</p>
      
      <p>In major cities like Thiruvananthapuram, Kochi, and Kozhikode, schools have successfully integrated technology into their curricula. Students have access to tablets, interactive whiteboards, and high-speed internet, enabling a more engaging and modern learning experience. However, in remote villages and economically disadvantaged regions, many schools still lack basic digital infrastructure.</p>
      
      <p>Teachers in rural areas report that inadequate internet connectivity, power outages, and lack of training in digital pedagogy are major obstacles. Additionally, many students from low-income families do not have personal devices, making it difficult for them to participate in online learning activities.</p>
      
      <p>Education experts have called on the government to bridge this gap by investing in rural digital infrastructure, providing affordable devices to students, and conducting comprehensive training programs for teachers. They emphasize that without addressing these disparities, Kerala risks creating a two-tier education system that could undermine its reputation as a leader in education.</p>
      
      <p>The state education minister has acknowledged these concerns and announced plans to expand digital literacy programs and improve connectivity in underserved areas. However, stakeholders stress that sustained effort and significant funding will be required to truly democratize digital education across Kerala.</p>
    </div>
  </article>
);

const FashionArticle = ({ setCurrentPage }) => (
  <article className="article-page">
    <button className="back-button" onClick={() => setCurrentPage('home')}>← Back to Home</button>
    <span className="category-badge fashion"></span>
    <h1>Malayalam Star Prithviraj Returns with Big-Budget Thriller "Shadow Lines"</h1>
    <div className="article-meta">
      <span>📍 Thiruvananthapuram</span>
      <span>📅 October 18, 2025</span>
    </div>
    <img src={fashionOtherImg} alt="Prithviraj Sukumaran" className="article-image" />
    
    <div className="article-content">
      <p className="lead">Malayalam cinema fans have reason to celebrate as Prithviraj Sukumaran makes his much-anticipated comeback with the high-budget thriller "Shadow Lines".</p>
      
      <p>Directed by acclaimed filmmaker Jeethu Joseph, the film promises to be a game-changer for the industry with its gripping storyline, stunning visuals, and stellar cast.</p>
      
      <p>"Shadow Lines" follows the story of an intelligence officer who uncovers a dangerous conspiracy that threatens national security. The film has been shot across multiple international locations, including Dubai, London, and Bangkok, giving it a truly global appeal. Prithviraj, known for his intense performances and dedication to his craft, has reportedly undergone rigorous training for the action sequences.</p>
      
      <p>The film's teaser, released last week, has already garnered millions of views and created a buzz on social media. Fans have praised the production quality and the film's ambitious scale, comparing it to some of the biggest blockbusters in Indian cinema.</p>
      
      <p>In addition to Prithviraj, the film features a talented ensemble cast including Parvathy Thiruvothu, Indrajith Sukumaran, and Bollywood actor Manoj Bajpayee in a pivotal role. The music, composed by Sushin Shyam, has also received widespread acclaim.</p>
      
      <p>"Shadow Lines" is set to release in theaters nationwide next month, and industry insiders predict it could be one of the highest-grossing Malayalam films of the year. With its compelling narrative and top-notch production values, the film is expected to appeal to audiences beyond Kerala and establish Malayalam cinema as a major force in Indian filmmaking.</p>
    </div>
  </article>
);

// Footer Component
const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName.trim() && formData.lastName.trim() && formData.message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', message: '' });
      }, 3000);
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>About TRACK NEWS</h2>
          <p>TRACK NEWS is a comprehensive news platform dedicated to bringing you the latest stories from Kerala and across India. Covering politics, sports, education, and entertainment, we strive to keep you informed and engaged.</p>
          <p className="credit">Created as part of Production Portfolio - MJML-020 | MAJMC Student Project</p>
        </div>

        <div className="footer-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="First name" 
              required 
            />
            <input 
              type="text" 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Last name" 
              required 
            />
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Your message" 
              rows="4"
              required
            />
            <button type="submit" className="submit-btn">
              {submitted ? '✓ Submitted!' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 TRACK NEWS. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'politics': return <PoliticsPage />;
      case 'politics-article': return <PoliticsArticle setCurrentPage={setCurrentPage} />;
      case 'sports': return <SportsPage />;
      case 'sports-article': return <SportsArticle setCurrentPage={setCurrentPage} />;
      case 'education': return <EducationPage />;
      case 'education-article': return <EducationArticle setCurrentPage={setCurrentPage} />;
      case 'fashion': return <FashionPage />;
      case 'fashion-article': return <FashionArticle setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <style>{`* {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f5f5f5;
          color: #333;
          line-height: 1.6;
          /* FIX: Prevents page-level horizontal scroll from content overflow */
          overflow-x: hidden; 
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #8b0000 0%, #a00000 100%);
          color: white;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .header h1 {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: 4px;
          margin-bottom: 5px;
        }

        .header .tagline {
          font-size: 14px;
          opacity: 0.9;
          letter-spacing: 1px;
        }

        /* Navigation Styles */
        .nav-bar {
          background-color: #1a1a1a;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-bar a {
          color: white;
          text-decoration: none;
          padding: 15px 25px;
          display: inline-block;
          transition: all 0.3s ease;
          font-weight: 500;
          border-bottom: 3px solid transparent;
        }

        .nav-bar a:hover,
        .nav-bar a.active {
          background-color: #8b0000;
          border-bottom-color: white;
        }

        /* Home Page Layout - UPDATED GRID */
        .home-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 30px 20px;
          display: grid;
          /* Defined 2 columns (e.g., 3 units for main, 2 units for sidebar) */
          grid-template-columns: 3fr 2fr;
          gap: 30px;
        }

        /* NEW: Class to make elements span all columns */
        .full-width-sections {
          /* Spans from the first column line to the last column line */
          grid-column: 1 / -1; 
          margin-top: 20px;
        }
        
        /* FIX: Ensures the main content column respects its grid width */
        .main-content {
          min-width: 0; 
        }

        /* Featured Card */
        .featured-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .featured-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
        }

        /* Featured Image - Focus Top, Fine-tuned Height */
        .featured-card img {
          width: 100%;
          height: 320px; 
          object-fit: cover;
          object-position: top;
          transition: all 0.3s ease;
        }

        .featured-card:hover img {
          transform: none; 
        }

        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: white;
        }

        .category-badge.sports { background-color: #ff6b35; }
        .category-badge.politics { background-color: #1a5490; }
        .category-badge.education { background-color: #2d8016; }
        .category-badge.fashion { background-color: #8b2d6b; }

        .card-content {
          padding: 25px;
        }

        .featured-card h2 {
          color: #1a1a1a;
          font-size: 28px;
          line-height: 1.3;
          margin-bottom: 15px;
        }

        .excerpt {
          color: #666;
          font-size: 16px;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .read-more {
          background-color: #8b0000;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .read-more:hover {
          background-color: #a00000;
        }

        /* --- Horizontal Scroll Section Styles --- */

        /* Horizontal Scroll Containers */
        .top-stories-scroll,
        .video-scroll {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 20px;
          padding-bottom: 10px; 
          -webkit-overflow-scrolling: touch;
        }

        /* Webkit Scrollbar Styling (Optional but recommended for visual appeal) */
        .top-stories-scroll::-webkit-scrollbar,
        .video-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .top-stories-scroll::-webkit-scrollbar-thumb,
        .video-scroll::-webkit-scrollbar-thumb {
            background-color: #8b0000;
            border-radius: 4px;
        }

        /* Horizontal Story Card - ENLARGED WIDTH */
        .horizontal-card {
          flex: 0 0 380px; 
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        /* Horizontal Card Image - Focus Top */
        .horizontal-card img {
          width: 100%;
          height: 180px; 
          object-fit: cover;
          object-position: top;
          transition: opacity 0.3s ease;
        }

        .horizontal-content {
          padding: 15px;
        }

        .horizontal-content h4 {
          color: #1a1a1a;
          font-size: 18px;
          line-height: 1.4;
          margin: 10px 0;
        }

        /* Video Card - ENLARGED WIDTH */
        .video-card {
          flex: 0 0 400px; 
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          padding: 15px;
        }

        .video-card iframe {
          width: 100%;
          height: 200px;
          border-radius: 8px;
        }
        
        /* --- End Horizontal Scroll Section Styles --- */


        /* Sidebar */
        .sidebar {
          padding-left: 30px;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .sidebar-section {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .section-title {
          color: #8b0000;
          font-size: 20px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }

        .sidebar-card {
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 0; 
          cursor: pointer;
          transition: transform 0.3s ease;
          height: 100%;
        }

        .sidebar-card:last-child {
          margin-bottom: 0;
        }

        .sidebar-card:hover {
          transform: translateX(5px);
        }

        /* Sidebar Image - Focus Top, ENLARGED HEIGHT */
        .sidebar-card img {
          width: 100%;
          height: 320px; 
          object-fit: cover;
          object-position: top;
        }

        .sidebar-content {
          padding: 15px;
        }

        .sidebar-content h4 {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 1.4;
          margin: 10px 0;
        }

        .read-more-small {
          background: none;
          border: none;
          color: #8b0000;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          font-size: 14px;
        }

        /* Category Pages */
        .category-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .category-page h2 {
          color: #8b0000;
          font-size: 36px;
          margin-bottom: 15px;
        }

        .category-page p {
          font-size: 18px;
          color: #666;
        }

        /* Article Pages */
        .article-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .back-button {
          display: inline-block;
          margin-bottom: 20px;
          padding: 10px 20px;
          background-color: #8b0000;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .back-button:hover {
          background-color: #a00000;
        }

        .article-page h1 {
          color: #1a1a1a;
          font-size: 36px;
          line-height: 1.3;
          margin: 15px 0 20px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          color: #888;
          font-size: 14px;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }

        /* Article Image - Focus Top */
        .article-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          object-position: top;
          border-radius: 8px;
          margin-bottom: 30px;
        }

        .article-content {
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }

        .article-content .lead {
          font-size: 22px;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 25px;
        }

        .article-content p {
          margin-bottom: 20px;
          text-align: justify;
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: white;
          margin-top: auto;
          padding: 50px 0 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 40px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
        }

        .footer-about h2 {
          font-size: 28px;
          margin-bottom: 15px;
          color: #fff;
        }

        .footer-about p {
          line-height: 1.8;
          color: #ccc;
          margin-bottom: 15px;
        }

        .credit {
          font-size: 14px;
          font-style: italic;
          color: #999;
        }

        .footer-form h3 {
          font-size: 22px;
          margin-bottom: 20px;
        }

        .footer-form input,
        .footer-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #444;
          background-color: #2a2a2a;
          color: white;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
        }

        .footer-form input:focus,
        .footer-form textarea:focus {
          outline: none;
          border-color: #8b0000;
        }

        .footer-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #8b0000;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #a00000;
        }

        .footer-bottom {
          background-color: #0f0f0f;
          text-align: center;
          padding: 20px;
          color: #888;
          font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .home-page {
            grid-template-columns: 1fr;
          }

          /* Full-width sections shouldn't span grid on single column layout */
          .full-width-sections {
              grid-column: auto;
          }

          .featured-card img {
            height: 300px;
          }
          
          /* Adjust sidebar card height for mobile/tablet */
          .sidebar-card img {
             height: 180px; 
          }
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 32px;
            letter-spacing: 2px;
          }

          .nav-bar {
            flex-wrap: wrap;
          }

          .nav-bar a {
            padding: 12px 15px;
            font-size: 14px;
          }

          .home-page {
            padding: 20px 15px;
          }

          .featured-card h2 {
            font-size: 22px;
          }

          .featured-card img,
          .article-image {
            height: 250px;
          }

          .article-page h1 {
            font-size: 28px;
          }

          .article-content {
            font-size: 16px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 24px;
          }

          .header .tagline {
            font-size: 12px;
          }

          .nav-bar a {
            padding: 10px 12px;
            font-size: 13px;
          }

          .featured-card h2 {
            font-size: 20px;
          }

          .card-content {
            padding: 15px;
          }

          .article-page {
            padding: 20px 15px;
          }

          .article-page h1 {
            font-size: 24px;
          }
        }
      `}</style>

      <Header setCurrentPage={setCurrentPage} />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}