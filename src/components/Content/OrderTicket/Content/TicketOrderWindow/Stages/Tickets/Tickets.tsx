import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFetchMainFilter } from '/home/meshi/Desktop/diplo/src/api/useFetchMainFilter.ts'
import { Spinner } from '../../../../../../Elements/Loaders/Spinner'
import Ticket from './Ticket/Ticket'

const TicketsContainer = styled.div`
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

const TicketsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`


const Tickets = () => {
  const { data, error, loading } = useFetchMainFilter();
  
  useEffect(() => {
    console.log(error)
  }, [loading])

  return (
    <>
      <TicketsContainer>
        {loading ? <Spinner></Spinner> : false}
        {error ? error : false}
        <FilterBlock>
          <div>Найдено {data?.total_count}</div>
          <FilterBlockSorts>
            <div>Сортировать по </div>
            <div>Показывать по </div>
          </FilterBlockSorts>
        </FilterBlock>
        <TicketsList>
          {data?.items?.map(direction => <Ticket direction={direction}>{direction.toString()}</Ticket>)}
        </TicketsList>
      </TicketsContainer>
    </>
  )
}

export default Tickets