import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
`

export const InputContainer = styled.div<{$height?: string | number}>`
    width: 100%;
    position: relative;
    display: grid;
    --_height: ${props => props.$height ? props.$height : 19}px;
    --_thumb-size: 24px;
    align-items: center;
    // margin: ${props => props.$height ? props.$height * 2 : 19}px 0;
`

export const TrackWrapper = styled.div`
    position: relative;
    z-index: 1;
    height: var(--_height);
    margin-bottom: var(--_thumb-size);
    display: grid;
    align-items: center;
`

export const Track = styled.div`
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

export const RangeBetween = styled.div<{ $left?: number, $right?: number }>`
    position: absolute;
    z-index: 2;
    left: ${props => props.$left ? props.$left : 0}%;
    right: ${props => props.$right ? props.$right : 0}%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: var(--yellow);
    
`

export const Thumb = styled.div<{ $left?: number, $right?: number; }>`
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

export const RangeInput = styled.input`
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

export const LeftThumbWrapper = styled.div`
    width: calc(100% - var(--_thumb-size));
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
`

export const RightThumbWrapper = styled.div`
    width: calc(100% - var(--_thumb-size));
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
`

export const ThumbText = styled.div`
    position: absolute;
    bottom: calc(-1 * var(--_thumb-size));
    width: 100%;
    text-align: center;
    color: white;
`

export const RangeLabels = styled.div`
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RangeLabel = styled.span`
    display: block;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: white;
`

export const MainLabel = styled.h3<{$textAlign?: string}>`
    color: #E5E5E5;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    text-align: ${props => props.$textAlign ? props.$textAlign : 'start'};
`