interface FormFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export function FormField({ label, ...props }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-blue-950 font-bold">{label}</label>
      <input
        {...props}
        className="bg-blue-950 text-white py-2 px-4 rounded-lg"
      />
    </div>
  );
}
