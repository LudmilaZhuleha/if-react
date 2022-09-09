import React, {useState} from 'react';

const Select = () => {
    const [select, setSelect] = useState('');
    const ages = ['0 years old','1 years old','2 years old','3 years old','4 years old','5 years old','6 years old','7 years old','8 years old','9 years old','10 years old','11 years old'];
    const options = ages.map((age, i) => <option key={i}>{age}</option>);

  return (
    <select value={select} onChange={(e)=>setSelect(e.target.value)} className="modal-age-select">
        {options}
    </select>
  );
};
export default Select;