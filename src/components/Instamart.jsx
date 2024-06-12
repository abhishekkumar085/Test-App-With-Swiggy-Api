import { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-xl font-bold">{title}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible('')}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(title)}>Show</button>
      )}

      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('');
  return (
    <div>
      <h1 className="p-2 m-2 text-3xl font-bold">Instamart </h1>
      <Section
        title={'About Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'About Instamart'}
        setIsVisible={setVisibleSection}
      />
      <Section
        title={'Team Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'Team Instamart'}
        // setIsVisible={() => setVisibleSection('team')}

        setIsVisible={setVisibleSection}
      />

      <Section
        title={'Careers @ Instamart'}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={visibleSection === 'Careers @ Instamart'}
        // setIsVisible={() => setVisibleSection('career')}
        setIsVisible={setVisibleSection}
      />
    </div>
  );
};
export default Instamart;
