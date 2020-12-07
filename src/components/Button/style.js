import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`

    align-items: center;
    border: 1px solid #F0001A;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    padding: 10px 40px; 
    max-width: 190px;

    ${({ theme }) => theme == 'primary' && css`
        background-color:#F0001A;
    `}

`

export const Text = styled.Text`
    color:#F0001A;

    ${({ theme }) => theme == 'primary' && css`        
        color:#FFFFFF;
    `}

`