import React, { useRef } from 'react'
import { View, Text, Dimensions, StyleSheet, FlatList, Image, StatusBar, Animated } from 'react-native'

import data from './data'
const { width, height } = Dimensions.get('window')
const LOGO_WIDTH = 220
const LOGO_HEIGHT = 40
const DOT_SIZE = 40
const TICKER_HEIGHT = 40
const CIRCLE_SIZE = width * 0.6

const Circle = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
    {data.map(({ color }, index) => {
      return (
        <View key={index} style={[styles.circle, { backgroundColor: color }]}>
          
        </View>
      )
    })}
  </View>
  )
}

const Ticker = () => {
  return (
    <View style={styles.tickerContainer}>
      <View>
        {data.map(({ type }, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

const Pagination = () => {
  return (
    <View style={styles.pagination}>
      <View style={styles.paginationIndicator}>

      </View>

      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View style={[styles.paginationDot, { backgroundColor: item.color }]} />
          </View>
        )
      })}

    </View>
  )
}

const Item = ({ imageUri, heading, description, index }) => {
  return (
    <View style={styles.itemStyle}>
      <Image source={imageUri} style={styles.imageStyle} />
      <View style={styles.textContainer}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

export default function App() {  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <Circle />
      <FlatList 
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <Image style={styles.logo} source={require('./assets/ue_black_logo.png')} />
      <Pagination />
      <Ticker />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemStyle: {
    width,
    height,
    alignItems: "center",
    justifyContent: 'center'
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: "contain",
    flex: 1
  },
  textContainer: {
    alignItems: "flex-start",
    alignSelf: 'flex-end',
    flex: 0.5
  },
  logo: {
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 10
  }, 
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5 
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    height: TICKER_HEIGHT,
    backgroundColor: 'red'
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800'
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%'
  }
})
