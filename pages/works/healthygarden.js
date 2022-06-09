import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Healthy Garden">
    <Container>
      <Title>
        Healthy Garden <Badge>2021</Badge>
      </Title>
      <P>
      Aplicação mobile desenvolvido em React Native que por meio de sensores de monitoramento de umidade do solo, de temperatura do ar e um sistema de irrigação automática que controle e acompanhe a condição do solo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gustavomeloo/HealthyGarden">
          https://github.com/gustavomeloo/HealthyGarden{' '}<ExternalLinkIcon mx="1px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>18/02/22</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React-Native, IoT, Sql Server, API em C#, Node Red</span>
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
        <WorkImage src="/images/works/healthygarden_01.png" alt="Cadastro Usuário" />
        <WorkImage src="/images/works/healthygarden_02.png" alt="savefoodGif" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/healthygarden_03.png" alt="Cadastro Usuário" />
        <WorkImage src="/images/works/healthygarden_04.png" alt="Login SaveFood" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/healthygarden_05.png" alt="SpeedDial" />
        <WorkImage src="/images/works/healthygarden_06.png" alt="Cadastro SaveFood" />
      </SimpleGrid>

      <WorkImage src="/images/works/previewHealthy.gif" alt="Healthy Gif" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
