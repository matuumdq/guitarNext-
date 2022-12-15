import Link from 'next/link'
import Layout from '../components/layout'

export default function Pagina404() {
  return (
    <Layout
        title="Pagina no Encontrada"
    >    
        <p className='error'>Pagina no Encontrada</p>
        
        <Link href={'/'} className='error-enlace'>Volver al Inicio</Link>
    </Layout>
  )
}
