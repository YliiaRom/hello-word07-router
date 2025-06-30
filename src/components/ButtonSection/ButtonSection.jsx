import { useEffect, useRef } from "react";

function ButtonSection() {
  const intervalRef = useRef(null);
  const createdIntervalRef = useRef(null);
  const timeoutIdList = useRef([]);

  useEffect(() => {
    let btn01 = document.getElementById("btn01");
    function createParticles() {
      let particle = document.createElement("div");
      particle.classList.add("particle");

      let angle = Math.random() * 2 * Math.PI;
      let distance = 50 + Math.random() * 100;

      let dx = Math.cos(angle) * distance + "px";
      let dy = Math.sin(angle) * distance + "px";

      particle.style.setProperty("--dx", dx);
      particle.style.setProperty("--dy", dy);

      particle.style.left = "50%";
      particle.style.top = "50%";
      particle.style.transform = "translate(-50%, -50%)";

      //--add

      btn01.appendChild(particle);
      intervalRef.current = setTimeout(() => {
        particle.remove();
      }, 6000);

      timeoutIdList.current.push(intervalRef.current);
    }
    // --add many div
    createdIntervalRef.current = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createParticles();
      }
    }, 200);
    return () => {
      // clearInterval(intervalRef.current);
      timeoutIdList.current.forEach((id) => clearTimeout(id));
      clearInterval(createdIntervalRef.current);
    };
  }, []);
  return (
    <div className="btn01MainWrap">
      <a href="#" className="btn01Wrap">
        <div id="btn01">button</div>
        <span>discounts</span>
      </a>

      <svg>
        <filter id="filterBtn">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          <feColorMatrix
            values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 50 -10"
          />
        </filter>
      </svg>
    </div>
  );
}
export default ButtonSection;
