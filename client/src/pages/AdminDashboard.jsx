import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { FaUsers, FaClipboardList, FaGavel, FaChartBar, FaComments, FaCalendarAlt, FaCogs, FaLifeRing, FaBook, FaShieldAlt, FaSun, FaMoon, FaPlus } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const sections = [
  { label: 'User & Team Management', icon: <FaUsers /> },
  { label: 'Submission Monitoring', icon: <FaClipboardList /> },
  { label: 'Judging Panel Control', icon: <FaGavel /> },
  { label: 'Hackathon Overview & Analytics', icon: <FaChartBar /> },
  { label: 'Communication Center', icon: <FaComments /> },
  { label: 'Event Management', icon: <FaCalendarAlt /> },
  { label: 'Settings & Permissions', icon: <FaCogs /> },
  { label: 'Support Tickets / Issues', icon: <FaLifeRing /> },
  { label: 'Resource Hub', icon: <FaBook /> },
  { label: 'Security Logs / Audit Trail', icon: <FaShieldAlt /> },
];

const adminName = 'Admin';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(sections[0].label);
  const [darkMode, setDarkMode] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showMentorModal, setShowMentorModal] = useState(false);

  // Sample CSV data
  const csvData = [
    ['Name', 'Email', 'Status', 'Track', 'Year'],
    ['Alice', 'alice@email.com', 'Approved', 'AI', '3'],
    ['Bob', 'bob@email.com', 'Pending', 'Web', '2'],
    ['Charlie', 'charlie@email.com', 'Rejected', 'IoT', '4'],
  ];

  function handleExportCSV() {
    const csvContent = csvData.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'participants.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleApprove() {
    alert('Submission approved!');
  }
  function handleReject() {
    alert('Submission rejected.');
  }
  function handleAssignMentor() {
    setShowMentorModal(true);
  }
  function handleDisqualify() {
    if (window.confirm('Are you sure you want to disqualify this team?')) {
      alert('Team disqualified.');
    }
  }
  function closeMentorModal() {
    setShowMentorModal(false);
  }

  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-[#18181b] text-white' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-foreground'}`}>
      {/* Sidebar */}
      <aside className={`sticky top-0 h-screen w-64 z-20 flex flex-col py-10 px-6 shadow-2xl border-r border-border bg-gradient-to-b from-blue-100/80 via-white/90 to-blue-50/80 ${darkMode ? 'bg-[#23263a] border-[#23263a]' : ''}`}>
        <div className="flex items-center gap-3 mb-12">
          <FaShieldAlt className="text-primary text-3xl" />
          <span className="text-2xl font-extrabold text-primary tracking-tight">Admin</span>
        </div>
        <nav className="flex-1 flex flex-col gap-2 justify-center">
          {sections.map((section) => (
            <Button
              key={section.label}
              variant={activeSection === section.label ? 'default' : 'ghost'}
              className={`justify-start w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === section.label ? 'bg-primary text-white shadow' : 'hover:bg-blue-100/60 hover:text-primary'} ${darkMode && activeSection !== section.label ? 'hover:bg-[#23263a] hover:text-blue-300' : ''}`}
              onClick={() => setActiveSection(section.label)}
            >
              {section.icon} {section.label}
            </Button>
          ))}
        </nav>
        <div className="mt-auto pt-10 flex flex-col gap-2 border-t border-border">
          <Button variant="outline" className="w-full flex items-center gap-2 justify-center mt-4" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-0 md:py-12 md:px-14 relative overflow-y-auto flex flex-col min-h-screen">
        {/* Topbar */}
        <div className={`sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur border-b border-border shadow-sm ${darkMode ? 'bg-[#23263a]/90 text-white' : ''}`}>
          <div className="text-lg font-semibold tracking-tight flex items-center h-full">Welcome, {adminName}</div>
          <div className="flex gap-3 items-center">
            <Button variant="outline">Profile</Button>
            <Button variant="destructive" onClick={() => { logout(); navigate('/login'); }}>Logout</Button>
          </div>
        </div>

        {/* Section Content */}
        <div className="max-w-7xl mx-auto w-full flex-1 px-2 md:px-0">
          <div className="h-10" /> {/* Increased spacer between topbar and content */}
          {activeSection === 'User & Team Management' && (
            <section>
              <h3 className="text-3xl font-extrabold mb-10 text-primary flex items-center gap-3 tracking-tight">{sections[0].icon} User & Team Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 items-stretch">
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-col h-full">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaUsers /> Participants List</h4>
                  <input className="w-full mb-3 p-2 border border-border rounded" placeholder="Filter by status, track, year..." />
                  <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Participants Table]</div>
                  <Button className="mt-4 w-full" onClick={handleExportCSV}>Export CSV</Button>
                </div>
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-col h-full">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaUsers /> Team Overview</h4>
                  <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Teams Table]</div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1" onClick={handleAssignMentor}>Assign Mentor</Button>
                    <Button variant="destructive" className="flex-1" onClick={handleDisqualify}>Disqualify Team</Button>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-row gap-6 items-center justify-center max-w-2xl mx-auto mt-4">
                <Button className="w-full md:w-auto" onClick={handleApprove}>Approve Submission</Button>
                <Button variant="destructive" className="w-full md:w-auto" onClick={handleReject}>Reject Submission</Button>
              </div>
            </section>
          )}
          {activeSection === 'Submission Monitoring' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaClipboardList /> Submission Monitoring</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <input className="w-full mb-3 p-2 border border-border rounded" placeholder="Filter by track, status, score..." />
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Live Submission Tracker Table]</div>
              </div>
            </section>
          )}
          {activeSection === 'Judging Panel Control' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaGavel /> Judging Panel Control</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Judge Assignment Table]</div>
                <Button className="mt-4 w-full">Export Scores</Button>
              </div>
            </section>
          )}
          {activeSection === 'Hackathon Overview & Analytics' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaChartBar /> Hackathon Overview & Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-col items-center">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaChartBar /> Participant Stats</h4>
                  <div className="h-36 w-full bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Bar/Line Chart]</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-col items-center">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaChartBar /> Track Distribution</h4>
                  <div className="h-36 w-full bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Pie Chart]</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border flex flex-col items-center mb-10">
                <h4 className="font-semibold mb-3 flex items-center gap-2"><FaChartBar /> Live Activity</h4>
                <div className="h-36 w-full bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Heatmap/Timeline]</div>
              </div>
            </section>
          )}
          {activeSection === 'Communication Center' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaComments /> Communication Center</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaComments /> Send Announcement</h4>
                  <textarea className="w-full mb-3 p-2 border border-border rounded" placeholder="Type announcement..." />
                  <Button className="w-full">Send</Button>
                </div>
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaComments /> QnA / Query Handling</h4>
                  <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[QnA Table]</div>
                </div>
              </div>
            </section>
          )}
          {activeSection === 'Event Management' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaCalendarAlt /> Event Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaCalendarAlt /> Event Schedule</h4>
                  <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Schedule Table]</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border">
                  <h4 className="font-semibold mb-3 flex items-center gap-2"><FaCalendarAlt /> Track Management</h4>
                  <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Tracks Table]</div>
                </div>
              </div>
            </section>
          )}
          {activeSection === 'Settings & Permissions' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaCogs /> Settings & Permissions</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <div className="flex gap-4 mb-4">
                  <Button>Manage Roles</Button>
                  <Button variant="outline">Feature Toggles</Button>
                </div>
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[RBAC Table]</div>
              </div>
            </section>
          )}
          {activeSection === 'Support Tickets / Issues' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaLifeRing /> Support Tickets / Issues</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Tickets Table]</div>
                <Button className="mt-4 w-full">Mark Resolved</Button>
              </div>
            </section>
          )}
          {activeSection === 'Resource Hub' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaBook /> Resource Hub</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[FAQs/Guidelines Upload]</div>
                <Button className="mt-4 w-full">Add Mentor Slot</Button>
            </div>
            </section>
          )}
          {activeSection === 'Security Logs / Audit Trail' && (
            <section>
              <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"><FaShieldAlt /> Security Logs / Audit Trail</h3>
              <div className="bg-gradient-to-br from-blue-100/60 to-white/80 rounded-2xl shadow-xl p-8 border border-border mb-10">
                <div className="h-36 bg-muted rounded flex items-center justify-center text-muted-foreground text-lg">[Admin Login & Action Logs]</div>
            </div>
            </section>
          )}
            </div>
      </main>

      {showMentorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-8 shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-primary">Assign Mentor</h2>
            <p className="mb-4">(Mentor selection modal placeholder)</p>
            <Button className="w-full" onClick={closeMentorModal}>Close</Button>
          </div>
      </div>
      )}
    </div>
  );
};

export default AdminDashboard;
