/** @jsxImportSource theme-ui */
import { Box, Card, Text, Flex } from '@theme-ui/components'
import { useRouter } from 'next/router'
import { assetsBucketBaseUrl } from '../../lib/consts'
import { BattlesuitData } from '../../lib/honkai3rd/battlesuits'
import { translate } from '../../lib/i18n'
import PageLink from '../atoms/PageLink'
import SquareImageBox from '../atoms/SquareImageBox'

interface BattlesuitCardProps {
  battlesuit: Pick<BattlesuitData, 'id' | 'name' | 'krName'>
  hidden?: boolean
  size?: 'sm' | 'default'
  href?: string
}

const BattlesuitCard = ({
  battlesuit,
  hidden,
  size,
  href,
}: BattlesuitCardProps) => {
  const { locale } = useRouter()

  const battlesuitName = translate(
    locale,
    { 'ko-KR': battlesuit.krName },
    battlesuit.name
  )

  if (href == null) {
    href = `/honkai3rd/battlesuits/${battlesuit.id}`
  }

  if (size === 'sm') {
    return (
      <Card
        className={hidden ? 'hidden' : ''}
        sx={{
          width: 'fit-content',
          p: 1,
          m: 1,
          '&.hidden': {
            display: 'none',
          },
        }}
      >
        <PageLink href={href}>
          <Flex>
            <SquareImageBox
              mr={2}
              alt={battlesuitName}
              src={`${assetsBucketBaseUrl}/honkai3rd/battlesuits/portrait-${battlesuit.id}.png`}
              size={30}
            />
            <Box
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              <Text sx={{ lineHeight: '30px' }}>{battlesuitName}</Text>
            </Box>
          </Flex>
        </PageLink>
      </Card>
    )
  }

  return (
    <Card
      className={hidden ? 'hidden' : ''}
      sx={{
        width: 120,
        padding: 2,
        margin: 2,
        '&.hidden': {
          display: 'none',
        },
      }}
    >
      <PageLink href={href}>
        <SquareImageBox
          alt={battlesuitName}
          src={`${assetsBucketBaseUrl}/honkai3rd/battlesuits/portrait-${battlesuit.id}.png`}
          size={100}
        />
        <Box
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          <Text>{battlesuitName}</Text>
        </Box>
      </PageLink>
    </Card>
  )
}

export default BattlesuitCard
