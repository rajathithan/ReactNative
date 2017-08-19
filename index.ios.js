import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ListView,
  View
} from 'react-native';



var API_URL = 'https://itunes.apple.com/search';
var ARTIST_NAME = 'KESHA';
var PAGE_SIZE = 25;
var PARAMS = '?term=' + ARTIST_NAME + '&limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

export default class gadoth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View>
        <View style={styles.head}>
          <Text> Albums </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderAlbum}
          style={styles.listView}
        />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Albums...
        </Text>
      </View>
    );
  }

  renderAlbum(Album) {
    return (
        <View style={styles.container}>
          <Image
            source={{uri: Album.artworkUrl100}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.trackStyle}>{Album.trackName}</Text>
            <Text style={styles.artistStyle}>{Album.artistName}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.trackPriceStyle}>$ {Album.trackPrice}</Text>
          </View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  rightContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 1,
  },
  trackStyle: {
    fontSize: 13,
    marginBottom: 3,
    marginLeft: 3,
    textAlign: 'left',
    color: '#333',
    fontFamily: 'CanalDemiRomainG7',
  },
  trackPriceStyle: {
    fontSize: 15,
    textAlign: 'right',
    marginRight: 6,
    color: '#333',
    fontFamily: 'CanalDemiRomainG7',
  },
  artistStyle: {
    fontSize: 11,
    marginLeft: 3,
    textAlign: 'left',
    color: '#333',
    fontFamily: 'CanalDemiRomainG7',
  },
  thumbnail: {
    width: 53,
    height: 80,
  },
  listView: {
    paddingTop: 3,
  },
});

AppRegistry.registerComponent('gadoth', () => gadoth);
