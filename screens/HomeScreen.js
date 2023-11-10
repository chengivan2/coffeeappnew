import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme/index'
import Carousel from 'react-native-snap-carousel';
import { categories, coffeeItems } from '../constants'
import CoffeeCard from '../components/CoffeeCard'

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(1)
    return (
        <View style={{position:"relative",flex: 1, backgroundColor:"#ffffff"}}>
            <StatusBar style="dark" hidden={true} />

            <Image
                source={require('../assets/images/beansBackground1.png')}
                style={{position:"absolute",top:-5,width:"100%",opacity:0.5,height:220}}
            />
            <SafeAreaView style={{flex: 1}}>
                {/** Avatar and Bell Icon -- Begin*/}
                <View style={{paddingLeft: 16, paddingRight: 16, marginTop: 12, flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Image
                        source={require('../assets/images/avatar.png')}
                        style={{height: 40, width: 40, borderRadius:9999}}
                    />

                    <View style={{marginLeft: 8,flexDirection:"row",alignItems:"center"}}>
                        <MapPinIcon size={25} color={themeColors.bgLight} />
                        <Text style={{fontSize: 16,lineHeight: 24, fontWeight:600}}>
                            BLACK IV COFFEE
                        </Text>
                    </View>

                    <BellIcon size={27} color={"#000000"} />
                </View>

                {/**Avatar and Bell Icon -- End*/}

                {/** Search Bar -- Begin */}
                <View style={{marginLeft: 20, marginRight: 20, marginTop: 50, marginBottom: 50}}>
                    <View style={{padding: 4, flexDirection:"row",justifyContent:"center",alignItems:"center", background:"#E6E6E6", borderRadius: 9999, borderColor:"#000000", borderWidth: 2}}>
                        <TextInput
                            placeholder='Search'
                            style={{padding: 16,flex:1,fontWeight:600, color:"#374151"}}
                        />

                        <TouchableOpacity
        
                            style={styles.searchIcon}
                        >
                            <MagnifyingGlassIcon size={25} strokeWidth={2} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/** Search Bar -- End */}

                {/** Categories --Begin */}
                <View style={{paddingLeft: 20, paddingRight: 20, marginTop: 35}}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        style={{overflow:"visible"}}
                        renderItem={ ({ item }) => {
                            let isActive = item.id == activeCategory;
                            let activeTextStyle = isActive ? "#ffffff" : "#1F2937"
                            return (
                            <TouchableOpacity
                                
                                onPress={() => setActiveCategory(item.id)}
                                style={{padding:16,paddingLeft:20,paddingRight:20, marginRight:8,borderRadius:9999, backgroundColor: isActive ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)'}}
                            >
                                <Text style={{fontWeight: 600, color: activeTextStyle}}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>)

                        }}
                    />

                </View>
                {/** Categories --End */}

                {/** Coffee cards --Begin */}
                <View style={{padding:8, marginTop:64}}>
                <Carousel 
                    loop={true}
                    containerCustomStyle={{overflow: "visible"}}
                    data={coffeeItems}
                    renderItem={
                        ({item})=> <CoffeeCard item={item} />
                    }
                    firstItem={1}
                    inactiveSlideOpacity={0.75}
                    inactiveSlideScale={0.77}
                    sliderWidth={400}
                    itemWidth={260}
                    slideStyle={{display: "flex", alignItems: "center"}}
                />
                </View>

                {/** Coffee cards --End */}

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchIcon: {
        backgroundColor: themeColors.bgLight,
        padding:8,
        borderRadius:9999
    },
});