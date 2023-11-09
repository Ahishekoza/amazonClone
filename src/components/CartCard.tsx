import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { PlusIcon, MinusIcon ,TrashIcon} from 'react-native-heroicons/outline'

const CartCard = ({ item, handleQuantityDecrement, handleQuantityIncrement  }) => {
    return (
        <Pressable  >
            <View style={{ flexDirection: 'row', columnGap: 10, marginVertical: 10, borderBottomWidth: 2, padding: 5, borderColor: '#D0D0D0', borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', rowGap: 10 }}>
                    <Image style={{ height: 140, width: 140, resizeMode: 'contain' }} source={{ uri: item.image }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            item.quantity === 1 ?
                                <Pressable onPress={handleQuantityDecrement} style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#D0D0D0', justifyContent: 'center', alignItems: 'center' }}>
                                    <TrashIcon size={24} color={'black'} />
                                </Pressable>
                                : <Pressable onPress={handleQuantityDecrement} style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#D0D0D0', justifyContent: 'center', alignItems: 'center' }}>
                                    <MinusIcon size={24} color={'black'} />
                                </Pressable>
                        }
                        <Text style={{ fontSize: 17, marginHorizontal: 10, color: 'black', fontWeight: '700' }}>{item.quantity}</Text>
                        <Pressable onPress={handleQuantityIncrement} style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#D0D0D0', justifyContent: 'center', alignItems: 'center' }}>
                            <PlusIcon size={24} color={'black'} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ width: 190 }}>
                    <Text numberOfLines={2} style={{ fontSize: 16, color: 'black' }}>{item?.title}</Text>
                    <Text style={{ marginVertical: 10, fontSize: 22, fontWeight: 700 }}>₹{Math.round(item?.price)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CartCard

const styles = StyleSheet.create({})