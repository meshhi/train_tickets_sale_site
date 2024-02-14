import { FC, PropsWithChildren, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const DropdownListContainer = styled.div<{$active?: boolean}>`

    background: #F7F5F9;
`

const DropdownListValue = styled.span<{$active?: boolean}>`

    background: #F7F5F9;
`

const DropdownListMenu = styled.span<{$opened?: boolean}>`
    display: ${props => props.$opened ? "flex" : "none"};
    background: #F7F5F9;
    border: 1px solid black;
`

const DropdownListMenuItem = styled.span<{$active?: boolean}>`
    background: #F7F5F9;
`

interface Props<T, K> extends PropsWithChildren {
    items: T[],
    currentValue: K,
    action?: any;
}

export const DropdownList : FC<Props<{title: string, value: string}, string>> = ({items, currentValue, action}) => {
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
                        dispatch(action(item.value))
                    }}
                >{item.title}</DropdownListMenuItem>)
            }
        </DropdownListMenu>
      </DropdownListContainer>
  )
}