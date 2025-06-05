import { ReactNode } from 'react'

export default function Dialogue({ children }: { children: ReactNode }) {
  return <p className="py-4 font-medium">{children}</p>
}
