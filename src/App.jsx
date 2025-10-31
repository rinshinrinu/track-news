import React, { useState, useEffect } from 'react';

// 1. IMPORT LOCAL IMAGES
import sportsFeaturedImg from './assets/images/sports-featured.jpg'; 
import politicsSecondaryImg from './assets/images/politics-secondary.jpg';
import educationSecondaryImg from './assets/images/education-secondary.jpg';
import fashionOtherImg from './assets/images/fashion-other.jpg';


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
    <div className="nav-bar">
      {navItems.map(item => (
        <a
          key={item.id}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

// Header Component
const Header = ({ setCurrentPage }) => (
  <div className="header" onClick={() => setCurrentPage('home')}>
    <h1>TRACK NEWS</h1>
  </div>
);

// ⭐️ REFACTORED HOME PAGE COMPONENT: Uses Main and Sidebar columns
const HomePage = ({ setCurrentPage }) => {
  return (
    <div id="home-page" className="page-content active">
      
      {/* ⭐️ MAIN COLUMN: Featured Story + Video Section (70% Width) */}
      <div className="main-column">
        
        {/* Main Featured News */}
        <div className="main-featured-card" onClick={() => setCurrentPage('sports-article')}>
          <img 
            src={sportsFeaturedImg} 
            alt="Kohli and Rohit Return" 
            onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Virat+Kohli+and+Rohit+Sharma'}
          />
          <div className="card-content">
            <h3>Kohli and Rohit Return to ODI Squad Against Australia: Team India Sets Eyes on 2027 World Cup</h3>
            <a href="#" onClick={(e) => { e.stopPropagation(); setCurrentPage('sports-article'); }}>...read more</a>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-scroll-section">
          <h2>🎬 Video Previews</h2>
          <div className="video-scroll-container">
            <div className="video-item">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video 1" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="video-item">
              <iframe src="https://www.youtube.com/embed/EE-MSd0N67Q" title="YouTube video 2" frameBorder="0" allowFullScreen></iframe>
          </div>
            <div className="video-item">
              <iframe src="https://www.youtube.com/embed/Fw0S4sQc1uY" title="YouTube video 3" frameBorder="0" allowFullScreen></iframe>
          </div>
            <div className="video-item">
              <iframe src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video 4" frameBorder="0" allowFullScreen></iframe>
          </div>
          </div>
        </div>
      </div>
      
      {/* ⭐️ SIDEBAR COLUMN: Secondary + Other News (30% Width) */}
      <div className="sidebar-column">
        
        {/* Secondary News Row (Stacked vertically by CSS in sidebar) */}
        <div className="secondary-news-row">
          <div className="secondary-news-card" onClick={() => setCurrentPage('politics-article')}>
            <img 
              src={politicsSecondaryImg} 
              alt="Kerala Elections"
              onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Kerala+Elections'}
            />
            <div className="card-content">
              <h3>Political Tensions Rise in Kerala Ahead of Local Body Elections</h3>
              <a href="#" onClick={(e) => { e.stopPropagation(); setCurrentPage('politics-article'); }}>...read more</a>
            </div>
          </div>

          <div className="secondary-news-card" onClick={() => setCurrentPage('education-article')}>
            <img 
              src={educationSecondaryImg} 
              alt="Smart Classroom"
              onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Smart+Classroom'}
            />
            <div className="card-content">
              <h3>Kerala Schools Face Digital Divide Despite Smart Classroom Revolution</h3>
              <a href="#" onClick={(e) => { e.stopPropagation(); setCurrentPage('education-article'); }}>...read more</a>
            </div>
          </div>
        </div>

        {/* Other News Grid (Single Card in Sidebar) */}
        <div className="other-news-grid">
          <div className="other-news-card" onClick={() => setCurrentPage('fashion-article')}>
            <img 
              src={fashionOtherImg} 
              alt="Prithviraj Shadow Lines"
              onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Prithviraj+Sukumaran'}
            />
            <div className="card-content">
              <h3>Malayalam Star Prithviraj Returns with Big-Budget Thriller "Shadow Lines"</h3>
              <a href="#" onClick={(e) => { e.stopPropagation(); setCurrentPage('fashion-article'); }}>...read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Politics Category Page
const PoliticsPage = () => (
  <div className="page-content active">
    <h2>🇮🇳 Politics Category</h2>
    <p>Welcome to the Politics section. Click on articles from the home page or navigation to read full stories.</p>
  </div>
);

// Politics Article Page
const PoliticsArticle = ({ setCurrentPage }) => (
  <div className="page-content active">
    <a href="#" className="back-button" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>← Back to Home</a>
    <h2>🇮🇳 Political News: Kerala Local Body Elections</h2>
    <img 
      src={politicsSecondaryImg} 
      alt="Political Rally"
      onError={(e) => e.target.src = 'https://via.placeholder.com/800x450?text=Kerala+Elections+Banner'}
    />
    <div className="meta">Thiruvananthapuram, October 18, 2025</div>
    <p><strong>Political Tensions Rise in Kerala Ahead of Local Body Elections</strong></p>
    <p>As Kerala gears up for the upcoming local body elections, the political atmosphere in the state has grown increasingly charged. The major political parties — the Communist Party of India (Marxist)-led Left Democratic Front (LDF), the Indian National Congress-led United Democratic Front (UDF), and the Bharatiya Janata Party (BJP) — are all vying for control of the state's grassroots governance structures.</p>
    <p>The LDF, which currently holds power in the state government, is seeking to maintain its dominance in local bodies, while the UDF aims to reclaim lost ground. The BJP, though traditionally a minor player in Kerala politics, has been making inroads and hopes to expand its footprint at the local level.</p>
    <p>Campaign rallies, political debates, and door-to-door canvassing have intensified across the state. Key issues dominating the discourse include unemployment, development projects, healthcare infrastructure, and the management of natural resources.</p>
    <p>Political analysts suggest that these elections will serve as a crucial indicator of public sentiment ahead of the next state assembly elections. With all parties deploying their top leaders and strategists, the battle for Kerala's local bodies promises to be fiercely contested.</p>
  </div>
);

// Sports Category Page
const SportsPage = () => (
  <div className="page-content active">
    <h2>🏏 Sports Category</h2>
    <p>Welcome to the Sports section. Click on articles from the home page or navigation to read full stories.</p>
  </div>
);

// Sports Article Page
const SportsArticle = ({ setCurrentPage }) => (
  <div className="page-content active">
    <a href="#" className="back-button" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>← Back to Home</a>
    <h2>🏏 Sports News: Cricket World Cup Preparations</h2>
    <img 
      src={sportsFeaturedImg} 
      alt="Virat Kohli and Rohit Sharma"
      onError={(e) => e.target.src = 'https://via.placeholder.com/800x450?text=Kohli+and+Rohit'}
    />
    <div className="meta">Mumbai, October 18, 2025</div>
    <p><strong>Kohli and Rohit Return to ODI Squad Against Australia: Team India Sets Eyes on 2027 World Cup</strong></p>
    <p>In a major development that has delighted cricket fans across the nation, Virat Kohli and Rohit Sharma have been named in India's ODI squad for the upcoming series against Australia. This marks a significant return for both veterans as India begins its preparations for the 2027 Cricket World Cup.</p>
    <p>The Board of Control for Cricket in India (BCCI) announced the squad today, with Rohit Sharma retaining the captaincy and Virat Kohli returning to the middle order. The duo, who have been instrumental in India's success in limited-overs cricket over the past decade, bring a wealth of experience and leadership to the team.</p>
    <p>The five-match ODI series against Australia is scheduled to begin next month and will serve as a crucial testing ground for India's World Cup aspirations. The team management has indicated that they will be experimenting with different combinations while ensuring that the core group of experienced players remains intact.</p>
    <p>Young talents such as Shubman Gill, Yashasvi Jaiswal, and Rinku Singh have also been included in the squad, signaling a blend of youth and experience. The selectors have made it clear that the focus is on building a balanced team capable of performing under pressure on the global stage.</p>
    <p>Cricket experts believe that the return of Kohli and Rohit adds immense value to the squad, not just in terms of their batting prowess but also their ability to mentor younger players. With the 2027 World Cup on the horizon, all eyes will be on how this team shapes up in the coming months.</p>
  </div>
);

// Education Category Page
const EducationPage = () => (
  <div className="page-content active">
    <h2>📚 Education Category</h2>
    <p>Welcome to the Education section. Click on articles from the home page or navigation to read full stories.</p>
  </div>
);

// Education Article Page
const EducationArticle = ({ setCurrentPage }) => (
  <div className="page-content active">
    <a href="#" className="back-button" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>← Back to Home</a>
    <h2>📚 Education News: Kerala's Digital Divide</h2>
    <img 
      src={educationSecondaryImg} 
      alt="Digital Classroom"
      onError={(e) => e.target.src = 'https://via.placeholder.com/800x450?text=Smart+Classroom'}
    />
    <div className="meta">Thiruvananthapuram, October 18, 2025</div>
    <p><strong>Kerala Schools Face Digital Divide Despite Smart Classroom Revolution</strong></p>
    <p>Kerala, long celebrated for its high literacy rate and progressive educational model, is now confronting a new challenge — the digital divide. While the state government has launched ambitious initiatives to introduce smart classrooms and digital learning tools across schools, significant disparities remain between urban and rural areas.</p>
    <p>In major cities like Thiruvananthapuram, Kochi, and Kozhikode, schools have successfully integrated technology into their curricula. Students have access to tablets, interactive whiteboards, and high-speed internet, enabling a more engaging and modern learning experience. However, in remote villages and economically disadvantaged regions, many schools still lack basic digital infrastructure.</p>
    <p>Teachers in rural areas report that inadequate internet connectivity, power outages, and lack of training in digital pedagogy are major obstacles. Additionally, many students from low-income families do not have personal devices, making it difficult for them to participate in online learning activities.</p>
    <p>Education experts have called on the government to bridge this gap by investing in rural digital infrastructure, providing affordable devices to students, and conducting comprehensive training programs for teachers. They emphasize that without addressing these disparities, Kerala risks creating a two-tier education system that could undermine its reputation as a leader in education.</p>
    <p>The state education minister has acknowledged these concerns and announced plans to expand digital literacy programs and improve connectivity in underserved areas. However, stakeholders stress that sustained effort and significant funding will be required to truly democratize digital education across Kerala.</p>
  </div>
);

// Fashion Category Page
const FashionPage = () => (
  <div className="page-content active">
    <h2>🎬 Fashion & Entertainment Category</h2>
    <p>Welcome to the Fashion & Entertainment section. Click on articles from the home page or navigation to read full stories.</p>
  </div>
);

// Fashion Article Page
const FashionArticle = ({ setCurrentPage }) => (
  <div className="page-content active">
    <a href="#" className="back-button" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>← Back to Home</a>
    <h2>🎬 Fashion & Entertainment: Malayalam Cinema</h2>
    <img 
      src={fashionOtherImg} 
      alt="Prithviraj Sukumaran"
      onError={(e) => e.target.src = 'https://via.placeholder.com/800x450?text=Prithviraj+Sukumaran'}
    />
    <div className="meta">Thiruvananthapuram, October 18, 2025</div>
    <p><strong>Malayalam Star Prithviraj Returns with Big-Budget Thriller "Shadow Lines"</strong></p>
    <p>Malayalam cinema fans have reason to celebrate as Prithviraj Sukumaran makes his much-anticipated comeback with the high-budget thriller "Shadow Lines". Directed by acclaimed filmmaker Jeethu Joseph, the film promises to be a game-changer for the industry with its gripping storyline, stunning visuals, and stellar cast.</p>
    <p>"Shadow Lines" follows the story of an intelligence officer who uncovers a dangerous conspiracy that threatens national security. The film has been shot across multiple international locations, including Dubai, London, and Bangkok, giving it a truly global appeal. Prithviraj, known for his intense performances and dedication to his craft, has reportedly undergone rigorous training for the action sequences.</p>
    <p>The film's teaser, released last week, has already garnered millions of views and created a buzz on social media. Fans have praised the production quality and the film's ambitious scale, comparing it to some of the biggest blockbusters in Indian cinema.</p>
    <p>In addition to Prithviraj, the film features a talented ensemble cast including Parvathy Thiruvothu, Indrajith Sukumaran, and Bollywood actor Manoj Bajpayee in a pivotal role. The music, composed by Sushin Shyam, has also received widespread acclaim.</p>
    <p>"Shadow Lines" is set to release in theaters nationwide next month, and industry insiders predict it could be one of the highest-grossing Malayalam films of the year. With its compelling narrative and top-notch production values, the film is expected to appeal to audiences beyond Kerala and establish Malayalam cinema as a major force in Indian filmmaking.</p>
  </div>
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
    // Simple client-side validation check before submission status change
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
    <div className="footer-section">
      <div className="footer-content">
        <div className="about-text">
          <h2>About TRACK NEWS</h2>
          <p>TRACK NEWS is a website designed to submit as a part of **Production portfolio of MIMC-020**. It is created by **[Your Name]**, student of MAJMC. In this website, there are five webpages related to sports, politics, education, fashion, and the home page.</p>
        </div>

        <div className="contact-form-container">
          <div> 
            <input 
              type="text" 
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              placeholder="First name:" 
              required 
            />
            <input 
              type="text" 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              placeholder="Last name:" 
              required 
            />
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="leave your message" 
              required
            />
            <button onClick={handleSubmit} className="submit-btn">
              {submitted ? 'Submitted!' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
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
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'politics':
        return <PoliticsPage />;
      case 'politics-article':
        return <PoliticsArticle setCurrentPage={setCurrentPage} />;
      case 'sports':
        return <SportsPage />;
      case 'sports-article':
        return <SportsArticle setCurrentPage={setCurrentPage} />;
      case 'education':
        return <EducationPage />;
      case 'education-article':
        return <EducationArticle setCurrentPage={setCurrentPage} />;
      case 'fashion':
        return <FashionPage />;
      case 'fashion-article':
        return <FashionArticle setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <style>{`
        /* --- Global Styles: (Kept Compact from previous revision) --- */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }

        .header {
          background-color: #8b0000;
          color: white;
          padding: 10px 0;
          text-align: center;
          cursor: pointer;
        }

        .header h1 {
          margin: 0;
          font-size: 36px;
          letter-spacing: 3px;
          font-weight: 900;
        }

        .nav-bar {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 5px 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .nav-bar a {
          color: white;
          text-decoration: none;
          padding: 8px 15px;
          display: inline-block;
          transition: background-color 0.3s, color 0.3s;
        }

        .nav-bar a:hover {
          background-color: #8b0000;
          color: #fff;
        }

        .container {
          width: 98%;
          margin: 10px auto;
          max-width: 1300px;
          min-height: 80vh;
        }

        /* --- Content & Article Page Styles (General) --- */
        .page-content {
          padding: 15px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .page-content h2 {
          color: #8b0000;
          border-bottom: 2px solid #ccc;
          padding-bottom: 10px;
          margin-bottom: 15px;
          font-size: 1.7em;
        }

        .page-content .meta {
          font-size: 0.9em;
          color: #777;
          margin-bottom: 10px;
          font-style: italic;
        }

        .page-content p {
          line-height: 1.6;
          margin-bottom: 15px;
          text-align: justify;
        }

        .page-content img {
          width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: cover;
          margin: 10px 0;
          border-radius: 5px;
          object-position: top; 
        }

        .back-button {
          display: inline-block;
          margin-bottom: 15px;
          padding: 8px 15px;
          background-color: #8b0000;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
        }

        /* --- HOME PAGE LAYOUT OPTIMIZED for SIDEBAR --- */

        #home-page {
          display: flex;
          flex-wrap: wrap;
          gap: 20px; /* Space between main content and sidebar */
        }

        /* ⭐️ MAIN CONTENT COLUMN (Featured News + Videos) */
        .main-column {
            flex: 3; /* Takes approx. 70% of the space */
            min-width: 65%;
        }

        /* ⭐️ SIDEBAR COLUMN (Secondary + Other News) */
        .sidebar-column {
            flex: 1; /* Takes approx. 30% of the space */
            min-width: 30%;
            display: flex;
            flex-direction: column; /* Stacks cards vertically */
            gap: 20px; /* Spacing between the secondary and other news sections */
        }

        /* --- Featured Card (Full Width within Main Column) --- */
        .main-featured-card {
          width: 100%;
          background-color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s;
          border-radius: 6px;
        }

        .main-featured-card:hover {
          transform: translateY(-4px);
        }

        .main-featured-card img {
          width: 100%;
          height: 350px; /* Increased height for better visual impact in the main spot */
          object-fit: cover;
          margin: 0;
          object-position: top;
        }

        .main-featured-card .card-content {
          padding: 15px;
        }

        .main-featured-card .card-content h3 {
          color: #8b0000;
          font-size: 1.8em; 
          margin-top: 0;
          line-height: 1.2;
        }

        /* --- Secondary News Cards (Stacked in Sidebar) --- */

        /* We redefine the secondary row to stack the two cards vertically in the sidebar */
        .secondary-news-row {
          display: flex;
          flex-direction: column; /* Stacking them vertically */
          gap: 15px;
          width: 100%; 
        }

        .secondary-news-card {
          background-color: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          overflow: hidden;
          cursor: pointer;
          border-radius: 6px;
        }

        .secondary-news-card:hover {
          transform: translateY(-3px);
        }

        /* Use small images for sidebar list items */
        .secondary-news-card img {
          width: 100%; 
          height: 120px; /* Small, fixed height for sidebar efficiency */
          object-fit: cover;
          margin: 0;
          object-position: center;
        }

        .secondary-news-card .card-content {
            padding: 10px;
        }

        .secondary-news-card .card-content h3 {
            color: #8b0000;
            margin-top: 0;
            font-size: 1.1em;
            line-height: 1.3;
            min-height: 0; 
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Limit to 2 lines for concise headlines */
            -webkit-box-orient: vertical;
        }
        
        .secondary-news-card .card-content a {
            display: inline-block;
            margin-top: 5px;
            font-size: 0.85em;
        }


        /* --- Other News Grid (Single Card in Sidebar) --- */
        .other-news-grid {
          width: 100%;
          display: flex; /* Now just contains the one card */
          margin-top: 0;
        }

        .other-news-card {
          width: 100%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          overflow: hidden;
          cursor: pointer;
          border-radius: 6px;
          background-color: white;
        }

        .other-news-card:hover {
          transform: translateY(-3px);
        }

        .other-news-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          margin: 0;
          object-position: center;
        }
        
        /* GENERAL CARD CONTENT (Adjusted for side-by-side view) */
        .card-content h3 {
          /* Resetting the vertical height limitation applied to main-featured-card */
          min-height: auto; 
          -webkit-line-clamp: unset;
        }


        /* --- Video Section (Remains full width of Main Column) --- */

        .video-scroll-section {
          margin-top: 25px;
          padding: 15px;
          background-color: #e9e9e9;
          border-radius: 6px;
          width: 100%; /* Important: Takes up 100% of the .main-column */
        }

        /* --- Footer and Media Queries (Kept as previously optimized) --- */

        /* --- Footer --- */
        .footer-section {
          background-color: #1a1a1a;
          color: white;
          padding: 30px 0;
          margin-top: 25px;
        }
        
        .footer-content {
          width: 95%;
          margin: 0 auto;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .about-text {
            flex: 2;
        }

        .about-text h2 {
            font-family: 'Times New Roman', serif; 
            font-style: italic;
            font-size: 32px;
            color: #ccc; 
            border-bottom: 1px solid #444;
            padding-bottom: 10px;
        }

        .about-text p {
            font-size: 1em;
            line-height: 1.7;
        }

        .contact-form-container {
            flex: 1;
            padding-top: 10px;
        }

        .contact-form-container input[type="text"],
        .contact-form-container textarea {
            width: 100%;
            padding: 12px; 
            margin-bottom: 15px; 
            border: 1px solid #444;
            background-color: #333;
            color: white;
            box-sizing: border-box;
            border-radius: 4px;
        }

        .contact-form-container textarea {
            height: 100px;
            resize: vertical;
        }

        .submit-btn {
            background-color: #8b0000;
            color: white;
            padding: 12px 15px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            display: block;
            width: 100%;
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .submit-btn:hover {
            background-color: #a00000;
        }


        /* --- Media Queries (Responsiveness) --- */

        /* Tablet/Small Desktop: Change featured image height slightly */
        @media (max-width: 1024px) {
            .main-featured-card img {
                height: 280px;
            }
        }

        /* Mobile Layout: Stack everything vertically */
        @media (max-width: 768px) {
            #home-page {
                flex-direction: column; /* Stacks main and sidebar columns */
                gap: 15px;
            }
            .main-column, .sidebar-column {
                min-width: 100%;
                flex: auto;
            }
            
            .secondary-news-row {
                flex-direction: column;
                gap: 10px;
            }

            .main-featured-card img {
                height: 200px;
            }
            .secondary-news-card img,
            .other-news-card img {
                height: 150px;
            }
            
            .footer-content {
                flex-direction: column;
            }
        }
      `}</style>

      <Header setCurrentPage={setCurrentPage} />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="container">
        {renderPage()}
      </div>

      <Footer />
    </div>
  );
}