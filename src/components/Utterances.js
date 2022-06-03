import React, { useEffect } from 'react';

const COMMENTS_ID = 'comments-container';

function Comments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    // Replace with the repo on which you configured Utterances
    script.setAttribute('repo', 'nleroy917/nathanleroy.io');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const c = document.getElementById(COMMENTS_ID);
      if (c) comments.innerHTML = '';
    };
  }, []);

  return (
    <div id={COMMENTS_ID} />
  );
}

export default Comments;
