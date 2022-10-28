import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';

//publicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/@:nickname', component: Profile },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
//privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
