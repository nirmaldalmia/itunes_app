import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, CardItem } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable';

export default class SongCard extends Component {
    render() {
        return (
            <Card style={{ width: '45%', marginLeft: 15, marginTop: 10 }}>
                <TouchableOpacity onPress={() => Actions.details({ item: this.props.item })}>
                    <CardItem cardBody>
                        <Animatable.Image animation="fadeIn" duration={2000} source={{ uri: this.props.item.artworkUrl100 }} style={{ width: '100%', height: 100 }} />
                    </CardItem>
                    <CardItem>
                        <Text>{this.props.item.collectionName}</Text>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        )
    }
}