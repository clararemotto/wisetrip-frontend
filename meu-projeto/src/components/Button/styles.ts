import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#002955', 
        width: '100%', 
        height: 55, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        padding: 10,
        borderRadius: 5,
    }, 
    icon : {
        color: '#fff',
        fontSize: 28,
    },
    text : { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'semibold'
    },
});