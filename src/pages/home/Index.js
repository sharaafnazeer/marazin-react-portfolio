import {React} from 'react';
import { Layout } from 'antd';
import TopHeader from '../../components/header/Index';
import MyFooter from '../../components/footer/Index';
import PageContent from '../../components/content/Index';

const Home = () => {

    return (
        <div>
            <Layout>
                <TopHeader />
                <PageContent />
                <MyFooter/>
            </Layout>
        </div>
    );
}
export default Home;