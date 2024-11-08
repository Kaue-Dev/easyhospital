export function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-blue-700 text-white w-full border border-blue-700 border-b-0">
      {children}
    </thead>
  )
}