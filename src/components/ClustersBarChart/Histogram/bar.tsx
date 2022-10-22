import * as d3 from 'd3'
import { SVGProps, useRef, useEffect } from 'react'
import useChartContext from '../useChartContext'

const Bar = (props: SVGProps<SVGRectElement>) => {
  const { height, y } = props
  const ref = useRef(null)
  const { data } = useChartContext()
  useEffect(() => {
    d3.select(ref.current).transition().duration(800)
      .attr('y', y as number)
      .attr('height', height as number)
  }, [data])
  return <rect
    ref={ref}
    {...props}
    y={(y as number) + (height as number)}
    height={0}
  />
}

export default Bar
