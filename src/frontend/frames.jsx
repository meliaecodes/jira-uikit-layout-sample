import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Button, Heading, Box, Inline, Stack, xcss, Text } from '@forge/react';

const panelStyle = xcss({
  borderColor: 'color.border.accent.red',
  borderStyle: 'dashed',
  padding: 'space.100',
  margin: 'space.100',
});

const bannerStyle = xcss({
  borderColor: 'color.border.accent.orange',
  borderStyle: 'dashed',
  padding: 'space.100',
  margin: 'space.100',
  width: '100%',
});

const topNavStyle = xcss({
  borderColor: 'color.border.accent.blue',
  borderStyle: 'dashed',
  padding: 'space.100',
  margin: 'space.100',
  width: '100%',
});

const sidebarStyle = xcss({
  borderColor: 'color.border.accent.green',
  borderStyle: 'dashed',
  padding: 'space.100',
  margin: 'space.100',
  width: '25%',
});

const mainStyle = xcss({
  borderColor: 'color.border.accent.gray',
  borderStyle: 'dashed',
  padding: 'space.100',
  margin: 'space.100',
  width: '50%'
});


export const frames = () => {
  function Banner(data) {
    return (
      <>
        <Box xcss={bannerStyle}>
          <Text>Banner</Text>
        </Box>
      </>
    )
  }

  function TopNavigation(data) {
    return (
      <>
        <Box xcss={topNavStyle}>
          <Text>TopNavigation</Text>
        </Box>
      </>
    )
  }

  function LeftPanel(data) {
    return (
      <>
        <Box xcss={panelStyle}>
          <Text>LeftPanel</Text>
        </Box>
      </>
    )
  }

  function RightPanel(data) {
    return (
      <>
        <Box xcss={panelStyle}>
        <Text>RightPanel</Text>
        </Box>
      </>
    )
  }

  function LeftSidebar(data) {
    return (
      <>
        <Box xcss={sidebarStyle}>
        <Text>LeftSidebar</Text>
        </Box>
      </>
    )
  }

  function RightSidebar(data) {
    return (
      <>
        <Box xcss={sidebarStyle}>
          <Text>RightSidebar</Text>
        </Box>
      </>
    )
  }

  function Main(data) {
    return (
      <>
        <Box xcss={mainStyle}>
          <Text>Main</Text>
        </Box>
      </>
    )
  }


  return (
    <>
      <Inline spread='space-between' alignBlock="stretch">
        <Box xcss={{ width: '25%'}}>{LeftPanel(true)}</Box>
        <Box xcss={{ width: '50%'}}>
          <Stack alignInline='center'>
            {Banner(true)}
            {TopNavigation(true)}
            <Box xcss={{ width: '100%'}}><Inline spread='space-between'>{LeftSidebar(true)}{Main(true)}{RightSidebar(true)}</Inline></Box>
          </Stack>
        </Box>
        <Box xcss={{ width: '25%'}}>{RightPanel(true)}</Box>
      </Inline>
    </>
  );
};

export default frames;

