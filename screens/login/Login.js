
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from './Estilo';

const imagem =
  'https://i.pinimg.com/736x/cf/0b/b5/cf0bb53aa06fd0f9fa3dc3e598c18ddb.jpg';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha seu e-mail e sua senha.');
      return;
    }

    navigation.replace('Home');
  }

  return (
    <ImageBackground source={{ uri: imagem }} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.conteudo}
        >
          <Text style={styles.simbolo}>✦</Text>

          <Text style={styles.titulo}>PRYTHIAN</Text>
          <Text style={styles.subtitulo}>
            Um mundo além dos seus sonhos
          </Text>

          <View style={styles.linha} />

          <Text style={styles.boasVindas}>Entre neste universo</Text>

          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#A99AAF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Sua senha"
            placeholderTextColor="#A99AAF"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.botao} onPress={entrar}>
            <Text style={styles.textoBotao}>ENTRAR EM PRYTHIAN</Text>
          </TouchableOpacity>

          <Text style={styles.rodape}>
            To the stars who listen...
          </Text>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}
