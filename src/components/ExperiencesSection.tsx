import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { EXPERIENCES_DATA, Experience } from '../data/hotelData';

interface ExperiencesSectionProps {
  onReserveExperience: (experience: Experience) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onReserveExperience }) => {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#121519] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
            <span>Curated Moments</span>
            <span className="w-6 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] font-light tracking-tight">
            “More Than a Stay.”
          </h2>
          <p className="font-sans text-[#C4C0B6] text-base md:text-lg font-light leading-relaxed">
            Every day at Aurelia offers an opportunity to immerse yourself in art, nature, culinary craft, and mindful tranquility.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#171B21] border border-white/10 flex flex-col justify-between hover:border-[#C9A96E]/50 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Experience Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B21] via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-[#0D0F11]/80 backdrop-blur-md text-[#C9A96E] border border-white/10">
                  {exp.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#FAF9F5] group-hover:text-[#C9A96E] transition-colors mb-2">
                    {exp.title}
                  </h3>
                  
                  <p className="text-xs text-[#A09D95] font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-[#C4C0B6] py-3 border-t border-white/10">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C9A96E]" />
                      {exp.duration}
                    </span>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="text-[#A09D95]">{exp.timing}</span>
                  </div>

                  <div className="pt-2 space-y-1">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="text-[11px] text-[#A09D95] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onReserveExperience(exp)}
                    className="w-full py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-[#FAF9F5] border border-white/15 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0D0F11] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
