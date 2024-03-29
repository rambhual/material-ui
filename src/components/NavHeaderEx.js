import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const NavHeaderEx = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
      <Avatar
        style={{
          width: collapsed ? 48 : 60,
          color: 'lightGreen',
          height: collapsed ? 48 : 60,
          marginLeft: '30px',
          transition: '0.5s'
        }}
      />
      <div style={{ paddingBottom: 16 }} />
      <Typography variant={'h6'} noWrap>
        Ramprit Sahani
      </Typography>
      <Typography color={'textSecondary'} noWrap gutterBottom>
        Ramprit.sahani@saint-gobain.com
      </Typography>
    </div>
    <Divider />
  </>
);

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool
};
NavHeaderEx.defaultProps = {
  collapsed: false
};

export default NavHeaderEx;
