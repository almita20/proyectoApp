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

            
            </div>
    )
}