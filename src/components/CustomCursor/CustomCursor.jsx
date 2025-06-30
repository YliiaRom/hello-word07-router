import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function CustomCursor() {
  // --cursor el
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  //--cursor mob
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    //--curs El get
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    //--initial position
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });
    //--cursor position + speed
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    //--mouse ...
    const handlerMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    const handlerMousedown = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.5,
        duration: 0.2,
      });
    };

    const handlerMouseup = () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    };
    //add mousemove Listener...
    window.addEventListener("mousemove", handlerMouseMove);
    //add click animate
    document.addEventListener("mousedown", handlerMousedown);

    document.addEventListener("mouseup", handlerMouseup);

    return () => {
      window.removeEventListener("mousemove", handlerMouseMove);
      document.removeEventListener("mousedown", handlerMousedown);
      document.removeEventListener("mouseup", handlerMouseup);
    };
  }, []);
  return (
    <>
      {/* main cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      ></div>
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50"
        style={{ willChange: "transform" }}
      ></div>
    </>
  );
}
export default CustomCursor;
