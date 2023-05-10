import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {
  role: string
}

const TypingTitle = ({ role }: Props) => {
  const [text] = useTypewriter({
    words: ['Hey, Eyal here!', 'Sometimes funny', 'Always curious'],
    loop: 0,
  })

  return (
    <div className="mt-4 mb-2">
      <h1 className="pl-2 text-sm uppercase tracking-[0.5em] text-gray-400">
        {role}
      </h1>

      <h2 className="px-10 text-4xl font-semibold lg:text-5xl">
        <span>{text}</span>
        <Cursor cursorColor="#faed3f" />
      </h2>
    </div>
  )
}

export default TypingTitle
