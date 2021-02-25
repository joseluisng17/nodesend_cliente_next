import React, {useState, useContext} from 'react';
import appContext from '../context/app/appContext';


const Formulario = () => {

    // Context de la app
    const AppContext = useContext(appContext);
    const { agregarPassword, agregarDescargas } = AppContext;

    const [tienePassword, setTienePassword] = useState(false);

    return ( 
        <div className="w-full mt-20">
            <div>
                <label className="text-lg text-gray-800">Eliminar tras:</label>
                <select 
                    className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
                    onChange={ e => agregarDescargas( parseInt(e.target.value) )  }
                >
                    <opntion value="" select disabled>-- Seleccione --</opntion>
                    <option value="1">1 descarga</option>
                    <option value="5">5 descargas</option>
                    <option value="10">10 descargas</option>
                    <option value="20">20 descargas</option>
                </select>
            </div>

            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <lavel className="text-lg text-gray-800 mr-2">Proteget con Contraseña</lavel>
                    <input 
                        type="checkbox" 
                        onChange={ () => setTienePassword(!tienePassword) }
                    />
                </div>

                {tienePassword ? (
                    <input 
                        type="password" 
                        className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500" 
                        onChange={ e => agregarPassword(e.target.value)}
                    />
                ) : null}
                
            </div>
        </div>
    );
}
 
export default Formulario;