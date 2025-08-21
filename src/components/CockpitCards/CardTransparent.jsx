import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';


const StyledCard = styled((props) => (
  <Card {...props} />
))(({ theme }) => ({

  background: 'transparent',
  borderColor: 'transparent',
padding: '2em',
   
  [theme.breakpoints.up('xs')]: {
      width: 360,
      height: 'auto',
    },
  [theme.breakpoints.up('sm')]: {
      width: 360,
      height: 'auto',
    },
  [theme.breakpoints.up('md')]: {
      width: 360,
      height: 'auto',
   },
   [theme.breakpoints.up('lg')]: {
      width: 360,
      height: 'auto',
    },
  [theme.breakpoints.up('xl')]: {
    width: 360,
    height: 'auto',
    },

}));


export default function CardTransparent(props) {
  
  const { content } = props

return(
<>

<StyledCard variant="outlined" >
      { content } 
</StyledCard>
</>
)
}

