import { Cursor, useTypewriter } from 'react-simple-typewriter'

import type { PageInfo } from '../../types'

type Props = {
  pageInfo: PageInfo
}

const Typing = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: ['Hey, Eyal here!', 'Sometimes funny', 'Always curious'],
    loop: 0,
  })

  return (
    <div className="mt-4 mb-2">
      <h1 className="text-sm uppercase tracking-[0.5em] pl-2 text-gray-400">
        {pageInfo.role}
      </h1>

      <h2 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#faed3f" />
      </h2>
    </div>
  )
}

export default Typing
