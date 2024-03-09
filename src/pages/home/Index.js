import {React} from 'react';
import { Layout } from 'antd';
import TopHeader from '../../components/header/Index';
import MyFooter from '../../components/footer/Index';
import PageContent from '../../components/content/Index';

const Home = () => {

    const companyName = "Our Company";

    return (
        <div>
            <Layout>
                <TopHeader />
                <PageContent />
                <MyFooter name={companyName}/>
            </Layout>
        </div>
    );
}
export default Home;