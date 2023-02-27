import {useApp} from '../store/AlpacaProvider';
import {useAppDispatcher} from '../store/AlpacaProvider';
import {useState} from 'react';

import Button from '../UI/Button';

const Controls = () => {
  const {current, assets} = useApp();
  const dispatcher = useAppDispatcher();

  // body part selected in controls UI
  const [selected, setSelected] = useState(null);

  // body parts (hair, leg..)
  const parts = [];

  // parts option e.g for eyes -> angry, default, smart..
  const options = [];

  for (let part in current) {
    // if body part selected in UI, list all options available for that body part
    if (selected === part) {
      for (let option in assets[part]) {
        options.push(
          <Button
            selected={option===current[part]}
            key={`${option}`}
            onClick={() => {
              dispatcher({type: part, payload: option});
            }}
          >
            {option}
          </Button>
        );
      }
    }

    // body parts
    parts.push(
      <Button
        selected={part===selected}
        key={part}
        onClick={() => {
          setSelected(part);
        }}
      >
        {part}
      </Button>
    );
  }


  return (
    <>
      <div className='mb-10'>{parts.map((part) => part)}</div>
      <div>{options.map((option) => option)}</div>
    </>
  );
};

export default Controls;
