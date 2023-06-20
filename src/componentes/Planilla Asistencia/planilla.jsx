export function planilla(props){
    return(
            <div className="planilla">
            <form action="/guardar_asistencia" method="post">
            <table>
            <thead>
            <tr>
            <th>Nombre del Alumno</th>
            <th>Asistencia</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                        <td>Alumno 1</td>
                        <td>
                        <input type="checkbox" name="asistencia[]" value="alumno1">
                        </td>
                        </tr>

            <tr>
                        <td>Alumno 2</td>
                        <td>
                        <input type="checkbox" name="asistencia[]" value="alumno2">
                        </td>
                        </tr>

            <tr>
                        <td>Alumno 3</td>
                        <td>
                        <input type="checkbox" name="asistencia[]" value="alumno3">
                        </td>
                        </tr>

                        <!--agregar mas filas similares para mas alumnos-->
                       <>

            </thead>
            </table>
            </div>
    )
}