import React, { useState } from 'react';
import './style.css';

const data = [
  { name: 'title1', value: 'value1' },
  { name: 'title2', value: 'value2' },
  { name: 'title3', value: 'value3' },
];

export default function NavBar() {
  const [info, setInfo] = useState('');
  const showInfo = (idx) => {
    setInfo(data[idx].value);
  };

  return (
    <div>
      <div className="top-bar">
        {data.map((elem, idx) => {
          return (
            <div
              className="top-bar-item"
              key={idx}
              onClick={() => showInfo(idx)}
            >
              {elem.name}
            </div>
          );
        })}
      </div>

      <div className="info-bar">{info}</div>
    </div>
  );
}
