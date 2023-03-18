import Box from '@mui/material/Box'

function TechIcon({ tech, index }) {
  console.log(tech.title, "techicon")
  return ( 
    <Box key={`techIcon-${index}`} >
      <img
        height='50'
        src={tech.url} 
      />
      {/* {tech.title} */}
    </Box>
    
   );
}

export default TechIcon;