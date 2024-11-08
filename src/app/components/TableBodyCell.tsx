export function TableBodyCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="border border-t-0 px-4 py-2 text-center">
      {children}
    </td>
  )
}