import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <div style={{ 
        display: 'flex', 
        gap: '100px', 
        justifyContent: 'start', 
        padding: '20px' 
      }}>
        <Card 
          venueName="The Bloom Pavilion" 
          imgSrc="/img/bloom.jpg" 
        />
        <Card 
          venueName="Spark Space" 
          imgSrc="/img/sparkspace.jpg" 
        />
        <Card 
          venueName="The Grand Table" 
          imgSrc="/img/grandtable.jpg" 
        />
      </div>
    </div>
  );
}