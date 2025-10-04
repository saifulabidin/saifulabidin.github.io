export { };

// CSS Module Declarations for TypeScript
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// Swiper CSS declarations
declare module 'swiper/css' {
  const content: any;
  export default content;
}

declare module 'swiper/css/*' {
  const content: any;
  export default content;
}

declare module 'swiper/scss' {
  const content: any;
  export default content;
}

declare module 'swiper/scss/*' {
  const content: any;
  export default content;
}

// Asset declarations
declare module '*.glb';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.svg';
declare module '*.ico';
declare module '*.mp3';
declare module '*.mp4';
declare module '*.pdf';
declare module '*.txt';

// Three.js and meshline declarations
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}