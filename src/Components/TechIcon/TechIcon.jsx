import Box from '@mui/material/Box'

function TechIcon({ tech, index }) {
  console.log(tech.name, "techicon")
  return ( 
    <Box key={`techIcon-${index}`} >
      <img
        height='50'
        src={tech.img} 
      />
      {tech.name}
    </Box>
    
   );
}

export default TechIcon;