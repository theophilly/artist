import React from 'react';
import {
  Avatar,
  Tag,
  TagLabel,
  AvatarBadge,
  AvatarGroup,
  Box,
} from '@chakra-ui/react';
import { FcDonate, FcLightAtTheEndOfTunnel } from 'react-icons/fc';
export default function ExhibitionList({ title, year }) {
  return (
    <Box
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      d="flex"
      p="10px"
    >
      <Box alignItems="center" d="flex">
        <AvatarGroup spacing="0.8rem">
          <Avatar
            size="sm"
            bg="lightgreen"
            icon={<FcLightAtTheEndOfTunnel color="white" fontSize="1rem" />}
          />
        </AvatarGroup>
        <Box as="span"> {title}</Box>
      </Box>
      <Tag
        minW="46px"
        size={'sm'}
        borderRadius="full"
        variant="solid"
        colorScheme="green"
      >
        <TagLabel>{year}</TagLabel>
      </Tag>
    </Box>
  );
}
