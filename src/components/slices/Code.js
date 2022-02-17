import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import { RichText } from 'prismic-reactjs';
import Prism from 'prismjs';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-go.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-jsx.js';
import '../../styles/markdown.css';

export default function ({ slice }) {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  });
  const rawMarkdown = RichText.asText(slice.primary.code.richText);
  return (
    <div className="my-4 text-sm gatsby-highlight" style={{ borderRadius: '0px !important' }}>
      <Markdown>{rawMarkdown}</Markdown>
    </div>
  );
}
