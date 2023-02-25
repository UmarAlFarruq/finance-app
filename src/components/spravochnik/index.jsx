import React, { useEffect, useState } from 'react';
import { Space, Input, Popover, Table } from 'antd';
import { Button } from 'antd';
import { Container, PopoverStyle, TableWrapper, WrapperContent } from './style';
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons'

const { Search } = Input;
const Spravochnik = ({ saveGroupData, culumnsData }) => {

  const [columns, setColumns] = useState(null)

  //  Edit uchun funksiya
  const onEdit = () => {

  }
  const onDelete = () => {

  }
  //Jadvalda columns malumotlar uchun 

  useEffect(() => {
    setColumns([...columns, culumnsData])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const columnsButton = [
    {
      title: "Action", dataIndex: "x",
      fixed: "right", key: "x", width: 100,
      render: (v, record) => (
        <div>
          <EditOutlined style={{ fontSize: '130%', marginLeft: '5%' }} onClick={() => onEdit(record)} />
          <DeleteOutlined style={{ color: 'red', fontSize: '130%', marginLeft: '28%' }} onClick={() => onDelete(record.id)} />
        </div>
      ),
    },
  ]

  return (
    <Container >
      <WrapperContent>
        <Space>
          <Button type="primary" size="small"  >
            Create
          </Button>
          {saveGroupData ?
            <Button type="primary" size="small" >
              Create group
            </Button> : null
          }
        </Space>
        <Space>
          <Search placeholder="search " size="small" />
          <Popover
            placement="bottomLeft"
            trigger="click"
            content={<PopoverStyle>
              <p>Content</p>
              <p>Content</p>
            </PopoverStyle>}
          >
            <Button size="small"  ><EllipsisOutlined /></Button>
          </Popover>
        </Space>
      </WrapperContent>
      <TableWrapper>
        <Table
          columns={columnsButton}
          scroll={{ y: 400, }}
          position={true}
          // loading={true}
        />
      </TableWrapper>
    </Container>
  );
}

export default Spravochnik;