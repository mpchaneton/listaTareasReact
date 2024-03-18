import React, { useState } from 'react';
import html2canvas from "html2canvas";



const Tareas = () => {

    const [tarea, setTarea] = useState();
    const [tareas, setTareas] = useState([]);


    const texto = (e) => {
        setTarea(e.target.value)
    }

    const agregarTarea = (e) => {
        setTareas([...tareas, tarea])
        setTarea("")
    }


    const eliminar = (item) => {

        const listaNueva = tareas.filter(i => i !== item)
        setTareas(listaNueva)
    }


    const descargar = () => {
        html2canvas(document.querySelector(".export"))


            .then(canvas => {
                const img = canvas.toDataURL("tareas/jpg")
                const link = document.createElement("a")

                link.href = img
                link.download = "tareas.jpg"
                link.click()

            });
    }


    return (
        <div>

            <h1>Lista de tareas</h1>

            
                <div className='input-group mb-3'>
                    <input className="form-control" type="text" value={tarea} onChange={texto} placeholder='Ingresa tu tarea' />
                    <button className='btn btn-secondary' onClick={agregarTarea}>Agregar</button>
                </div>
            



            <div className='export'>

                {
                    (tareas.length !== 0) ?
                        <h3>Tareas pendientes</h3> :
                        null
                }

                {
                    (tareas.length !== 0) ?

                        (


                            <ul>
                                {(tareas.map((item) => (

                                    <li>
                                        <p>{item}</p>
                                        <button className='btn btn-outline-dark' onClick={() => (eliminar(item))}>Eliminar</button>
                                    </li>
                                )
                                ))
                                }
                            </ul>) :


                        <div>
                            <p>No tenes tareas pendientes</p>
                        </div>
                }

            </div>

            <div className='descargar'>

                {
                    (tareas.length !== 0) ?
                        (<button className='btn btn-primary btn-sm' onClick={descargar} >Descargar</button>) :
                        null
                }

            </div>


        </div>
    )
}

export default Tareas