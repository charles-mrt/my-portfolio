interface TitleProps {
  title: string;
  highlightedTitle: string;
  fontSize?: string;
}

export const SectionTitle = ({ title, highlightedTitle, fontSize }: TitleProps) => {

  const fontSizeVariant = fontSize ? `${fontSize}` : "sm:text-5xl";

  return (
    <h2 className={`
      text-2xl 
      font-medium 
      first-letter:capitalize 
      text-zinc-50 
     ${fontSizeVariant}
    `}>
      {title}
      <strong className="text-green-400 underline ml-3 normal-case">
        {highlightedTitle}
      </strong>
    </h2>
  )
} 
