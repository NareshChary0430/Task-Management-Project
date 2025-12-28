import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {


  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          Task Manager
        </h1>

        <p className="mt-4 max-w-xl text-gray-300 text-lg">
          Organize your tasks, track progress, and stay productive every day.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition active:scale-95" onClick={()=>navigate("/add")}>
            Add Task
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition active:scale-95" onClick={()=>navigate("/view")}>
            View Tasks
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      {/* <section className="mt-32 px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our App?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">📝 Easy Task Creation</h3>
            <p className="text-gray-300">
              Quickly create and manage tasks with a simple interface.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">⏰ Track Progress</h3>
            <p className="text-gray-300">
              Monitor completed and pending tasks in real-time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Boost Productivity</h3>
            <p className="text-gray-300">
              Stay focused and finish tasks faster every day.
            </p>
          </div>

        </div>
      </section> */}


    </div>
  );
};

export default Home;
