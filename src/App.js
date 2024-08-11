import { useEffect, useState } from "react";
import Header from "./Components/Header";

function App() {
  const [visitCount, setVisitCount] = useState(0);
  const resumeUrl = process.env.PUBLIC_URL + '/files/Chandru.pdf';
  const driveLink = "https://drive.google.com/file/d/1MPzsmegnK0Na9ZXuxbpapP8X/view";

  useEffect(() => {
    // Check if the user has visited before using localStorage
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Increment the visit count in localStorage if the user hasn't visited before
      const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
      const newCount = currentCount + 1;
      localStorage.setItem('visitCount', newCount.toString());
      localStorage.setItem('hasVisited', 'true');
      setVisitCount(newCount);
    } else {
      // If the user has visited before, just retrieve the current visit count
      const currentCount = parseInt(localStorage.getItem('visitCount'), 10);
      setVisitCount(currentCount);
    }
  }, []);

  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="text-white px-5 font-mono fixed w-full text-center">
        Download my resume - <a className="text-blue-400" href={driveLink}>here!!</a>
        <div>
          The page has been visited {visitCount} times.
        </div>
      </div>
    </div>
  );
}

export default App;
