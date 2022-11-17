import {collection, doc, getDoc, addDoc, updateDoc} from "firebase/firestore";
//import {getDocs, query, setDoc, where, deleteDoc} from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firebase, { db } from './firebase';
import { async } from './firebase';

const AppForm = (props) => {
    ///////////////////////////////////////////////////////////////
    ////////////////////CREAR - fnCrear - Guardar//////////////////
    ///////////////////////////////////////////////////////////////
    const camposRegistro = {NOMBRES:"", EDAD:"", GENERO:""};   //estructura tbL {nombre:"", edad:"", genero:""};
    const [objeto, setObjeto] = useState(camposRegistro);     //Tabla u objeto

    const hanleStatuschange = (e) => {                        //Manejo cambios en input...
    }                             

    const handleSubmit = async (e) => {   
        try{
            e.preventDefault();
            ////////////// REGISTRAR O ACTUALIZAR/////////////////
            if(props.idActual === ""){
                if(validarForm()){
                    addDoc(collection(db,'persona'),objeto);
                    console.log('Se guardó...');
                }else{
                    console.log('No se guardó...');
                }
            }else{
                await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
                console.log("Se actualizó...");
                props.setIdActual('');
            
            }
            setObjeto(camposRegistro);
        } catch (error) {
            console.log("Error en CREAR: ", error);
        }
    }                    
       
           
          

    useEffect(() => {

        if(props.idActual === ""){
            setObjeto({...camposRegistro});
        }else{
            obtenerDatosPorId(props.idActual);
        }

    }, [props.idActual]);

    const obtenerDatosPorId = async (xId) =>{
        const objPorId = doc(db, "persona", xId);
        const docPorId = await getDoc(objPorId);
        if (docPorId.exists()) {
            setObjeto(docPorId.data());
        } else {
            console.log("No hay doc...");
        }
        
    }
    //console.log(objeto);

    return (
        <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
        <h1>AppForm.js</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="NOMBRE" placeholder="NOMBRES..."
            onChange={hanleStatuschange} value={objeto.url} /> <br/>

            <input type="text" name="EDAD" placeholder="EDAD..."
            onChange={hanleStatuschange} value={objeto.nombre} /> <br/>

            <input type="text" name="GENERO" placeholder="GENERO..."
            onChange={hanleStatuschange} value={objeto.descripcion} /> <br/>

            <button>
                {props.idActual === ""? "Guardar" : "Actualizar"}
            </button>
        </form>
        </div>
    )
}

export default AppForm;
