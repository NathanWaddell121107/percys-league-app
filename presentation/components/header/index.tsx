import * as React from 'react'
import { Button } from 'reactstrap'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Styled from './header.styles'

const Header: React.FC = () => {
	const [navMenuIsOpen, setNavMenuIsOpen] = React.useState(false)
	const toggleNav = () => setNavMenuIsOpen(!navMenuIsOpen)
	const { user } = useUser()
	return (
		<>
			<Styled.HeaderOuterWrapper>
				<Styled.HeaderWrapper>
					<Link href="/">
						<Styled.HeaderLogo>{"Percy's League"}</Styled.HeaderLogo>
					</Link>
					<Styled.HeaderMenuItems>
						<Link href="/">Standings</Link>
						<Link href="/players">Players</Link>
						<a href={`/api/auth/${user ? 'logout' : 'login'}`}>
							<Button size="sm" color="primary">{`${
								user ? 'Logout' : 'Login'
							}`}</Button>
						</a>
					</Styled.HeaderMenuItems>
					<Styled.IconWrapper>
						<FontAwesomeIcon
							width="20px"
							icon={faBars}
							onClick={() => toggleNav()}
						/>
					</Styled.IconWrapper>
				</Styled.HeaderWrapper>
				{navMenuIsOpen && (
					<Styled.MobileHeaderMenuItems>
						<a href="/">Standings</a>
						<a href="/players">Players</a>
						<a href={`/api/auth/${user ? 'logout' : 'login'}`}>
							<Button size="sm" color="primary">{`${
								user ? 'Logout' : 'Login'
							}`}</Button>
						</a>
					</Styled.MobileHeaderMenuItems>
				)}
			</Styled.HeaderOuterWrapper>
		</>
	)
}

export default Header
