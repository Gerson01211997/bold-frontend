import { useState, useRef, useEffect, memo } from "react";
import { className } from "@/components/Popover/styles";
import InfoIcon from "@/components/icons/InfoIcon";

function PopoverInfo({ info }: { info: string }) {
  const [open, setOpen] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative inline-block" ref={iconRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="focus:outline-none"
      >
        <InfoIcon className={className.infoIcon} />
      </button>

      {open && <div className={className.info}>{info}</div>}
    </div>
  );
}

export default memo(PopoverInfo);
