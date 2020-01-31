import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'block',
        height: 224,
        overflow: 'inherit',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        overflow: 'inherit',
        overflowX: 'inherit',
    },
    scroller: {
        overflow: 'inherit',
        overflowX: 'inherit'
    },
    scroller2: {
        overflow: 'inherit',
        overflowX: 'inherit',
        fontSize: '1rem',
    },
    scroller3: {
        overflow: 'inherit',
        overflowX: 'inherit',
        fontSize: '0.8rem',
    },
}))

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const result = props.toc.map((s) => {
        return (
            <Tab
                className={
                    s.depth < 3 ?
                        `${classes.scroller} ${classes.scroller2}` :
                        `${classes.scroller} ${classes.scroller3}`}
                label={`${s.value}`} {...a11yProps(`${props.toc.indexOf(s)}`)}
                key={s.value}
            />
        )
    })
    console.log('result', result)
    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="standard"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                scrollButtons='off'
            >
                {result}
            </Tabs>
        </div>
    );
}