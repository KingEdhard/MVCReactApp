import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [empleados, setEmpleados] /*, forecasts, setForecasts*/ = useState();

    useEffect(() => {
        /*populateWeatherData();*/
        populateEmpleadosData();
    }, []);

    //const contents = forecasts === undefined
    //    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //    : <table className="table table-striped" aria-labelledby="tabelLabel">
    //        <thead>
    //            <tr>
    //                <th>Date</th>
    //                <th>Temp. (C)</th>
    //                <th>Temp. (F)</th>
    //                <th>Summary</th>
    //            </tr>
    //        </thead>
    //        <tbody>
    //            {forecasts.map(forecast =>
    //                <tr key={forecast.date}>
    //                    <td>{forecast.date}</td>
    //                    <td>{forecast.temperatureC}</td>
    //                    <td>{forecast.temperatureF}</td>
    //                    <td>{forecast.summary}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    const contentsE = empleados === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(item =>
                    <tr key={item.idEmpleado}>
                        <td>{item.nombre}</td>
                        <td>{item.correo}</td>
                        <td>{item.direccion}</td>
                        <td>{item.telefono}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Empleados</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contentsE} {/*contents,*/}
        </div>
    );

    async function populateEmpleadosData() {
        const response = await fetch('empleados');
        const data = await response.json();
        setEmpleados(data);
    }
    

}

export default App;