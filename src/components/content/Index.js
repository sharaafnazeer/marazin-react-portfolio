import {React} from 'react';
import {Layout,Carousel, Image} from 'antd';
const { Content } = Layout;

const PageContent = () => {
    
      const images = [
        'https://as2.ftcdn.net/v2/jpg/05/63/58/03/1000_F_563580308_8bAv9STkxGFIIaDEx4roOlvs4yajVy0d.jpg',
        'https://www.civitatis.com/blog/wp-content/uploads/2023/09/shutterstock_287917838-scaled.jpg',
        'https://png.pngtree.com/background/20230519/original/pngtree-hawaiin-natural-landscape-wallpapers-picture-image_2667195.jpg'
      ];

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
        </Content>
    );
}

export default PageContent;