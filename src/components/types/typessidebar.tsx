"use client";

import Image from 'next/image';
import { useState } from 'react';

interface TypesSidebarProps {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

export default function TypesSidebar({ selectedTypes, setSelectedTypes }: TypesSidebarProps) {
  const handleTypeChange = (type: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    }
  };
  
  return (
    // Huvudcontainer!
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Header*/}
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Filter by Type</h2>
      
      {/* Container för alla types med checkboxar, 2 per rad! */}
      <div className="space-y-5">
        
        {/*  Fire & Water  */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('fire', e.target.checked)}
            />
            <Image src="/typeicons/fire.svg" alt="Fire" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Fire</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('water', e.target.checked)}
            />
            <Image src="/typeicons/water.svg" alt="Water" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Water</span>
          </label>
        </div>
        
        {/*  Grass & Electric */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('grass', e.target.checked)}
            />
            <Image src="/typeicons/grass.svg" alt="Grass" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Grass</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('electric', e.target.checked)}
            />
            <Image src="/typeicons/electric.svg" alt="Electric" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Electric</span>
          </label>
        </div>
        
        {/* Ice & Fighting */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('ice', e.target.checked)}
            />
            <Image src="/typeicons/ice.svg" alt="Ice" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Ice</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('fighting', e.target.checked)}
            />
            <Image src="/typeicons/fighting.svg" alt="Fighting" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Fighting</span>
          </label>
        </div>
        
        {/* Poison & Ground */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('poison', e.target.checked)}
            />
            <Image src="/typeicons/poison.svg" alt="Poison" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Poison</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('ground', e.target.checked)}
            />
            <Image src="/typeicons/ground.svg" alt="Ground" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Ground</span>
          </label>
        </div>
        
        {/* Flying & Psychic */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('flying', e.target.checked)}
            />
            <Image src="/typeicons/flying.svg" alt="Flying" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Flying</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('psychic', e.target.checked)}
            />
            <Image src="/typeicons/psychic.svg" alt="Psychic" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Psychic</span>
          </label>
        </div>
        
        {/* Bug & Rock */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('bug', e.target.checked)}
            />
            <Image src="/typeicons/bug.svg" alt="Bug" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Bug</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('rock', e.target.checked)}
            />
            <Image src="/typeicons/rock.svg" alt="Rock" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Rock</span>
          </label>
        </div>
        
        {/*  Ghost & Dragon */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('ghost', e.target.checked)}
            />
            <Image src="/typeicons/ghost.svg" alt="Ghost" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Ghost</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('dragon', e.target.checked)}
            />
            <Image src="/typeicons/dragon.svg" alt="Dragon" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Dragon</span>
          </label>
        </div>
        
        {/* Dark & Steel */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('dark', e.target.checked)}
            />
            <Image src="/typeicons/dark.svg" alt="Dark" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Dark</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('steel', e.target.checked)}
            />
            <Image src="/typeicons/steel.svg" alt="Steel" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Steel</span>
          </label>
        </div>
        
        {/*  Fairy & Normal */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('fairy', e.target.checked)}
            />
            <Image src="/typeicons/fairy.svg" alt="Fairy" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Fairy</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              className="w-5 h-5 min-w-[20px] min-h-[20px] rounded text-[hsl(360,100%,41%)] border-2 border-gray-300 flex-shrink-0"
              onChange={(e) => handleTypeChange('normal', e.target.checked)}
            />
            <Image src="/typeicons/normal.svg" alt="Normal" width={20} height={20} className="flex-shrink-0" />
            <span className="text-base text-gray-700 font-medium">Normal</span>
          </label>
        </div>
        
      </div>
    </div>
  );
}
