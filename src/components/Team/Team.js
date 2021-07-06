import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';


const Team = (props) => {
    const {strTeamBadge, strTeam, strSport, idTeam} = props.teams;
    const history = useHistory();
    const handleClick = (teamId)=>{
        const url = `/teamDetails/${teamId}`
        history.push(url);
    }
    const iconStyle={
        marginLeft: '5'
    }
    return (
        <Col className="text-center d-flex justify-content-center my-3 ">
        <Card className="shadow rounded border" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
            <Card.Title style={{fontWeight: 'bold'}}>{strTeam}</Card.Title>
            <Card.Text>
            Sports Type:{strSport}
            </Card.Text>
            <Card.Text>
            Team id: {idTeam}
            </Card.Text>
            <Button variant="success"  onClick={()=>handleClick(idTeam)}>Explore <FontAwesomeIcon style ={iconStyle} icon={faArrowRight} /></Button>
            {/* <Link to={`/teamDetails/${idTeam}`}><Button variant="success">Explore</Button></Link> */}
        </Card.Body>
        </Card>
        </Col>

    );
};

export default Team;