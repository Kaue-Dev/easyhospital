interface ModalConfirmacaoProps {
  textContent: string;
  onConfirm: () => void;
}

export function ModalConfirmacao({ textContent, onConfirm }: ModalConfirmacaoProps) {
  return (
    <div className="absolute bg-black/50 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white px-8 py-4 shadow-lg rounded-lg flex flex-col items-center gap-4">
        <p className="text-center font-bold">{textContent}</p>
        <button className="bg-blue-950 text-white w-40 py-2 rounded-lg" onClick={onConfirm}>Confirmar</button>
      </div>
    </div>
  );
}