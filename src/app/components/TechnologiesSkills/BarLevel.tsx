
interface BarLevelProps {
  level: number
}

export function BarLevel({ level }: BarLevelProps) {

  const maxLevel = 10;

  if (level < 0 || level > maxLevel) {
    throw new Error(`"The value of 'level' (${level}) is outside the allowed range. Please set a value for the 'level' prop between 0 and 10."`);
  }

  return (
    <div className="flex gap-1.5">
      {Array.from({ length: maxLevel }, (_, index) => (
        <div
          key={index}
          className={`sm-device:w-[0.4rem] w-2 h-[3px] ${index < Math.min(level, 10) ? 'bg-green-400' : 'bg-zinc-500'}`}
        >
        </div>
      ))}
    </div>
  )
}