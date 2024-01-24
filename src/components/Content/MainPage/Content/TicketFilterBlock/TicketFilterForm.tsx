import { useGetCityByNameQuery } from '/src/store/services/city.ts'
import styled from 'styled-components';
import { useState } from 'react';



const TicketFilterForm = styled('form')`
    width: 574px;
    height: calc(100vh - 43vh + .5rem);
    background-color: rgba(41, 41, 41, .8);
`

export default () => {
    const [name, setName] = useState<String>("");
    const { data, error, isLoading } = useGetCityByNameQuery(name);
    if (!isLoading) {
        console.log(data);
    }

    return(
        <TicketFilterForm>
            {/* {error.error ? "err" : "not"} */}
            {isLoading ? "loading" : "not loading"};
            {!data?.error 
            ? data.map(item => <div key={item.id}>{item.name}</div>)
            : "no data"
            // 
         }
            <input type="text" onChange={(e) => {
                // if (e.currentTarget.value) {
                    setName(e.currentTarget.value)
                // }
                }}/>

        </TicketFilterForm>
    );
}