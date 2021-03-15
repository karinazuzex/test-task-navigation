import React, { useState } from 'react'
import { Dialog, Button } from '@fluentui/react-northstar'
import AddLinkForm from '../AddLinkForm/AddLinkForm';

const AddMenuItemModal = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false)
  const openDialog = () => setOpen(true)

  return (
    <Dialog
      styles={{ overflowY: 'auto', margin: '30px 0' }}
      open={open}
      content={
        <AddLinkForm
          onSubmit={ closeDialog }
          onCancel={ closeDialog }
        />
      }
      trigger={ <Button primary content="Add entry" /> }
      onOpen={ openDialog }
      onCancel={ closeDialog }
      cancelButton="Cancel"
    />
  )
}

export default AddMenuItemModal
