import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';
import httpTeams from './../../services/Teams/http-teams';

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: {},
            playersList: []
        };
    }

    componentDidMount = () => {
        this.invokeGetPlayers( this.props.navigation.getParam('team') );
    };

    async invokeGetPlayers( team ){
        console.log( team.idTeam );
        const data = await httpTeams.getPlayers( team.idTeam );
        //console.log(data)
        this.setState( {
            team: team,
            playersList: data
        } )
    }

    static navigationOptions = {
        title: 'Detalle',
    }

    renderItem=({item}) => <ItemCatalogo navigation={this.props.navigation} player={item}/>
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay productos</Text> 
    keyExtractor=item => item.idPlayer

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.team.strTeamBadge }}
                    />
                </View>
                <View>
                    <Text>{this.state.team.strDescriptionES}</Text>
                </View>
                <View style={styles.content}>
                    <FlatList
                        data={this.state.playersList}
                        renderItem={this.renderItem}
                        ListItemComponent={this.emptyComponent}
                        ItemSeparatorComponent={this.separatorComponent}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName:{
        fontSize: 24,
        fontWeight: '200',
    }

});

export default Detalle;