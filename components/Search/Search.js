import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import styles from './syles';

const Search = ({onSearch}) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = value => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <Pressable style={styles.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={22} />
      <TextInput
        value={search}
        ref={textInputRef}
        style={styles.searchInput}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;
