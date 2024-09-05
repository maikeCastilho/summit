import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Image, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { Link } from 'expo-router'
import React from "react";
export default function Index() {
    return (
        <View className="flex-1 bg-green-500 justify-center items-center">

            <Image
                source={require('../../assets/images/logo.png')}
                style={[{width: 130, height: 80, marginBottom: 80}]}
            />

            <View className="flex-row  items-center w-4/5 h-14 border border-white rounded-lg mb-4 bg-white" style="marginBotton:30">

            <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                color={colors.gray[200]}
                size={30}
                
            />
                <TextInput
                    className="flex-1 h-full pl-3 text-black"
                    placeholder="Código do Ingresso"
                    placeholderTextColor={colors.gray[200]}
                    maxLength={20}
                />


            </View>

         
             <TouchableOpacity
                style={{
                    width: '80%',
                    height: 48, 
                    backgroundColor: '#f48f56', 
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30
                }}
                onPress={() => Alert.alert('Novas atualizações em breve ;)')}
            >
                <Text style={{ color: '#FFFFFF', fontSize: 18 }}>ACESSAR CREDENCIAL</Text>
            </TouchableOpacity>
            <Link className="color-white" href="/register">Ainda não posui ingresso?</Link>
        </View>
    )
}
