interface OverlayProps {
  onClose: () => void;
}

export default function Overlay({ onClose }: OverlayProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
    />
  );
}