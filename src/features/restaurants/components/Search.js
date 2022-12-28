import {useContext, useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';
import {LocationContext} from '../../../service/restaurants/location/location.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
  const {keyword} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log('serach bar start and serch keyword :', searchKeyword);
  return (
    <SearchContainer>
      <Searchbar placeholder="장소를 입력하세요" />
    </SearchContainer>
  );
};
