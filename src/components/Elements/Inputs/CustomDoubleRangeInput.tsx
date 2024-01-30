import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: grid;
    --_height: 19px;
    --_thumb-size: 24px;
`

const TrackWrapper = styled.div`
    position: relative;
    z-index: 1;
    height: var(--_height);
    margin-bottom: var(--_thumb-size);
    display: grid;
    align-items: center;
`

const Track = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid white;
`

const RangeBetween = styled.div<{$left?: string, $right?: string}>`
    position: absolute;
    z-index: 2;
    left: ${props => props.$left ? props.$left : 0};
    right: ${props => props.$right ? props.$right : 0};
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: var(--yellow);
    
`

const Thumb = styled.div<{$left?: string, $right?: string;}>`
    position: absolute;
    z-index: 5;
    width: var(--_thumb-size);
    height: var(--_thumb-size);
    background-color: var(--main-color);
    border-radius: 50%;
    transition: box-shadow 0.3s ease-in-out;

    &.left {
        left: ${props => props.$left};
    }

    &.right {
        right: ${props => props.$right ? props.$right : 0};
    }

`

const RangeInput = styled.input`
    position: absolute;
    z-index: 10;
    pointer-events: none;
    -webkit-appearance: none;
    height: var(--_height);
    width: 100%;
    opacity: 0;
    cursor: pointer;
    bottom: 0;
    top: 0;
    border-radius: inherit;

    &::-webkit-slider-thumb {
        pointer-events: all;
        width: var(--_thumb-size);
        height: var(--_thumb-size);
        border-radius: 50%;
        border: 0 none;
        background-color: var(--black);
        -webkit-appearance: none;
      }
    
    &::-moz-range-thumb {
        pointer-events: all;
        width: var(--_thumb-size);
        height: var(--_thumb-size);
        border-radius: 50%;
        border: 0 none;
        background-color: var(--black);
        -webkit-appearance: none;
      }
`

const LeftThumbWrapper = styled.div`
      width: calc(100% - var(--_thumb-size));
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
`

const RightThumbWrapper = styled.div`
      width: calc(100% - var(--_thumb-size));
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      right: 0;
`

const ThumbText = styled.div`
      position: absolute;
      bottom: calc(-1 * var(--_thumb-size));
      width: 100%;
      text-align: center;
      color: white;
`

export const CustomDoubleRangeInput = () => {
    const [min, setMin] = useState(1920);
    const [max, setMax] = useState(7000);
    const [start, setStart] = useState(min);
    const [end, setEnd] = useState(max);

    const [$left, set$left] = useState("0%");
    const [$right, set$right] = useState("0%");

    const handleStartRangeChange = (e) => {
        const currentValue = Number(e.target.value);
        if (currentValue >= end) {
            return;
        }

        const percent = 100 / max;
        const resultOffset = percent * (currentValue / max * 100) + '%';
        console.log(resultOffset);

        set$left(resultOffset);
        setStart(currentValue);
    }

    const handleEndRangeChange = (e) => {
        const currentValue = Number(e.target.value);
        if (currentValue <= start) {
            return;
        }

        const percent = 100 / max;

        set$right(100 - (percent * currentValue) + '%');
        setEnd(currentValue);
    }
    
    return(
        <InputContainer>
            {/* <div className="range-labels">
                <span className="range-label range-label-start">0</span>
                <span className="range-label range-label-end">100</span>
            </div> */}
            <RangeInput type="range" min={min} value={start} max={max} name="" id=""
            onInput={handleStartRangeChange}
            />
            <RangeInput type="range" min={min} value={end} max={max} name="" id=""
            onInput={handleEndRangeChange}
            />
            
            <TrackWrapper>
                <Track></Track>
                <RangeBetween $left={$left} $right={$right}></RangeBetween>
                <LeftThumbWrapper>
                    <Thumb className="left" $left={$left}>
                        <ThumbText>{start}</ThumbText>
                    </Thumb>
                </LeftThumbWrapper>
                <RightThumbWrapper>
                    <Thumb className="right" $right={$right}>
                        <ThumbText>{end}</ThumbText>
                    </Thumb>
                </RightThumbWrapper>
            </TrackWrapper>
        </InputContainer>
    )
}