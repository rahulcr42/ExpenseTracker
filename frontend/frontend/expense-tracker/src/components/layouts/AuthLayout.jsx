import React from "react";
import CARD from "../../assets/images/card.png";
import { LuTrendingUpDown } from "react-icons/lu";

// Optional: Dummy StatsInfoCard Component (You can replace this with your actual one)
const StatsInfoCard = ({ icon, label, value, color }) => (
  <div className={`p-4 rounded-lg shadow-md ${color} text-white`}>
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-sm font-medium">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Side: Auth Form */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 flex flex-col justify-center">
        <h2 className="text-lg font-medium text-black mb-6">Expense Tracker</h2>
        {children}
      </div>

      {/* Right Side: Visual Side */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-100 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute top-7 left-7 z-0" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-36 right-6 z-0" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute bottom-7 left-16 z-0" />

        {/* Stats Card */}
        <div className="grid grid-cols-1 gap-6 p-10 relative z-10">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="₹430,808"
            color="bg-violet-500"
          />
        </div>

        {/* Card Image */}
        <img
          src={CARD}
          alt="Expense Illustration"
          className="w-64 lg:w-[90%] absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 shadow-lg shadow-blue-400/10"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

