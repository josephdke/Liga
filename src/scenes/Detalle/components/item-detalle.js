import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import ItemCatalogo from './item-catalogo';
import ItemSeparator from './item-separator';

renderItem=({item}) => <ItemCatalogo navigation={this.props.navigation} team={item}/>
separatorComponent=()=> <ItemSeparator />
emptyComponent=()=> <Text>No hay productos</Text> 
keyExtractor=item => item.idPlayer

const ItemDetalle = (props) => {
    
    return (
    <View style={styles.container}>
        <View style={ { flexDirection: 'row', height:200, width:200, padding:5 } }>
            <Image
                style={styles.image}
                source={{ uri: props.team.strTeamBadge }}
            />
        </View>
        <View style={styles.content}>
            <FlatList
                data={props.playersList}
                renderItem={this.renderItem}
                ListItemComponent={this.emptyComponent}
                ItemSeparatorComponent={this.separatorComponent}
                keyExtractor={this.keyExtractor}
            />
        </View>
    </View>)

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    },
    specifications: {
        justifyContent: 'center',
    },
});

export default ItemDetalle;
