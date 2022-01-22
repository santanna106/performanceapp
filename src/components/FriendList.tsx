import React from 'react';
import { View } from 'react-native';
import { Item } from './Friend';

interface Props {
    data: {
        id: number
        name:string;
        likes:number;
    }[]
}

export function FriendList({ data } : Props){
  return (
    <View>
        {
          data.map(friend => (
            <Item 
              key={String(friend.id)}
              data={friend} 
            />
          ))
        }
    </View>
  );
}