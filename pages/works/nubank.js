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
  <Layout title="nubank">
    <Container>
      <Title>
        nubank <Badge>2021</Badge>
      </Title>
      <P>
        A interface do Nubank é um pequeno clone do antigo aplicativo do Nubank.
        Este projeto foi feito em react-native usando algumas bibliotecas de código aberto, esta é especialmente focada na animação usada pelo antigo aplicativo nubank.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/nubank-react-native">
            https://github.com/gustavomeloo/nubank-react-native{' '}<ExternalLinkIcon mx="1px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>14/12/21</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-Native, Minimum JDK version 8</span>
        </ListItem>
      </List>

      

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nubank_01.jpg" alt="nubank" />
        <WorkImage src="/images/works/previewNubank.gif" alt="nubankGif" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
