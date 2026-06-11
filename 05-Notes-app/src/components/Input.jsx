import React,{useState} from 'react';

export default function Input({ setnotes, notes }) {
  const [title, setTitle] = useState('');

  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <input className="rounded-3"
        placeholder="Enter notes.."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className="rounded-3"
        onClick={() => {
          setnotes([...notes, title]);
        }}
      >
        Add note
      </button>
      <button className="rounded-3"
        onClick={() => {
          setnotes(notes.slice(0, -1));
        }}
      >
        Remove
      </button>
    </div>
  );
}

