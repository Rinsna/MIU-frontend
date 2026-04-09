'use client';

import React, { useState, useEffect, useContext } from 'react';
import API from '@/lib/api';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const CoursesManager = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({ title: '', icon: '🎓', description: '', highlight: '', school: 'School Of Engineering' });
  const [editingId, setEditingId] = useState(null);
  const { user, loading: authLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) fetchCourses();
  }, [user]);

  const fetchCourses = async () => {
    try {
      const { data } = await API.get('/courses');
      setCourses(data);
    } catch (err) {
      console.error('Failed to fetch courses');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/courses/${editingId}`, formData);
      } else {
        await API.post('/courses', formData);
      }
      setFormData({ title: '', icon: '🎓', description: '', highlight: '', school: 'School Of Engineering' });
      setEditingId(null);
      fetchCourses();
    } catch (err) {
      alert('Error saving course');
    }
  };

  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      icon: course.icon,
      description: course.description,
      highlight: course.highlight,
      school: course.school || 'School Of Engineering'
    });
    setEditingId(course._id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await API.delete(`/courses/${id}`);
      fetchCourses();
    }
  };

  if (authLoading) return <div style={{ padding: '160px 20px', textAlign: 'center' }}>Authenticating...</div>;
  if (!user) return null;

  return (
    <div className="courses-manager" style={{ padding: '160px 20px', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900' }}>{editingId ? 'Edit Program' : 'Add New Program'}</h2>
          <button onClick={() => router.push('/admin/dashboard')} className="btn btn-black">Back to Dashboard</button>
        </div>
        
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '50px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{fontWeight: '600'}}>Program Title</label>
              <input 
                type="text" 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                style={inputStyle} required
              />
            </div>
            <div>
              <label style={{fontWeight: '600'}}>Parent School</label>
              <select 
                value={formData.school} 
                onChange={(e) => setFormData({...formData, school: e.target.value})}
                style={inputStyle}
              >
                <option value="School Of Commerce">School Of Commerce</option>
                <option value="School Of Computer Application">School Of Computer Application</option>
                <option value="School Of Engineering">School Of Engineering</option>
                <option value="School Of Management">School Of Management</option>
                <option value="School Of Science">School Of Science</option>
                <option value="School Of Vocational Studies">School Of Vocational Studies</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{fontWeight: '600'}}>Emoji Icon</label>
              <input 
                type="text" 
                value={formData.icon} 
                onChange={(e) => setFormData({...formData, icon: e.target.value})}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{fontWeight: '600'}}>Highlight (e.g., 64 LPA Package)</label>
              <input 
                type="text" 
                value={formData.highlight} 
                onChange={(e) => setFormData({...formData, highlight: e.target.value})}
                style={inputStyle}
              />
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{fontWeight: '600'}}>Short Description</label>
            <textarea 
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              style={{...inputStyle, height: '100px'}} required
            />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
             <button type="submit" className="btn btn-orange" style={{padding: '12px 30px'}}>{editingId ? 'Update Program' : 'Save Program'}</button>
             {editingId && <button type="button" onClick={() => {setEditingId(null); setFormData({title:'', icon:'🎓', description:'', highlight:'', school:'School Of Engineering'});}} className="btn btn-black">Cancel</button>}
          </div>
        </form>

        <h3 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '20px'}}>Active Faculty Programs</h3>
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          {courses.map(course => (
            <div key={course._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #f0f0f0' }}>
              <div>
                <strong style={{fontSize: '1.1rem'}}>{course.icon} {course.title}</strong>
                <div style={{fontSize: '0.85rem', color: '#888', marginTop: '4px'}}>{course.school}</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => handleEdit(course)} style={{ background: '#f0f0f0', border: 'none', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Edit</button>
                <button onClick={() => handleDelete(course._id)} style={{ background: '#fff0f0', color: '#ff4444', border: 'none', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
              </div>
            </div>
          ))}
          {courses.length === 0 && <div style={{padding: '40px', textAlign: 'center', color: '#999'}}>No programs found. Add your first program above.</div>}
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginTop: '8px',
  fontSize: '1rem'
};

export default CoursesManager;
