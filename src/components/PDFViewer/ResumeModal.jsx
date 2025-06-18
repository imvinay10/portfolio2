import React from "react";
import styled from "styled-components";
import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000000a7;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    padding: 20px 0;
    z-index: 1300;
`;

const Wrapper = styled.div`
    max-width: 1000px; /* increase width */
    width: 90vw;
    border-radius: 16px;
    margin: 50px 12px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    padding: 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        width: 95vw;
        margin: 32px 8px;
    }
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    text-align: center;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 70vh;
    border: none;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.bg_primary || "#fff"};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) =>
        dull &&
        `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const ResumeModal = ({ open, onClose, resumeUrl }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "resume.pdf";
        link.click();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                            color: "white",
                            zIndex: 2,
                        }}
                        onClick={onClose}
                    />

                    <Iframe src={resumeUrl} title="Resume" />
                    <ButtonGroup>
                        <Button as="button" onClick={onClose}>
                            Close
                        </Button>
                        <Button as="button" onClick={handleDownload}>
                            Download
                        </Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    );
};

export default ResumeModal;
