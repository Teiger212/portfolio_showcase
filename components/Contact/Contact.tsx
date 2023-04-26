import { useForm, SubmitHandler } from 'react-hook-form'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import ContactRow from './ContactRow'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const PHONE_NUMBER = '+12345678'

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    (window.location.href = `mailto:eyalteiger@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message}.`)

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:space-x-10 md:text-left">
      <h3 className="section-title">Contact</h3>
      <div className="mt-4 flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          US timezone web dev freelance work.{' '}
          <span className="underline decoration-[#faed3f]/50">
            Let&apos;s get in touch.
          </span>
        </h4>
        <div className="space-y-10">
          <ContactRow label="Cusco, Peru">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#faed3f]" />
          </ContactRow>
          <ContactRow label="eyalteiger@gmail.com">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#faed3f]" />
          </ContactRow>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
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
            className="rounded-lg bg-[#faed3f]/60 py-5 px-10 text-lg font-bold text-black hover:bg-[#faed3f]/80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
