import { Card, Image, Heading, Text } from '@chakra-ui/react';


function Team() {



    return (

        <div className="body-services">

            <br></br>

            <div className="tittle-services">
                <Heading className="title-services-text">Team</Heading>
                <Text className="text-title-services">
                    At Hussel Kay, we have a team of highly trained digital experts with experience in different areas of
                    digital marketing. All of our team members are certified by Google and other digital platforms,
                    ensuring that we have the knowledge and skills to deliver high-quality digital marketing solutions
                    to our clients
                </Text>
            </div>

            <div className="container-flex-services">

                <div className="container-img-services">

                    <Card
                        className="img-container-services"
                    >
                        <Image
                            className="img-services"
                            objectFit='cover'
                            src='https://paypertalent.com/images/digital-marketing-team.jpg'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

                <div className="container-text-services">

                    <Card
                        className="span-container-services"
                    >

                        <Text className="text-container-services">
                            ● Our team is made up of professionals in different areas, such as SEO, social networks,
                            online advertising, design, content marketing and more. Each one of them contributes their
                            experience and knowledge to ensure that our clients receive a high quality and personalized
                            digital marketing service
                        </Text>

                    </Card>

                </div>

            </div>

            <div className="container-flex-services">

                <div className="container-text-services">

                    <Card
                        className="span-container-services"
                    >

                        <Text className="text-container-services">
                            ● We focus on staying up to date with the latest digital marketing trends and tools,
                            and we constantly work on improving and updating our skills and knowledge to deliver cutting-edge
                            digital marketing solutions to our clients
                        </Text>

                    </Card>

                </div>

                <div className="container-img-services">

                    <Card
                        className="img-container-services"
                    >
                        <Image
                            className="img-services"
                            objectFit='cover'
                            src='https://vertexmarketingagency.com/wp-content/uploads/2019/10/how-digital-marketing-works.jpg'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

            </div>

            <div className="container-flex-services">

                <div className="container-img-services">

                    <Card
                        className="img-container-services"
                    >
                        <Image
                            className="img-services"
                            objectFit='cover'
                            src='data:image/jpeg;base64,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'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

                <div className="container-text-services">

                    <Card
                        className="span-container-services"
                    >

                        <Text className="text-container-services">
                            ● At Hussel Kay, we are committed to providing high-quality service to our clients,
                            and our team is the key to achieving this. If you are looking for a reliable and professional
                            digital marketing company, do not hesitate to contact us to learn more about our team and
                            how we can help you achieve your online goals!
                        </Text>

                    </Card>

                </div>

            </div>

            <div className="responsive">

                <br></br>
                <br></br>

                <div className="container-text-services-2">

                    <Text className="text-container-services-2">
                        ● Our team is made up of professionals in different areas, such as SEO, social networks,
                        online advertising, design, content marketing and more. Each one of them contributes their
                        experience and knowledge to ensure that our clients receive a high quality and personalized
                        digital marketing service
                    </Text>
                </div>

                <br></br>

                <div className="container-img-services-2">

                    <Card
                        className="img-container-services-2"
                    >
                        <Image
                            className="img-services-2"
                            objectFit='cover'
                            src='https://paypertalent.com/images/digital-marketing-team.jpg'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

                <br></br>
                <br></br>

                <div className="container-text-services-2">

                    <Text className="text-container-services-2">
                        ● We focus on staying up to date with the latest digital marketing trends and tools,
                        and we constantly work on improving and updating our skills and knowledge to deliver cutting-edge
                        digital marketing solutions to our clients
                    </Text>
                </div>

                <br></br>

                <div className="container-img-services-2">

                    <Card
                        className="img-container-services-2"
                    >
                        <Image
                            className="img-services-2"
                            objectFit='cover'
                            src='https://vertexmarketingagency.com/wp-content/uploads/2019/10/how-digital-marketing-works.jpg'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

                <br></br>
                <br></br>

                <div className="container-text-services-2">

                    <Text className="text-container-services-2">
                        ● At Hussel Kay, we are committed to providing high-quality service to our clients,
                        and our team is the key to achieving this. If you are looking for a reliable and professional
                        digital marketing company, do not hesitate to contact us to learn more about our team and
                        how we can help you achieve your online goals!
                    </Text>
                </div>

                <br></br>

                <div className="container-img-services-2">

                    <Card
                        className="img-container-services-2"
                    >
                        <Image
                            className="img-services-2"
                            objectFit='cover'
                            src='data:image/jpeg;base64,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'
                            alt='Caffe Latte'
                        />

                    </Card>

                </div>

            </div>

        </div>

    );

};

export default Team;