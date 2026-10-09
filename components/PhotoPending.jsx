export default function PhotoPending({ label = "Photography to follow", portrait = false }) {
  return (
    <div className={`grid min-w-0 w-full place-items-center border border-accl-line bg-accl-paper p-8 text-center text-sm leading-6 text-accl-muted ${portrait ? "aspect-[4/5]" : "aspect-[16/9]"}`}>
      <p>{label}</p>
    </div>
  );
}
