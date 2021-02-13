/** [x,y] */
export type Point = [number, number]

export type Variable = { name: string; value: string }
export type FunctionData = {
  /** Usado pelos templates */
  name?: string
  params: Variable[]
  body: string
  /** Variáveis "globais" que o escopo da função precisa conseguir acessar */
  variables?: Variable[]
}

export type Vertices = Record<
  number,
  {
    /** vertices[u].argsList: array de params values do vértice u */
    argsList: any[]
    /** vertices[u].adjList: [{v, w}, ...], sendo u -w-> v, onde w é o resultado de fn(...argsList[u]) */
    adjList: { childId: number; weight?: number }[]
    memoized: boolean
  }
>

export type RecursionTree = { vertices: Vertices; fnResult: any }
export type SourceCodeOutput = {
  successValue: RecursionTree | null
  errorValue: number | null
}

/** key: vértice id */
export type VerticesData = Record<
  number,
  {
    /** times em que o vértice é o atual (em ordem crescente) */
    times: number[]
    coord: Point
    label?: string
    /** vértice foi obtido da memória? */
    memoized: boolean
  }
>

/** key: JSON.stringify([u,v]), para a aresta u -> v */
export type EdgesData = Record<
  string,
  {
    /** intervalo de min/max times em que a aresta deve ser exibida */
    timeRange: [number, number]
    label?: string
  }
>

/** all that is necessary to front-end render the tree */
export type TreeViewerData = {
  /** amount of time steps */
  times: number
  edgesData: EdgesData
  verticesData: VerticesData
  /** bottom right corner coordinate */
  svgBottomRight: Point
  /** logs[time]: text description for the current time */
  logs: string[]
}

export type SupportedLanguages = 'node' | 'python' | 'cpp'