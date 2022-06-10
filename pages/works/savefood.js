import {
  Container,
  Badge,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="savefood">
    <Container>
      <Title>
        Save Food <Badge>2021</Badge>
      </Title>
      <P>
      Aplicação feita em React Native que visa facilitar o gerenciamento dos alimentos guardados em casa, uma vez que o usuário iria cadastrar os alimentos no aplicativo que por sua vez listaria os produtos por ordem da data de validade, assim como listaria os produtos que já venceram conforme o tempo passar. Com isso o sistema auxiliará na tomada de decisão para um consumo mais consciente dos alimentos e reduzindo o descarte de alimentos pois passaram da data de validade por estarem esquecidos na despensa de casa.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/SaveFood">
          https://github.com/gustavomeloo/SaveFood{' '}<ExternalLinkIcon mx="1px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>18/02/22</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-Native, FireBase</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} my={1}>
        <Center>Developers</Center>
      </Heading>

      <UnorderedList my={4}>
          <Badge mr={2}>Gabriel Meireles</Badge>
          <Badge mr={2}>Gustavo dos Santos de Melo</Badge>
          <Badge mr={2}>Marcus Vinicius Titanero Guelfi</Badge>
          <Badge mr={2}>Henrique Akira Yasuda</Badge>
          <Badge mr={2}>Kelly Naomi Mitsuishi</Badge>
          <Badge mr={2}>Vinicius De Nani Mazinetti</Badge>
      </UnorderedList>

      

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/savefood_01.jpg" alt="Home SaveFood" />
        <WorkImage src="/images/works/previewSavefood.gif" alt="savefoodGif" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/savefood_02.jpg" alt="Cadastro Usuário" />
        <WorkImage src="/images/works/savefood_03.jpg" alt="Login SaveFood" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/savefood_04.jpg" alt="SpeedDial" />
        <WorkImage src="/images/works/savefood_05.jpg" alt="Cadastro SaveFood" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/savefood_06.jpg" alt="Main" />
        <WorkImage src="/images/works/savefood_07.jpg" alt="edit SaveFood" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
