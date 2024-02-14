import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFetchMainFilter } from '/src/api/useFetchMainFilter.ts'
import { Spinner } from '../../../../../../Elements/Loaders/Spinner'
import Direction from './Direction/Direction'
import { DropdownList } from '../../../../../../Elements/Lists/DropdownList'
import { useDispatch, useSelector } from 'react-redux'
import {
limit as limit_action,
offset as offset_action,
sort as sort_action,
} from '/src/store/slices/filterSlice.ts';
import { Pagination } from './Pagination'


const DirectionsContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`

const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`

const FilterBlockSorts = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
`

const DirectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ShowNumber = styled.span<{$active: boolean}>`
  font-weight: ${props => props.$active ? 500 : 300};
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`

const showArray = [5, 10, 20];
const sortArray = [
  {
    title: "времени",
    value: "date"
  }, 
  {
    title: "стоимости",
    value: "price"
  }, 
  {
    title: "длительности",
    value: "duration"
  }, 

]

const Directions = () => {
  const { data, error, loading } = useFetchMainFilter();
  const dispatch = useDispatch();
  const {limit, offset, sort} = useSelector(state => state.filter)
  
  useEffect(() => {
    if (!limit) {
      dispatch(limit_action(showArray[0]))
    }
    if (!sort) {
      dispatch(sort_action(sortArray[0].value))
    }
  }, [])

  return (
    <>
        <FilterBlock>
          <div>Найдено {data?.total_count}</div>
          <FilterBlockSorts>
            <div>Сортировать по <DropdownList items={sortArray} currentValue={sort} action={sort_action}></DropdownList></div>
            <div>Показывать по {
            showArray.map((item) => {
              return <ShowNumber
              $active={item === limit}
              onClick={() => dispatch(limit_action(item))}
              >{item}</ShowNumber>
            })
            
            }
            </div>
          </FilterBlockSorts>
        </FilterBlock>
      <DirectionsContainer>
        {loading ? <Spinner></Spinner> : false}
        {error ? error : false}
        <DirectionsList>
          {data?.items?.map(direction => <Direction key={direction.departure._id + direction.departure.from.datetime} direction={direction}>{direction.toString()}</Direction>)}
        </DirectionsList>
      </DirectionsContainer>
      <Pagination></Pagination>
    </>
  )
}

export default Directions