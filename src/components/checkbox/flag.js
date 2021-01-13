import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={12}
      height={9}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.934 2.04L5.207 7.767c-.205.205-.47.301-.748.301a1.03 1.03 0 01-.735-.301L.854 4.909a1.062 1.062 0 010-1.495c.41-.41 1.085-.41 1.495 0l2.11 2.11L9.44.544c.41-.41 1.085-.41 1.495 0 .41.423.41 1.086 0 1.496z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComponent;
