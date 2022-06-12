import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const Slider = ({min, max}) => {
  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className="App">
      <div className="slider-ex">
        From: <span>{minValue}</span> - To: <span>{maxValue}</span>
      </div>
      <MultiRangeSlider
        min={min}
        max={max}
        step={1}
        ruler={false}
        label={false}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
};

export default Slider;
