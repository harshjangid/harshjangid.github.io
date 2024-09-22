import React from "react";
import PropTypes from "prop-types";
import config from "@config";
import { Side } from "@components";
import styled from "styled-components";
import { theme } from "@styles";
import { mailHref } from "@utils";
const { colors, fontSizes, fonts } = theme;
const { email } = config;

const StyledLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: ${colors.lightSlate};
    }
`;
const StyledEmailLink = styled.a`
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.s};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    margin: 20px auto;
    padding: 10px;

    &:hover,
    &:focus {
        transform: translateY(-3px);
    }
`;

const Email = ({ isHome }) => {
    return <Side isHome={isHome} orientation="right">
        <StyledLinkWrapper>
            <StyledEmailLink href={mailHref()}>{email}</StyledEmailLink>
        </StyledLinkWrapper>
    </Side>
};
Email.propTypes = {
    isHome: PropTypes.bool,
};

export default Email;
