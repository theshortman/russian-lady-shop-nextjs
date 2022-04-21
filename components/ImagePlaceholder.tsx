import { FC } from "react";

interface ImagePlaceholderProps {
  text: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ text }) => {
  return (
    <svg
      className="img-fluid img-thumbnail"
      width="600"
      height="912"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="No photo"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <rect width="100%" height="100%" fill="#ffffff"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle">
        {text}
      </text>
    </svg>
  );
};

export default ImagePlaceholder;
