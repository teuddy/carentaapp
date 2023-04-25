import { useEffect, useState } from "react";
import useGetStudents from "../hooks/useGetStudents";

// - >  carenta.app -> MAIN * bloqueado -> carenta.app | 


type Student ={
    name : string,
    age: number,
    grade: string
}

const Cucaracha = ()=>{
    const [students,setStudents] = useState<Student[]>()
    const query = useGetStudents()

    useEffect(()=>{
        if(query.isSuccess){
            setStudents(query.data?.data)
        }

    },[query.isSuccess])


    return(
        <div>
            <ul>
            {students && students.map((student,index)=>{
                return <li key={index}>{student.name} {student.age} {student.grade}</li>
            })}
            </ul>
        </div>
    )
}

export default Cucaracha;