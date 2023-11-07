import { StyleSheet, TextInput, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'

const LoginScreen = ({navigation}) => {
    const [showPassword, setPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleLogin = () => {
        console.log(formData)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <View>
                <Image style={{ height: 150, width: 150 }} source={{
                    uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png'
                }} />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, color: '#041E42' }}>Login In to your Account</Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D0D0D0', columnGap: 5, paddingVertical: 2, borderRadius: 5, marginTop: 30 }}>
                        <EnvelopeIcon style={{ marginLeft: 8 }} size={24} color={'grey'} />
                        <TextInput value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} style={{ width: 300, color: 'gray', marginVertical: 5 }} placeholder='Enter your Email' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D0D0D0', columnGap: 5, paddingVertical: 2, borderRadius: 5, marginTop: 30 }}>
                        <LockClosedIcon style={{ marginLeft: 8 }} size={24} color={'grey'} />
                        <TextInput value={formData.password} onChangeText={(text) => setFormData({ ...formData, password: text })} secureTextEntry={showPassword ? false : true} style={{ width: 200, flex: 1, color: 'gray', marginVertical: 5 }} placeholder='Enter your Password' />
                        {
                            showPassword
                                ?
                                <TouchableOpacity onPress={() => setPassword(false)}>
                                    <EyeIcon style={{ marginRight: 8 }} size={24} color={'grey'} />

                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setPassword(true)}>
                                    <EyeSlashIcon style={{ marginRight: 8 }} size={24} color={'grey'} />
                                </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* TODO :  TouchableOpacity to make the Real world working app */}
                    <Text>Keep me logged in</Text>
                    <Text style={{ fontWeight: '500', color: '#007FFF' }}>Forgot Password ?</Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <TouchableOpacity style={{
                        width: 200,
                        backgroundColor: '#FEBE10',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: 15,
                        borderRadius: 6
                    }} onPress={handleLogin}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Don`t have account ? SignUp</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

})