import { StyleSheet, TextInput, Text, View, SafeAreaView, Platform, ScrollView, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { GlobeAltIcon, BookmarkIcon, MapPinIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../components/Header';
import { BottomModal, SlideAnimation, ModalContent } from "react-native-modals";
import { addresses } from '../AddressData';
import { useDispatch, useSelector } from 'react-redux';
import { addressforDelivery } from '../reducer/CartReducer';

const HomeScreen = ({ navigation }) => {

  const deliveryAddress = useSelector((state)=> state.cart.deliveryAddress)
  const dispatch =  useDispatch()
  const list = [
    {
      id: "0",
      image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
      name: "Home",
    },
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
      name: "Deals",
    },
    {
      id: "3",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
      name: "Electronics",
    },
    {
      id: "4",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
      name: "Mobiles",
    },
    {
      id: "5",
      image:
        "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
      name: "Music",
    },
    {
      id: "6",
      image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
      name: "Fashion",
    },
  ];
  const images = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];
  const deals = [
    {
      id: "20",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "30",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
    {
      id: "40",
      title:
        "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
      oldPrice: 16000,
      price: 14000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
      ],
      color: "Icy Silver",
      size: "6 GB RAM 64GB Storage",
    },
    {
      id: "50",
      title:
        "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
      oldPrice: 12999,
      price: 10999,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
      ],
    },
  ];
  const offers = [
    {
      id: "0",
      title:
        "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image:
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      id: "1",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      id: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      id: "3",
      title:
        "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false)
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('jewelery')
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const getAllProducts = async () => {
    await axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      }).catch((error) => {
        console.log('Error Fetching Products', error)
      })
  }

  const handleProductDetail = (item) => {
    navigation.navigate('ProductDetails', { item: item })
  }

  const handleAddressScreen = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('AddAddress')
  }
  //  Now we will use this address to display on the confirmation screen as we have selected a default address
  const handleDeliveryAddress = (item) => {
    dispatch(addressforDelivery(item))
  }
  useEffect(() => {

    getAllProducts()
  }, [])
  return (
    <>
      <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 0 : 0, flex: 1, backgroundColor: "white" }}>
        <ScrollView>

          <Header />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#AFEEEE', padding: 10 }}>
            <MapPinIcon size={24} color={'black'} />
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              {
                deliveryAddress?.name  ? <Text>Deliver to {deliveryAddress.name} - {deliveryAddress?.city} {deliveryAddress?.postalCode}</Text>:
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Add a address</Text>
              }
            </Pressable>
            <ChevronDownIcon size={24} color={'black'} />
          </View>

          <FlatList horizontal showsHorizontalScrollIndicator={false} data={list} renderItem={({ item }) => {
            return (
              <Pressable key={item.id} style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={{ uri: item.image }} />
                <Text style={{ marginTop: 5, textAlign: 'center', fontSize: 12, fontWeight: '600' }}>{item.name}</Text>
              </Pressable>
            )
          }} />

          <View style={{ width: '100%' }}>
            <SliderBox images={images} autoPlay circleLoop dotColor={"#13274F"}
              inactiveDotColor={"#90A4AE"}
              ImageComponentStyle={{ width: '100%' }}
            />
          </View>

          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Trending Deals Of the Week</Text>
          {/* Trending Deals */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {
              deals.map((item, index) => {
                return (
                  <Pressable key={index} style={{ marginTop: 1 }} onPress={() => handleProductDetail(item)}>
                    <Image style={{ height: 180, width: 180 }} source={{ uri: item.image }} />
                  </Pressable>
                )
              })
            }
          </View>

          {/* Today'S Deal */}
          <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 2, marginVertical: 15 }}></Text>

          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Today's Deals</Text>

          {/* TODO :Show the product Page */}
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={offers} renderItem={({ item }) => {
            return (
              <Pressable style={{ marginVertical: 10, marginHorizontal: 10 }} onPress={() => handleProductDetail(item)}>
                <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={{ uri: item.image }} />
                <View style={{
                  backgroundColor: "#E31837",
                  width: 150,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginVertical: 5
                }}>
                  <Text style={{ textAlign: 'center', color: 'white' }}>Upto {item.offer}</Text>
                </View>
              </Pressable>
            )
          }} />

          <View style={{ width: '45%', marginTop: 20, marginBottom: open ? 50 : 15, marginHorizontal: 10 }}>
            <DropDownPicker
              style={{
                borderColor: "#B7B7B7",
                height: 30,
                marginBottom: open ? 120 : 15
              }}
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder='choose a category'
              onOpen={onGenderOpen}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
              products?.filter((item) => item?.category === category)?.map((item, index) => {
                return (
                  <ProductCard key={index} item={item} />
                )
              })
            }
          </View>

        </ScrollView>
      </SafeAreaView>

      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 400 }}>

          <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Choose your Location
            </Text>

            <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select a delivery location to see product availabilty and delivery
              options
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* already added addresses */}
            {addresses?.map((item, index) => (
              <Pressable
              key={index}
                onPress={()=>handleDeliveryAddress(item)}
                style={{
                  width: 140,
                  height: 140,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                  marginRight: 15,
                  marginTop: 10,
                  backgroundColor: deliveryAddress?.name === item.name ? "#FBCEB1" : "white"
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                </View>

                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  {item?.houseNo},{item?.landmark}
                </Text>

                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  {item?.street}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  India, Bangalore
                </Text>
              </Pressable>
            ))}

            <Pressable
              onPress={handleAddressScreen}
              style={{
                width: 140,
                height: 140,
                borderColor: "#D0D0D0",
                marginTop: 10,
                borderWidth: 1,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#0066b2",
                  fontWeight: "500",
                }}
              >
                Add an Address or pick-up point
              </Text>
            </Pressable>
          </ScrollView>

          <View style={{ flexDirection: 'column', rowGap: 7, marginBottom: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
              <MapPinIcon size={24} color={'#0066b2'} />
              <Text style={{ fontSize: 20, color: '#0066b2' }}>Enter your Address pincode</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
              <BookmarkIcon size={24} color={'#0066b2'} />
              <Text style={{ fontSize: 20, color: '#0066b2' }}>Use My Current location</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
              <GlobeAltIcon size={24} color={'#0066b2'} />
              <Text style={{ fontSize: 20, color: '#0066b2' }}>Deliver outside India</Text>
            </View>
          </View>

        </ModalContent>
      </BottomModal>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})