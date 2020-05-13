  import React from 'react';
import { Table } from 'semantic-ui-react'
import Moment from 'react-moment'
  
  const TransferItem = ({User, Amount, Type, Status, Date, index}) => {
      return (
        <Table celled fixed singleLine>
    

    <Table.Body >
      <Table.Row>
        <Table.Cell>{User}</Table.Cell>
        <Table.Cell>{Amount}</Table.Cell>
        <Table.Cell>  {Type}</Table.Cell>
        <Table.Cell>  {Status}</Table.Cell>
        <Table.Cell> <Moment format='YYYY/MM/DD'>{Date}</Moment> </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
      );
  };
  
  export default TransferItem;