import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import { getEmploymentDates } from '../../utils'
import type {
  EmploymentProps,
  ExperienceProps,
  CardImageProps,
  TechnologyProps,
} from './experience.d'

const TechnologiesUsed = ({ technologies }: TechnologyProps) => (
  <div className="m-y-2 flex flex-wrap space-y-2.5 space-x-2.5 md:space-x-5 md:space-y-5">
    {technologies.map(({ title, image, _id }) => (
      <Image
        key={_id}
        className="skill-icon"
        src={urlFor(image).url()}
        alt={title}
        width={40}
        height={40}
      />
    ))}
  </div>
)

const CardDetails = ({ experience }: ExperienceProps) => {
  const {
    technologies,
    points,
    jobTitle,
    company,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
  } = experience

  const employmentDates = getEmploymentDates({
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
  })

  return (
    <div className="space-y-2.5 px-0 md:space-y-5 md:px-10 ">
      <h3 className="text-4xl font-light">{jobTitle}</h3>
      <h4 className="text-2xl font-bold tracking-wide">{company}</h4>
      <p className="uppercase text-gray-300">{employmentDates}</p>

      <TechnologiesUsed technologies={technologies} />

      <ul className="job-details-scrollbar h-40 space-y-5 overflow-y-auto pt-5 pr-5 text-lg">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

const CardImage = ({ companyImage, company: companyName }: CardImageProps) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.25 }}
    viewport={{ once: true }}
  >
    <Image
      src={
        companyImage
          ? urlFor(companyImage).url()
          : 'https://via.placeholder.com/150x150?text=Company'
      }
      alt={companyName || 'compamy logo'}
      width={112}
      height={112}
      className="h-28 w-28 rounded-full object-cover object-center xl:h-32 xl:w-32"
    />
  </motion.div>
)

const ExperienceCard = ({ experience }: ExperienceProps) => {
  const { companyImage, company } = experience

  return (
    <article className="flex w-[500px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-10 rounded-lg bg-[#373737] p-10 opacity-40 transition-opacity duration-300 hover:opacity-100 md:w-[600px] lg:w-[900px]">
      <CardImage company={company} companyImage={companyImage} />

      <CardDetails experience={experience} />
    </article>
  )
}

export default ExperienceCard
