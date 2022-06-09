import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="gameplay">
    <Container>
      <Title>
        Gameplay <Badge>2022</Badge>
      </Title>
      <P>
      Gameplay é um projeto conjunto com a RocketSeat na 6ª edição do NLW - Together.
      Feito em react-native e aplicado em TypeScript, o Gameplay usa muitas bibliotecas react-native e uma integração com o Discord App.
      Esta integração será feita utilizando o Discord Developer onde iremos criar uma aplicação, de forma a utilizar a API Discord e efetuar as requisições necessárias para a aplicação.
      Este projeto tem como objetivo organizar seus jogos com seus amigos. No aplicativo vamos definir a hora, dia, jogo e muito mais do que jogar.
      Tudo isso tem a ajuda do discord, que geralmente é o lugar onde você e seus amigos se reúnem para jogar um jogo e se divertir.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/gameplay">
          https://github.com/gustavomeloo/gameplay{' '}<ExternalLinkIcon mx="1px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>08/05/22</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-Native, TypeScript, NodeJs, DiscordApi, Axios</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/gameplay_02.jpg" alt="Tela Principal" />
        <WorkImage src="/images/works/previewGameplay.gif" alt="Gameplay Gif" />
        
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/gameplay_01.jpg" alt="Home" />
        <WorkImage src="/images/works/gameplay_03.jpg" alt="Filtro de Categoria" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/gameplay_04.jpg" alt="Cadastro de Partida" />
        <WorkImage src="/images/works/gameplay_05.jpg" alt="Detalhes da Partida" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/gameplay_06.jpg" alt="Logout" />
        <WorkImage src="/images/works/gameplay_07.jpg" alt="Loading" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
