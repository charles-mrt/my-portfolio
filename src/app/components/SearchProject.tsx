
import { Search } from 'lucide-react'
import { useState } from 'react'

const categories = [
  'todas',
  'javascript',
  'reactjs',
  'react-native',
  'nextjs',
  'nodejs',
  'typescript',
  'php',
  'wordpress',
  'css',
  'cssmodule',
  'sass',
  'tailwind',
  'html',
  'game',
  'figma',
  'code-art',
]

interface SearchProjectProps {
  onCategoryChange: (category: string) => void;
}

export const SearchProject = ({ onCategoryChange }: SearchProjectProps) => {

  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [searchByCategory, setSearchByCategory] = useState(false)

  const onClickHandle = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }
  const isActivedSearchByCat = () => {
    setSearchByCategory(!searchByCategory)
  }


  return (
    <div className='text-zinc-100'>

      <button
        className={`${!searchByCategory ? 'border-transparent' : 'border-green-400'} w-fit flex items-center justify-center gap-2 ml-5 mb-5 border-2 rounded-md p-2  ease-linear duration-300 bg-zinc-800 hover:bg-zinc-700`} onClick={isActivedSearchByCat}
      >
        <Search size={14} />
        Busca por categoria
      </button>

      <ul className='w-11/12 m-auto flex items-center justify-center flex-wrap gap-2 mb-2 custom-fade-animation' translate='no'>
        {searchByCategory && (
          categories.map((category, index) => (
            <li
              key={index}
              className={`${selectedCategory === category ? 'bg-zinc-700' : 'bg-transparent'} border-2 border-transparent rounded-md p-1 text-sm hover:border-green-400 cursor-pointer transition`}
              data-category={category.trim()}
              onClick={() => onClickHandle(category)}
            >
              {category}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}