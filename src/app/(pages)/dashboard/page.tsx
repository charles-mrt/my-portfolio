import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"

const projects = [
  {
    id: "43a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGcxYmh1dW05bTh1azFxcWNicWpxdjh1cW03MnNpOWZwNDJmbHFjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/evHtzG1TLlQh9CSsHd/giphy.gif",
    alt: "walk landing page",
    title: "walk",
    tecnologies: ["reactjs", "cssmodule"],
    categories: ["todas", "reactjs", "cssmodule"],
    description: "WALK é um projeto de landing page para venda de tênis. O foco da página é direcionar o usuário a aquisição do produto, através de uma página atraente, onde os modelos de tênis são exibidos em slide. Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis.",
    tec_description: "reactjs, cssmodule",
    url: "http://walk-ld-page-charles-mrt.vercel.app/",
    github: "https://github.com/charles-mrt/walk"
  },
  {
    id: "243a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: false,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGcxYmh1dW05bTh1azFxcWNicWpxdjh1cW03MnNpOWZwNDJmbHFjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/evHtzG1TLlQh9CSsHd/giphy.gif",
    alt: "walk landing page",
    title: "walk",
    tecnologies: ["reactjs", "cssmodule"],
    categories: ["todas", "reactjs", "cssmodule"],
    description: "WALK é um projeto de landing page para venda de tênis. O foco da página é direcionar o usuário a aquisição do produto, através de uma página atraente, onde os modelos de tênis são exibidos em slide. Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis.",
    tec_description: "reactjs, cssmodule",
    url: "http://walk-ld-page-charles-mrt.vercel.app/",
    github: "https://github.com/charles-mrt/walk"
  },
  {
    id: "43a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd5aXAxZ29ubXNsbjhxYzZtazV0aDdleDJraWR0NDhyNzRzNTNrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqEcA6aRIBXQGbR2Ne/giphy.gif",
    alt: "planning poker",
    title: "planning poker",
    tecnologies: ["nodejs", "reactjs", "nextjs", "typescript", "socketio", "tailwind", "figma"],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind", "nodejs", "game"],
    description: "O Planning Poker é um sistema destinado a simplificar a estimativa de esforço temporal. Através de uma abordagem inovadora que combina a gamificação do planning poker com o método T-shirt sizing, proporcionando uma maneira eficaz de colaboração entre os participantes, aproveitando a tecnologia de socket para interações em tempo real. E o melhor de tudo: esta plataforma é inteiramente gratuita. Agora, sua equipe pode estimar projetos com precisão e envolvimento, aproveitando os benefícios da interatividade em tempo real, sem nenhum custo associado. Esse projeto foi desenvolvido em equipe. Front-end: Charles Martins. Backend: Lucas Reis e Renato Viegas",
    tec_description: "nodejs, reactjs, nextjs, typescript, socketio, tailwind, figma",
    url: "https://github.com/charles-mrt/planning-poker-client",
    github: "https://github.com/charles-mrt/planning-poker-client"
  },
  
  {
    id: "43a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd5aXAxZ29ubXNsbjhxYzZtazV0aDdleDJraWR0NDhyNzRzNTNrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqEcA6aRIBXQGbR2Ne/giphy.gif",
    alt: "my code draws",
    title: "my code draws",
    tecnologies: ["reactjs", "nextjs", "typescript" ,"javascript" ,"css" ,"html"],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind","javascript" ,"css" ,"html", "code-art"],
    description: "My Code Draws é o meu espaço digital, onde dou vida às minhas criações artísticas usando código. Neste site, mergulho na fascinante interseção entre arte e programação para expressar minha criatividade. De formas simples a composições mais complexas, o My Code Draws é o meu ateliê virtual, onde cada linha de código se transforma em uma desenho digital. Descubra o poder da programação criativa no My Code Draws, o meu espaço pessoal para explorar e compartilhar o mundo emocionante das artes com código.",
    tec_description: "reactjs, nextjs, typescript, javascript ,css ,html",
    url: "https://github.com/charles-mrt/my-code-draws",
    github: "https://github.com/charles-mrt/my-code-draws"
  },
  
  {
    id: "43a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FlM2owOW85cThiZ2tsb2wxeGF5dm94ZW5veHlhb3ZiNDl1YjhzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xzl64JLv8e9GQhq1u0/giphy.gif",
    alt: "espaço conecta",
    title: "espaço conecta",
    tecnologies: ["php", "wordpress", "html", "javascript", "css"],
    categories: ["todas", "php", "wordpress", "html", "javascript", "css"],
    description: "Um tema WordPress projetado para o Espaço Conecta, focado principalmente em impulsionar as estratégias de marketing digital para afiliados e empreendedores digitais. Construído com uma abordagem centrada na conversão e na experiência do usuário, apresentando um layout minimalista.",
    tec_description: "php, wordpress, html, javascript, css",
    url: "http://espacoconecta.com",
    github: "https://github.com/charles-mrt/espaco-conecta-theme"
  },

  {
    id: "43a57f4a-a5fe-471b-8943-dcfa74e2618f",
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd5aXAxZ29ubXNsbjhxYzZtazV0aDdleDJraWR0NDhyNzRzNTNrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqEcA6aRIBXQGbR2Ne/giphy.gif",
    alt: "move it",
    title: "move it",
    tecnologies: ["reactjs", "nextjs", "typescript", "cssmodule"],
    categories: ["todas", "reactjs", "nextjs", "typescript", "cssmodule"],
    description: "Move-it é um aplicativo web baseado na técnica Pomodoro que combina intervalos regulares de trabalho ou estudo com atividades físicas leves, como alongamentos. Os usuários ganham pontos e sobem de níveis à medida que completam as atividades, tornando a experiência mais envolvente e motivadora. Além disso, o aplicativo apresenta um gráfico que permite aos usuários acompanhar sua pontuação ao longo do tempo, oferecendo uma visão de seu progresso.",
    tec_description: "reactjs, nextjs, typescript, cssmodule",
    url: "https://move-it-nlw4-charles-mrt.vercel.app/",
    github: "https://github.com/charles-mrt/nlw4-move.it/tree/main"
  },

]
export default function DashBoard() {
  return (
    <div className="px-10 ">
      <header className="fixed z-50 top-0 left-0 w-full h-auto p-2 border-b-[1px] bg-zinc-800 border-green-500">
        <nav className="flex">
          <Link href={'/'} className="bg-zinc-700 p-2 rounded-md text-zinc-100 font-sans">Preview</Link>
        </nav>
      </header>

      <section className="w-full h-auto bg-zinc-900 p-10  rounded-md mt-20 flex flex-col gap-4">
        <h4 className="text-center font-bold text-zinc-100 font-sans uppercase">
          tabela de projetos
        </h4>    
        <Table className=" text-zinc-300">
                          
          <TableHeader >
            <TableRow className="font-bold text-base border-zinc-800">
              <TableHead> editar </TableHead>
              <TableHead> publicado </TableHead>
              <TableHead> imagem </TableHead>
              <TableHead> url da Imagem </TableHead>
              <TableHead> descrição </TableHead>
              <TableHead> tecnologias </TableHead>
              <TableHead> url github </TableHead>
              <TableHead> url projeto </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {projects.map((project) => (
              <TableRow key={project.id} className="border-zinc-800">

                <TableCell>
                  <Link
                    href={`projects/${project.id}`}
                    className="bg-zinc-950 rounded-md p-2 hover:opacity-70"
                  >
                    editar
                  </Link>
                </TableCell>

                <TableCell className="font-medium">
                  {project.is_public
                    ? (<span className="text-green-400"> sim </span>)
                    : (<span className="text-red-500">não </span>)
                  }
                </TableCell>

                <TableCell className="font-medium">
                  <Image src={project.image} width={150} height={150} alt={project.alt} />
                </TableCell>

                <TableCell>
                  <Link
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600"
                  >
                    acessar
                  </Link>
                </TableCell>

                <TableCell className="max-w-7xl">{project.description}</TableCell>

                <TableCell>{project.tecnologies}</TableCell>

                <TableCell >
                  <div className="flex flex-col gap-2">{project.github}
                    <Link href={project.github} className="text-violet-600" >
                      acessar
                    </Link>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex flex-col gap-2">{project.url}
                    <Link href={project.url} className="text-violet-600" >
                      acessar
                    </Link>
                  </div>
                </TableCell>

              </TableRow>
            ))}

          </TableBody>          
        </Table>
      </section>

    </div>


  )
}