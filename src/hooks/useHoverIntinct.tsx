import type { RefObject } from "react";

type HoverType = {
  triggerRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLElement | null>;
  onHoverLeave: () => void;
};

export default function useHoverInstinct({
  triggerRef,
  contentRef,
  onHoverLeave,
}: HoverType) {
  const handleMouseLeave = (event: React.MouseEvent) => {
    const elNext = event.relatedTarget as Node | null;
    const isInside =
      (triggerRef.current != null && triggerRef.current.contains(elNext)) ||
      (contentRef.current != null && contentRef.current.contains(elNext));

    if (!isInside) {
      onHoverLeave();
    }
  };

  return { handleMouseLeave };
}
