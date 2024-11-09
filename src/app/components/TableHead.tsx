interface TableHeadProps {
  children?: React.ReactNode
}

export function TableHead({ children }: TableHeadProps) {
  return (
    <thead className="bg-blue-700 text-white w-full border border-blue-700 border-b-0">
      {children}
    </thead>
  )
}