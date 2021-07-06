import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFlag, faVoteYea, faFutbol } from '@fortawesome/free-solid-svg-icons'
import Male from '../../Images/male.png'
import Female from '../../Images/female.png'
import Twitter from '../../Images/Icon/Twitter.png'
import YouTube from '../../Images/Icon/YouTube.png'
import Facebook from '../../Images/Icon/Facebook.png'


const TeamDetails = () => {
    const { idTeam } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    const {strCountry, strAlternate, strGender, strSport, intFormedYear,strStadiumDescription,strTwitter,strYoutube,strFacebook, strTeamBanner} = teamDetails;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
          .then((response) => response.json())
          .then((data) => setTeamDetails(data.teams[0]))
      }, [idTeam, setTeamDetails]);
      const bannerStyle = {
        filter: "brightness(60%)",
        maxHeight: "300px",
        objectFit: "cover"
    }
    return (
        <>
            <Container className="my-2">
                <Card className="text-white">
                    <Card.Img src={strTeamBanner} alt="Card image" style={bannerStyle} />
                </Card>
            </Container>
            <Container className="d-flex justify-content-center">
                <Card className="mb-3 shadow bg-primary " style={{width:'80%' }}>
                    <Row className='rounded p-2 '>
                        <Col md={7}>
                        <Card.Body className='text-white'>
                            <Card.Title as={'h3'}>{strAlternate}</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faVoteYea} /> Founded:{intFormedYear}
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faFutbol} /> Sport Type:{strSport}
                            </Card.Text>
                            <Card.Text>
                            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
                            </Card.Text>
                        </Card.Body>
                        </Col>
                        <Col className='p-4' md= {5}>
                            {
                                strGender === 'Male' ? (
                                    <img  style={{width: '200px', height: '150px' }} src={Male}  alt="" srcset="" />
                                ): (
                                    <img style={{width: '200px', height: '150px' }} src={Female} alt="" srcset="" />
                                )
                            }
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Container>
            <div> 
            <p>{strStadiumDescription}</p>
            </div>
            <div className="d-flex justify-content-center" >
            <a href={strTwitter}>
                <img style={{width: '4rem'}} src={Twitter} alt="Twitter" srcset="" />
            </a>
            <a href={strFacebook}>
                <img style={{width: '4rem'}} src={Facebook} alt="Facebook" srcset="" />
            </a>
            <a href={strYoutube}>
                <img style={{width: '4rem'}} src={YouTube} alt="YouTube" srcset="" />
            </a>
            </div>
            </Container>
        </>
    );
};

export default TeamDetails;