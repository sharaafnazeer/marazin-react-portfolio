import {React} from 'react';
import {Layout, Row, Col, Image, Typography, Space, Flex} from 'antd';
import {FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons'

import '../footer/styles.css'

const { Footer } = Layout;
const { Title } = Typography;

const MyFooter = ({name}) => {

    return (
        <Footer>

            <Row>
                <Col span={12}>
                    <Row>
                        <Col span={24} className='footer-icon-name'>
                            <Image preview={false} className='footer-logo'
                            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                            width={40}>
                            </Image>
                            <Title level={4}>{name}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Space>
                                <FacebookOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                                <TwitterOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                                <LinkedinOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                                <InstagramOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                            </Space>
                        </Col>
                    </Row>
                </Col>

                <Col span={12}>

                    <Flex horizontal={true} justify={'space-evenly'} align={'center'}>
                        
                        <a href='https://google.com'>Home</a>
                        <a href='https://google.com'>Blog</a>
                        <a href='https://google.com'>Careers</a>
                    </Flex>

                </Col>
            </Row>
        </Footer>
    )
}

export default MyFooter;