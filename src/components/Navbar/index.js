import React from "react";
import {
    Nav,
    NavLink,
    NavbarContainer,
    NavItems,
    ButtonContainer,
    MobileIcon,
    MobileMenu,
    MobileLink,
    ThemedButton,
    LeftContainer,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import ThemeSwitch from "../Navbar/ThemeSwitch";

const Navbar = ({ setDarkMode }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    return (
        <Nav>
            <NavbarContainer>
              <LeftContainer>
                <ButtonContainer
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                    }}
                >
                    <ThemedButton href={Bio.github} target="_blank">
                        <GitHub style={{ fontSize: 20 }} />
                        GitHub
                    </ThemedButton>

                    <ThemedButton href={Bio.linkedin} target="_blank">
                        <LinkedIn style={{ fontSize: 20 }} />
                        LinkedIn
                    </ThemedButton>
                </ButtonContainer>
</LeftContainer>
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

                <ThemeSwitch
                    checked={checked}
                    setChecked={(val) => {
                        setChecked(val);
                        setDarkMode(val);
                    }}
                />

                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href="#about"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </MobileLink>
                        <MobileLink
                            href="#experience"
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </MobileLink>
                        <MobileLink
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            href="#education"
                            onClick={() => setIsOpen(false)}
                        >
                            Education
                        </MobileLink>

                        <ThemedButton
                            href={Bio.github}
                            target="_blank"
                            style={{ marginTop: "10px" }}
                        >
                            <GitHub style={{ fontSize: 20 }} />
                            GitHub
                        </ThemedButton>
                        <ThemedButton
                            href={Bio.linkedin}
                            target="_blank"
                            style={{ marginTop: "10px" }}
                        >
                            <LinkedIn style={{ fontSize: 20 }} />
                            LinkedIn
                        </ThemedButton>
                    </MobileMenu>
                )}
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
