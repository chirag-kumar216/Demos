import React from 'react';
import ReactCompareImage from 'react-compare-image';

const BeforeAfterSlider = ({ beforeImage, afterImage, projectName, location, duration, budget }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      <div className="relative rounded-sm overflow-hidden shadow-2xl mb-6 aspect-video">
        <ReactCompareImage 
          leftImage={beforeImage} 
          rightImage={afterImage} 
          leftImageLabel="Before"
          rightImageLabel="After Aura"
          sliderLineColor="#C9A96E"
          handleSize={40}
          leftImageCss={{ objectFit: 'cover' }}
          rightImageCss={{ objectFit: 'cover' }}
        />
      </div>
      <div className="bg-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg border border-border-divider">
        <div>
          <h4 className="font-display text-2xl text-primary-text mb-2">{projectName}</h4>
          <p className="font-body text-secondary-text text-sm flex items-center">
            <span className="inline-block w-4 h-[1px] bg-accent-gold mr-2"></span>
            {location}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
          <div className="bg-secondary-bg px-4 py-2">
            <span className="block font-accent text-[0.6rem] uppercase tracking-wider text-secondary-text mb-1">Duration</span>
            <span className="font-body text-sm font-medium text-primary-text">{duration}</span>
          </div>
          <div className="bg-secondary-bg px-4 py-2">
            <span className="block font-accent text-[0.6rem] uppercase tracking-wider text-secondary-text mb-1">Budget</span>
            <span className="font-body text-sm font-medium text-primary-text">{budget}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
