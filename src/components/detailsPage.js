import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Icon, Content, Body } from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class DetailsPage extends Component {
    render() {
        const item = this.props.item;
        console.log(this.props);
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop() }>
                            <Icon name="arrowleft" type="AntDesign" />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    </Body>
                </Header>
                <Content style={{ padding: 15 }}>
                    <View>
                        <Text>Collection Name: {item.collectionName} </Text>
                        <Text>Artist: {item.artistName}</Text>
                        <Text>Collection Price: {item.collectionPrice}</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}