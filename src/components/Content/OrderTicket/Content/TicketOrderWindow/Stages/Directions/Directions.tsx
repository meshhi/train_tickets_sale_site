import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFetchMainFilter } from '/src/api/useFetchMainFilter.ts'
import { Spinner } from '../../../../../../Elements/Loaders/Spinner'
import Direction from './Direction/Direction'

const DirectionsContainer = styled.div`
  width: 100%;
  // min-height: 700px;
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


const Directions = () => {
  const { data, error, loading } = useFetchMainFilter();
  
  useEffect(() => {
    console.log(error)
  }, [loading])

  return (
    <>
      <DirectionsContainer>
        {loading ? <Spinner></Spinner> : false}
        {error ? error : false}
        <FilterBlock>
          <div>Найдено {data?.total_count}</div>
          <FilterBlockSorts>
            <div>Сортировать по test</div>
            <div>Показывать по </div>
          </FilterBlockSorts>
        </FilterBlock>
        <DirectionsList>
          {data?.items?.map(direction => <Direction direction={direction}>{direction.toString()}</Direction>)}
        </DirectionsList>
      </DirectionsContainer>
    </>
  )
}

export default Directions