


const getStudentsService = ()=>{
    //aqui va la logica de negocio.
    //el encargado de llamas a mi modelo y crear los records de la db
    //cualquier logica, va aqui
    return [ { name: "teuddy", age: 18, grade: "A" },
    { name: "sebas", age: 20, grade: "B" },
    { name: "lucho", age: 19, grade: "C" }]
}

export {getStudentsService}