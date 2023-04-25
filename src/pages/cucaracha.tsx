import useGetStudents from "../hooks/useGetStudents";

// - >  carenta.app -> MAIN * bloqueado -> carenta.app | 

const Cucaracha = ()=>{
    const {data} = useGetStudents()
    return(
        <div>
            <ul>
            {data.data.map((student)=>{
                return <li>{student.name} {student.age} {student.grade}</li>
            })}
            </ul>
        </div>
    )
}

export default Cucaracha;