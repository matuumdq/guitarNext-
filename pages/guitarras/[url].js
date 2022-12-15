import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import styles from '../../styles/guitarras.module.css'

export default function Producto({guitarra, agregarCarrito}) {
    
    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, imagen, precio } =guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1){
            alert('Cantidad no Valida')
            return
        }

        // construyendo Objeto

        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando al Context
        agregarCarrito(guitarraSeleccionada)
    }


  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >  
    <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`} width={600} height={200} />
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>$ {precio}</p>

            <form 
                onSubmit={handleSubmit}
                className={styles.formulario}
            >
                <label htmlFor="cantidad">Cantidad:</label>
                <select 
                    onChange={e=>setCantidad(+e.target.value)}
                    id="cantidad">
                    <option value="0">--Seleccione--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input 
                    type="submit" 
                    value='Agregar al Carrito'
                />
            </form>
        </div>
    </div>
    </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        fallback : false,
        paths
    }
}

export async function getStaticProps({params:{url}}){

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()
    
    return {
        props:{
            guitarra
        }
    }
}

// export async function getServerSideProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     const {data: guitarras} = await respuesta.json()

//     return{
//         props: {
//             guitarras
//         }
//     }
// }