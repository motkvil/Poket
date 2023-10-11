import { Box,Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function IndexPage(props) {

  const [itemActive, setItemActive] = useState("")
  const [itemIsActive, setItemIsActive] = useState(false)


  let items = [
    {
      title: 'Alojamiento',
      items: [
        {
          title:'Hipoteca o alquiler',
          prev_cost:0,
          real_cost:0
        },
        {
          title:'Telefono',
          prev_cost:0,
          real_cost:0
        },{
          title:'Electricidad',
          prev_cost:0,
          real_cost:0
        },{
          title:'Gas',
          prev_cost:0,
          real_cost:0
        },{
          title:'Agua y alcantarillado',
          prev_cost:0,
          real_cost:0
        },{
          title:'Television por cable',
          prev_cost:0,
          real_cost:0
        },{
          title:'Recogida de residuos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Mantenimiento o reparaciones',
          prev_cost:0,
          real_cost:0
        },{
          title:'Suministros',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
        
        
        
      ]
    },{
      title: 'Transporte',
      items: [
        {
          title:'Pago del vehiculo',
          prev_cost:0,
          real_cost:0
        },{
          title:'Gastos de taxi o bus',
          prev_cost:0,
          real_cost:0
        },{
          title:'Seguro',
          prev_cost:0,
          real_cost:0
        },{
          title:'Licencias',
          prev_cost:0,
          real_cost:0
        },{
          title:'Combustible',
          prev_cost:0,
          real_cost:0
        },{
          title:'Mantenimiento',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Seguro',
      items: [
        {
          title:'Hogar',
          prev_cost:0,
          real_cost:0
        },{
          title:'Salud',
          prev_cost:0,
          real_cost:0
        },{
          title:'Vida',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Comida',
      items: [
        {
          title:'Alimentos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Restaurantes',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Mascotas',
      items: [
        {
          title:'Comida',
          prev_cost:0,
          real_cost:0
        },{
          title:'Medicos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Limpieza',
          prev_cost:0,
          real_cost:0
        },{
          title:'Juguetes',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Cuidado Personal',
      items: [
        {
          title:'Medicos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Pelo y uñas',
          prev_cost:0,
          real_cost:0
        },{
          title:'Ropa',
          prev_cost:0,
          real_cost:0
        },{
          title:'Tintorería',
          prev_cost:0,
          real_cost:0
        },{
          title:'Gimnasio',
          prev_cost:0,
          real_cost:0
        },{
          title:'Tasas o cuotas de la organizacion',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Entretenimiento',
      items:[
        {
          title:'Noche de salir',
          prev_cost:0,
          real_cost:0
        },{
          title:'Plataformas de musica',
          prev_cost:0,
          real_cost:0
        },{
          title:'Peliculas',
          prev_cost:0,
          real_cost:0
        },{
          title:'Conciertos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Eventos deportivos',
          prev_cost:0,
          real_cost:0
        },{
          title:'Teatro',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Prestamos',
      items: [
        {
          title:'Personal',
          prev_cost:0,
          real_cost:0
        },{
          title:'Bancario',
          prev_cost:0,
          real_cost:0
        },{
          title:'Tarjeta de credito',
          prev_cost:0,
          real_cost:0
        },{
          title:'Adelanto de nomina',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Impuestos',
      items: [
        {
          title:'Federales',
          prev_cost:0,
          real_cost:0
        },{
          title:'Estatales',
          prev_cost:0,
          real_cost:0
        },{
          title:'Locales',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Ahorros o Inversiones',
      items: [
        {
          title:'Cuenta de jubilación',
          prev_cost:0,
          real_cost:0
        },{
          title:'Cuenta de inversion',
          prev_cost:0,
          real_cost:0
        },{
          title:'Otros',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Regalos y Donaciones',
      items: [
        {
          title:'Organizacion benefica 1',
          prev_cost:0,
          real_cost:0
        },{
          title:'Organizacion benefica 2',
          prev_cost:0,
          real_cost:0
        },{
          title:'Organizacion benefica 3',
          prev_cost:0,
          real_cost:0
        }
      ]
    },{
      title: 'Legal',
      items: [
        {
          title:'Abogados',
          prev_cost:0,
          real_cost:0
        },{
          title:'Pensión alimenticia',
          prev_cost:0,
          real_cost:0
        },{
          title:'Pagos por retencion o fallo',
          prev_cost:0,
          real_cost:0
        }
      ]
    }
  ]

  const selectItem = (props) => {
    setItemActive(props)
    setItemIsActive(true)
  }


  const floatWindow = () => {

    let item = items.find(item => item.title === itemActive)

    return (
      <Box
        position={'fixed'} boxSizing={'border-box'}
        bgcolor={'hsla(0,0%,0%,.1)'}
        p={1} height={'100%'} left={0} top={0}width={'100%'}
        display={'flex'} justifyContent={'center'} alignItems={'center'}
      >

        <Box
           height={'80vh'}
          p={1} width={'80vw'} borderRadius={2}
        >


          <Box height={'90%'} bgcolor={'white'} borderRadius={3}>
            <Box className={'itemDetails'}>
              <Box
                bgcolor={'#ff0000'} color={'white'} fontSize={20}
                style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} p={1}
              >
                <Grid container>
                  <Grid item xs={5}>
                    <strong>{item.title}</strong>
                  </Grid>
                  

                  <Grid item xs={4}>
                    <strong>Costo previsto</strong>
                  </Grid>
                  <Grid item xs={3}>
                    <strong>Costo real</strong>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                {
                  item.items.map((item,index)=>(
                    <Box key={index} p={1} fontSize={20} display={'flex'} borderBottom={1} color={"hsla(0,0%,0%,.2)"}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Box fontSize={20} color={'black'} p={1}><strong>{item.title}</strong></Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box p={1} bgcolor={'hsla(39,60%,60%,.9)'} borderRadius={3} color={'black'}>${item.prev_cost}</Box>
                        </Grid>
                        <Grid item xs={3}>
                          <Box p={1} color={'black'} >${item.real_cost}</Box>
                        </Grid>
                      </Grid>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </Box>

          <Box display={'flex'} p={1} justifyContent={'space-around'} textAlign={'center'}>
            <Box bgcolor={'red'} borderRadius={1} minWidth={100} p={1}
              fontSize={20} color={'white'} style={{cursor:'pointer'}} onClick={()=>setItemIsActive(false)}
            >
              <strong>Salir</strong>
            </Box>

            <Box bgcolor={'red'} borderRadius={1} minWidth={100} p={1}
              fontSize={20} color={'white'} style={{cursor:'pointer'}}
            >
              <strong>Agregar item</strong>
            </Box>
          </Box>

        </Box>

      </Box>
    )
  }

  

  useEffect(()=>{
    gsap.fromTo('.itemDetails',{
      height:'0px',
      duration:1,
    },{
      height:'auto',
      duration:1,
    })
  },[itemActive])

  return (
    <Box p={1}>
      

      <Box p={1} borderRadius={2} fontSize={40} color={'#ff0000'} textAlign={'center'} >
        <p>¡<strong>Bienvenido</strong> a tu App de finanzas personales!</p>
      </Box>


      <Box>
        <Grid container >
          {items.map((item,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                overflow={'hidden'}
                
              >

                {
                  itemIsActive? floatWindow(item): undefined
                }

              
                <Box borderRadius={2} m={1} bgcolor={'#ff0000'} mb={2}  display={'flex'} boxShadow={'0px 7px 7px gray'}>

                  <Box p={2} color={'white'} display={'flex'} flexGrow={1} flexDirection={'column'}>
                    <Box fontSize={25}>
                      <strong>{item.title}</strong>
                    </Box>
                    <Box fontSize={50} flexGrow={1}>$9000</Box>
                    <Box  p={2} fontSize={20} color={'white'} className={'details'}
                      textAlign={'center'} style={{cursor:'pointer',borderTop:'dashed 3px white', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}
                      onClick={()=>selectItem(item.title)}
                    >
                      <strong>Details</strong>
                    </Box>
                  </Box>

                  <Box 
                    p={1} display={'flex'} justifyContent={'center'} borderRadius={2} 
                    flexDirection={'column'} bgcolor={'white'} width={'100%'}
                    boxShadow={'0px 0px 10px gray'}
                  >
                    <Box p={1} fontSize={20} >
                      {item.items.length} {' Items'}
                    </Box>
                    <Box p={1} fontSize={20} bgcolor={'#ff0000'} color={'white'} borderRadius={2}>
                      <strong>Agregar item </strong>
                    </Box>
                  </Box>
                </Box>


                



              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}


export default IndexPage