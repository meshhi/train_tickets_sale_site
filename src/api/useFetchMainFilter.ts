import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
export const useFetchMainFilter = () => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
    const url = new URL('https://students.netoservices.ru/fe-diplom/routes')
    const filter = useSelector(state => state.filter);
    // console.log("FILTER STATE: ")
    // console.log(filter)

    let filterParamsBase = {
        from_city_id: filter.from_city._id,
        to_city_id: filter.to_city._id,
        date_start: filter.date_start ? format(new Date(filter.date_start), "yyyy-MM-dd") : null,
        date_end: filter.date_end ? format(new Date(filter.date_end), "yyyy-MM-dd") : null,
        date_start_arrival: filter.date_start_arrival ? format(new Date(filter.date_start_arrival), "yyyy-MM-dd") : null,
        date_end_arrival: filter.date_end_arrival ? format(new Date(filter.date_end_arrival), "yyyy-MM-dd") : null,
        have_first_class: filter.have_first_class,
        have_second_class: filter.have_second_class,
        have_third_class: filter.have_third_class,
        have_fourth_class: filter.have_fourth_class,
        have_wifi: filter.have_wifi,
        have_air_conditioning: filter.have_air_conditioning,
        have_express: filter.have_express,
        price_from: filter.price_from,
        price_to: filter.price_to,
        start_departure_hour_from: filter.start_departure_hour_from,
        start_departure_hour_to: filter.start_departure_hour_to,
        start_arrival_hour_from: filter.start_arrival_hour_from,
        start_arrival_hour_to: filter.start_arrival_hour_to,
        end_departure_hour_from: filter.end_departure_hour_from,
        end_departure_hour_to: filter.end_departure_hour_to,
        end_arrival_hour_from: filter.end_arrival_hour_from,
        end_arrival_hour_to: filter.end_arrival_hour_to,
        limit: filter.limit,
        offset: filter.offset,
        sort: filter.sort,
    }

    const filterParams = {}
    for (let key in filterParamsBase) {
        if (filterParamsBase[key] !== null && filterParamsBase[key] !== undefined) {
            filterParams[key] = filterParamsBase[key];
        }
    }


    console.log("FILTER PARAMS: ")
    console.log(filterParams)

    url.search = new URLSearchParams(filterParams).toString();

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true);
                    setError(null)
                    const response = await fetch(url);
                    const json = await response.json();
                    if (json?.error) setError(json.error);
                    setData(json);
                }catch(err){
                    setError(err);
                }finally{
                    setLoading(false);
                }
            }
        )()
    }, [filter])

    return { data, error, loading }
}