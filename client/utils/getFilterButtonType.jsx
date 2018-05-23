import React from 'react';

export const getType = (type) => {
  switch (type) {
    case 'open':
      return 'Open now';
    case 'food':
      return <i className="fas fa-coffee" />;
    case 'wifi':
      return <i className="fas fa-wifi" />;
    default:
      return 'Invalid type';
  }
};

export const filterClass = (filter) => filter ? 'btn-dark-outline' : 'btn-dark';
