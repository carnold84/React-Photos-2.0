import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  /* safari hack to fix columns bug */
  -webkit-backface-visibility: hidden;
  columns: 1;
  column-gap: 20px;
  width: 100%;

  @media (min-width: 460px) {
    columns: 2;
  }

  @media (min-width: 800px) {
    columns: 3;
  }

  @media (min-width: 1000px) {
    columns: 4;
  }

  @media (min-width: 1250px) {
    columns: 5;
  }
`;

const AnimatedGrid = ({ children, ...rest }) => {
  return (
    <Container
      animate="enter"
      exit="exit"
      initial="initial"
      variants={{
        enter: { transition: { staggerChildren: 0.1 } },
        exit: { transition: { staggerChildren: 0.1 } },
      }}
      {...rest}>
      {children}
    </Container>
  );
};

export default AnimatedGrid;
