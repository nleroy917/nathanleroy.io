import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import '../../styles/text.css';

export default function ({ slice }) {
  return (
    <div className="container">
      <div className="text-lg leading-normal">
        <PrismicRichText field={slice.primary.text.richText} />
      </div>
    </div>
  );
}
