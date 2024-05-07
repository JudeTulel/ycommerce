import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder="Search products..." style={styles.input} />
        <FontAwesomeIcon icon="search" style={{position: 'absolute', right: 20, top: 20}} />
    </div>
  )
}

export default SearchBar
const styles = {
    input: {
        padding: 10,
        width: 'auto',
        fontSize: 16,
        border: '1px solid #ccc',
        borderRadius: 5,
        marginLeft: 20,
        alignSelf:'center',
        justifyContent:'center',
    },
   
}
