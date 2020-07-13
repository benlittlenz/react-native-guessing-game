import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const Header = props => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Header;