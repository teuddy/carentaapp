import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../services/apiInstance";
const useGetStudents = ()=>
    useQuery({
        queryKey: ['students'],
        queryFn: ()=>{}
    })


export default useGetStudents;