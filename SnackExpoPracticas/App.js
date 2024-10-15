import React,{useEffect,useState} from 'react';
import {Text,View} from 'react-native';

//const Cat = ()=>{
 // return <Text> Hello, I am your cat!</Text>;
//};
//export default Cat;

/*const YourApp =()=> {

  return (
    <View 
    style ={{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',

    }}>
    <Text> Try editing me!</Text>
    </View>
  );
};
export default YourApp;

*/


/*const Cat =()=> {
    const name ='Fernando';
    return <Text> Hello, I am {name}!</Text>
}
export default Cat;
*/

/*
const getFullName = (firstName : String , secondName:String,
thirdName:String)=>{
  return firstName + '' + secondName +'' + thirdName;

};

const Cat =()=> {

  return <Text>Hello , I am {getFullName('Run', 'Tum', 'Tugger')}
  !</Text>
}

export default Cat;

*/



/*
type BlinkProps = {
  text: string;
};

const Blink = (props: BlinkProps) => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 10000);

    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return null;
  }

  return <Text>{props.text}</Text>;
};

const BlinkApp = () => {
  return (
    <View style={{marginTop: 50}}>
      <Blink text="I love to blink" />
      <Blink text="Yes blinking is so great" />
      <Blink text="Why did they ever take this out of HTML" />
      <Blink text="Look at me look at me look at me" />
    </View>
  );
};

export default BlinkApp;


*/

//Codigo para usar botones, variables y state (dandole los estilos a las etiquetas y creando las etiquetas)
/*export default function app(){
  const[number, setnumber] = useState(0); //numero del estado

    return (
      <View style = {styles.container}>
        <Text style = {styles.number}>{number}</Text>
        <Button 
          title = "Change state"
          onPress = {() => {
            setnumber(number +1);
          }}
          
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 80,
    color: "#228b22",
    fontWeight: "bold",
  },
})

*/











