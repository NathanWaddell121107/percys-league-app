import React, { useState } from 'react'
import * as Styled from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Header: React.FC = () => {
	const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)
	const toggleNav = () => setNavMenuIsOpen(!navMenuIsOpen)
	return (
		<>
			<Styled.HeaderOuterWrapper>
				<Styled.HeaderWrapper>
					<Link href="/">
						<Styled.HeaderLogo>Percys</Styled.HeaderLogo>
					</Link>
					<Styled.HeaderMenuItems>
						<Link href="/">Standings</Link>
						<Link href="/">Schedule</Link>
					</Styled.HeaderMenuItems>
					<Styled.IconWrapper>
						<FontAwesomeIcon width="20px" icon={faBars} onClick={() => toggleNav()} />
					</Styled.IconWrapper>
				</Styled.HeaderWrapper>
				{navMenuIsOpen && (
					<Styled.MobileHeaderMenuItems>
						<a href="/">Standings</a>
						<a href="/">Schedule</a>
					</Styled.MobileHeaderMenuItems>
				)}
			</Styled.HeaderOuterWrapper>
		</>
	)
}

export default Header
