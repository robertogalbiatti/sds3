const Footer = () => { /*Função anônima/Lambda, estamos atribuindo a ela o NavBar */
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">App desenvolvido por <a href="https://github.com/robertogalbiatti" target="_blank" rel="noreferrer">Roberto Galbiatti Filho</a></p>
        <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
    </footer>
  );
}

export default Footer;