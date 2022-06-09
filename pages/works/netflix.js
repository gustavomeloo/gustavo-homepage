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
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix <Badge>2022</Badge>
      </Title>
      <P>
      Netflix Interface é um pequeno clone do Netflix.
      Este projeto foi feito em react usando api de filmes e séries, e é especialmente focado na animação usada pela Netflix.
      </P>

      <List ml={4} my={4}>
      <ListItem>
        <Meta>WebSite</Meta>
        <Link href="https://netflix-react-gustavomeloo.vercel.app/">https://netflix-react-gustavomeloo.vercel.app/ <ExternalLinkIcon mx="2px" /></Link>
      </ListItem>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, NodeJs</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/netflix-react" target="_blank" >
            https://github.com/gustavomeloo/netflix-react <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>01/06/22</span>
        </ListItem>
        
      </List>
      
      <WorkImage src="/images/works/previewNetflix.gif" alt="netflixGif" />
      <WorkImage src="/images/works/netflix-react.png" alt="netflix" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
