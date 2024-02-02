import { useState } from "react";
import { Container, InputContainer, LeftThumbWrapper, MainLabel, RangeBetween, RangeInput, RangeLabel, RangeLabels, RightThumbWrapper, Thumb, ThumbText, Track, TrackWrapper } from "./StyledComponents";


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
    textAlign?: string
}

export const DoubleRangeInput = ({ minValue, maxValue, maxRangeSizeCoefficient, valueFormatter, labels, $height, mainLabel, textAlign }: CustomDoubleRangeInputProps): React.JSX.Element => {
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
        <Container>
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
        </Container>

    )
}