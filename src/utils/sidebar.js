
import { documents } from './document';
import { spravochniks } from './spravochnik';
import { xisobod } from './xisobod';
import { registrs } from './registr';
import {
    FolderOutlined,
    HomeOutlined,
    PieChartOutlined,
    FileDoneOutlined,
    DatabaseOutlined,
    SettingOutlined,
    SendOutlined,
} from '@ant-design/icons';
import Charts from '../components/Charts';

export const sidebar = [
    {
        label: 'Диаграмма',
        key: 1,
        icon: <HomeOutlined />,
        path: '/charts',
        hidden: true,
        Element: <Charts />
        // private: false,
    },
    {
        label: 'Документы',
        key: 2,
        icon: <FolderOutlined />,
        path: '/documents',
        hidden: false,
        // private: false,
        data: documents
    },
    {
        label: 'Reports',
        key: 3,
        icon: <PieChartOutlined />,
        path: '/reports',
        hidden: false,
        // private: false,
        data: xisobod
    },
    {
        label: 'Регистры',
        key: 4,
        icon: <DatabaseOutlined />,
        path: '/registrs',
        hidden: false,
        // private: false,
        data: registrs
    },
    {
        label: 'Справочники',
        key: 5,
        icon: <FileDoneOutlined />,
        path: '/spravochniks',
        hidden: false,
        // private: false,
        data: spravochniks
    },
    {
        label: 'Настройки',
        key: 6,
        icon: <SettingOutlined />,
        path: '/settings',
        hidden: false,
        // private: false,
    },
    {
        key: 7,
        label: 'Телеграм бот',
        icon: <SendOutlined />,
        path: '/telegrambot',
        hidden: false,
        // private: false,
    },
];


