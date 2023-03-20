import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';

interface TabViewProps {
	tabs: {
		label: string,
		tabContent: () => JSX.Element
	}[]
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabView = ({tabs}: TabViewProps) => {
	const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: SyntheticEvent, newTabIndex: number) => setTabIndex(newTabIndex)
 
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={tabIndex} onChange={handleChange}>
					{tabs.map(({label}, index) => <Tab key={label} label={label} {...a11yProps(index)} />)}
        </Tabs>
      </Box>
			{tabs.map(({tabContent}, index) => <TabPanel key={`${tabIndex}-${index}`} value={tabIndex} index={index}>{tabContent()}</TabPanel>)}
    </Box>
  )
}

export default TabView

