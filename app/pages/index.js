"use client"; 
import React,{ useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

const HomePage = () => {
  const options = [
    "Today's Notes",
    "Today's Remaining",
    "All Notes",
    "Remaining Notes",
    "Completed Notes",
    "Archived Notes",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="flex">
      <LeftSidebar
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <RightSidebar
        selectedOption={selectedOption}
        notes={notes}
        addNote={addNote}
      />
    </div>
  );
};

export default HomePage;
