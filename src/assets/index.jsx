import { Box,Grid } from "@mui/material";

function IndexPage(props) {
  return (
    <Box p={1}>
      

      <Box p={1} borderRadius={2} fontSize={40} color={'#ff0000'} textAlign={'center'} >
        <p>¡<strong>Bienvenido</strong> a tu App de finanzas personales!</p>
      </Box>


      <Box>
        <Grid container spacing={2}>
          {[
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
          ].map((item,index)=>(
            <Grid item xs={12} md={6} key={index}>
              <Box 
                borderRadius={2} p={1} 
              >

                <Box
                  bgcolor={'#ff0000'} color={'white'}
                  style={{borderRadiusTopLeft:'10px'}} p={1}
                >
                  <strong>{item.title}</strong>
                </Box>

                <Box>
                  {
                    item.items.map((item,index)=>(
                      <Box key={index}>
                        {item.title}
                        {item.prev_cost}
                        {item.real_cost}
                      </Box>
                    ))
                  }
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