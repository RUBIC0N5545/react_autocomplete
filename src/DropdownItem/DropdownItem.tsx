import React from 'react';
import { Person } from '../types/Person';
import cn from 'classnames';

interface Type {
  person: Person;
  onSelect: (person: Person) => void;
}

export const DropdownItem: React.FC<Type> = ({
  person,
  onSelect = () => {},
}) => {
  const { name } = person;

  return (
    <div
      className="dropdown-item"
      data-cy="suggestion-item"
      onClick={() => onSelect(person)}
    >
      <p
        className={cn(person.sex === 'm' ? 'has-text-link' : 'has-text-danger')}
      >
        {name}
      </p>
    </div>
  );
};
