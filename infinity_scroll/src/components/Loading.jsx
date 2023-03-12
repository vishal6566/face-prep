import React from 'react'
import {Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const Loading = () => {
  return (
    <div>
        <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={6} spacing='4' skeletonHeight='2' />
</Box>
    </div>
  )
}

export default Loading