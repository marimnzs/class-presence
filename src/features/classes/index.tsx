import React, {useState} from 'react';
import { Drawer } from '../../components'

const Classes: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
  <>
  <h1>Classes</h1>
    <Drawer isOpen={isOpen}/>
  </>
  )
}

export default Classes;