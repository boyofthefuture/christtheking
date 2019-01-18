import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class BulletinRibbon extends React.Component{

    render(){
        return (
            <div style={styles.downloadBulletin}>
                <div style={styles.bulletinWords}>
                    Download this week's Bulletin here!
                </div>
                <Button style={styles.bulletinButton} variant="contained" color="primary">
                    Latest Bulletin
                </Button>
            </div>
        )
    }
}
export default withStyles(styles)(BulletinRibbon);