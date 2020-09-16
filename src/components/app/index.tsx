import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './../../styles/global'
import * as s from './styles'
import FunctionForm from '../function-form'
import GraphViewer from '../graph-viewer'
import Footer from './footer'
import themes from './../../styles/themes'
import { AdjList, Args, Themes } from '../../types'

// const fakeAdjList: AdjList = {
//   0: [{ v: 1 }, { v: 7 }, { v: 8 }, { v: 2 }, { v: 3 }],
//   1: [{ v: 4 }],
//   2: [{ v: 5 }],
//   3: [{ v: 6 }],
//   4: [{ v: 13 }, { v: 14 }, { v: 15 }],
//   5: [{ v: 16 }, { v: 17 }, { v: 18 }],
//   6: [{ v: 19 }, { v: 20 }, { v: 21 }],
// }

const App = () => {
  const [themeName, setThemeName] = React.useState<Themes>('light')

  const [adjList, setAdjList] = React.useState<AdjList>({})
  const [args, setArgs] = React.useState<Args>({})
  const [result, setResult] = React.useState(NaN)

  return (
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyle />
      <s.App>
        <s.Sidebar>
          <FunctionForm
            onSubmit={(adjList, args, result) => {
              setAdjList(adjList)
              setArgs(args)
              setResult(result)
            }}
            onThemeChange={(themeName) => {
              setThemeName(themeName)
            }}
          />
        </s.Sidebar>
        <s.Main>
          <GraphViewer adjList={adjList} args={args} result={result} />
          <Footer link='https://github.com/brpapa/recursion-tree-visualizer' />
        </s.Main>
      </s.App>
    </ThemeProvider>
  )
}

export default App