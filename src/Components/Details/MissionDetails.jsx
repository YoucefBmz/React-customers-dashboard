import React from "react";
import { PageHeader, Button, Descriptions, Tag } from "antd";
// import { useMission } from "../../hooks/useQueryDetails";
import { useParams } from "react-router";

const MissionDetail = () => {
  const { id } = useParams();
  //const { data, loading } = useMission(parseInt(id));
  //console.log(data?.mission?.ref);
  return (
    <div className='site-page-header-ghost-wrapper'>
      {
        <PageHeader
          ghost={true}
          onBack={() => window.history.back()}
          title='commade name'
          subTitle='second level detail'
          tags={<Tag color='green'>VALIDATED</Tag>}
          extra={[
            <Button key='2' ghost type='primary'>
              Operation
            </Button>,
            <Button key='1' type='primary' danger ghost>
              Suspend
            </Button>,
          ]}>
          <Descriptions bordered>
            <Descriptions.Item label='Mission reference' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Creator name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Creator phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Creation date' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Missionary name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Missionary phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Direction' span={1}>
              <Tag color='lime'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Department' span={2}>
              <Tag color='cyan'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Object' span={3}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Departure date' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Departure location' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Departure location type' span={1}>
              <Tag color='geekblue'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Destination location' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Destination location type' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Arrival date' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Arrival location' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Arrival location type' span={1}>
              <Tag color='orange'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Duration (in days)' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Persons number' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Expenses' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Transportation medium' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Manager validation' span={1}>
              <Tag color='blue'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Manager validator name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Manager validator phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Resources validation' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Resources validator name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Resources validator phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Vehicle name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Driver name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Driver phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Authorization' span={1}>
              <Tag color='blue'>{}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label='Authorizer name' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Authorizer phone' span={1}>
              {}
            </Descriptions.Item>
            <Descriptions.Item label='Status' span={1}>
              {}
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      }
    </div>
  );
};

export default MissionDetail;
/*

Mission:
id
ref
creator_name
creator_phone
missionary_name
missionary_phone
direction
departement
object
departure_date (string DD-MM-YYYY hh:mm)
departure_location
departure_location_type (COMPANY_HEADQUARTERS or PERSONAL_RESIDENCE)
destination_location
destination_location_type
arrival_date
arrival_location_type
duration
persons_number
expenses (WITH_EXPENSES or WITHOUT_EXPENSES)
transportation_meduim
manager_validation
manager_validator_name
manager_validator_phone
resources_validation
resources_validator_name
resources_validator_phone
vehicle_name
driver_name
driver_phone
authorization
authorizor_name
authorizor_phone
- status (mission status)

*/
