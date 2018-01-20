import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.grid}>
                    <TouchableOpacity>
                        <Image
                        style={styles.img}
                        source = {require('../images/esta-na-lei-8.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        style={styles.img}
                        source = {require('../images/lugar-8.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.grid}>
                    <TouchableOpacity>
                        <Image
                        style={styles.img}
                        source = {require('../images/avaliar-lugar-8.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        style={styles.img}
                        source = {require('../images/perfil-8.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        margin: 25,
        width: 100,
        height: 100
    }
});