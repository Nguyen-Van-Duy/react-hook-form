import "./App.css";
import { Routes, Route, Link } from "react-router-dom"
import { RHFYouTubeForm } from "./components/RHFYouTubeForm";
import { YupYouTubeForm } from "./components/YupYouTubeForm";
import { ZodYouTubeForm } from "./components/ZodYouTubeForm";
import { LoginForm } from "./components/MuiLoginForm";
import { YouTubeForm } from "./components/YouTubeForm";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="ZodYouTubeForm">ZodYouTubeForm</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<YouTubeForm />} />
        <Route path="ZodYouTubeForm" element={<ZodYouTubeForm />} />
        <Route path="" element={<YouTubeForm />} />
        <Route path="" element={<YouTubeForm />} />
      </Routes>
      {/* <RHFYouTubeForm /> */}
      {/* <YupYouTubeForm /> */}
      {/* <ZodYouTubeForm /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
