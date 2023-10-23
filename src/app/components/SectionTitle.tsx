interface TitleProps {
  titleName1: string;
  titleName2: string;
  fontSize?: string;
}

export const SectionTitle = ({ titleName1, titleName2, fontSize }: TitleProps) => {

  const fontSizeVariant = fontSize ? `${fontSize}` : "sm:text-5xl"; 

  return (
    <h2 className={`
      text-2xl 
      font-medium 
      first-letter:capitalize 
      text-zinc-50 
     ${fontSizeVariant}
    `}>
      {titleName1}
      <strong className="text-green-400 underline ml-3 normal-case">
        {titleName2}
      </strong>
    </h2>
  )
} 
