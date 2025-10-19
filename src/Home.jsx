import {useNavigate} from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-yellow-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Welcome to the Leaderboard App
        </h1>
        <button onClick={() => navigate("/leaderboard")} className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors">
          View Leaderboard →
        </button>
      </div>
    </div>
  );
}

export default Home;
