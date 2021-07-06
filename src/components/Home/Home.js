import React, { useEffect, useState } from 'react';
import Banner from '../../Images/banner.png';
import { Card, Container, Row } from 'react-bootstrap';
import Team from '../Team/Team'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
          .then((response) => response.json())
          .then((data) => setTeams(data.teams))
      }, []);
    const bannerStyle= {
        height: '200px',
        weight: '100%' 
    }
    return (
       <Container fluid >
            <Card className="text-white" >
            <Card.Img src={Banner} alt="Card image" style={bannerStyle} />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title as={"h1"}>Soccer Club</Card.Title>
            </Card.ImgOverlay>
            </Card>
            <Row className="bg-white mx-2" > 
            {
                    teams.map(teams => <Team teams={teams} />)        
            }
            </Row>
       </Container>
    
    );
};

export default Home;