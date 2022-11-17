import { collection, getDocs, query, doc, deleteDoc, where, } from "firebase/firestore";
//import {getDoc, addDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import React, { useEffect,useState } from 'react';
import { db } from './componente/firebase';
import AppForm from './componente/AppForm';

function App() {
  ///////////////////////////////////////////////////////////////
  ////////////////////READ - fnRead - Lectura a BD///////////////
  ///////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");    //Crear Update  //usf
  const [docsBD, setDocsBD] = useState([]);        //Lectura a BD
  const [orden,setOrden] = useState(0);            //Para número - falla
  const i = 1;                                     //Para número - falla
    //console.Log(docsBD); //comentar sino genera bucle infinito useEffect


  useEffect( () => {
    const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach((doc) => {
            xDoc.puch({id: doc.id, ...doc.data()});
        
        });

        setDocsBD(xdoc);
  });    
    
}, [idActual]);

  ///////////////////////////////////////////////////////////////
  ////////////////////DELETE - fnDelete - Eliminar///////////////
  ///////////////////////////////////////////////////////////////

  const fnDelete = async (xId) => {
    //console.Log(xId);
    if(window.confirm("Confirme para eliminar")){
        await deleteDoc(doc(db, 'persona', xId));
        console.log("Se elimino..."+xId);
    }
  }
  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}} >
      <h1>sitioreact4 (App.Js)</h1>
      <AppForm {...{idActual, setIdActual}} />
      {
        docsBD.map( (p) => 
            <p key={p.id}>
                N.{i} - {p.nombre} ---
                <span onClick={() => fnDelete(p.id)}>x</span>
                --
                <span onClick={() => fnDelete(p.id)}>x</span>
            </p>
        )
      }
    </div>
  );
}
export default App;
