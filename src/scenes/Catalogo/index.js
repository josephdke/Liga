import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';
import httpTeams from './../../services/Teams/http-teams';

class Catalogo extends Component {

    constructor(props){
        super(props);
        this.state = {
            catalogoList: []
        };
    }

    componentDidMount= ()=>{
        this.invokeGetCatalogList();
    };

    async invokeGetCatalogList(){
        const data = await httpTeams.getTeams( 'Spain' );
        //console.log( data );
        this.setState( { catalogoList: data } );
    }

    static navigationOptions = {
        title: 'Catalogo',
    }

    renderItem=({item}) => <ItemCatalogo navigation={this.props.navigation} team={item}/>
    separatorComponent=()=> <ItemSeparator />
    emptyComponent=()=> <Text>No hay productos</Text> 
    keyExtractor=item => item.idTeam

    render() {
        return (
            <View>               
                <FlatList
                    data={this.state.catalogoList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }

}

export default Catalogo;