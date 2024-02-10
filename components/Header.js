import {View,Text, StyleSheet} from 'react-native'
const Header = () =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>RectangleGrid</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        paddingHorizontal:16,
        borderBottomColor: '#b7b7b7',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'space-between',
        elevation:2,
    },
    headerText:{
        letterSpacing: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
    }
})

export default Header