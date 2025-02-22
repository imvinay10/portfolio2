import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import Switch from '@mui/joy/Switch';


const Navbar = ({setDarkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  const [checked, setChecked] = React.useState(true);
  return (
    <Nav>
     <NavbarContainer>
  <ButtonContainer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , maxWidth: '200px'}}>
    <GitHubButton
      href={Bio.github}
      target="_blank"
      style={{
        padding: '10px 16px',
        background: `${!checked ?theme.primary : ""}`,
        color: 'white',
        width: 'auto',
        maxWidth: '200px',
        textAlign: 'center',
      }}
    >
      Github Profile
    </GitHubButton>
  </ButtonContainer>

  <MobileIcon onClick={() => setIsOpen(!isOpen)}>
    <FaBars />
  </MobileIcon>

  <NavItems>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#skills">Skills</NavLink>
    <NavLink href="#experience">Experience</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#education">Education</NavLink>
  </NavItems>

  <Switch
    checked={checked}
    title="Dark Mode"
    onClick={() => {
      setChecked(!checked);
      setDarkMode(!checked);
    }}
    color={checked ? 'primary' : 'neutral'}
    variant={checked ? 'solid' : 'outlined'}
    endDecorator={(checked ? 'Dark' : 'Light') + ' Mode'}
    slotProps={{
      endDecorator: {
        sx: {
          minWidth: 24,
        },
      },
    }}
  />

  {isOpen && (
    <MobileMenu isOpen={isOpen}>
      <MobileLink href="#about" onClick={() => setIsOpen(false)}>
        About
      </MobileLink>
      <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
        Skills
      </MobileLink>
      <MobileLink href="#experience" onClick={() => setIsOpen(false)}>
        Experience
      </MobileLink>
      <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
        Projects
      </MobileLink>
      <MobileLink href="#education" onClick={() => setIsOpen(false)}>
        Education
      </MobileLink>

      <GitHubButton
        href={Bio.github}
        target="_blank"
        style={{
          padding: '10px 16px',
          background: `${theme.primary}`,
          color: 'white',
          width: 'auto',
          maxWidth: '200px',
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        Github Profile
      </GitHubButton>
    </MobileMenu>
  )}
</NavbarContainer>

    </Nav>
  )
}

export default Navbar