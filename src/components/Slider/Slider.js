import * as React from 'react';
import Box from '@mui/material/Box';
import ReactSlider from 'react-slider';
import { useEffect, useState } from "react";

const SliderComponent = ({ defaultWidth, defaultValue, minValue, maxValue, onChangeListener, setValue, stepValue }) => {
    return (
        <Box sx={{ width: defaultWidth }} className="mt-3" >
            <ReactSlider
                className="horizontal-slider"
                value={setValue}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                min={minValue}
                max={maxValue}
                step={stepValue}
                defaultValue={defaultValue}
                onChange={(value, number) => {
                    onChangeListener(value);
                }}
                renderThumb={(props, state) => {
                    const { key, ...restProps } = props;
                    const prop = { ...restProps };
                    return (
                        <div key={key} {...prop} >
                        </div>
                    );
                }}
            />
        </Box>
    );
}

export default SliderComponent;