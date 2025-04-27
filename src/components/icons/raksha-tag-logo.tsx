
import type { SVGProps } from 'react';

export function RakshaTagLogo(props: SVGProps<SVGSVGElement>) {
  // Using a simple text representation as a placeholder
  // This ensures no reference to any problematic image file exists.
  return (
    <span
      className={props.className} // Apply className for potential styling
      style={{
        display: 'inline-flex', // Ensures image and text are aligned horizontally
        alignItems: 'center',
        fontSize: '1.2rem', // Adjust size as needed
        fontWeight: 'bold',
        color: 'hsl(var(--primary))', // Use primary color
        ...props.style, // Allow overriding styles
      }}
      // Pass down other SVG props like width, height if provided, though they might not directly apply to <span>
      // Consider a more robust SVG implementation if needed
    >
      <img
        src="/assets/only_logo_no_bg.png" // Replace with your image path
        alt="RakshaTag logo"
        style={{
          width: '1.5em',
          height: '1.5em',
          marginRight: '0.5em',
          verticalAlign: 'middle',
        }}
      />
      RakshaTag
    </span>
  );
}
