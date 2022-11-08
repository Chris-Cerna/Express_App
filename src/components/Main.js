import React, { useEffect, useState } from 'react'
import "./Main.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Main = () => {

    /* calcular precio con envio*/

    
    const [precioProducto, setPrecioProducto] = useState("")
    const [precioNormal, setPrecioNormal] = useState("")
    const [CatchText, setCatchText] = useState("")
    const [CatchText2, setCatchText2] = useState("")
    const [recargoTotal, setRecargoTotal] = useState("")
    const [precioRecuperado, setPrecioRecuperado] = useState("")
    const [subTotal2, setSubtotal2] = useState("")
    const [total, setTotal] = useState("")
    const [Validacion, setValidacion] = useState(false)
    
      




    const envio = 66
    const Subtotal =  envio + precioProducto
    let recargo = Subtotal * 0.04
    /*let recargoTotal = 0
    let precioRecuperado = 0
    let subTotal2 = 0
    let total = 0*/

    
   

    useEffect(() => {
      setPrecioRecuperado(total - recargoTotal - envio)
      setRecargoTotal(total * 0.04)
      setSubtotal2(Subtotal + recargoTotal)
    }, [precioProducto])

    useEffect(() => {
        setPrecioRecuperado(total - recargoTotal - envio)
        setRecargoTotal(total * 0.04)
        setSubtotal2(Subtotal + recargoTotal)
      }, [total])
    
    
    const changeText = (event) => {
        setCatchText(Number(event.target.value))
    }

    const PriceTire = () => {
        setPrecioProducto(CatchText)
    }

    
    /*const newPrice = () =>{
      setCatchText("")
      setCatchText2("")
      setPrecioNormal("")
      setPrecioProducto("")
      setTotal("")
    }*/
    
    

    const calculoTotal = () => {

          let totalEncontrado = false
          

                let condicion = precioRecuperado>=precioProducto

                if(!condicion){
                    setTotal(subTotal2)
                    console.log("el total es: "+ total)
                    
                }else{
                    console.log("no sumo nada")
                    totalEncontrado = true
                }
    }

    const refreshPage = (e) => {
      e.preventDefault();
       const refrescar = window.location.reload
       return refrescar
    }
    

    const handleSubmit = () => {
        

        PriceTire()
        calculoTotal()
       
        
    }

    

    

    /* calculo envio*/

    

    

    
    
  return (
    <div className='container'>

        <div className='imagenes'>
            <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mju5ka15zxeorfvjgsfq' alt='imagen de cargo express'/>
            <img className='llantas' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_0Ff4lFGRgtFgs4vY1gkq5S0ELAE5vkSkA&usqp=CAU' alt='imagen de super llantas express'/>
        </div>

        <div className='formulario'>
            <h2>INGRESE EL PRECIO MINIMO</h2>
            <TextField color="error" focused onChange={changeText} placeholder="Q "/>
          
            
            <Button variant="contained" color="success" onClick={handleSubmit} >
              Calcular
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit} >
              <a href="javascript:location.reload()" className='Refresh' >Calcular Otro Precio</a>
            </Button>
            
        

            <h3>Su Precio con envio es de: Q{Math.ceil(total)}</h3>
            
            
            
        </div>
        
        
    </div>

    
  )
}
