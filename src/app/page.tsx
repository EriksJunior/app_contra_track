'use client'

import { Title } from './components/UI/Title'

// export async function generateMetadata() {
//   return {
//     title: 'Contra Track',
//     description: 'Veja aqui todos os ducomentos fiscais emitidos para você!',
//     generator: 'Contra Track',
//     applicationName: 'Contra Track',
//     keywords: [
//       'Notas Fiscais',
//       'Cupons fiscais',
//       'Notas fiscais de serviço',
//       'Notas de serviço',
//       'Manifesto de transporte',
//       'Manifesto Eletronico',
//       'NF-e',
//       'NFC-e',
//       'NFS-e',
//       'MDF-e'
//     ],
//     authors: [
//       { name: 'Contra Track' },
//       { name: 'Contra Track', url: '' }
//     ],
//     creator: 'Contra Track',
//     publisher: 'Contra Track',
//     category: 'Documentos Fiscais',
//     formatDetection: {
//       email: false,
//       address: false,
//       telephone: false
//     }
//   }
// }

export default function Home () {
  return (
    <div style={{ padding: '15px 15px 15px 0', height: '100%' }}>
      <Title fontSize='20px' color='black' text='Home' />
    </div>
  )
}
