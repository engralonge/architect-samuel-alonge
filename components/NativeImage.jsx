import Image from "next/image";

// Cap rendered CSS dimensions; true retina sharpness needs larger originals.
export default function NativeImage({ width, height, alt, className = "", style, ...props }) {
  return <Image {...props} alt={alt} width={width} height={height} className={`native-image h-auto w-full object-contain ${className}`} style={{ ...style, "--native-width": `${width}px`, "--native-height": `${height}px` }} />;
}
