import React from 'react'
import { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import MyStyles from './styles';
import StylesInterface from '@interfaces/styles/headerReport';
import moment, { Duration, Moment } from 'moment';
import Utils from "@common/helpers";

const Timer = (props) => {
    const { initialTime } = props;
    const { stoped = false } = props;
    let timerCounter;
    const [formatedTime, setFormated] = useState("---:---:---");
    var loaded = false;
    let myInterval;

    useEffect(() => {
        (async function() {
            if(props.report_detail && !loaded){
                const respo = await Utils.getFromStorage(props.itemID + "TIMER_COUNTER");
                timerCounter = moment.duration(respo);
                setFormated(getTime(moment.duration(respo)));
                loaded = true;
            }
        })();
    }, []);

    useEffect(() => {
        if (!stoped && initialTime !== 0) {
            myInterval = setInterval(async () => {
                const startDate = moment(initialTime);
                const timeEnd = moment(moment.now());
                const diff = timeEnd.diff(startDate);
                var diffDuration = moment.duration(diff);
                if(!props.report_detail){
                    await Utils.saveToStorage(
                        props.itemID + "TIMER_COUNTER",
                        diffDuration
                      );
                }
                if(props.report_detail && timerCounter){
                    diffDuration.add(timerCounter);
                }
                setFormated(getTime(diffDuration));
            }, 1000)
        }
        return () => {
            clearInterval(myInterval);
        };
    }, [stoped]);

    const getTime = (diffDuration) => {
        let points = diffDuration.seconds() % 2 ? ":" : " ";
        let hours = (diffDuration.days() * 24 + diffDuration.hours()).toString();
        let minutes = diffDuration.minutes().toString().padStart(2, '0');
        let seconds =  diffDuration.seconds().toString().padStart(2, '0');
        if(hours.length == 1){
            hours = "0" + hours;
        }
        return hours + points + minutes + points + seconds;
    }

    // Timer align validation
    if(formatedTime.includes(" ")){
        var splitted = formatedTime.split(" ");
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center'}} >
                <Text style={Styles.timingText}>{' '+splitted[0]}</Text>
                <Text style={[Styles.timingText,{opacity: 0.2}]}>{":"}</Text>
                <Text style={Styles.timingText}>{splitted[1]}</Text>
                <Text style={[Styles.timingText,{opacity: 0.2}]}>{":"}</Text>
                <Text style={Styles.timingText}>{splitted[2]+' '}</Text>
            </View>
        )
    }
    else{
        return (
            <Text style={Styles.timingText}> {formatedTime} </Text>
        )
    }
}


export default Timer;
const Styles = StyleSheet.create<StylesInterface>(MyStyles);