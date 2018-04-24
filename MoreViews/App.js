import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import NTAPI from './NTAPI.js';
import BookItem from './BookItem.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setDataToState();
  }

  setDataToState = () => {
    NTAPI.fetchBooks()
    .then(books => {
      this.setState({
        data: this.mapDataAndAssign(books)
      });
    });
  }

  mapDataAndAssign = (books) => {
    return books.map((book) => {
      return Object.assign(book, { key: book.title });
    });
  }

  renderItem = ({item}) => {
    return(
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      ></BookItem>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
