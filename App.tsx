import {useState, useEffect } from 'react'
import {SafeAreaView ,Text ,View ,TouchableOpacity, Image} from 'react-native'
import {styles} from './styles'
import {Moana} from './components/fada1'
import {Stitch} from './components/fada2'


let timer: number 

export default function App(){
  // valor da gravidade da terra
  const [gravity, setGravitity] = useState(0.98)
  const [gravity2, setGravity2] = useState(0.98)

  const [upForce, setUpForce] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [posY, setPosY] = useState(0)
  

  const [upForca, setUpForca] = useState(0)
  const [velocityLimit, setVelocityLimit] = useState(0)
  const [posX, setPosX] = useState(0)

  // Efeito colateral
  useEffect(() => {
    const applyGravity = () => {
      // decremento da gravidade
      let newUpForce = upForce - gravity
      newUpForce = newUpForce < 0 ? 0 : newUpForce
      setUpForce(newUpForce)

      // modificador da velocidade
      let newSpeed = speed + (gravity - (newUpForce /2))
      setSpeed(newSpeed)
      
      // cálculo da posição da bolinha
      let newPosY = posY - newSpeed
      

      if (newPosY < 0 ) {
        newPosY = 0 
        setSpeed(0)
      }
      setPosY(newPosY)
    }
     
    clearTimeout(timer)

    timer = setTimeout(applyGravity, 30)
  }, [gravity, upForce, speed, posY, ])
    
    
 
  const handleForceButton = () => {
    setUpForce(7)
  }


useEffect(() => {
    const applyGravity2 = () => {
      // decremento da gravidade
      let newUpForca = upForca - gravity2
      newUpForca = newUpForca < 0 ? 0 : newUpForca
      setUpForca(newUpForca)

      // modificador da velocidade
      let newVelocityLimit = velocityLimit + (gravity2 - (newUpForca /2))
      setVelocityLimit(newVelocityLimit)
      
      // cálculo da posição da bolinha
      let newPosX = posX - newVelocityLimit
      

      if (newPosX < 0 ) {
        newPosX = 0 
        setVelocityLimit(0)
      }
      setPosX(newPosX)
    }
     
    clearTimeout(timer)

    timer = setTimeout(applyGravity2, 30)
  }, [gravity2, upForca, velocityLimit, posX, ])
    
    
 
  const handleForcaButton = () => {
    setUpForca(7)
  }



  return(
    <SafeAreaView style={styles.container}>
     <Image source={require('./assets/paisagem.jpg')} style={{width:400, height:700,}}/>
      <View style={styles.area}>
        <Moana posY={posY}/>
        <Stitch posX={posX}/>
       
      </View>
         
      <View style={styles.control}>
       <View>
         <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
         <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
         <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
         <Text></Text>
       </View>
       <TouchableOpacity
       style={styles.controlButton}
       onPress={handleForceButton}
       >
        <Text style={styles.controlText}>Click</Text>
    
       </TouchableOpacity>
      

      
      <View style={styles.control2}>
      <View>
         <Text style={styles.controlText}>UpForca: {upForca.toFixed(2)}</Text>
         <Text style={styles.controlText}>VelocityLimit: {velocityLimit.toFixed(2)}</Text>
         <Text style={styles.controlText}>PosX: {posX.toFixed(2)}</Text>
         <Text></Text>
      </View>

       <TouchableOpacity
       style={styles.controlButton}
       onPress={handleForcaButton}
       >
      <Text style={styles.controlText}>Click</Text>
      </TouchableOpacity>

      </View>  
      </View>
    </SafeAreaView>
  )
}