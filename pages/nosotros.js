import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout 
        title={'Nosotros'}
        description='Sobre nosotros, guitarLA, tienda de musica'
    > 
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>
            <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros"/>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar est eu ipsum vulputate pretium sed non magna. Nunc egestas libero ac faucibus ultricies. Proin elementum vel tellus a sodales.
                    </p>
                    <p>
                        Etiam blandit lectus id iaculis suscipit. Suspendisse justo risus, fermentum at quam quis, congue tempus neque. Mauris ultrices, enim sit amet convallis eleifend, ipsum eros consectetur lacus, porttitor venenatis libero magna sit amet augue. Phasellus dui magna, tincidunt sit amet facilisis eu, dapibus vel lectus. Quisque tincidunt enim quis rutrum consequat.
                    </p>
                </div>
            </div>
        </main>
    </Layout>

  )
}
