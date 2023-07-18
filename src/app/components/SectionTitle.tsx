interface Title {
  titleName1: string;
  titleName2: string;
}

export const SectionTitle = ({ titleName1, titleName2 }: Title) => {
  return (
    <h2 className="text-5xl font-medium first-letter:capitalize text-zinc-50">
      {titleName1}
      <strong className="text-green-400 underline ml-3 normal-case">
        {titleName2}
      </strong>
    </h2>
  )
} 
