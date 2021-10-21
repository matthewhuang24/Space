import React from 'react';

const Card = (props) => {
  const spanProj = [];
  props.tech.forEach((ele) => {
    spanProj.push(<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${ele}`}</span>)
  })
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <p className="text-gray-700 text-base">
      {props.description}</p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {spanProj}
  </div>
</div>
  )
};

export default Card;
