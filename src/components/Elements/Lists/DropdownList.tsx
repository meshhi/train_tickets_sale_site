import { FC, PropsWithChildren, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DropdownListContainer = styled.div<{$active?: boolean}>`
    display: inline-block;
    background: #F7F5F9;
    position: relative;
    min-width: 105px;
    cursor: pointer;
`

const DropdownListValue = styled.span<{$active?: boolean}>`
    background: #F7F5F9;
    font-weight: 400;
    font-size: 18px;
    color: #292929;
`

const DropdownListMenu = styled.span<{$opened?: boolean}>`
    display: ${props => props.$opened ? "flex" : "none"};
    flex-direction: column;
    background: #F7F5F9;
    border: 1px solid black;
    position: absolute;
    top: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
`

const DropdownListMenuItem = styled.span<{$active?: boolean}>`
    display: block;
    background: #F7F5F9;
    border-bottom: 1px solid #e5e5e5;
    padding: 5px;
`

interface Props<T, K> extends PropsWithChildren {
    items: T[],
    currentValue: K,
    action?: any;
}

export const DropdownList : FC<Props<{title: string, value: string}, string>> = ({items, currentValue, action, handler}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const dispatch = useDispatch();

    return(
      <DropdownListContainer>
        <DropdownListValue onClick={() => {setOpened(true)}}>{items.find(item => item.value === currentValue)?.title}</DropdownListValue>
        <DropdownListMenu $opened={opened}>
            {
                items
                .filter(item => item.value !== currentValue)
                .map(item => <DropdownListMenuItem
                    onClick={() => {
                        setOpened(false)
                        if (!action) {
                            handler(item);
                            return
                        }
                        dispatch(action(item.value))
                    }}
                >{item.title}</DropdownListMenuItem>)
            }
        </DropdownListMenu>
      </DropdownListContainer>
  )
}