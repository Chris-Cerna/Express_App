import React, { useEffect, useState } from 'react'
import "./Main.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

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
    const [precioEnvio, setPrecioEnvio] = useState("")
    
      




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
    const PriceTire2 = () => {
      setPrecioNormal(CatchText2)
  }

    const changeText2 = (event) => {
      setCatchText2(Number(event.target.value))
  }

    
   const calculoEnvio = () =>{
    PriceTire2()
    setPrecioEnvio(Number( Math.abs(total - precioNormal) ))
   }
    
    

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

   
    

    const handleSubmit = () => {
        

        PriceTire()
        calculoTotal()
        ShowEnvio()
    }

    const ShowEnvio = () => {
      setValidacion(true)
    }

    

    /* calculo envio*/

    

    

    
    
  return (
    <div className='container'>

        <div className='imagenes'>
            <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mju5ka15zxeorfvjgsfq' alt='imagen de cargo express'/>
            <img className='llantas' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_0Ff4lFGRgtFgs4vY1gkq5S0ELAE5vkSkA&usqp=CAU' alt='imagen de super llantas express'/>
        </div>

        <Alert className='formulario'>
            <h2>INGRESE EL PRECIO MINIMO</h2>
            <TextField className='Input' color="success" focused onChange={changeText} placeholder="Q "/>
          
            &nbsp;
            <Button className='Botones' variant="contained" color="success" onClick={handleSubmit} >
              Calcular
            </Button>
            &nbsp;
            &nbsp;
            <Button className='Botones' variant="contained" color="success" >
              <a href="javascript:location.reload()" className='Refresh' >Calcular Otro Precio</a>
            </Button>
            
        

            <h3>Su Precio con envio es de: Q{Math.ceil(total)}</h3>
            
            {Validacion && ( <Alert className='formulario'>
                                <h2>INGRESE PRECIO REGULAR PARA CALCULAR ENVIO</h2>
                                <TextField className='Input' color="success" focused onChange={changeText2} placeholder="Q "/>
                                <Button className='Botones' variant="contained" color="success" onClick={calculoEnvio} >
                                  Calcular Envio
                                </Button>
                                <h3>Su Precio de envio es de: Q{Math.ceil(precioEnvio)}</h3>
                        </Alert>
                  
                  
                  )}
            
        </Alert>
       
        
        
    </div>

    
  )
}
