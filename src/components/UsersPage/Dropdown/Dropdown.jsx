import Dropper from 'react-dropdown';
import css from './Dropdown.module.scss';
const options = [
  { value: 'show all', label: 'Show all', className: `${css.option}` },
  { value: 'follow', label: 'Follow', className: `${css.option}` },
  { value: 'followings', label: 'Followings', className: `${css.option}` },
];
const Dropdown = ({ onChange }) => {
  return (
    <Dropper
      className={css.dropdown}
      controlClassName={css.control}
      placeholderClassName={css.placeholder}
      menuClassName={css.menu}
      options={options}
      onChange={e => onChange(e.value)}
      placeholder="Select an option"
      arrowOpen={true}
    />
  );
};

export default Dropdown;
