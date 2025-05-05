// src/components/admin/Topbar.jsx
const Topbar = () => {
  return (
    <header className="bg-white shadow-md w-full h-16 px-6 flex items-center justify-end fixed left-64 top-0 z-10">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">🔔</button>
        <div className="text-sm text-gray-700">Admin</div>
      </div>
    </header>
  );
};

export default Topbar;
