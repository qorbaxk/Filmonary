import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const Slider = () => {
  const [minValue, set_minValue] = useState(1990);
  const [maxValue, set_maxValue] = useState(2022);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className="App">
      <MultiRangeSlider
        min={1990}
        max={2022}
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
