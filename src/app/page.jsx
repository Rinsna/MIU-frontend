import React from 'react';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Accreditations from '@/components/Accreditations';
import Spotlight from '@/components/Spotlight';
import CampusLife from '@/components/CampusLife';
import Placements from '@/components/Placements';
import Ecosystem from '@/components/Ecosystem';
import NewsSlider from '@/components/NewsSlider';

export const metadata = {
  title: 'Manipur International University | Home',
  description: 'Welcome to Manipur International University, India\'s leading institution for global education and research.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Accreditations />
      <Spotlight />
      <Programs />
      <CampusLife />
      <Placements />
      <Ecosystem />
      <NewsSlider />
    </main>
  );
}
