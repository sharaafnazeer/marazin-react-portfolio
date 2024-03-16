import {React} from 'react';
import {Layout,Carousel, Image, Row, Col, Typography, Button, Card} from 'antd';
import {RightCircleOutlined} from '@ant-design/icons'
import './styles.css'
const { Content } = Layout;
const {Title, Text} = Typography;
const { Meta } = Card;

const PageContent = () => {
    
    const images = [
        'https://as2.ftcdn.net/v2/jpg/05/63/58/03/1000_F_563580308_8bAv9STkxGFIIaDEx4roOlvs4yajVy0d.jpg',
        'https://www.civitatis.com/blog/wp-content/uploads/2023/09/shutterstock_287917838-scaled.jpg',
        'https://png.pngtree.com/background/20230519/original/pngtree-hawaiin-natural-landscape-wallpapers-picture-image_2667195.jpg'
    ];

    const gridStyle = {
        width: '12.5%',
        textAlign: 'center',
    };  

    return (
        <Content>

            <Carousel autoplay>
                {
                    images.map((image, index) => (
                        <div key={`carousel-image-${index}`}>
                            <Image preview={false} src={image} height={600}></Image>
                        </div>
                    ))
                }
                
            </Carousel>

            <Row className='content-section'>
                <Col span={24}>
                    <Title>What We Do</Title>
                    <Text className='section-text'>
                        We’re architects of digital transformation, crafting solutions that propel businesses into tomorrow’s tech landscape with confidence and agility.
                    </Text>
                </Col>
                <Col span={24} style={{margin: '2rem 0 2rem 0'}}>
                    <Button type='primary' size='large' shape='round' icon={<RightCircleOutlined />}>Read more</Button>
                </Col>
            </Row>


            <Row className='content-section section-client'>
                <Col span={24}>
                    <Title>Our Clients</Title>
                    <Text className='section-text'>
                        Trust us like this international brands did.
                    </Text>
                </Col>

                <Col span={24}>
                <Card style={{margin: '2rem 0 2rem 0'}} className='client-card'>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://upload.wikimedia.org/wikipedia/commons/b/bb/Prime_logo.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://freelogopng.com/images/all_img/1686390747tesla-logo-transparent.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://hdpng.com/images/dbs-png-dbs-bank-logo-logotype-logo-dbs-png-4519.png'></Image>
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <Image preview={false} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1280px-Spring_Framework_Logo_2018.svg.png'></Image>
                    </Card.Grid>
                </Card>
                </Col>
            </Row>

            <Row className='content-section section-solution'>
                <Col span={24}>
                    <Title>Our Solutions</Title>
                    <Text className='section-text'>
                    We are a product engineering and specialized cloud consulting provider that helps organizations achieve business outcomes and at scale.
                    </Text>
                </Col>

                <Col span={24}>
                <Row style={{margin: '2rem 0 2rem 0'}}  gutter={[8,24]}>

                    <Col xs={24} md={12} lg={6} xxl={6}>
                        <Card
                            hoverable
                            style={{ width: 255, minHeight: 400 }}
                            cover={<img alt="example" src="https://www.verdentra.com/wp-content/uploads/2023/10/221-application-modernization-banner-tile.jpg" height={'150px'} />}
                        >
                            <Meta title="Application Modernization" description="Our experts can guide you through the complex process of moving to the cloud and modernizing your mission critical apps." />
                        </Card>
                    </Col>

                    <Col xs={24} md={12} lg={6} xxl={6}>
                        <Card
                            hoverable
                            style={{ width: 255, minHeight: 400 }}
                            cover={<img alt="example" src="https://www.verdentra.com/wp-content/uploads/2023/09/3d-abstract-digital-particle-waves-design-background.jpg" height={'150px'} />}
                        >
                            <Meta title="Cloud Native Engineering​" description="Our cloud specialists navigate cloud engineering complexities with innovative and sustainable digital solutions beyond conventional cloud architecture." />
                        </Card>
                    </Col>

                    <Col xs={24} md={12} lg={6} xxl={6}>
                        <Card
                            hoverable
                            style={{ width: 255, minHeight: 400 }}
                            cover={<img alt="example" src="https://www.verdentra.com/wp-content/uploads/2023/10/241-data-engineering-banner-tile.jpg" height={'150px'} />}
                        >
                            <Meta title="Data Engineering" description="In an era dominated by vast data landscapes and intricate architectures, Verdentra brings a specialized team to bear on data engineering. Let us help you on this exploration to unearth the latent potential of your data.​" />
                        </Card>
                    </Col>

                    <Col xs={24} md={12} lg={6} xxl={6}>
                        <Card
                            hoverable
                            style={{ width: 255, minHeight: 400 }}
                            cover={<img alt="example" src="https://www.verdentra.com/wp-content/uploads/2023/10/251-artificial-intelligence-banner-tile.jpg" height={'150px'} />}
                        >
                            <Meta title="Artificial Intelligence & Cognitive Solutions" description="Explore AI and cognitive services for a future where technology doesn’t just compute, but comprehends. Gain clarity and foresight to empower your business." />
                        </Card>
                    </Col>
                    </Row>
                </Col>
            </Row>

        </Content>
    );
}

export default PageContent;