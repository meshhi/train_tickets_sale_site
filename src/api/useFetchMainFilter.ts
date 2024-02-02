import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
export const useFetchMainFilter = () => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    
    const url = new URL('https://students.netoservices.ru/fe-diplom/routes')
    const filter = useSelector(state => state.filter);
    console.log(filter)
    const filterParams = {
        from_city_id: filter.from_city._id,
        to_city_id: filter.to_city._id,
        date_start: filter.date_start ? format(new Date(filter.date_start), "yyyy-MM-dd") : null,
        date_end: filter.date_end ? format(new Date(filter.date_end), "yyyy-MM-dd") : null,
    }
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