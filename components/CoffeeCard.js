import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { themeColors } from '../theme';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import ProductScreen from '../screens/ProductScreen'


export default function CoffeeCard({ item }) {
    const navigation = useNavigation();

    return (
        <View style={styles.coffeeCardContainer}>

            <View
                style={styles.coffeeCardImageView}
            >
                <Image
                    source={item.image}
                    style={{width: 160,height: 160}}
                />
            </View>

            <View style={{paddingLeft: 20,paddingRight: 20, marginTop: 12}}>
                <Text style={{zIndex:10,fontSize: 30,lineHeight:36,fontWeight:600,color:"#ffffff", marginBottom: 10}}>
                    {item.name}
                </Text>

                <View 
                    style={styles.starIconView}
                >
                    <StarIcon size={16} color="white" />
                    <Text style={{fontSize: 16,lineHeight: 24,fontWeight:600,color:"#ffffff"}}>
                        {item.stars}
                    </Text>
                </View>
                
                <View style={{zIndex:10,marginBottom: 24,marginLeft: 4,flexDirection:"row"}}>
                    <Text style={{fontSize: 16,lineHeight: 24,fontWeight:600,color:"#ffffff",opacity:0.6}}>Volume: </Text>
                    <Text style={{fontSize: 16,lineHeight: 24,fontWeight:600,color:"#ffffff"}}>{item.volume}</Text>
                </View>

                <View 
                    style={styles.pricePlusIcon}
                >
                    <Text style={{fontSize: 18,lineHeight: 28,fontWeight:700,color:"#ffffff"}}>
                        Ksh {item.price}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Product', {...item})}
                        style={styles.plusIcon}>
                        <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} />
                    </TouchableOpacity>

                </View>

            </View>

        </View>

        
    )
}

const styles = StyleSheet.create({
    coffeeCardContainer: {
        backgroundColor: themeColors.bgDark,
        borderRadius: 35,
        height: "73%",
        width: "100%",

    },

    coffeeCardImageView: {
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: .8,
        flexDirection:"row",
        justifyContent:"center",
        marginTop: -30
    },

    starIconView: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 4,
        paddingLeft:8,
        paddingRight:8,
        marginLeft: 4,
        marginBottom: 10,
        flexDirection:"row",
        alignItems:"center",
        borderRadius: 24,
        width: 64
    },

    pricePlusIcon: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    

    plusIcon: {
        shadowColor: "#000000",
        shadowRadius: 20,
        shadowOffset: { width: -10, height: -5 },
        shadowOpacity: 1,
        padding: 16,
        borderRadius:9999,
        backgroundColor:"#ffffff"
    }
});