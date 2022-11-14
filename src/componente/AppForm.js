import {collection, doc, getDoc, addDoc, updateDoc} from "firebase/firestore";
//import {getDocs, query, setDoc, where, deleteDoc} from "firebase/firestore";
import React from 'react';
import firebase, { db } from './firebase';
import { async } from '@firebase/util';

const AppForm = (props) => {
    ///////////////////////////////////////////////////////////////
    ////////////////////CREAR - fnCrear - Guardar//////////////////
    ///////////////////////////////////////////////////////////////
    const camposRegistro = {nombre:"", edad:"", genero:""};   //estructura tbL
    const [objeto, setObjeto] = useState(camposRegistro);     //Tabla u objeto

    const handleStatuschange = (e) => { 
        const {name, value} = e.target;
        setObjeto({...objeto, [name]:value });
        console.log(objeto);
    };
    const handleSubmit =  (e) => { 
        console.log("Valida formulario");
    };       
    const validarForm =  (e) => { 
        console.log("Maneja envio");
    };                                    //Manejo cambios en input...
       
     return (
        <div style={{background:"yellow", padding:"10px", margin:"10px"}}>  
           <h1>AppForm.js</h1>
           <form onSubmit = {handleSubmit}>
               <input type ="text" name="nombre" placeholder="escriba completo..." 
               onChange ={handleStatusChange} value ={obejti.nombre}/> <br/>
               <button>
                  {props.idActual} === ""? "Guardar" : "Actualizar" ----
               </button>       
            </form>
        </div>           //Ver en tiempo real
     )
}