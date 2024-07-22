import styled from "styled-components";

interface LayoutProps {
  width?: number;
  height?: number;
}

export const Row = styled.div<LayoutProps>`
  display: flex;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

export const Column = styled(Row)`
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;
