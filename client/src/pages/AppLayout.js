import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Frame, withSounds, withStyles } from 'arwes';

import usePeople from '../hooks/usePeople';

import Centered from '../components/Centered';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Person from './Person';
import PeopleLayout from './PeopleLayout';

const styles = () => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 'auto',
  },
  centered: {
    flex: 1,
    paddingTop: '20px',
    paddingBottom: '10px',
  },
});

const AppLayout = (props) => {
  const { sounds, classes } = props;

  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  const { people, isPending, addNewPerson, deletePerson } = usePeople(
    onSuccessSound,
    onAbortSound,
    onFailureSound
  );

  return (
    <div className={classes.content}>
      <Header onNav={animateFrame} />
      <Centered className={classes.centered}>
        <Frame
          animate
          show={frameVisible}
          corners={4}
          style={{ visibility: frameVisible ? 'visible' : 'hidden' }}
        >
          {(anim) => (
            <div style={{ padding: '20px' }}>
              <Routes>
                <Route
                  path='/'
                  element={
                    <PeopleLayout
                      entered={anim.entered}
                      classes={classes}
                      people={people}
                      deletePerson={deletePerson}
                    />
                  }
                />
                <Route
                  path='/add'
                  element={
                    <Person
                      entered={anim.entered}
                      classes={classes}
                      people={people}
                      addNewPerson={addNewPerson}
                      isPending={isPending}
                    />
                  }
                />
              </Routes>
            </div>
          )}
        </Frame>
      </Centered>
      <Footer />
    </div>
  );
};

export default withSounds()(withStyles(styles)(AppLayout));
