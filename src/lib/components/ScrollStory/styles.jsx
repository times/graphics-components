// ScrollStory.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const SlidesWrapper = styled.div`
  position: sticky;
  top: 30vh;
  width: 100%;
  overflow: hidden;

  &.edge-to-edge {
    top: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    height: 100vh !important;
  }

  &.edge-to-edge iframe {
    height: 100vh;
  }
`;

export const SlidesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Board = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;

  &.overlap {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  line-height: 1.4;
  font-family: 'Times Modern', serif;
  font-size: ${({ size }) => (size === 'lg' ? '20px' : '16px')} !important;
  padding: 1rem;
  max-width: 600px;
  background: white;
  z-index: 1;
  font-size: 18px;
  line-height: 30px;
`;
