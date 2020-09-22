import React from "react";

export default function Article({ headline, content }) {
  return (
    <div className="articleContainer">
      <div>{headline}</div>
      <div>{content}</div>
    </div>
  );
}
