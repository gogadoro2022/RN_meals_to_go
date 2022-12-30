import {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';
import {LocationContext} from '../../../service/restaurants/location/location.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 47px;
  width: 100%;
`;

export const MapSearch = () => {
  const {search, keyword} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState({keyword});
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  console.log('serachBar and serachKeyword :', searchKeyword);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="search"
        value={searchKeyword}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
