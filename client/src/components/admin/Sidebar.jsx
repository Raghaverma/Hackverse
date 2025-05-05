import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Mentors', path: '/admin/mentors' },
    { name: 'Participants', path: '/admin/participants' },
    { name: 'Teams', path: '/admin/teams' },
    { name: 'Submissions', path: '/admin/submissions' },
    { name: 'Announcements', path: '/admin/announcements' },
    { name: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">Admin Panel</div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-700 ${
              isActive(item.path) ? 'bg-gray-700' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;