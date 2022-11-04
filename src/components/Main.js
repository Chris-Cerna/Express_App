import React, { useEffect, useState } from 'react'
import "./Main.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Main = () => {

    /* calcular precio con envio*/

    const [totalEncontrado, setTotalEncontrado] = useState(false)
    const [precioProducto, setPrecioProducto] = useState("")
    const [CatchText, setCatchText] = useState("")
    const [recargoTotal, setRecargoTotal] = useState(0)
    const [precioRecuperado, setPrecioRecuperado] = useState(0)
    const [subTotal2, setSubtotal2] = useState(0)
    const [total, setTotal] = useState(0)
    
    const envio = 66
    const Subtotal =  envio + precioProducto
    let recargo = Subtotal * 0.04
    /*let recargoTotal = 0
    let precioRecuperado = 0
    let subTotal2 = 0
    let total = 0*/

    console.log(total)

    useEffect(() => {
      setPrecioRecuperado(total - recargoTotal - envio)
      setRecargoTotal(total * 0.04)
      setSubtotal2(Subtotal + recargoTotal)
    }, [precioProducto])
    
    
    const changeText = (event) => {
        setCatchText(Number(event.target.value))
    }

    const PriceTire = () => {
        setPrecioProducto(CatchText)
    }
    

    const calculoTotal = () => {
         while(totalEncontrado){

        //let condicion = precioRecuperado>=precioProducto

        if(precioRecuperado>=precioProducto){
            console.log("se suma al total")
            setTotal(subTotal2+1)
        }else{
            console.log("no sumo nada")
            setTotalEncontrado(true)
        }

        /*while (precioRecuperado < precioProducto) {
            setTotal(subTotal2)
            setPrecioRecuperado(precioRecuperado+1)
            
          
        }*/
    }
    }
    const handleSubmit = () => {
        PriceTire()
        calculoTotal()
        
    }

   

    

    /* calculo envio*/

    const [precioNormal, setPrecioNormal] = useState("")

    let totalEnvio = precioNormal - total
    
  return (
    <div className='container'>

        <div className='imagenes'>
            <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mju5ka15zxeorfvjgsfq' alt='imagen de cargo express'/>
            <img className='llantas' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_0Ff4lFGRgtFgs4vY1gkq5S0ELAE5vkSkA&usqp=CAU' alt='imagen de super llantas express'/>
        </div>

        <div className='formulario'>
            <h2>INGRESE EL PRECIO MINIMO</h2>
            <TextField color="error" focused onChange={changeText}/>
            <button onClick={handleSubmit}>Enviar</button>

            <h2>{total}</h2>
        </div>
        
    </div>

    
  )
}
