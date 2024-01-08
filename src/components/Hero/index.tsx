import { Formulario, PreFormulario, TituloHero } from './styles'
import { Container } from './../../styles'

const Hero = () => (
  <Formulario>
    <PreFormulario />
    <Container>
      <TituloHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TituloHero>
    </Container>
  </Formulario>
)

export default Hero
