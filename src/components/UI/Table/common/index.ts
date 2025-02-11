/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDefaultTable {
  headers: { key: string, text: string, style?: React.CSSProperties }[]
  body: any[],
}

export interface IDefaultActions {
  text: string
  action: (params: any) => void
}

const defaultActions: IDefaultActions[] = [
  { text: 'Default 1', action: (params: any) => console.log('Ação ao selecionar Default 1', params) },
  { text: 'Default 2', action: (params: any) => console.log('Ação ao selecionar Default 2', params) },
  { text: 'Default 3', action: (params: any) => console.log('Ação ao selecionar Default 3', params) },
]

const defaultTable: IDefaultTable = {
  headers: [
    {
      text: "Default 1",
      key: "default1",
      style: { flex: '1 1 100%', }
    },
    {
      text: "Default 2",
      key: "default2",
      style: { flex: '1 1 100%', }
    },
    {
      text: "Default 3",
      key: "default3",
      style: { flex: '1 1 100%', }
    },
  ],
  body: [
    { id: 1, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 2, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 3, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 4, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 5, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 6, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 7, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 8, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 9, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 10, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 11, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 12, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 13, default1: "teste 1", default2: "teste 2", default3: "teste 3" },
    { id: 14, default1: "teste 14", default2: "teste 14", default3: "teste 14" },
  ],
}

export { defaultActions, defaultTable }