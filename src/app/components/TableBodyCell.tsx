interface TableBodyCellProps {
  children: React.ReactNode;
}

export function TableBodyCell({ children }: TableBodyCellProps) {
  return (
    <td className="border border-t-0 px-4 py-2 text-center">
      {children}
    </td>
  )
}