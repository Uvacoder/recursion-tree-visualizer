import React from 'react'

import { Svg } from './styles'
import DirectedEdge from './directed-edge'
import Vertice from './vertice'
import { Point, VerticesData, EdgesData } from '../../../types'

type Props = {
  time: number // current time
  bottomRight: Point
  vertices: VerticesData
  edges: EdgesData
}

// renderiza o grafo em um momento (time)
const Graph = ({ time, edges, vertices, bottomRight }: Props) => {
  return (
    <Svg viewBox={`0 0 ${bottomRight[0]} ${bottomRight[1]}`}>
      {Object.entries(edges).map(([key, data]) => {
        const [u, v] = JSON.parse(key)

        return (
          time >= data.timeRange[0] &&
          time <= data.timeRange[1] &&
          vertices[u]?.coord &&
          vertices[v]?.coord && (
            <DirectedEdge
              key={key}
              start={vertices[u].coord}
              end={vertices[v].coord}
              label={data.label}
              // highlight={data.timeRange.some((t) => t == time)}
            />
          )
        )
      })}
      {Object.entries(vertices).map(([key, data]) => {
        const v = Number(key)

        return (
          time >= data.times[0] && (
            <Vertice
              key={key}
              center={data.coord}
              label={data.label}
              highlight={data.times.some((t) => t == time)}
            />
          )
        )
      })}
    </Svg>
  )
}

export default Graph
