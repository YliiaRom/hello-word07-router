import cleaner from "../../assets/img/cleaner.jpg";
import combines from "../../assets/img/combines.jpg";
import dishes from "../../assets/img/dishes.jpg";
import every from "../../assets/img/every.jpg";
import fridge from "../../assets/img/fridge.jpg";
import headphones from "../../assets/img/headphones.jpg";
import laptop from "../../assets/img/laptop.jpg";
import mixer from "../../assets/img/mixer.jpg";
import tv from "../../assets/img/tv.jpg";
import laptop02 from "../../assets/img/laptop02.jpg";
function SliderBox() {
  return (
    <div
      className="slider"
      style={{
        "--width": "100px",
        "--height": "150px",
        "--quantity": "10",
      }}
    >
      <div className="slider-list">
        <div className="slider-item" style={{ "--position": "1" }}>
          <img src={every} alt="every" />
        </div>
        <div className="slider-item" style={{ "--position": "2" }}>
          <img src={dishes} alt="dishes" />
        </div>
        <div className="slider-item" style={{ "--position": "3" }}>
          <img src={fridge} alt="fridge" />
        </div>
        <div className="slider-item" style={{ "--position": "4" }}>
          <img src={cleaner} alt="cleaner" />
        </div>
        <div className="slider-item" style={{ "--position": "5" }}>
          <img src={laptop} alt="laptop" />
        </div>
        <div className="slider-item" style={{ "--position": "6" }}>
          <img src={headphones} alt="headphones" />
        </div>
        <div className="slider-item" style={{ "--position": "7" }}>
          <img src={tv} alt="tv" />
        </div>
        <div className="slider-item" style={{ "--position": "8" }}>
          <img src={mixer} alt="mixer" />
        </div>
        <div className="slider-item" style={{ "--position": "9" }}>
          <img src={combines} alt="combines" />
        </div>
        <div className="slider-item" style={{ "--position": "10" }}>
          <img src={laptop02} alt="laptop02" />
        </div>
      </div>
    </div>
  );
}
export default SliderBox;
