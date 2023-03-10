
import {
    BankOutlined,
    FilePptOutlined,
    ApartmentOutlined ,
    BoldOutlined ,
    DollarOutlined ,
    WindowsOutlined  ,
    AreaChartOutlined ,
    UserOutlined ,
    MoneyCollectOutlined ,
    LineHeightOutlined ,
    PictureOutlined  ,
    FallOutlined ,
    SlackOutlined ,
    ShoppingCartOutlined ,
    SmileOutlined ,
    ShareAltOutlined ,
    TeamOutlined ,
    BarcodeOutlined ,
    GlobalOutlined 
} from '@ant-design/icons'
import Spravochnik from '../components/spravochnik'

export const spravochniks = [
    {
        key: 1,
        label: 'Банковские ',
        path: '/spravochniks/bank-account',
        Element:<Spravochnik/>,
        icon: <BankOutlined />,
        color: 'blue',
        hidden: false,
        private: false,
    },
    {
        key: 2,
        label: 'Партия ',
        path: '/spravochniks/batch',
        Element:<Spravochnik/>,
        icon: <FilePptOutlined  />,
        color: 'green',
        hidden: false,
        private: false,
    },
    {
        key: 3,
        label: 'Филиал ',
        path: '/spravochniks/branch',
        Element:<Spravochnik/>,
        icon: <ApartmentOutlined  />,
        color: 'blue',
        hidden: false,
        private: false,
    },
    {
        key: 4,
        label: 'Бренд ',
        path: '/spravochniks/brand',
        Element:<Spravochnik/>,
        icon: <BoldOutlined  />,
        color: 'midnightblue',
        hidden: false,
        private: false,
    },
    {
        key: 5,
        label: 'Касса ',
        path: '/spravochniks/cash-box',
        Element:<Spravochnik/>,
        icon: <MoneyCollectOutlined   />,
        color: 'blueviolet',
        hidden: false,
        private: false,
    },
    {
        key: 6,
        label: 'Характеристика ',
        path: '/spravochniks/characteristic',
        Element:<Spravochnik/>,
        icon: <AreaChartOutlined   />,
        color: 'limegreen',
        hidden: false,
        private: false,
    },
    {
        key: 7,
        label: 'Компания ',
        path: '/spravochniks/company',
        Element:<Spravochnik/>,
        icon: <  WindowsOutlined  />,
        color: 'blue',
        hidden: false,
        private: false,
    },
    {
        key: 8,
        label: 'Контрагент ',
        path: '/spravochniks/counterparty',
        Element:<Spravochnik/>,
        icon: <UserOutlined  />,
        color: 'midnightblue',
        hidden: false,
        private: false,
    },
    {
        key: 9,
        label: 'Валюта ',
        path: '/spravochniks/currency',
        Element:<Spravochnik/>,
        icon: <DollarOutlined />,
        color: 'gold',
        hidden: false,
        private: false,
    },
    {
        key: 10,
        label: 'Тип расход ',
        path: '/spravochniks/expense-type',
        Element:<Spravochnik/>,
        icon: <LineHeightOutlined  />,
        color: 'lime',
        hidden: false,
        private: false,
    },
    {
        key: 11,
        label: 'Картинки ',
        path: '/spravochniks/images',
        Element:<Spravochnik/>,
        icon: <PictureOutlined   />,
        color: 'green',
        hidden: false,
        private: false,
    },
    {
        key: 12,
        label: 'НДС ',
        path: '/spravochniks/ndc',
        Element:<Spravochnik/>,
        icon: <FallOutlined  />,
        color: 'Magenta ',
        hidden: false,
        private: false,
    },
    {
        key: 13,
        label: 'Номенклатура ',
        path: '/spravochniks/nomenclature',
        Element:<Spravochnik/>,
        icon: <GlobalOutlined  />,
        color: 'blue',
        hidden: false,
        private: false,
    },
    {
        key: 14,
        label: 'Тип Цена ',
        path: '/spravochniks/price-type',
        Element:<Spravochnik/>,
        icon: <SlackOutlined  />,
        color: 'limegreen',
        hidden: false,
        private: false,
    },
    {
        key: 15,
        label: 'Тип товара ',
        path: '/spravochniks/product-type',
        Element:<Spravochnik/>,
        icon: <ShoppingCartOutlined  />,
        color: 'darkslategray',
        hidden: false,
        private: false,
    },
    {
        key: 16,
        label: 'Сотрудники ',
        path: '/spravochniks/staff',
        Element:<Spravochnik/>,
        icon: <SmileOutlined  />,
        color: 'violet',
        hidden: false,
        private: false,
    },
    {
        key: 17,
        label: 'Единица измерения ',
        path: '/spravochniks/unit',
        Element:<Spravochnik/>,
        icon: <ShareAltOutlined  />,
        color: 'Blue',
        hidden: false,
        private: false,
    },
    {
        key: 18,
        label: 'Пользователь ',
        path: '/spravochniks/user',
        Element:<Spravochnik/>,
        icon: <TeamOutlined  />,
        color: 'limegreen',
        hidden: false,
        private: false,
    },
    {
        key: 19,
        label: 'Склад ',
        path: '/spravochniks/warehouse',
        Element:<Spravochnik/>,
        icon: <BarcodeOutlined   />,
        color: 'Magenta',
        hidden: false,
        private: false,
    },
]