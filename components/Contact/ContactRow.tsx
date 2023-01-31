type Props = {
  children: React.ReactNode
  label: string
}

const ContactRow = ({ children, label }: Props) => (
  <div className="flex items-center justify-center space-x-5">
    {children}
    <p className="text-xl">{label}</p>
  </div>
)

export default ContactRow
