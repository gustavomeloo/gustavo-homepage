import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/netflix-react.png'
import thumbNubank from '../public/images/works/nubank.png'
import thumbSaveFood from '../public/images/works/savefood.png'
import thumbHealthyGarden from '../public/images/works/healthygarden.png'
import thumbGameplay from '../public/images/works/gameplay.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        React-Native
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
      <Section delay={0.1}>
          <WorkGridItem id="healthygarden" thumbnail={thumbHealthyGarden} title="Healthy Garden">
          Projeto desenvolvido para o segundo ano da Faculdade com automatização de processos utilizando IoT
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="nubank"
            title="nubank"
            thumbnail={thumbNubank}
          >
            Um clone do nubank feito em React-native
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="gameplay" title="Gameplay" thumbnail={thumbGameplay}>
          Gameplay é um aplicativo para organizar os jogos que você jogará junto com seus amigos.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="savefood"
            title="Save Food"
            thumbnail={thumbSaveFood}
          >
           Aplicação feita em React Native que visa facilitar o gerenciamento dos alimentos guardados em casa.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          React
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="netflix" title="Netflix" thumbnail={thumbNetflix}>
            Um clone do netflix feito em reactJS usando api de movies.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
