import React from 'react'
import { ListWrapper } from './AddressCardList.styles';
import AddressCard from '../AddressCard/AddressCard';
import { FirebaseApartment } from '@/types/apartment';

interface AddressCardListProps {
  apartments: FirebaseApartment[];
}

const AddressCardList: React.FC<AddressCardListProps> = ({ apartments }) => (
  <ListWrapper>
    {apartments.map(({ id, street }) => (
      <AddressCard key={id} id={id} address={street} />
    ))}
  </ListWrapper>
);

export default AddressCardList;
