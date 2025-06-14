import { useState } from "react";
function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className="background-color">
      <div className="background-color-card">
        <div>
          <img src="images/illustration-article.svg" alt="Article Illustration" className="card-img"/>
        </div>
        <span className="badge-learning-container">Learning</span>
        <p className="date">Published 21 Dec 2023</p>
        <h1
          className="card-title"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ color: isHovered ? "hsl(47, 88%, 63%)" : "black", cursor: "pointer" }}
          onClick={() => window.location.href = "https://www.linkedin.com/in/andrea-junes/"}
        >HTML & CSS foundations</h1>
         <p className="card-description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="author">
            <img src="images/image-avatar.webp" alt="Avatar of Greg Hooper" className="avatar" />
            <span className="name">Greg Hooper</span>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
