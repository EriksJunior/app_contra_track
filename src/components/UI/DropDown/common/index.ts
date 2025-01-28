/* eslint-disable @typescript-eslint/no-explicit-any */
const defaultActions = [
  { text: 'Default 1', action: (params: any) => console.log('Ação ao selecionar Default 1', params) },
  { text: 'Default 2', action: (params: any) => console.log('Ação ao selecionar Default 2', params) },
  { text: 'Default 3', action: (params: any) => console.log('Ação ao selecionar Default 3', params) },
]

export { defaultActions }