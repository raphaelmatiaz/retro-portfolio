// SmoothScroll.ts
export default function initSmoothScroll() {
  let scrollTarget = window.scrollY;
  let currentScroll = window.scrollY;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    scrollTarget += e.deltaY;
    scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  const smoothScroll = () => {
    currentScroll += (scrollTarget - currentScroll) * 0.1;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  };

  requestAnimationFrame(smoothScroll);
}
