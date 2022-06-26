import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Letmeask">
    <Container>
      <Title>
        Letmeask <Badge>2022</Badge>
      </Title>
      <P>
        Letmeask é um projeto conjunto com a RocketSeat na 6ª edição do NLW - Together.
        Feito em React e aplicado em TypeScript, o Letmeask usa muitas bibliotecas react e uma integração com o Firebase da google.
        Este projeto tem como objetivo ajudar os criadores de conteúdos criar salas de Q&A com o seu público.
      </P>

      <List ml={4} my={4}>
      <ListItem>
        <Meta>WebSite</Meta>
        <Link href="https://letmeask-36080.web.app/">https://letmeask-36080.web.app/ <ExternalLinkIcon mx="2px" /></Link>
      </ListItem>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, TypeScript, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/letmeask" target="_blank" >
          https://github.com/gustavomeloo/letmeask <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>25/06/22</span>
        </ListItem>
        
      </List>
      
      <WorkImage src="/images/works/previewLetmeask.gif" alt="letmeaskGif" />
      <WorkImage src="/images/works/letmeask_01.png" alt="Tela inicial" />
      <WorkImage src="/images/works/letmeask_02.png" alt="Criação de Sala" />
      <WorkImage src="/images/works/letmeask_03.png" alt="Sala de perguntas usuário" />
      <WorkImage src="/images/works/letmeask_04.png" alt="perguntas feitas pelo usuário" />
      <WorkImage src="/images/works/letmeask_05.png" alt="sala de admin das perguntas" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
