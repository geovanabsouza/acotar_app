
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17121F',
  },

  cabecalho: {
    padding: 30,
    paddingTop: 40,
    alignItems: 'center',
  },

  simbolo: {
    color: '#B89BCF',
    fontSize: 38,
    marginBottom: 10,
  },

  titulo: {
    color: '#F0E8F5',
    fontSize: 25,
    letterSpacing: 4,
    fontWeight: '300',
  },

  subtitulo: {
    color: '#B9AFC0',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
  },

  lista: {
    paddingHorizontal: 18,
  },

  card: {
    backgroundColor: '#282031',
    borderWidth: 1,
    borderColor: '#493A54',
    borderRadius: 13,
    overflow: 'hidden',
    marginBottom: 20,
  },

  imagem: {
    width: '100%',
    height: 230,
  },

  imagemVazia: {
    height: 180,
    backgroundColor: '#392844',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inicial: {
    color: '#D7C5E8',
    fontSize: 55,
    fontWeight: '200',
  },

  legendaImagem: {
    color: '#A58BBE',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 8,
  },

  informacoes: {
    padding: 18,
  },

  nome: {
    color: '#F0E8F5',
    fontSize: 20,
    marginBottom: 5,
  },

  papel: {
    color: '#B89BCF',
    fontSize: 11,
    marginBottom: 12,
  },

  descricao: {
    color: '#B9AFC0',
    fontSize: 13,
    lineHeight: 21,
  },

  rodape: {
    color: '#A58BBE',
    textAlign: 'center',
    letterSpacing: 3,
    fontSize: 11,
    margin: 30,
  },
});

export default styles;
