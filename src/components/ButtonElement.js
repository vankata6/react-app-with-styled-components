import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    padding: ${({big}) => (big ? '14px 40px' : '12px 30px')};
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: none;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
        transition: all 0.2s ease-in-out;
    }
 `;