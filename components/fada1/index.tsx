import {View, Image} from 'react-native'
import {styles} from './styles'

type Props = {
  posY: number
}

export function Moana({posY}: Props){
  return(
    <View style={[styles.container, {bottom:posY}]}>
     <Image source={require('./fada1.png')} style={{width:70, height:80, marginLeft:20, marginTop:-200,}}/>
    </View>
  )
}