import styled, { keyframes } from 'styled-components'

const keyframesMap = {
  '0%': '0px',
  '20%': '2px',
  '40%': '-2px',
  '60%': '2px',
  '80%': '-2px',
  '100%': '0px'
}

const bounce = keyframes`
  ${Object.entries(keyframesMap).map(([key, value]: string[]) => `${key} { transform: translateX(${value}) }`)}
`

export const Container = styled.article`
  ${props =>
    props.theme.using === 'light'
      ? `box-shadow: 0 2px 10px ${props.theme.decorationColorPrimary};`
      : `box-shadow: 0 0 1px 1px ${props.theme.decorationColorSecondary};`}

  position: relative;
  padding: 0.8rem 10px 1.2rem 24px;
  border-radius: 7px;
  color: ${props => props.theme.textColorSecondary};
  background: ${props => props.theme.pageBackground};
  font-size: ${props => props.theme.fontSizeSmall};
  line-height: 1.6;
  text-align: left;
  display: flex;
  will-change: transform;

  &.is-bouncing {
    animation: ${bounce} 0.4s;
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    ${props => props.theme.using === 'dark' && `border: 0;`}
    border-bottom: 1px solid ${props => props.theme.decorationColorSecondary};
    box-shadow: none;
    padding: 0 1rem 10px;
    margin: -0.6rem -1rem 1rem;
    border-radius: 0;
    display: block;
  }
`

export const Counter = styled.div`
  @media (min-width: ${props => props.theme.breakpoint}) {
    padding-right: 15px;
    min-width: 105px;
  }
`

export const Label = styled.div`
  @media (max-width: ${props => props.theme.breakpoint}) {
    display: inline-block;
    margin-right: 0.4em;
  }
`

export const Big = styled.big`
  font-size: 2.5em;
  line-height: 0.8;
  vertical-align: text-top;
  font-weight: 700;
  color: ${props => props.theme.textColorPrimary};

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 1em;
    line-height: 1;
    vertical-align: baseline;
  }
`

export const ShareContainer = styled.div`
  white-space: nowrap;

  @media (max-width: ${props => props.theme.breakpoint}) {
    position: absolute;
    right: 1rem;
    top: -3.3rem;
  }
`
