'use client';

import React, { useState, useEffect, useContext } from 'react';
import API from '@/lib/api';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

const ContentManager = () => {
  const [heroData, setHeroData] = useState({ title: '', subtitle: '', images: [] });
  const [newImageUrl, setNewImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) fetchHero();
  }, [user]);

  const fetchHero = async () => {
    try {
      const { data } = await API.get('/settings/hero');
      if (data && data.content) {
        setHeroData(data.content);
      }
    } catch (err) {
      console.error('No hero data found');
    }
    setLoading(false);
  };

  const handleSave = async () => {
    try {
      await API.post('/settings/hero', { content: heroData });
      alert('Hero content updated successfully!');
    } catch (err) {
      alert('Error updating content');
    }
  };

  const addImage = () => {
    if (newImageUrl) {
      setHeroData({ ...heroData, images: [...heroData.images, newImageUrl] });
      setNewImageUrl('');
    }
  };

  const removeImage = (index) => {
    const updatedImages = heroData.images.filter((_, i) => i !== index);
    setHeroData({ ...heroData, images: updatedImages });
  };

  if (authLoading || loading) return <div style={{ padding: '160px 20px', textAlign: 'center' }}>Loading Content Settings...</div>;
  if (!user) return null;

  return (
    <div className="content-manager" style={{ padding: '160px 20px', minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '900' }}>Hero Section Manager</h2>
          <button onClick={() => router.push('/admin/dashboard')} className="btn btn-black">Back to Dashboard</button>
        </div>
        
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{fontWeight: '600'}}>Main Banner Title (Use &lt;br /&gt; for line breaks)</label>
            <input 
              type="text" 
              value={heroData.title} 
              onChange={(e) => setHeroData({...heroData, title: e.target.value})}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{fontWeight: '600'}}>Subtext / Tagline</label>
            <textarea 
              value={heroData.subtitle} 
              onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
              style={{...inputStyle, height: '80px'}}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{fontWeight: '600'}}>Background Images (URLs)</label>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <input 
                type="text" 
                placeholder="Paste Unsplash or direct image URL" 
                value={newImageUrl} 
                onChange={(e) => setNewImageUrl(e.target.value)}
                style={inputStyle}
              />
              <button onClick={addImage} className="btn btn-black" style={{marginTop: '8px'}}>Add Image</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
              {heroData.images.map((img, index) => (
                <div key={index} style={{ position: 'relative', height: '120px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={img} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button 
                    onClick={() => removeImage(index)}
                    style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                  >×</button>
                </div>
              ))}
              {heroData.images.length === 0 && <div style={{gridColumn: '1/-1', padding: '20px', textAlign: 'center', border: '1px dashed #ddd', borderRadius: '8px', color: '#999'}}>No images added. Using defaults.</div>}
            </div>
          </div>

          <button onClick={handleSave} className="btn btn-orange" style={{ width: '100%', marginTop: '30px', padding: '15px', fontSize: '1.1rem' }}>Push Updates to Live Site</button>
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

export default ContentManager;
