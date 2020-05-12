 import React from 'react';
 import { Divider, Button, Image, Item } from 'semantic-ui-react'

 const ContactItem = ({phone, name}) => {
     return (
        <Item.Group relaxed>
    <Item>
      
      <Item.Content verticalAlign='middle'>
     <Item.Header>{name}</Item.Header>
        <Item.Description>{phone}</Item.Description>
        <Item.Extra>
          <Button secondary floated='right'>Call</Button>
          <Divider clearing />
        </Item.Extra>
      </Item.Content>
      
    </Item>

      
  </Item.Group>
     );
 };
 
 export default ContactItem;