import Header from "./Components/Header";

function App() {
  const resumeUrl = process.env.PUBLIC_URL + '/files/Chandru.pdf';
  return (
    <div className="bg-black h-screen">
      <Header/>
      <div className="text-white px-5 font-mono fixed w-full text-center">
      Download my resume - <a className="text-blue-400" href={resumeUrl} download="resume.pdf">here!!</a>
      </div>
    </div>
  );
}

export default App;
