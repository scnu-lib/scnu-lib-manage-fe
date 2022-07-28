import { Button, Card, Popconfirm, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
interface Activity {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  description: string;
}
const dataSource = [
  {
    id: 1,
    title: 'string',
    start_date: '2022-05-30T00:00:00',
    end_date: '2022-06-30T00:00:00',
    description: 'this is a activity.',
  },
];
const ActivityList: React.FC = () => {
  const columns: ColumnsType<Activity> = [
    {
      title: 'id',
      key: 'id',
      dataIndex: 'id',
      width: 80,
      align: 'center',
    },
    {
      title: '名字',
      dataIndex: 'title',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '活动开始时间',
      dataIndex: 'start_date',
    },
    {
      title: '活动结束时间',
      dataIndex: 'end_date',
    },
    {
      title: '操作',
      render: () => {
        return (
          <div>
            <Button type="primary" size="small">
              修改
            </Button>
            <Popconfirm title="确认删除此项？">
              <Button style={{ margin: '0 1rem' }} danger type="primary" size="small">
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return (
    <Card title="活动列表" extra={<Button type="primary">添加</Button>}>
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  );
};
export default ActivityList;
