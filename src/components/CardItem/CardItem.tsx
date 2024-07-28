import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { ICollection } from '../../lib/collection';
import './CardItem.css';

export interface ICardItemProps {
  /**
   * Item to be displayed in card
   */
  data: ICollection;
}

/**
 * Card item
 * @param param0 Collection item to show
 * @returns
 */
export const CardItem: React.FC<ICardItemProps> = ({ data }) => {
  const { firstname, lastname, birthday } = data.player;
  return (
    <div className="card-wrapper col-md-6 col-lg-4 col-xl-3 mb-4">
      <Card>
        <Card.Body>
          <p className="font-weight-bold text-info">User id: {data.id}</p>
          <ul className="list-unstyled">
            <li>First name: {firstname}</li>
            <li>Last name: {lastname}</li>
            <li>BirthDay: {new Date(birthday).toLocaleDateString()} </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};
