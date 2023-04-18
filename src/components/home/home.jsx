import React from "react";
import "./home.css";
import { Card, Image, Heading, Text } from '@chakra-ui/react';
import Contact from "../contact/contact";


function Home() {



    return (

        <div className="body-home">

            <br></br>

            <div className="title-home">
                <Heading className="title-home-text">Hussel Kay</Heading>
                <Text className="text-title">Marketing Digital</Text>
            </div>

            <br></br>

            <div className="container-home-1">

                <Card
                    className="img-container-home-1"
                >
                    <Image
                        className="img-home-1"
                        objectFit='cover'
                        src='https://d500.epimg.net/cincodias/imagenes/2020/04/25/pyme/1587818498_248037_1587818664_noticia_normal.jpg'
                        alt='Caffe Latte'
                    />

                </Card>

                <Card
                    className="span-container-home-1"
                >

                    <Text className="text-container-home-1">
                        At Hussel Kay, we are dedicated to helping small and medium-sized businesses (SMBs)
                        develop their online presence and reach their full growth potential through
                        the implementation of effective digital marketing strategies.
                    </Text>

                </Card>

            </div>

            <div className="container-home-1">

                <Card
                    className="span-container-home-1"
                >

                    <Text className="text-container-home-1">
                        Our mission is to provide our clients with the best possible service, and to be
                        recognized by them as a reliable and solid company in the field of digital marketing.
                        We focus on developing solid relationships with our clients, based on trust and
                        personalized attention to their needs and objectives
                    </Text>

                </Card>

                <Card
                    className="img-container-home-1"
                >
                    <Image
                        className="img-home-1"
                        objectFit='cover'
                        src='https://www.equiposytalento.com/contenido/noticias/20210603adamsportada607.jpg'
                        alt='Caffe Latte'
                    />

                </Card>

            </div>



            <div className="responsive">

                <div className="container-home-2">

                    <Text className="text-container-home-2">
                        At Hussel Kay, we are dedicated to helping small and medium-sized businesses (SMBs)
                        develop their online presence and reach their full growth potential through
                        the implementation of effective digital marketing strategies.
                    </Text>

                </div>

                <br></br>
                <br></br>

                <div className="container-home-3">

                    <Card
                        className="img-container-home-2"
                    >
                        <Image
                            className="img-home-2"
                            objectFit='cover'
                            src='https://d500.epimg.net/cincodias/imagenes/2020/04/25/pyme/1587818498_248037_1587818664_noticia_normal.jpg'
                            alt='Helping'
                        />

                    </Card>

                </div>

                <br></br>
                <br></br>

                <div className="container-home-2">

                    <Text className="text-container-home-2">
                        Our mission is to provide our clients with the best possible service, and to be
                        recognized by them as a reliable and solid company in the field of digital marketing.
                        We focus on developing solid relationships with our clients, based on trust and
                        personalized attention to their needs and objectives
                    </Text>

                </div>

                <br></br>
                <br></br>

                <div className="container-home-3">

                    <Card
                        className="img-container-home-2"
                    >
                        <Image
                            className="img-home-2"
                            objectFit='cover'
                            src='https://www.reliablesoft.net/wp-content/uploads/2021/04/digital-marketing-services.jpeg'
                            alt='Helping'
                        />

                    </Card>

                </div>

                <br></br>
                <br></br>

            </div>

            <div className="container-home-2">

                <Text className="text-container-home-2">
                    At Hussel Kay, we value perseverance and creativity in finding effective solutions to
                    the challenges our clients face. We make sure that we are always up to date on the
                    latest trends and digital marketing tools, and that we apply them effectively in each
                    of our projects.
                </Text>

            </div>

            <br></br>
            <br></br>

            <div className="container-home-3">

                <Card
                    className="img-container-home-2"
                >
                    <Image
                        className="img-home-2"
                        objectFit='cover'
                        src='https://as1.ftcdn.net/v2/jpg/05/67/71/86/1000_F_567718668_4aa1BUCf7xGwuWx3L539IwzZNmFOzKoU.jpg'
                        alt='Helping'
                    />

                </Card>

            </div>

            <br></br>
            <br></br>

            <div className="container-home-2">

                <Text className="text-container-home-2">
                    We believe in the importance of teamwork, which is why we have a team of digital experts with
                    extensive experience in the field of digital marketing, certified and validated by Google and Meta.
                    We are proud to be able to offer our clients a quality, professional and personalized service
                </Text>

            </div>

            <br></br>
            <br></br>

            <div className="container-home-3">

                <Card
                    className="img-container-home-2"
                >
                    <Image
                        className="img-home-2"
                        objectFit='cover'
                        src='https://graciads.com/wp-content/uploads/2021/02/2-4.jpg'
                        alt='Team'
                    />

                </Card>

            </div>

            <br></br>
            <br></br>

            <div className="container-home-2">

                <Text className="text-container-home-2">
                    If you're looking for a digital marketing company that can help you achieve your
                    growth goals online, you're in the right place! At Hussel Kay, we will be happy to
                    accompany you on your path to online success
                </Text>

            </div>

            <Contact />

        </div>

    );

};

export default Home;