import Header from "./Components/Header";

function App() {
  const resumeUrl = process.env.PUBLIC_URL + '/files/Chandru.pdf';
  const driveLink = "https://drive.google.com/uc?id=1MPzsmegnK0Na9ZXuxbpapP8XAwxztNEC";
  return (
    <div className="bg-black h-screen">
      <Header/>
      <div className="text-white px-5 font-mono fixed w-full text-center">
      Download my resume - <a className="text-blue-400" href={driveLink} target="_blank" rel="noreferrer noopener" download="your-file-name.pdf">here!!</a>
      </div>
    </div>
  );
}

export default App;
