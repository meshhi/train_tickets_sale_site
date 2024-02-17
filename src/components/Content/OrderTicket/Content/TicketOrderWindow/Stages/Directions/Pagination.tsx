import { FC, PropsWithChildren, useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

const PaginationContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

const PaginationItem = styled.div<{$active: boolean}>`
    width: 85px;
    height: 75px;
    background-color: ${props => props.$active ? "red" : "transparent"};
    border: 1px solid orange;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;

    &.active {

    }
`

interface Props extends PropsWithChildren {
    totalCount: number,
    offset: number,
    limit: number,
    action: any
}

export const Pagination : FC<Props> = ({totalCount = 0, offset = 0, limit = 5, action}) => {
    const [maxPagination, setMaxPagination] = useState<number>(3);
    const [pagesList, setPagesList] = useState<number[]>();
    const [currentPage, setCurrentPage] = useState<number>();
    const [currentPagesList, setcurrentPagesList] = useState<number[]>();
    const [totalPages, setTotalPages] = useState<number>();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        console.log("totalCount" , totalCount)
        console.log("offset" , offset)
        console.log("limit" , limit)
        console.log("pagesList", pagesList)
        console.log("currentPage", currentPage)

        const totalPagesCount = totalCount / limit;
        setTotalPages(totalPagesCount);
        let pagesListArray = Array
            .from({length: totalPagesCount})
            .map((_, index) => index + 1)
        if (pagesListArray.length > maxPagination) {
            const middleIndex = maxPagination / 2;
            pagesListArray = [...(pagesListArray.slice(0, middleIndex)), ["..."], ...(pagesListArray.slice(pagesListArray.length + 1 - middleIndex, pagesListArray.length))];
            setPagesList(pagesListArray);
        }
    }, [totalCount, limit])

    useLayoutEffect(() => {

    }, [currentPage])

    useLayoutEffect(() => {
        console.log()
        setCurrentPage((offset / limit) + 1);
    }, [])

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            dispatch(action(pageNumber * limit));
        }
    }

    return(
        <PaginationContainer>
            <PaginationItem onClick={() => handlePageClick(currentPage - 1)}>{"<"}</PaginationItem>
            {
                pagesList?.map(item => 
                <PaginationItem
                    $active={currentPage == item}
                    key={item}
                    onClick={() => handlePageClick(item)}
                >{item}</PaginationItem>)
            }
            <PaginationItem onClick={() => handlePageClick(currentPage + 1)}>{">"}</PaginationItem>
        </PaginationContainer>
    )
}