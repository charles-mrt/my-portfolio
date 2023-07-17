
interface BarLevel {
  level: number
}

export function BarLevel({ level }: BarLevel) {

  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`w-[11px] h-[3px] ${index < level ? 'bg-green-400' : 'bg-zinc-500'}`}
        >
        </div>
      ))}
    </div>
  )
}