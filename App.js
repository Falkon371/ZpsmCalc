import { useEffect, useState } from 'react';
import { TouchableOpacity ,StyleSheet, Text, View, Dimensions } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [text, setText] = useState('');
  const [isPotrait, setIsPotrait] = useState(true)
  const [memory, setMemory] = useState(0)
  const [isRadian, setIsRadian] = useState(true)
  const [isSecondMode, setSecondMode] = useState(false)

  const handleSecondMode = () => setSecondMode(!isSecondMode)

  const handlePower = () =>{
    try{
      const base = eval(text)
      setText(base + '**');
    }catch{
      setText('Error')
    }
  }

  const exp = () =>{
    const result = Math.exp(eval(text))
    setText(result.toString());
  };

  const tenPowX = () =>{
    const result = Math.pow(10, eval(text))
    setText(result.toString());
  }

  const handleEE = () =>{
    setText(prevVal => prevVal + 'E')
  }

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const silnia = (x) => {
    x = Number(x)
    if(x <= 1){
      return 1
    }else{
      return x * silnia(x-1)
    }
  };

  const handleMemoryClear = () => setMemory(0);

  const handleMemoryAdd = () =>{
    const currentValue = eval(text) || 0;
    setMemory(memory + currentValue) 
  }

  const handleMemorySubtract = () =>{
    const currentValue = eval(text) || 0;
    setMemory(memory - currentValue) 
  }

  const handleMemoryRecall = () => setText(memory.toString())

  const Rand = () =>{
    return Math.random()
  }

  const pier = (x) =>{
    return Math.sqrt(Number(x))
  }

  const pier3 = (x) =>{
    return Math.cbrt(Number(x))
  }

  const ln = (x) =>{
    return Math.log(Number(x)).toFixed(2)
  }

  const ln10 = (x) =>{
    return Math.log10(Number(x)).toFixed(2)
  }

  const handleModeToggle = () => setIsRadian(!isRadian);

  const trigFunc = (func) =>{
    const angle = eval(text)
    const angleInRadians = isRadian ? angle : (angle * Math.PI) / 180;
    let result;

    switch(func){
      case 'sin':
        result = Math.sin(angleInRadians);
        break;
      case 'cos':
        result = Math.cos(angleInRadians);
        break;
      case 'tan':
        result = Math.tan(angleInRadians);
        break;
      case 'sinh':
        result = Math.sinh(angleInRadians);
        break;
      case 'cosh':
        result = Math.cosh(angleInRadians);
        break;
      case 'tanh':
        result = Math.tanh(angleInRadians);
        break;             
      default:
        return;  
    }
    setText(result.toString())
  }

  useEffect(() => {

    const handleOrientationChange = () =>{
      const dim = Dimensions.get('window');
      setIsPotrait(dim.height >= dim.width)
    } 

    const subscription = Dimensions.addEventListener(
      'change', handleOrientationChange );

    return () => subscription?.remove();
  }, []);

  const dodajText = (val) =>{
    if('+-*/'.includes(val) && '+-*/'.includes(text.includes(text.slice(-1)))){
      setText(prevVal => prevVal.slice(0, -1) + val)
    }else{
      setText(prevVal => prevVal + val)
    }
  }

  const clearAll = () =>{
    setText('')
  }
    
  const handlePierw = (t) => {
    try {
      const parts = t.split(/ √ /);
      const n = parseFloat(parts[0])
      const root = parseFloat(parts[1])

      setText(String(Math.pow(n, 1/root).toFixed(2)));
    } catch {
      setText("Error");
    }
  };

  const wynik = (t) => {
    try {
      if (t.includes('√')) {
        handlePierw(t); 
      } else {
        const res = eval(t); 
        setText(res);
      }
    } catch (error) {
      setText('Error');
    }
  }

  const potega2 = (t) =>{
    r = eval(t)
    return setText(Math.pow(r, 2))
  }

  const potega3 = (t) =>{
    r = eval(t)
    return setText(Math.pow(r, 3))
  }

  const inverse = () =>{
    const currentVal = eval(text) || 0;
    if(currentVal !== 0){
      setText((1/currentVal).toString());
    }else{
      setText("Error");
    }
  };

  const toggleZnak = () =>{
    const currVal = eval(text) || 0;
    setText((-currVal).toString());
  }



  const buttons = [
    {
      backgroundColor: "#636466",
      textAlign: 'center', 
      textAlignVertical: 'center',
      width: 100,
      height: 90,
      color: 'white',
      fontSize: 30,
        title: 'AC',
        disable: false,
        borderColor: '#555759',
        onPress: () => clearAll(),
      
    },
    {
        backgroundColor: "#636466",
        title: '',
        disable: true,
        borderColor: '#636466',
        color: '#e8e9ea'
    },
    {
      backgroundColor: "#636466",
      title: '',
      disable: true,
      borderColor: '#636466',
      color: '#e8e9ea'
    },{
        backgroundColor: "#c68308",
        title: '/',
        disable: false,
        borderColor: '#555759',
        color: '#e8e9ea',
        onPress: () => dodajText('/'),
    },
    {
      backgroundColor: "#636466",
      title: '7',
      disable: false,
      borderColor: '#555759',
      color: '#e8e9ea',
      onPress: () => dodajText('7'),
  },
  {
    backgroundColor: "#636466",
    title: '8',
    disable: false,
    borderColor: '#555759',
    color: '#e8e9ea',
    onPress: () => dodajText('8'),
    
},
{
  backgroundColor: "#636466",
  title: '9',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('9'),
},
{
  backgroundColor: "#c68308",
  title: '*',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('*'),
},
{
  backgroundColor: "#636466",
  title: '4',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('4'),
},
{
  backgroundColor: "#636466",
  title: '5',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('5'),
},
{
  backgroundColor: "#636466",
  title: '6',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('6'),
},
{
  backgroundColor: "#c68308",
  title: '-',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('-'),
},
{
  backgroundColor: "#636466",
  title: '1',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('1'),
},
{
  backgroundColor: "#636466",
  title: '2',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('2'),
},
{
  backgroundColor: "#636466",
  title: '3',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('3'),
},
{
  backgroundColor: "#c68308",
  title: '+',
  disable: false,
  borderColor: '#555759',
  fontSize: 60,
  color: '#e8e9ea',
  onPress: () => dodajText('+'),
},
{
  backgroundColor: "#636466",
  title: '0',
  disable: false,
  borderColor: '#636466',
  fontSize: 60,
  color: '#e8e9ea',
  onPress: () => dodajText('0'),
},     
{
  backgroundColor: "#636466",
  title: '',
  disable: true,
  borderColor: '#636466',
  color: '#e8e9ea',
  onPress: () => dodajText('0'),
},
{
  backgroundColor: "#636466",
  title: ',',
  disable: false,
  fontSize: 60,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => dodajText('.'),
},
{
  backgroundColor: "#c68308",
  title: '=',
  disable: false,
  borderColor: '#555759',
  color: '#e8e9ea',
  onPress: () => wynik(text),
},
  ]



  const LandButtons = [
    {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '(',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () => dodajText(' ( ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: ')',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () => dodajText(' ) ')
      
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'mc',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleMemoryClear()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'm+',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleMemoryAdd()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'm-',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleMemorySubtract()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'mr',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleMemoryRecall()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'AC',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  clearAll()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '±',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  toggleZnak()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '%',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  dodajText(' % ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '/',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#c68308',
      onPress: () =>  dodajText(' / ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '2nd',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleSecondMode()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'x2',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  potega2(text)
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'x3',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  potega3(text)
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'xy',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handlePower()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'ex',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  exp()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '10x',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  tenPowX()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '7',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('7')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '8',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('8')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '9',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('9')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '*',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#c68308',
      onPress: () =>  dodajText(' * ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '1/x',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  inverse()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '√',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  setText(pier(text))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '∛',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  setText(pier3(text))
    },
    {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'y√',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  dodajText(' √ ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'ln',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  setText(ln(text))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'log10',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  setText(ln10(text))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '4',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('4')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '5',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('5')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '6',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('6')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '-',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#c68308',
      onPress: () =>  dodajText(' - ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'x!',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  setText(silnia(text))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'sin',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('sin')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'cos',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('cos')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'tan',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('tan')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'e',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  dodajText(String((Math.E).toFixed(2)))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'EE',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleEE()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '1',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('1')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '2',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('2')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '3',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('3')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '+',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#c68308',
      onPress: () =>  dodajText(' + ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'Rad',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  handleModeToggle()
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'sinh',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('sinh')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'cosh',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('cosh')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'tanh',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  trigFunc('tanh')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'π',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  dodajText(' 3.14 ')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: 'Rand',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#646464',
      onPress: () =>  dodajText(String(Rand().toFixed(2)))
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '0',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('0')
    },
    {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('0')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '.',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#6b6b6b',
      onPress: () =>  dodajText('.')
    }, {
      textAlign: 'center', 
      textAlignVertical: 'center',
      title: '=',
      width: 80,
      height: 60,
      color: 'white',
      fontSize: 25,
      backgroundColor: '#c68308',
      onPress: () =>  wynik(text)
    },
  ]


  return (
    <SafeAreaProvider>
      {isPotrait ? (
        <View style={[styles.container, { padding: dimensions.width < 800 }]}>
          <View style={styles.textScreen}>
            <Text style={styles.obliczenia}>{text}</Text>
          </View>
          <View style={styles.buttons}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  { backgroundColor: button.backgroundColor, borderColor: button.borderColor },
                ]}
                onPress={button.onPress}
              >
                <Text style={[styles.buttonText, { color: button.color }]}>{button.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      ) : (

        <View style={[styles.container, { padding: dimensions.width < 800 }]}>
          <View style={styles.LandTextScreen}>
            <Text style={styles.obliczenia}>{text}</Text>
          </View>
          <View style={styles.buttons}>
            {LandButtons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  { backgroundColor: button.backgroundColor, borderColor: button.borderColor, width: button.width,
                    height: button.height, textAlign: button.textAlign, textAlignVertical: button.textAlignVertical
                    , fontSize: button.fontSize },
                ]}
                onPress={button.onPress}
              >
                <Text style={[styles.buttonText, { color: button.color }]}>{button.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
    height: 300,
  },
  button: {
    width: 100,
    height: 90,
    justifyContent: 'center', // Vertical centering
    alignItems: 'center',     // Horizontal centering
    borderWidth: 1,
  },
  LandTextScreen:{
    backgroundColor: '#323232',
    width: 800,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  LandButtons:{
    width: 100,
    height: 90,
    justifyContent: 'center', // Vertical centering
    alignItems: 'center',     // Horizontal centering
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 30, // Adjust font size as needed
    textAlign: 'center',
  },
  textScreen: {
    backgroundColor: '#323232',
    width: 400,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  obliczenia: {
    color: 'white',
    fontSize: 60,
  },
});
