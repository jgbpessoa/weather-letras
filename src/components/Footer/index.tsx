import "./styles.css"

type Props = {
  children: React.ReactNode
}

const Footer: React.FC<Props> = ({ children }) => {
  return <footer>{children}</footer>
}

export default Footer
