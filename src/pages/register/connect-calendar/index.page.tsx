/* eslint-disable prettier/prettier */
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  console.log(session)
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const IsSignedIn = session.status === 'authenticated'
  const handleConnectCalendar = async () => await signIn('google')

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte a sua agenda</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil ah, você pode
          editar essas informações depois
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {IsSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao goolgle, verifique se você habilitou as
            permissôes de acesso ao Google Calendar.
          </AuthError>
        )}

        <Button type="submit" disabled={!IsSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
