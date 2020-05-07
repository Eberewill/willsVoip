import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => (
    <div>
    <Dimmer active inverted>
    <Loader size='large'>Loading</Loader>
  </Dimmer>
  
  </div>
)

export default Spinner
