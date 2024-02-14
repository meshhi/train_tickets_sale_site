import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

const PaginationContainer = styled.div`

`

const PaginationItem = styled.div`

`

interface Props extends PropsWithChildren {
    totalCount: number,
    offset: number,
    limit: number,
    action: any
}

export const Pagination : FC<Props> = ({totalCount, offset, limit, action}) => {
    console.log("totalCount" , totalCount)
    console.log("offset" , offset)

    const handlePageClick = () => {

    }

    return(
        <PaginationContainer>
            <PaginationItem>prev</PaginationItem>
            <PaginationItem>next</PaginationItem>
        </PaginationContainer>
    )
}