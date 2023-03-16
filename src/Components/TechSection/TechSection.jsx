import Reach from 'react'
import TechList from "../TechList/TechList";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import TechIcon from "../TechIcon/TechIcon";
import { Chip, Divider } from '@mui/material';

function TechSection() {
  return ( 
    <div className="techSection">

      <Divider >

        <Typography variant='h3' component='button' m={2} p={1} >
          Experience
        </Typography>
      </Divider>

      <Grid container justifyContent='center' spacing={8}>
        {TechList.map((tech, index) => (
          <Grid display="flex" justifyContent="center" alignItems="center" xs={2} sm={1} lg={.5}>
            <TechIcon tech={tech} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
   );
}

export default TechSection;