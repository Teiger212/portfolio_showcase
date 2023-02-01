import { Cursor, useTypewriter } from 'react-simple-typewriter'

import type { PageInfo } from '../../types'

type Props = {
  pageInfo: PageInfo
}

const TypingTitle = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: ['Hey, Eyal here!', 'Sometimes funny', 'Always curious'],
    loop: 0,
  })

  return (
    <div className="mt-4 mb-2">
      <h1 className="pl-2 text-sm uppercase tracking-[0.5em] text-gray-400">
        {pageInfo.role}
      </h1>

      <h2 className="px-10 text-5xl font-semibold lg:text-6xl">
        <span>{text}</span>
        <Cursor cursorColor="#faed3f" />
      </h2>
    </div>
  )
}

export default TypingTitle
