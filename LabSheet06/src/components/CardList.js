import React from 'react';

const cardList = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
  ];

const Card = ({ title, content }) => {
  return (
    <div style={{ border: '1px  solid', padding: '5px', margin: '10px', borderRadius: '6px', width: '20%',textAlign:'center' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const CardList = () => {
  return (
    <div>
      {cardList.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;
