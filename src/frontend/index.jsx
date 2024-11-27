import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Strong, Em, Button, Heading, Box, Image, Inline, Stack, xcss, Text } from '@forge/react';
import smallLogo from '../../resources/logo_small.png';
import {cats, menu, announcements} from './data';

const cardStyle = xcss({
  backgroundColor: 'elevation.surface',
  margin: 'space.200',
  width: '25%',
  minWidth: '200px',
  padding: 'space.200',
  boxShadow: 'elevation.shadow.overflow',
  borderColor: 'color.border',
  borderWidth: 'border.width',
  borderStyle: 'solid',
  borderRadius: 'border.radius',
  ':hover': {
    backgroundColor: 'elevation.surface.hovered',
    width: '30%'
  },  });

const menuItemStyle = xcss({
  padding: 'space.100',
});

const announcementStyle = xcss({
  backgroundColor: 'colour.background.neutral.subtle',
  padding: 'space.100',
  margin: 'space.100',
  borderColor: 'color.border',
  borderWidth: 'border.width',
  borderStyle: 'solid',
  borderRadius: 'border.radius',
});

const panelStyle = xcss({
  padding: 'space.100',
  maxWidth: '300px',
  backgroundColor: 'color.background.neutral',
  height: '100%',
});

const bannerStyle = xcss({
  padding: 'space.100',
  margin: 'space.100',
  width: '100%',
});

const topNavStyle = xcss({
  padding: 'space.100',
  width: '100%',
  backgroundColor: 'color.background.neutral',
});

const sidebarStyle = xcss({
  padding: 'space.100',
  margin: 'space.100',
  width: '35%',
});

const mainStyle = xcss({
  padding: 'space.100',
  margin: 'space.100',
  width: '100%',
});
const App = () => {
  const [nav, setNav] = useState('hours')
  
    function Banner(visible) {
      if(visible) {
        return (
          <>
            <Box xcss={bannerStyle}>
              <Text>Banner</Text>
            </Box>
          </>
        )
      }
      return ( <> </>)
    }
  
    function TopNavigation(visible) {
      return (
        <>
          <Box xcss={topNavStyle}>
            <Inline><Button appearance="subtle" onClick={() => setNav('menu')}>Menu</Button> <Button appearance="subtle" onClick={() => setNav('hours')}>Opening Hours</Button><Button appearance="subtle" onClick={() => setNav('cats')}>Our Cats</Button></Inline>
          </Box>
        </>
      )
    }
  
    function LeftPanel(visible) {
      return (
        <>
          <Box xcss={panelStyle}>
            <Stack alignInline='center'>
              <Image src={smallLogo} />
              <Text>123 Fourth Street</Text>
              <Text>Sydney</Text>
            </Stack>
          </Box>
        </>
      )
    }
  
    function RightPanel(visible) {
      if(visible) {
      return (
        <>
          <Box xcss={panelStyle}>
          <Text>RightPanel</Text>  
          </Box>
        </>
      )
    }
    return ( <> </>)
    }
  
    function LeftSidebar(visible) {
      if(visible) {
        return (
          <>
            <Box xcss={sidebarStyle}>
              <Text>LeftSidebar</Text>
            </Box>
          </>
        )
      }
      return ( <> </>)
    }
  
    function RightSidebar(visible) {
      if(visible) {
        return (
          <>
            <Box xcss={sidebarStyle}>
            <Stack alignInline='center'>
            <Box><Heading as="h3">Latest Announcements</Heading></Box>
            {announcements.map(a => (Announcement(a)))}
            </Stack>
            </Box>
          </>
        )
      }
      return ( <> </>)
    }
  
    function Main(visible) {
      console.log(nav)
      return (
        <>
          <Box xcss={mainStyle}>
            {nav === 'menu' && Menu()}
            {nav === 'hours' && Hours()}
            {nav === 'cats' && Cats()}
          </Box>
        </>
      )
    }

    function Announcement(announcement) {
      return (
        <>
          <Box xcss={announcementStyle}>
            <Heading as="h4">{announcement.title}</Heading>
            <Text>{announcement.message}</Text>
          </Box>
        </>
      )
    }
  
    function MenuItem(MenuItem) {
      return (
        <>
          <Box xcss={menuItemStyle}>
          <Inline spread='space-between' alignBlock="start">
            <Box><Text><Strong>{MenuItem.name}</Strong></Text></Box>
            <Box><Text>{MenuItem.price}</Text></Box>
          </Inline>
          <Box><Text><Em>{MenuItem.description}</Em></Text></Box>
          </Box>
        </>
      )
    }
  
    function Hours() {
      return (
        <>
          <Heading as='h2'>Hours</Heading>
          <Box xcss={{ padding: 'space.100'}}>
            <Text>Monday: closed</Text>
            <Text>Tuesday: closed</Text>
            <Text>Wednesday: 10am - 4pm</Text>
            <Text>Thursday: 10am - 8pm</Text>
            <Text>Friday: 10am - 4pm</Text>
            <Text>Saturday: 10am - 8pm</Text>
            <Text>Sunday: closed</Text>
          </Box>
        </>
      )
    }

    function Menu() {
      return (
        <>
          <Heading as='h2'>Menu</Heading>
          <Box xcss={{ padding: 'space.100'}}>
          <Heading as='h3'>Snacks</Heading>
          {menu.snacks.map(s => (MenuItem(s)))}
          </Box>
          <Box xcss={{ padding: 'space.100'}}>
          <Heading as='h3'>Meals</Heading>
          {menu.meals.map(m => (MenuItem(m)))}
          </Box>
          <Box xcss={{ padding: 'space.100'}}>
          <Heading as='h3'>Drinks</Heading>
          {menu.drinks.map(d => (MenuItem(d)))}
          </Box>
        </>
      )
    }

    function Cats() {
      return (
        <>
          <Heading as='h2'>Our Cats</Heading>
          <Inline spread='space-between' shouldWrap>{cats.map(c => (Card(c)))}</Inline>
        </>        
      )
    }

    function Card(pet) {
      return (
        <>
          <Box xcss={cardStyle}>
            <Stack alignInline="center" space="space.200" >
              <Heading as="h2">{pet.name}</Heading>
              <Image src={"https://i.imgur.com/"+ pet.image} alt={pet.about}></Image>
              <Box>
                <Stack alignInline="center" space="space.0" >
                  <Box><Text>{pet.breed}</Text></Box>
                  <Box><Text>{pet.age}</Text></Box>
                </Stack>
              </Box>
              <Box>
                <Stack alignInline="center" space="space.0">
                  <Box><Text>{pet.about}</Text></Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </>
      )
    }

  return (
    <>            
      <Inline spread='space-between' alignBlock="stretch">
        <Box xcss={{ width: '25%'}}>{LeftPanel(true)}</Box>
        <Box xcss={{ width: '100%'}} >
          <Stack alignInline='center'>
            {TopNavigation(true)}
            {Banner(false)}
            <Box xcss={{ width: '100%'}}><Inline spread='space-between'>{LeftSidebar(false)}{Main(true)}{RightSidebar(true)}</Inline></Box>
          </Stack>
        </Box>
        <Box>{RightPanel(false)}</Box>
      </Inline>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
