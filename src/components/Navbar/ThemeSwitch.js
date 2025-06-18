import React from "react";
import styled from "styled-components";

const SwitchWrapper = styled.div`
    width: 64px;
    height: 32px;
    background-color: ${({ checked, theme }) =>
        checked ? theme.primary : theme.bgLight};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const Knob = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.text_primary};
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: ${({ checked }) => (checked ? "calc(100% - 27px)" : "3px")};
    transition: left 0.3s ease;
`;

const Label = styled.span`
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
    color: ${({ theme }) => theme.text_primary};
`;

const ThemeSwitch = ({ checked, setChecked }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SwitchWrapper
                checked={checked}
                onClick={() => setChecked(!checked)}
                role="button"
                aria-label="Toggle Theme"
            >
                <Knob checked={checked} />
            </SwitchWrapper>
            <Label>{checked ? "Light" : "Dark"} Mode</Label>
        </div>
    );
};

export default ThemeSwitch;
