import { useForm, SubmitHandler } from 'react-hook-form'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import ContactRow from './contactRow'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data)
    window.location.href = `mailto:eyalteiger@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message}.`
  }

  return (
    <div className="h-screen relative flex flex-col justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto md:space-x-10">
      <h3 className="section-title">Contact</h3>
      <div className="flex flex-col space-y-10 mt-4">
        <h4 className="text-4xl font-semibold text-center">
          US timezone web dev freelance work.{' '}
          <span className="underline decoration-[#faed3f]/50">
            Let&apos;s get in touch.
          </span>
        </h4>
        <div className="space-y-10">
          <ContactRow label="+12345678">
            <PhoneIcon className="text-[#faed3f] h-7 w-7 animate-pulse" />
          </ContactRow>
          <ContactRow label="123 Marlow Dr., Eerie, PA">
            <MapPinIcon className="text-[#faed3f] h-7 w-7 animate-pulse" />
          </ContactRow>
          <ContactRow label="eyalteiger@gmail.com">
            <EnvelopeIcon className="text-[#faed3f] h-7 w-7 animate-pulse" />
          </ContactRow>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name', { required: true, minLength: 2 })}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register('email')}
              className="contact-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register('subject')}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register('message')}
            className="contact-input resize-none"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#faed3f]/60 py-5 px-10 rounded-lg text-black font-bold hover:bg-[#faed3f]/80 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
