import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Text from './Text'
import Dialogue from './Dialogue'
import Thought from './Thought'
import type { ReactNode } from 'react'

const components = {
  p: ({ children }: { children: ReactNode }) => <>{children}</>,
  Text,
  Dialogue,
  Thought,
}

export default function MdxComponent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />
}
