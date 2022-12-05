import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'


export default function AdditionProblems (props){
    const [input, setInput] = useState(null)
    const [message, setMessage] = useState('')
    const [firstNum, setFirstNum] = useState(null)
    const [secondNum, setSecondNum] = useState(null)
    const [change,setChange] = useState(false)
    const [score, setScore] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)



    useEffect(()=>{
    //props.first takes in the selected numbers 0-9 as an array
   
    setFirstNum(Math.floor(Math.random()*props.firstNum))

    //props.second to be 10, 20, 30, 40, 10 would represent 0-10, 30 would represent 0-30
    
    setSecondNum(Math.floor(Math.random()*props.secondNum))
    },[change])
    

    function handleInputAnswer (e) {
        if(firstNum+secondNum===Number(input)){
            setMessage('Correct!')
            setChange(!change)
            setScore(score+1)
            setInput('')
            setQuestionNumber(questionNumber+1)
        }
        else{
            setMessage(`Incorrect, the correct answer was ${firstNum + secondNum}`)
            setChange(!change)
            setInput('')
            setQuestionNumber(questionNumber+1)     
        }
    }
    return(
        <View>
            {questionNumber <= Number(props.maxQuestionsNumber) ?
            <View style={styles.outerContainer}>
    
                <View style={styles.scoreContainer}>
                    <Text style={styles.score}>
                        Score: {score}           Question: {questionNumber}
                    </Text>
                    <Text style={styles.score}>
                    {questionNumber > 0 ? `Accuracy: ${Math.floor(score/questionNumber*100)}%`:''}
                    </Text>
                    
                </View>

                <View style={styles.problemContainer}>
                    <Text style={styles.number}>
                    {''}   {firstNum}
                    </Text>
                    <Text style={styles.number}>
                    +  {secondNum}
                    </Text>
                    <Text>
                        _______
                    </Text>
                    <TextInput 
                        style={styles.textInput}

                        placeholder={questionNumber !== 0 ? '' : 'type your answer'}
                        onChangeText={(userInput)=>{setInput(userInput)
                            setMessage('')
                        }}
                        onSubmitEditing={(e)=>handleInputAnswer(e)} 
                        clearTextOnFocus={true}
                        keyboardType='number-pad'
                        enablesReturnKeyAutomatically='true'
                        value={input}
                        returnKeyType='done'
                        blurOnSubmit={false}
                        autoFocus={true}
                    />
                    <Text style={styles.message}>
                        {message}
                    </Text>
                </View>
            </View>
            :
            <View>
                <Text>
                    Nice job your accuracy is {Math.floor(score/questionNumber*100)}%
                </Text>
            </View>
            
            }
        </View>
    )
}




const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor:'black'
    },

    scoreContainer:{
        justifyContent:'top',
        paddingTop:15,
        paddingLeft:50
    },
    textInput:{
        textAlign:'center',
        fontSize:25,
        fontFamily:'Fredericka',
        color: 'white',
        borderWidth:2,
        width:200,
        borderColor:'white'
    },
    problemContainer:{  
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
    },
    number:{
      fontSize:75,
      fontFamily:'Fredericka',
      color: 'white',
    },
    message:{
        paddingTop: 20,
        fontSize: 20,
        fontFamily:'Fredericka',
        color: 'white',
    },
    score:{
        fontSize:20,
        fontFamily:'Fredericka',
        color: 'white',
    }

})