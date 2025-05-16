// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '../components/ui/button';

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('team');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    yearMajor: '',
  });
  const [teamMembers, setTeamMembers] = useState([
    { fullName: '', email: '', yearMajor: '', skills: '' },
  ]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.yearMajor) newErrors.yearMajor = 'Year/Major is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { fullName: '', email: '', yearMajor: '', skills: '' }]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem('token', 'dummy-token');
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-primary">
              Join Hackverse
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Create your account and start your hackathon journey
            </p>
          </div>

          {/* Role Selection */}
          <div className="flex justify-center space-x-8 mb-8">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="team"
                checked={role === 'team'}
                onChange={() => setRole('team')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-foreground group-hover:text-primary">Team</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="radio"
                name="role"
                value="mentor"
                checked={role === 'mentor'}
                onChange={() => setRole('mentor')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-foreground group-hover:text-primary">Mentor</span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Leader Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Your Information</h3>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${errors.fullName ? 'border-red-300' : 'border-border'}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  College Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${errors.email ? 'border-red-300' : 'border-border'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${errors.password ? 'border-red-300' : 'border-border'}`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="yearMajor" className="block text-sm font-medium text-foreground">
                  Year / Major
                </label>
                <input
                  type="text"
                  id="yearMajor"
                  name="yearMajor"
                  value={formData.yearMajor}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${errors.yearMajor ? 'border-red-300' : 'border-border'}`}
                />
                {errors.yearMajor && (
                  <p className="mt-1 text-sm text-red-600">{errors.yearMajor}</p>
                )}
              </div>
            </div>

            {/* Team Members Info */}
            {role === 'team' && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Team Members</h3>
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg space-y-4 border border-border">
                    <h4 className="font-medium text-foreground">Member {index + 1}</h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={member.fullName}
                          onChange={(e) => handleTeamMemberChange(index, 'fullName', e.target.value)}
                          className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-border"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={member.email}
                          onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                          className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-border"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Year / Major"
                          value={member.yearMajor}
                          onChange={(e) => handleTeamMemberChange(index, 'yearMajor', e.target.value)}
                          className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-border"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Skills (comma separated)"
                          value={member.skills}
                          onChange={(e) => handleTeamMemberChange(index, 'skills', e.target.value)}
                          className="mt-1 block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-border"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {teamMembers.length < 4 && (
                  <Button type="button" variant="outline" onClick={addTeamMember} className="w-full">Add Team Member</Button>
                )}
              </div>
            )}

            <div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <LoadingSpinner size="small" /> : 'Sign Up'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
