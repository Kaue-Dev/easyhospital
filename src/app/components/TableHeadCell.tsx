export function TableHeadCell({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
      {children}
    </th>
  )
}