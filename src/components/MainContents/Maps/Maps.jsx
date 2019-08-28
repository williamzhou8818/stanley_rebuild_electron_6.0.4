import React from 'react';
import './Maps.scss';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.map}</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    root2: {
        maxHeight: '90%',
        overflow: 'auto',
        color: 'white',
        backgroundColor: '#0597A5',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: '#DD7823',
      height: '100vh',
      color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(0),
        textAlign: 'center',
        background: '#F9A01E',
        height: '100vh',
        color: 'white',
      }
  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  


const Maps = () => { 
    const classes = useStyles(); 

    const [modalShow, setModalShow] = React.useState(false); 

    // creat static map data 

  
    return (

        <div  className={classes.root}>
            

       
              <Grid container spacing={0}>
                    <Grid item xs={2}>
                            <Paper className={classes.paper}> 
                                    <h2> MAPS </h2>
                            </Paper>
                            
                    </Grid>
                    <Grid item xs={10}>
                         <Paper className={classes.paper2} >
                             
                         <Divider />

                         <h1>LIST OF MAPS</h1>
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        map= "ABC"
        map_title="MapTitle"
        onHide={() => setModalShow(false)}
      />
    </>

                             <div className={classes.root2}>

                                <List component="nav" aria-label="main mailbox folders" >
                                    <ListItem button  onClick={() => setModalShow(true)}>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Port-Moresby-Map-PORTMORESBY.png" alt="" style={{width: 200, height: 200}} />
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>PAPUA NEW GUNIEA MAP</h1>
                                            </div>
                                        </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/PortMoresbyAirportMap.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>PORT MORESBY AIRPORT</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Lae-Map-LAE.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>PORT MORESBY MAP National Capital District</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>LAE MAP Morobe</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>MADANG MAP Madang</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>MOUNT HAGEN MAP Western Highlands</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>KOKPO MAP East New Britain</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>GOROKA MAP Eastern Highlands</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>ALOTAU MAP Milne Bay Province</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>KIMBE MAP West New Britain</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>KAVILENG MAP New Ireland Province </h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>WEWAK MAP East Sepik Province</h1>
                                            </div>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                        <img src="./imgs/maps/Madang-Map-MADANG.png" alt="" style={{width: 200, height: 200}}/>
                                        </ListItemIcon>
                                        {/* <ListItemText primary="PAPUA NEW GUNIEA MAP"  style={{textAlign: 'center'}}/> */}
                                            <div className="list_text">
                                                <h1>BUKA MAP Autonomous Region of Bougainville</h1>
                                            </div>
                                    </ListItem>







                                </List>
                               
                             
                                </div>
                         </Paper>
                    </Grid>
                </Grid>
            
          
           
         </div>  
        

    )
};


export  default Maps;