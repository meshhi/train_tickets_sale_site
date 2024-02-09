import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div<{$height?: string | number}>`
    width: 100%;
    position: relative;
    display: grid;
    --_height: ${props => props.$height ? props.$height : 19}px;
    --_thumb-size: 24px;
    align-items: center;
    // margin: ${props => props.$height ? props.$height * 2 : 19}px 0;
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

const RangeBetween = styled.div<{ $left?: number, $right?: number }>`
    position: absolute;
    z-index: 2;
    left: ${props => props.$left ? props.$left : 0}%;
    right: ${props => props.$right ? props.$right : 0}%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: var(--yellow);
    
`

const Thumb = styled.div<{ $left?: number, $right?: number; }>`
    position: absolute;
    z-index: 5;
    width: var(--_thumb-size);
    height: var(--_thumb-size);
    background-color: var(--main-color);
    border-radius: 50%;
    transition: box-shadow 0.3s ease-in-out;

    &.left {
        left: ${props => props.$left}%;
    }

    &.right {
        right: ${props => props.$right ? props.$right : 0}%;
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

const RangeLabels = styled.div`
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const RangeLabel = styled.span`
    display: block;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: white;
`

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
`

const MainLabel = styled.h3<{$textAlign?: string}>`
    color: #E5E5E5;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    text-align: ${props => props.$textAlign ? props.$textAlign : 'start'};
`

type CustomDoubleRangeInputProps = {
    minValue: number,
    maxValue: number,
    maxRangeSizeCoefficient: number,
    valueFormatter?: (value: any) => string,
    labels?: {
        min: string | number,
        max: string | number,
    },
    $height?: string | number,
    mainLabel?: string,
    textAlign?: string,
    values: {
        from: string | number,
        to: string | number,
    },
    actions: {
        from: any,
        to: any,
    }
}

export const CustomDoubleRangeInput = ({ minValue, maxValue, maxRangeSizeCoefficient, valueFormatter, labels, $height, mainLabel, textAlign, values, actions }: CustomDoubleRangeInputProps): React.JSX.Element => {
    const [zeroOffset, setZeroOffset] = useState<number>(minValue);
    const [min, setMin] = useState<number>(minValue - zeroOffset);
    const [max, setMax] = useState<number>(maxValue - zeroOffset);
    const [start, setStart] = useState(min);
    const [end, setEnd] = useState(max);

    const [$left, set$left] = useState(0);
    const [$right, set$right] = useState(0);

    const handleStartRangeChange = (e) => {
        const currentValue = Number(e.target.value);
        if (currentValue >= end - (maxRangeSizeCoefficient * max)) {
            return;
        }

        const percent = 100 / max;
        const resultOffset = percent * (currentValue);

        set$left(resultOffset);
        setStart(currentValue);
    }

    const handleEndRangeChange = (e) => {
        const currentValue = Number(e.target.value);
        if (currentValue <= start + (maxRangeSizeCoefficient * max)) {
            return;
        }

        const percent = 100 / max;
        const resultOffset = 100 - (percent * currentValue);
        set$right(resultOffset);
        setEnd(currentValue);
    }

    return (
        <ComponentContainer>
            <MainLabel $textAlign={textAlign}>
                {mainLabel}
            </MainLabel>
            {
                labels
                    ? <RangeLabels>
                        <RangeLabel>{labels.min}</RangeLabel>
                        <RangeLabel>{labels.max}</RangeLabel>
                    </RangeLabels>
                    : false
            }
            <InputContainer $height={$height}>
                <RangeInput type="range" min={min} value={start} max={max} name="" id=""
                    onInput={handleStartRangeChange}
                />
                <RangeInput type="range" min={min} value={end} max={max} name="" id=""
                    onInput={handleEndRangeChange}
                />

                <TrackWrapper>
                    <Track></Track>
                    <RangeBetween $left={$left > 1 ? $left : 1} $right={$right > 1 ? $right : 1}></RangeBetween>
                    <LeftThumbWrapper>
                        <Thumb className="left" $left={$left}>
                            <ThumbText>{
                                valueFormatter
                                    ? valueFormatter(start + zeroOffset)
                                    : start + zeroOffset
                            }</ThumbText>
                        </Thumb>
                    </LeftThumbWrapper>
                    <RightThumbWrapper>
                        <Thumb className="right" $right={$right}>
                            <ThumbText>{
                                valueFormatter
                                    ? valueFormatter(end + zeroOffset)
                                    : end + zeroOffset}</ThumbText>
                        </Thumb>
                    </RightThumbWrapper>
                </TrackWrapper>
            </InputContainer>
        </ComponentContainer>

    )
}