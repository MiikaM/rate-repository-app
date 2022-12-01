import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#0863DD',
        // margin: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "white"
    },
});

const Button = ({ title, onPress, style, ...props }) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress} {...props}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}


export default Button;

