interface Props {
  onClose: () => void;
}

export default function Overlay({ onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
    />
  );
}