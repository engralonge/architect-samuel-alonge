import Image from "next/image";

// The resolution-aware CSS cap also prevents upscaling on retina displays.
export default function NativeImage({ width, height, alt, className = "", style, ...props }) {
  return <Image {...props} alt={alt} width={width} height={height} className={`native-image h-auto w-full object-contain ${className}`} style={{ ...style, "--native-width": `${width}px`, "--native-height": `${height}px` }} />;
}
