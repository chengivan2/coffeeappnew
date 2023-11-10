import { useNavigation } from '@react-navigation/native'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ArrowLeftCircleIcon, HeartIcon, StarIcon, PlusIcon, MinusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'

export default function ProductScreen(props) {

    const navigation = useNavigation();

    const item = props.route.params;

    const [size, setSize] = useState('small');

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/images/beansBackground2.png')}
                style={styles.heroImage}
            />

            <SafeAreaView style={{ marginTop: 20, flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 16, marginLeft: 16, alignItems: "center", marginTop: 8 }}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftCircleIcon size={35} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <HeartIcon size={35} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.productImageView}>
                    <Image
                        source={item.image}
                        style={{ height: 180, width: 180 }}
                    />

                </View>

                <View
                    style={styles.starIconView}
                >
                    <StarIcon size={16} color="white" />
                    <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: 600, color: "#ffffff" }}>
                        {item.stars}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginRight: 16, marginLeft: 16 }}>
                    <Text
                        style={{ color: themeColors.text, fontSize: 30, lineHeight: 36, fontWeight: 600 }}
                    >
                        {item.name}
                    </Text>

                    <Text
                        style={{ color: themeColors.text, fontSize: 18, lineHeight: 28, fontWeight: 600 }}

                    >
                        Ksh {item.price}
                    </Text>
                </View>

                <View style={{ marginLeft: 16, marginRight: 16, marginTop: 8 }}>
                    <Text
                        style={{ color: themeColors.text, fontSize: 18, lineHeight: 28, fontWeight: 700 }}

                    >
                        Select your coffee size:
                    </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 16, marginLeft: 16, marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => setSize('small')}
                        style={{ padding: 8, paddingLeft: 32, paddingRight: 32, borderRadius: 9999, backgroundColor: size == "small" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                        <Text style={{ color: size == "small" ? 'white' : "#374151" }}>
                            Small
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSize('medium')}
                        style={{ padding: 8, paddingLeft: 32, paddingRight: 32, borderRadius: 9999, backgroundColor: size == "medium" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                        <Text style={{ color: size == "medium" ? 'white' : "#374151" }}>
                            Medium
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSize('large')}
                        style={{ padding: 8, paddingLeft: 32, paddingRight: 32, borderRadius: 9999, backgroundColor: size == "large" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                        <Text style={{ color: size == "large" ? 'white' : "#374151" }}>
                            Large
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 16, marginRight: 16, marginTop: 8, height: 112 }}>
                    <Text
                        style={{ fontSize: 18, lineHeight: 28, fontWeight: 700, marginTop: 20 }}
                    >
                        What's up with a sip of this?
                    </Text>

                    <Text style={{ color: "#4B5563", marginTop: 10 }}>
                        {item.desc}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 16, paddingRight: 16, marginBottom: 8, alignItems: "center" }}>
                    <View style={{ marginLeft: 4, flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: 600, color: "#374151", opacity: 0.6 }}>
                            Volume:
                        </Text>
                        <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: 600, color: "#374151" }}> {item.volume}</Text>
                    </View>

                    <View
                        style={{ borderColor: themeColors.bgDark, padding: 4, paddingLeft: 16, paddingRight: 16, marginLeft: 16, flexDirection: "row", alignItems: "center", borderRadius: 9999, borderWidth: 1 }}>
                        <TouchableOpacity
                            style={{ marginLeft: 10, marginRight: 16 }}>
                            <MinusIcon size="20" strokeWidth={3} color={themeColors.bgDark} />
                        </TouchableOpacity>
                        <Text style={{ color: themeColors.text, fontSize: 18, lineHeight: 28, fontWeight: 800 }}>2</Text>
                        <TouchableOpacity
                            style={{ marginLeft: 16, marginRight: 10 }}>
                            <PlusIcon size="20" strokeWidth={3} color={themeColors.bgDark} />
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>

            <View style={{paddingLeft: 16, paddingRight: 16, flexDirection:"row", justifyContent: "space-between", marginBottom: 10}}>
                    <TouchableOpacity style={{padding: 16, borderRadius: 9999, borderWidth: 1, borderColor:"#9CA3AF"}}>
                        <ShoppingBagIcon size="30" color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flexDirection: "row", backgroundColor: themeColors.bgLight, padding: 16, flex: 1, borderRadius: 9999, marginLeft: 16, alignItems: "center", justifyContent: "center" }}
                    >
                        <Text style={{fontSize: 16, lineHeight: 24, fontWeight:600, textAlign: "center", color:"#ffffff"}}>Buy now</Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    heroImage: {
        position: "absolute",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        width: "100%",
        height: 250
    },

    productImageView: {
        shadowColor: themeColors.bgDark,
        shadowRadius: 35,
        shadowOffset: { height: 30, width: 0 },
        shadowOpacity: 0.9,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 35
    },

    starIconView: {
        backgroundColor: themeColors.bgLight,
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 24,
        width: 64
    },

    textColor: {
        color: themeColors.text
    },

    lightBg: {
        backgroundColor: themeColors.bgLight
    }
})