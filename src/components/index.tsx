import { useState } from 'react';
import styles from './index.module.scss';
import { FaCaretDown } from 'react-icons/fa';

type objectData = {
  name: string;
};

type propsSelectMenu = {
  data: Array<objectData>;
  id: string;
};

const SelectMenu = ({ data }: propsSelectMenu) => {
  const [openSelectMenu, setOpenSelectMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(data[0].name);

  const handleSelectValue = (event: React.MouseEvent<HTMLLIElement>): void => {
    setSelectedValue((event.target as HTMLElement).innerText);
    setOpenSelectMenu(!openSelectMenu);
  };

  return (
    <div>
      <div
        className={styles['container-input']}
        onClick={() => setOpenSelectMenu(!openSelectMenu)}
      >
        <span className={styles['item-selected']}>
          {selectedValue} <FaCaretDown />
        </span>
      </div>
      {openSelectMenu && (
        <ul className={styles['container-input-content']}>
          {data.map((element, index) => {
            return (
              <li
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  handleSelectValue(e)
                }
                key={index}
              >
                {element?.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
