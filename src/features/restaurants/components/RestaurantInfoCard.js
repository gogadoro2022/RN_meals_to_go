import React from 'react';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import styled from 'styled-components';
import {Card} from 'react-native-paper';
import {
  Favourite,
  Favourites,
} from '../../../components/favourites/favourites.component';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  margin-bottom: 8px;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: ${props => props.theme.colors.bg.primary};
`;
const Text_Title = styled(Text)`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;
const Text_Address = styled(Text)`
  font-size: ${props => props.theme.fontSizes.caption};
  margin-bottom: 16px;
  margin-left: 16px;
`;

const View_Rating = styled(View)`
  flex-direction: row;
`;

const View_Section = styled(View)`
  flex-direction: row;
  padding-left: 12px;
  padding-right: 12px;
`;
const View_SectionEnd = styled(View)`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {name, photos, vicinity, rating, isOpenNow, isClosedTemporarily} =
    restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Text_Title>{name}</Text_Title>
      <View_Section>
        <View_Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} key={Math.random()} />
          ))}
        </View_Rating>
        <View_SectionEnd>
          {isClosedTemporarily && (
            <Text variant="label" style={{color: 'red'}}>
              Contemporarily
            </Text>
          )}
          <View style={{paddingLeft: 8}}>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </View>
        </View_SectionEnd>
      </View_Section>
      <Text_Address>{vicinity}</Text_Address>
    </RestaurantCard>
  );
};
