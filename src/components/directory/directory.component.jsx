import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {
          // this.state.sections.map(({title, imageUrl, id, size}) => (
          sections.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps} />
          ))
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);