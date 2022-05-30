import '../styles/header.scss'

export function Header() {
  return (
    <header className="header">
      <div>
        <img
          src={require('../images/cieb_logo.png')}
          alt="tarefas"
          width="10%"
        />
      </div>
    </header>
  )
}
