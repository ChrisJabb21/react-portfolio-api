import styled from 'styled-components';
import { yellow } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const Pill = styled.span`
    display: inline-block;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: ${yellow[20]};
    color: ${yellow[70]};
    border-radius: 2px;
    font-weight: bold;
    `;

