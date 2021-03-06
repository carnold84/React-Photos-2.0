import React from 'react';
import { useAlbum } from '../store';
import { createImages } from '../createImages';
import Actionbar from '../components/Actionbar';
import Content from '../components/Content';
import Header from '../components/Header';
import AnimatedGrid from '../components/AnimatedGrid';

const Album = ({ albumId, navigate }) => {
  const album = useAlbum(albumId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };

  const items = createImages(album.photos, `album/${albumId}/photo`);

  return (
    <>
      <Header />
      <Content>
        <Actionbar title={album.title} onBack={onBack} />
        <AnimatedGrid>{items}</AnimatedGrid>
      </Content>
    </>
  );
};

export default Album;
