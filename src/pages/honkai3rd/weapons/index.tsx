/** @jsxImportSource theme-ui */
import { Text, Box, Heading, Flex, Link } from '@theme-ui/components'
import NextLink from 'next/link'
import Breadcrumb from '../../../components/organisms/Breadcrumb'
import Honkai3rdNavigator from '../../../components/organisms/Honkai3rdNavigator'
import { listWeapons, WeaponData } from '../../../data/honkai3rd/weapons'

interface WeaponListPageProps {
  weaponDataList: WeaponData[]
}

const WeaponListPage = ({ weaponDataList }: WeaponListPageProps) => {
  return (
    <Box>
      <Honkai3rdNavigator />

      <Box p={3}>
        <Breadcrumb
          items={[
            { href: '/honkai3rd', label: 'Honkai 3rd' },
            { href: '/honkai3rd/weapons', label: 'Weapons' },
          ]}
        />

        <Heading as='h1'>Weapons</Heading>

        <Flex
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {weaponDataList.map((weapon) => {
            return (
              <Box
                key={weapon.id}
                sx={{
                  width: '120px',
                  padding: 2,
                  margin: 1,
                  borderColor: 'gray.3',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 8,
                  '&:hover': {
                    borderColor: 'gray.3',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'box-shadow 200ms ease-in-out',
                  },
                }}
              >
                <NextLink
                  href={`/honkai3rd/stigmata/${weapon.id}`}
                  key={weapon.id}
                  passHref={true}
                >
                  <Link>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <div
                        className='rounded'
                        style={{
                          width: '100px',
                          height: '100px',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: 4,
                        }}
                      >
                        <img
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translateY(-50%) translateX(-50%)',
                          }}
                          height='100'
                          src={`/assets/honkai3rd/weapons/${weapon.id}.png`}
                        />
                      </div>
                    </Box>
                    <Box
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        whiteSpace: 'nowrap',
                        textAlign: 'center',
                      }}
                    >
                      <Text>{weapon.name}</Text>
                    </Box>
                    <Box sx={{ fontSize: 1, textAlign: 'center' }}>
                      {'⭐'.repeat(weapon.rarity)}
                    </Box>
                  </Link>
                </NextLink>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}

export default WeaponListPage

export async function getStaticProps() {
  return {
    props: {
      weaponDataList: listWeapons(),
    },
  }
}
